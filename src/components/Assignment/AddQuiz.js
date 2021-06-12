import React,{useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import QuizQuestion from './QuizQuestion'
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import {getQuiz, getClassId} from "./AddQuizService";
import getQuizListValue from "./QuizQuestion";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    width:'100%'
  },
  blue: {
    align: "center",
    size: 66,
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(20),
    height: theme.spacing(20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'none',
  },
}));


export default function AddQuiz(){
  const classes = useStyles();
  const [classdiv, setClassDiv] = React.useState('');

  const handleChange = (event) => {
    setClassDiv(event.target.value);
  };

   //______Integration code
   const [data, setData] = useState({})
   const [redirect, setRedirect] = useState("")
   
   const formik = useFormik({
     initialValues: {
       title : '',
       isActive : true,
       classdiv : '',
       questions : [],
       duedate : ''
     },
     
     onSubmit: (values) => {
       console.log("Inside onsubmit")
       console.log("getQuizlistvalue")
       console.log(QuizQuestion.getquizList)
       getClassId({name: "BE A" })
         .then(result => {
           console.log(result)
           console.log("getclassid Api response")
           setData(result.data)
           console.log(data.id);
         }),
       //{ title: values.title, description: values.description,_class : data.id ,duedate : values.duedate }	
       addAssignment({ title: values.title, isActive: true,classdiv : data.id , questions: getQuizListValue}	 )
         .then(result => {
           console.log("Api response------------++++++++++=")
           console.log(result);
           console.log(result.data.response)
           console.log(result.data.id)
           if (result.data.response ===  "Assignment created successfully" && result.data.id !== "") {
             
                 setRedirect("/teacher/assignment")
               
           }else{
             setRedirect("/login")
           }
 
         }).catch(error=>{
           if(error.request.status === 0){
             localStorage.clear()
             //showNotification("bc")
             setTimeout(function() { setRedirect('/login'); }, 5000);
           }
           else if(error.response.status === 401){
             localStorage.clear()
             //showNotification("tl")
             setTimeout(function() { setRedirect('/login'); }, 5000);
           }
         })
         }
     });
 
     if(redirect.length>0){
       return(
         <Redirect from="teacher/assignment" to="/teacher/assignment" />
       )
     }
   //_____Integration end

  return (
    
    <div className={classes.root} >               
    <GridContainer style={{width:"100%"}}>
      <GridItem xs={12} sm={12} md={12}>
      <Card>
            <CardHeader color="primary">
              <h4 style={{color:"#ffff"}}>Add Quiz</h4>
            </CardHeader>
            <CardBody style={{paddingLeft:"15px",paddingRight:"35px"}}>
            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <TextField
              id="outlined-password-input"
              label="Quiz Title"
              style={{ margin: 10 }}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline="true"
              name="title"
              autoComplete="title"
              autoFocus
              onChange = {formik.handleChange}
        />
              
        <div >
        <FormControl variant="outlined" style={{minWidth: 120,paddingLeft:"12px",marginTop: 10,marginBottom: 8}} >
        <InputLabel id="demo-simple-select-outlined-label"style={{paddingLeft:"15px"}} >Class</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={classdiv}
          onChange={handleChange}
          label="Class"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="TE-A">TE-A</MenuItem>
          <MenuItem value="TE-B">TE-B</MenuItem>
          <MenuItem value="BE-A">BE-A</MenuItem>
          <MenuItem value="BE-B">BE-B</MenuItem>
        </Select>
      </FormControl>
    <TextField
        id="datetime-local"
        label="Due Date"
        type="datetime-local"
        defaultValue="2020-04-24T10:30"
        onChange = {formik.handleChange}
        name = "duedate"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        style={{width:220,marginTop: 15,left:"40%"}}
      />
      </div>

        <QuizQuestion />
      <Button type="submit" variant="contained" color="secondary" style={{marginTop: 18,marginBottom: 8,left:'40%'}} className={classes.Submit}>
        Post Quiz
      </Button>
      </form>
            </CardBody>
            </Card>
      </GridItem>
      </GridContainer>
          </div>

       
  );
}

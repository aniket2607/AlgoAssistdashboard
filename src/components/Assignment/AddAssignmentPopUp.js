import React,{useState} from 'react';
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

import { blue } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DatePicker } from 'antd';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import {addAssignment,getClassId} from './AddAssignmentService';
import data from 'components/Visualisation/BinarySearch/data';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'100%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function AddAssignment(){
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState("2019-04-24T10:30");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("dateee",document.getElementById("datetime-local").value)
  };

  const [classdiv, setClassDiv] = React.useState('');
  let varclassDiv;
  //const [classdivValue,setclassDivValue]=useState('');
  const handleChange = (event) => {
    setClassDiv(event.target.value)
    //setclassDivValue(event.target.value)
    //console.log(event.target.value)
    //console.log("classdiv")
    //console.log(classdiv)
    //varclassDiv = event.target.value;
  };

  const [classdivValue,setclassDivValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setclassDivValue(e)
    console.log("*********Inside handleselect")
    console.log(classdivValue);
  }

  //______Integration code
  const [data, setData] = useState({})
  const [redirect, setRedirect] = useState("")
  
	const formik = useFormik({
		initialValues: {
			title : '',
			description : '',
      _class : '',
      duedate : '',
		},
    
		onSubmit: (values) => {
			console.log("Inside onsubmit")
      console.log(values.title)
      console.log(values.description)
      console.log(values._class.value)
      console.log(values.duedate)
      console.log(varclassDiv)
      console.log(varclassDiv)
      console.log("Inside onsubmit...")
      getClassId({name: "BE A" })
				.then(result => {
          console.log(result)
          console.log("getclassid Api response")
          setData(result.data)
					console.log(data.id);
				}),
			//{ title: values.title, description: values.description,_class : data.id ,duedate : values.duedate }	
			addAssignment({ title: values.title, description: values.description,_class : data.id ,duedate : values.duedate }	 )
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
              <h4 style={{color:"#ffff"}}>Add Assisgnment</h4>
            </CardHeader>
            <CardBody style={{paddingLeft:"15px",paddingRight:"35px"}}>
            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <TextField
              id="outlined-password-input"
              label="Assignment Heading"
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
        <TextField
              id="description"
              label="Assignment Description (if any)"
              style={{ margin: 10 }}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline="true"
              rows="2"
              name="description"
              autoComplete="description"
              autoFocus
              onChange = {formik.handleChange}
              
        />
        <FormControl variant="outlined" style={{minWidth: 120,paddingLeft:"15px",marginTop: 10,marginBottom: 8}} >
        <InputLabel id="demo-simple-select-outlined-label"style={{paddingLeft:"15px"}} >Class</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="cls"
          value={classdiv}
          name = "_class"
          label="Class"
          onChange = {handleChange}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"BE A"} >BE A</MenuItem>
          <MenuItem value={"TE-B"} >TE-B</MenuItem>
          <MenuItem value={"SE A"}>SE A</MenuItem>
          <MenuItem value={"BE-B"}>BE-B</MenuItem>
        </Select>
      </FormControl>
    <div style={{paddingLeft:"9px",marginTop: 15,marginBottom: 8}}>
    <TextField
        id="datetime-local"
        label="Due Date"
        type="datetime-local"
        defaultValue={selectedDate}
        className={classes.textField}
        onChange = {formik.handleChange}
        name = "duedate"
        InputLabelProps={{
          shrink: true,
        }}
        style={{width:220}}
      />
      </div>

    <Button type="submit" variant="contained" color="secondary" style={{marginTop: 18,marginBottom: 8,left:'40%'}} className={classes.Submit}>
        Post Assignment
      </Button>
      </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
          </div>
  );
}

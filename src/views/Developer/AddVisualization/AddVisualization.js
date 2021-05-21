import React,{useRef, useEffect, useCallback} from 'react';
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


export default function AddVisualization(){
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState("2019-04-24T10:30");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("dateee",document.getElementById("datetime-local").value)
  };

  const [classdiv, setClassDiv] = React.useState('');

  const handleChange = (event) => {
    setClassDiv(event.target.value);
  };

  return (    
          <div className={classes.root} >
                    
      <GridContainer style={{width:"100%"}}>
        
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 style={{color:"#ffff"}}>Add Algorithm Visualization</h4>
            </CardHeader>
            <CardBody style={{paddingLeft:"15px",paddingRight:"35px"}}>
            <TextField
              id="outlined-password-input"
              label="Algorithm Name"
              style={{ margin: 10 }}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline="true"
              
            />
            <TextField
              id="outlined-password-input"
              label="Algorithm Link"
              style={{ margin: 10 }}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline="true"
              
            />
        
        <FormControl variant="outlined" style={{minWidth: 120,paddingLeft:"15px",marginTop: 10,marginBottom: 8}} >
        <InputLabel id="demo-simple-select-outlined-label"style={{paddingLeft:"15px"}} >Subject</InputLabel>
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
          <MenuItem value={10}>DSA</MenuItem>
          <MenuItem value={20}>ADS</MenuItem>
          <MenuItem value={30}>ML</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{minWidth: 140,paddingLeft:"15px",marginTop: 10,marginBottom: 8}} >
        <InputLabel id="demo-simple-select-outlined-label"style={{paddingLeft:"15px"}} >Category</InputLabel>
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
          <MenuItem value={10}>Sorting</MenuItem>
          <MenuItem value={20}>Searching</MenuItem>
          <MenuItem value={30}>Tree-Based</MenuItem>
          <MenuItem value={30}>Graph-Based</MenuItem>
        </Select>
      </FormControl>
        <br/>

        <Button variant="contained" color="secondary" style={{marginTop: 18,marginBottom: 8,left:'40%'}}>
            Add Algorithm Visualization
        </Button>
        </CardBody>
        </Card>
        </GridItem>
      </GridContainer>

      
          </div>
  );
}

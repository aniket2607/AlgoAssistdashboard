import React,{useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';

import Add from '@material-ui/icons/AddCircle';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';


export const isSet = (value) => {
  return value !== undefined && value !== null;
}

export const getQuizListValue = (value) => {
  console.log("inside getquiztList")
  console.log(value)
  return value;
}

export const stepOptions = [
  {label: 'Buy Groceries', value: '1'},
  {label: 'Cook Dinner', value: '2'},
  {label: 'Go To Sleep', value: '3'},
  {label: 'Go To Work', value: '4'},
  {label: 'Wake Up', value: '5'}
];

class DynamicStepper extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          steps: [ {title: null, value: null} ],
          activeStep: 0,
          textValue: "",
    checkedOptionValue: "",
    question:"",
    marks: 1,
    options: [],
      },
      this.quiztList=[]
  }

  changeStepValue(ind, value){
    let steps = [...this.state.steps];
    steps[ind].value = value;
    const option = stepOptions.find((item) => item.value === value);
    steps[ind].title = option ? option.label : 'Undefined';
    this.setState({steps: steps, activeStep: steps.length});
  }

  addStep(n = 1){
    let newSteps = [...this.state.steps];
    for(let i = 0; i < n; i++){
      newSteps.push({title: null, value: null});
    }
    this.setState({steps: newSteps, activeStep: newSteps.length -1,textValue: ""});
    
      let qlist = {}
      qlist["question"] = this.state.question;
      qlist["marks"] = this.state.marks;
    
      var choices = {
        choiceList: []
    };
    
    for(var j in this.state.options) {    
    
        var item = this.state.options[j]; 
        var isAns = false;  
        if(this.state.options[j].value === this.state.checkedOptionValue)
          isAns = true
        else
          isAns= false
        choices.choiceList.push({ 
            "choice" : item.value,
            "isAnswer" : isAns
        });
    }
    
      
      qlist["choices"] = choices.choiceList;
     
      this.quiztList.push(qlist);
 
      console.log(this.quiztList)
      getQuizListValue(this.quiztList)
  }

  removeStep(ind){
    let steps = [...this.state.steps];
    if(steps.length < ind + 1){return;}
    steps = steps.filter((item, i) => i !== ind);
    this.setState({steps: steps, activeStep: steps.length});
  }


  handleOptionAdd = () => {
    const { options, textValue } = this.state;
    this.setState({ textValue: "" });
    this.setState({
      options: [
        ...options,
        {
          label: textValue,
          value: textValue.toLowerCase().replace(" ", "-"),
        },
      ],
    });
  
  };

  handleRadioChange = (e) =>{
    this.setState({ checkedOptionValue: e.target.value });
  }
  handleQuestionChange = (e) =>{
    this.setState({ question: e.target.value });
  }
  handleMarksChange = (e) =>{
    this.setState({ marks: e.target.value });
  }
  
  static getquizList = () => {
    return this.quiztList;
}

  render() {
    const { classes } = this.props;
    const { activeStep, steps, options, textValue, checkedOptionValue,question,marks } = this.state;
 

    return (
      <React.Fragment>
        <div className={classes.body}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={`step_${index}_container`} >
                <StepButton
                  onClick={() => this.setState({activeStep: (activeStep === index && isSet(steps[index].value)) ? steps.length : index})}
                >
                  <div style={{display: 'flex'}}>
                    <Typography>{step.title || 'Question'}</Typography>
                    {activeStep === index && 
                      <Tooltip title="Remove Step" placement={'right'}>
                        <Delete style={{marginLeft: 5}} onClick={() => this.removeStep(index)}/>
                      </Tooltip>
                    }
                  </div>
                </StepButton>
                <StepContent>
                <TextField
              id="outlined-password-input"
              label="Write your question here"
              style={{ margin: 10 }}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline="true"
              name="question"
              value={question}
              onChange={(e) => this.setState({ question: e.target.value })}
        />
        <TextField
          type="text"
          label="Marks"
          style={{ margin: 10 }}
          margin="normal"
          variant="outlined"
          value={marks}
          onChange={(e) => this.setState({ marks: e.target.value })}
                     />
        <div>
        <TextField
          type="text"
          label="Add Option"
          style={{ margin: 10 }}
          margin="normal"
          variant="outlined"
          multiline="true"
          value={textValue}
          onChange={(e) => this.setState({ textValue: e.target.value })}
        />
        <Button  onClick={this.handleOptionAdd} variant="contained" color="secondary" style={{marginTop: 18,marginBottom: 8,left:'2%'}}>
        Add
      </Button>
        <div>
          {options.map((option) => (
            <div>
              <input
                type="radio"
                name="dynamic-radio"
                value={option.value}
                checked={checkedOptionValue === option.value}
                onChange={this.handleRadioChange}
                style={{transform: "scale(1.3)", left:"20%"}}
              />
              <label style={{fontSize:"25px",paddingLeft:"15px"}}>{option.label}</label>
              {/* <RadioGroup aria-label="gender" name="Options:" value={option.value} onChange={this.handleRadioChange} checked={checkedOptionValue === option.value}>
        <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
       </RadioGroup>
       <Radio
        checked={checkedOptionValue === option.value}
        onChange={this.handleRadioChange}
        value={option.value}
        name="radio-button-demo"
        label="sssss" 
      /> */}
            </div>
          ))}
        </div>


          </div>
                  <FormControl component="fieldset">
                   
                  </FormControl>
                </StepContent>
              </Step>
            ))}
            <Step key={'add-a-step'} >
              <StepButton
                icon={<Add className={classes.addButton + (steps.length > 0 && !isSet(steps[steps.length - 1].value) ? '' : '')}/>}
                onClick={() => this.addStep()}
                style={{fontWeight: 'bold'}}
              >
                {'Add a Question'}
              </StepButton>
            </Step>
          </Stepper>
        </div>
      </React.Fragment>
    );
  }
}

DynamicStepper.propTypes = {
  classes: PropTypes.object,
};

const styles = theme => ({
  addButton:{
    color: '#0088f2', 
    transformOrigin: 'center', 
    transform: 'scale(1.3)',
    '&.disabled':{
      color: 'rgba(0,0,0,0.38)'
    }
  },
  body:{
    marginTop: theme.spacing.unit * 8,
    [theme.breakpoints.down('xs')]:{
      marginTop: theme.spacing.unit * 7
    }
  }
});

export default withStyles(styles)(DynamicStepper);

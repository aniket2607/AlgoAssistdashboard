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
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

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
function getSteps() {
  return ['','','','',''];
}

export default function AddQuiz(){
  const classes = useStyles();
  const modalRef = useRef();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    
    <div className={classes.paper}>
                  
    <div className={classes.root}>
    
      <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
          <Step key={label}>
              <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
              </StepButton>
          </Step>
          ))}
      </Stepper>
      <div>
          {allStepsCompleted() ? (
          <div>
              <Typography className={classes.instructions}>
              All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
          </div>
          ) : (
          <div>
              <br/>
              <h2 style={{ color: blue[500] }}>Add Quiz</h2>
              <br/>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                  <TableHead>
                      <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell variant="outlined"><input type = "text" margin="dense" required/> </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Option 1</TableCell>
                        <TableCell variant="outlined"><input type = "text" margin="dense" required/> </TableCell>
                    </TableRow>  
                    <TableRow>
                        <TableCell>Option 2</TableCell>
                        <TableCell variant="outlined"><input type = "text" margin="dense" required/> </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Option 3</TableCell>
                        <TableCell variant="outlined"><input type = "text" margin="dense" required/> </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Option 4</TableCell>
                        <TableCell variant="outlined"><input type = "text" margin="dense" required/> </TableCell>
                    </TableRow>   
                    <TableRow>
                        <TableCell>Correct Option</TableCell>
                        <TableCell variant="outlined"><input type = "number" margin="dense" required/> </TableCell>
                    </TableRow>          
                    <TableRow>
                        <TableCell>Due Date</TableCell>
                        <TableCell variant="outlined"><input type = "date" margin="dense" required/> </TableCell>
                    </TableRow>
    
                  </TableHead>  
                </Table>
              </TableContainer>
              <br/>
              <div>
              <Button variant="contained"
                  color="primary" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
              </Button>
              
              {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                  </Typography>
                  ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Next'}
                  </Button>
                  ))}
              </div>
          </div>
          )}
      </div>
      </div>
    </div>
       
  );
}

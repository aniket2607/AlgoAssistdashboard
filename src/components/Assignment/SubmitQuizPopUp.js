import React,{useRef, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { blue } from '@material-ui/core/colors';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";


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
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function createData(SrNo,AssignmentHeading,Description,DueDate,Status) {
  return { SrNo,AssignmentHeading,Description,DueDate,Status };
}

const rows = [
  createData(1,'Note on different types of testing','Write Short note on different types of testing','02/03/2021','Completed'),
];

function getSteps() {
    let arr=[]
    for(var i=0; i<tutorialSteps.length;i++)
    {
        arr.push('')
    }
    return arr;
  }

  // const getOption= () =>{

  //   for(var i=0; i<Object.keys(tutorialSteps[activeStep]).length; i++)
  //   {
  //     <FormControlLabel value={tutorialSteps[activeStep].op1} control={<Radio /> } label= {tutorialSteps[activeStep].op1} />

  //   }
  // }
  

  const tutorialSteps = [
    [
      
        "Why is bubble sort often presented first when learning sorting   methods?",
     "it is the fastest",
       "it is the most efficient",
       "it is easiest to understand.",
      "it uses fewer loops than other methods",
    ],
    [
      "Which of the following case doesn't exist in complexity theory?",
       "Best Case",
       "Worst Case",
       "Average Case",
      "Null Case.",
    ],
    [
      
        "What is the advantage of bubble sort over other sorting techniques?",
      "It is faster",
       "Consumes less memory",
      "Detects whether the input is already sorted.",
       "All of the mentioned",
    ],
    [
      
        "What do you think the design algorithm technique used in Bubble Sort is _________________",
      "backtracking",
      "greedy algorithm",
     "divide and conquer.",
       "dynamic programming",
    ],
    [
      
        "What is the maximum number of comparisons if there are 5 elements in array x?",
       "5",
       "10.",
    ],
    ];
  
export default function SubmitQuizPopUp(){
  const classes = useStyles();
  const modalRef = useRef();

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

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

  //________For Radio button_______
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DBMS Unit-1 Quiz"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. </li>
              <li>Each question in the quiz is of multiple-choice or "true or false" format. Read each question carefully, and click on the button next to your response that is based on the information covered on the topic in the module.</li>
              <li>Duration of the quiz is 30 minutes.</li>
             </ul> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" >
            Start Quiz
          </Button>
        </DialogActions>
      </Dialog>
      <GridContainer style={{width:"100%"}}>
        <GridItem xs={12} sm={12} md={12}>
        <Card>
            <CardHeader color="primary">
              <h4 style={{color:"#ffff"}}>Quiz</h4>
            </CardHeader>
            <CardBody style={{paddingLeft:"15px",paddingRight:"35px"}}>

            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                <Step key={label[0]}>
                    <StepButton onClick={handleStep(index)} completed={completed[index]}>
                    {label[0]}
                    </StepButton>
                </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                <div>
                    <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                ) : (
                <div>
                    <br/>
                    <Typography>{tutorialSteps[activeStep][0]}</Typography>
                    <br/>
                    <RadioGroup onChange={handleChange} color="primary">
                    {
                        tutorialSteps[activeStep].slice(1,).map((op,index)=>
                               <FormControlLabel value={op} control={<Radio /> } label= {op} />
                        )
                    }
  
                
            </RadioGroup>
            <br/>
                    <div>
                    <Button variant="contained"
                        color="primary" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Back
                    </Button>
                    <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
                    {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                        <Typography variant="caption" className={classes.completed}>
                            Step {activeStep + 1} already completed
                        </Typography>
                        ) : (
                        <Button variant="contained" color="primary" onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1 ? 'Submit Test' : 'Save & Continue'}
                        </Button>
                        ))}
                    </div>
                </div>
                )}
            </div>
            </CardBody>
          </Card>
            </GridItem>
      </GridContainer>
    </div>
  );
}

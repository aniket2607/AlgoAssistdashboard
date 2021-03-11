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
    return ['','','','',''];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Step 1: Select campaign settings...';
      case 1:
        return 'Step 2: What is an ad group anyways?';
      case 2:
        return 'Step 3: This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }
  const tutorialSteps = [
      {
        label: 'What is complexity of bubble sort?',
        op1:'O(n)',
        op2:'O(n^2)',
        op3:'O(1)',
        op4:'O(logn)',
          
      },
      {
        label: 'Which of the following is not sorting algorithm?',
        op1:'O(n)',
        op2:'O(n^2)',
        op3:'O(1)',
        op4:'O(logn)',
      },
      {
        label: 'What is complexity of bubble sort?',
        op1:'O(n)',
        op2:'O(n^2)',
        op3:'O(1)',
        op4:'O(logn)',
      },
      {
        label: 'What is complexity of selection sort?',
        op1:'O(n)',
        op2:'O(n^2)',
        op3:'O(1)',
        op4:'O(logn)',
      },
      {
        label: 'What is complexity of merge sort?',
        op1:'O(n)',
        op2:'O(n^2)',
        op3:'O(1)',
        op4:'O(logn)',
      },
    ];
  
export const SubmitQuizPopUp = ({openQuiz, setQuizOpen}) =>{
  const classes = useStyles();
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: openQuiz ? 1 : 0,
    transform: openQuiz ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
        setQuizOpen(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && openQuiz) {
        setQuizOpen(false);
        console.log('I pressed');
      }
    },
    [setQuizOpen, openQuiz]
  );
  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
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
    <>
    {openQuiz ? (
      <div>
      <Modal
        aria-labelledby="transition-modal-title"        
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open = {openQuiz}
        onClose = {() => setQuizOpen(prev => !prev)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <animated.div style = {animation}>
        <Fade in = {openQuiz}>
        
          <div className={classes.paper}>
                  
          <div className={classes.root}>
          <h2 style={{ color: blue[500] }}>Quiz</h2>
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
                    All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                ) : (
                <div>
                    <br/>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                    <br/>
                    <RadioGroup onChange={handleChange} color="primary">
                    <FormControlLabel value={tutorialSteps[activeStep].op1} control={<Radio /> } label= {tutorialSteps[activeStep].op1} />
                    <FormControlLabel value={tutorialSteps[activeStep].op2} control={<Radio /> } label= {tutorialSteps[activeStep].op2} />
                    <FormControlLabel value={tutorialSteps[activeStep].op3} control={<Radio /> } label= {tutorialSteps[activeStep].op3} />
                    <FormControlLabel value={tutorialSteps[activeStep].op4} control={<Radio /> } label= {tutorialSteps[activeStep].op4} />
                
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
                        disabled={activeStep === totalSteps() -1 }
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
                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Submit Test'}
                        </Button>
                        ))}
                    </div>
                </div>
                )}
            </div>
            </div>
          </div>
        </Fade>
        </animated.div>
      </Modal>
      </div>
    ):null}
    </>
  );
}

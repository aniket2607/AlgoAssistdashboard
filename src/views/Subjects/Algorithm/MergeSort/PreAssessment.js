import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["", "", "", "", ""];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1: Select campaign settings...";
    case 1:
      return "Step 2: What is an ad group anyways?";
    case 2:
      return "Step 3: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}
const tutorialSteps = [
  {
    label:
      "Merge sort uses which of the following method to implement sorting?",
    op1: "merging.",
    op2: "partioning",
    op3: "selection",
    op4: "exchanging",
  },
  {
    label:
      "Merge sort uses which of the following algorithm to implement sorting?",
    op1: "backtracking",
    op2: "greedy algorithm",
    op3: "divide and conquer.",
    op4: "dynamic programming",
  },
  {
    label:
      "Choose the incorrect statement about merge sort from the following?",
    op1: "it is a comparison based sort",
    op2: "it is an adaptive algorithm.",
    op3: "it is not an in place algorithm",
    op4: "it is stable algorithm",
  },
  {
    label: "Merge sort is preferred for arrays over linked lists.",
    op1: "True",
    op2: "False.",
    op3: "Maybe",
    op4: "None of these",
  },
  {
    label:
      "Consider a situation where swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?",
    op1: "Heap Sort",
    op2: "Selection Sort.",
    op3: "Insertion Sort",
    op4: "Merge Sort",
  },
];

export default function PreAssessment() {
  const classes = useStyles();
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
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              Pre-Assessment completed Successfully.
            </Typography>
          </div>
        ) : (
          <div>
            <br />
            <Typography>{tutorialSteps[activeStep].label}</Typography>
            <br />
            <RadioGroup onChange={handleChange} color="primary">
              <FormControlLabel
                value={tutorialSteps[activeStep].op1}
                control={<Radio />}
                label={tutorialSteps[activeStep].op1}
              />
              <FormControlLabel
                value={tutorialSteps[activeStep].op2}
                control={<Radio />}
                label={tutorialSteps[activeStep].op2}
              />
              <FormControlLabel
                value={tutorialSteps[activeStep].op3}
                control={<Radio />}
                label={tutorialSteps[activeStep].op3}
              />
              <FormControlLabel
                value={tutorialSteps[activeStep].op4}
                control={<Radio />}
                label={tutorialSteps[activeStep].op4}
              />
            </RadioGroup>
            <br />
            <div>
              <Button
                variant="contained"
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1 ? "Submit" : "Next"}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

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
      "What is the best case runtime of linear search algorithm on an ordered set of elements?",
    op1: "O(n)",
    op2: "O(n^2)",
    op3: "O(1)",
    op4: "O(logn)",
  },
  {
    label: "Which of the following is a disadvantage of linear search?",
    op1: " Requires more space",
    op2: "Greater time complexities compared to other searching algorithms.",
    op3: "Not easy to understand",
    op4: "Not easy to implement",
  },
  {
    label:
      "The array is as follows: 1,2,3,6,8,10. Given that the number 17 is to be searched. At which call it tells that there’s no such element? (By using linear search(recursive) algorithm)",
    op1: "7th call",
    op2: "9th call",
    op3: "17th call",
    op4: "The function calls itself infinite number of times",
  },
  {
    label:
      "Is there any difference in the speed of execution between linear serach(recursive) vs linear search(lterative)?",
    op1: "Both execute at same speed",
    op2: "Linear search(recursive) is faster",
    op3: "Linear search(Iterative) is faster",
    op4: "Can't be said",
  },

  {
    label: "What is the worst case runtime of linear search?",
    op1: "O(n)",
    op2: "O(n^2)",
    op3: "O(1)",
    op4: "O(logn)",
  },
];

export default function PostAssessment() {
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
              Post-Assessment completed Successfully.
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

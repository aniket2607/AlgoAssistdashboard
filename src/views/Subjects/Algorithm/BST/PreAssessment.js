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
    label: "What operations can be perfomed on a BST?",
    op1: "Searching",
    op2: "Deletion",
    op3: "Insertion",
    op4: "All of the above.",
  },
  {
    label: "All trees are Binary Search trees?",
    op1: "True",
    op2: "False.",
    op3: "Maybe",
    op4: "None of the above",
  },
  {
    label: "Which of the following is false about a binary search tree?",
    op1: "The left child is always lesser than its parent",
    op2: "The right child is always greater than its parent",
    op3: "The left and right sub-trees should also be binary search trees",
    op4: "In order sequence gives decreasing order of elements.",
  },
  {
    label:
      "How many distinct binary search trees can be created out of 4 distinct keys?",
    op1: "4",
    op2: "14.",
    op3: "24",
    op4: "42",
  },
  {
    label:
      "Which of the following traversal outputs the data in sorted order in a BST?",
    op1: "Preorder",
    op2: "Inorder.",
    op3: "Postorder",
    op4: "Treeorder",
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

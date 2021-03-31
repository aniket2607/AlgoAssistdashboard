import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expandedPanel: {
    backgroundColor: "#9c27b0",
    height: "100px",
    color: "#FFFFFF",
    marginTop: "0px",
    minWidht: "auto",
    minHeight: "auto",
    fontWeight: "30",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
  },
  expandedPanel1: {
    backgroundColor: "#48cae4",
    color: "#FFFFFF",
    marginTop: "0px",
    minWidht: "auto",
    minHeight: "auto",
    fontWeight: "30",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
  },
  accord: {
    marginBottom: "15px",
  },
  button: {
    margin: theme.spacing(3),
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <GridContainer className={classes.root}>
      <GridItem xs={12} sm={12} md={12}>
        <Accordion className={classes.accord}>
          <AccordionSummary
            className={classes.expandedPanel}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Data Structure and Algorithms
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.root}>
              <Accordion className={classes.accord}>
                <AccordionSummary
                  className={classes.expandedPanel1}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Sorting Algorithms
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    className={classes.button}
                    color="primary"
                    round
                    href="http://localhost:3000/student/bubblesort"
                  >
                    Bubble Sort
                  </Button>
                  <Button
                    className={classes.button}
                    color="primary"
                    round
                    href="http://localhost:3000/student/selectionsort"
                  >
                    Selection Sort
                  </Button>
                  <Button
                    className={classes.button}
                    color="primary"
                    round
                    href="http://localhost:3000/student/mergesort"
                  >
                    Merge Sort
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accord}>
                <AccordionSummary
                  className={classes.expandedPanel1}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Searching Algorithms
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    className={classes.button}
                    color="primary"
                    round
                    href="http://localhost:3000/student/linearsearch"
                  >
                    Linear Search
                  </Button>
                  <Button
                    className={classes.button}
                    color="primary"
                    round
                    href="http://localhost:3000/student/binarysearch"
                  >
                    Binary Search
                  </Button>
                </AccordionDetails>
              </Accordion>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accord}>
          <AccordionSummary
            className={classes.expandedPanel}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              Advance Data Structures and Algorithm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.root}>
              <Accordion className={classes.accord}>
                <AccordionSummary
                  className={classes.expandedPanel1}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Tree</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    className={classes.button}
                    color="primary"
                    round
                    href="http://localhost:3000/student/bst"
                  >
                    Binary Search Tree (BST)
                  </Button>
                </AccordionDetails>
              </Accordion>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accord}>
          <AccordionSummary
            className={classes.expandedPanel}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              Machine Learning
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Under Construction.</Typography>
          </AccordionDetails>
        </Accordion>
      </GridItem>
    </GridContainer>
  );
}

import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { bugs, website, server } from "variables/general.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

function createData(SrNo,studentName,RollNo) {
    return { SrNo,studentName,RollNo};
  }
  
  const rows = [
    createData(1,'Bhagyashree Udhane','B1721007'),
  ];

const useStyles = makeStyles(styles);

export default function EvaluateSubmission() {
  const classes = useStyles();
  return (
    <div>
      
      <GridContainer>
        
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h3 className={classes.cardTitleWhite}>Evaluate</h3>
              <h5>Note on sorting algorithms</h5>
            </CardHeader>
            <CardBody>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                    {rows.map((row) => (
                        <TableRow>                    
                        <TableCell>Student Name</TableCell>
                        <TableCell variant="outlined">{row.studentName} </TableCell>                    
                    </TableRow>
                    ))}
                    {rows.map((row) => (
                    <TableRow>
                        <TableCell>Roll No.</TableCell>
                        <TableCell variant="outlined">{row.RollNo} </TableCell>
                    </TableRow> 
                    ))}
                    <TableRow>
                      <TableCell>Submitted File</TableCell>
                      <TableCell variant="outlined">
                        <a href = "http://localhost:3000/teacher/openFile">filename.jpg</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Enter Score</TableCell>
                      <TableCell variant="outlined">
                        <input variant="outlined" type="number"/>
                      </TableCell>
                    </TableRow>
                </TableHead>  
              </Table>
            </TableContainer>
            <Button variant="contained" color="primary">
                Submit
            </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

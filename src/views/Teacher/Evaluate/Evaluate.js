import { Container } from '@material-ui/core';
import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
//import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(SrNo,AssignmentHeading,DueDate) {
    return { SrNo,AssignmentHeading,DueDate };
  }
  
  const rows = [
    createData(1,'Write Short note on different types of testing','02/03/2021'),
    createData(2,'Write Short note on different types of testing','02/03/2021'),
    createData(3,'Write Short note on different types of testing','02/03/2021'),
  ];

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



export default function Evaluate(){
    const classes = useStyles();

    return (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Assignments Added</h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Sr. No.", "Assignment Heading","Description", "Due Date"]}
                    Link = "http://localhost:3000/teacher/evaluationlist"
                    tableData={[
                      ["1", "A* algorithm","Write a note on A* algorithm.", "02/05/2021"],
                      ["2", "Apriori Algorithm","Write a note on Apriori algorithm", "05/05/2021"],
                      ["3", "K-means algorithm","Write a note on K-means algorithm", "06/05/2021"],
                      ["4", "Association Rule Mining","Write a note on association rule mining", "07/05/2021"]
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Quizzes Added</h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Sr. No.", "Quiz Heading", "Due Date"]}
                    tableData={[
                      ["1", "Sorting Algorithm Quiz", "02/04/2021"],
                      ["2", "Searching Algorithms Quiz", "02/05/2021"],
                      ["3", "ML algorithms Quiz", "04/05/2021"],
                      ["4", "Clustering algorithms Quiz", "07/05/2021"]
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
    </div>
    )
}
import { Container } from '@material-ui/core';
import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {SubmitQuizPopUp} from 'components/Assignment/SubmitQuizPopUp';
import { blue } from '@material-ui/core/colors';
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
  
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



export default function StudentAssignment(){
    const classes = useStyles();
    //_______Open Add Assignment Popup_____________
  
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
                    Link = "http://localhost:3000/student/submitassignment"
                    tableHead={["Sr. No.", "Assignment Heading","Description", "Due Date"]}
                    tableData={[
                      ["1", "Dakota Rice","jhsdgcuyagedg asbjcbdhjegdjhg mnscb mab", "02/04/2021"],
                      ["2", "Minerva Hooper","", "02/04/2021"],
                      ["3", "Sage Rodriguez","jhsdgcuyagedg asbjcbdhjegdjhg mnscb mab", "02/04/2021"],
                      ["4", "Philip Chaney","jhsdgcuyagedg asbjcbdhjegdjhg mnscb mab", "02/04/2021"]
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
                    Link = "http://localhost:3000/student/submitquiz"
                    tableHead={["Sr. No.", "Quiz Heading", "Due Date"]}
                    tableData={[
                      ["1", "Dakota Rice", "02/04/2021"],
                      ["2", "Minerva Hooper", "02/04/2021"],
                      ["3", "Sage Rodriguez", "02/04/2021"],
                      ["4", "Philip Chaney", "02/04/2021"]
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    )
}
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


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



export default function ViewTeacher(){
    const classes = useStyles();

    return (
        <div>
          <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
                <div className={classes.root}>
                  <a href="http://localhost:3000/developer/addTeacher">
                    <Button variant="contained" color="secondary" >
                        Add Teacher
                    </Button>
                  </a>
                    <br/>     
                </div>
            </GridItem>
          </GridContainer>
          <br/>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Teachers Added</h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Sr. No.", "Teacher Name","Class-Div"]}
                    tableData={[
                      ["1", "Vivek Patil","TE-A"],
                      ["2", "Surana Sir","All"],
                      ["3", "Vishakha Metre","SE-A"],
                      ["4", "Shanthi Guru","SE-B"]
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
    </div>
    )
}
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
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function StudentsReport() {
  const classes = useStyles();
  return (
    <div>
      
      <GridContainer>
        
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Students's Report</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Sr. No.","Roll No.", "Name","Class-Div"]}
                Link = "http://localhost:3000/teacher/individualStudentReport"
                tableData={[
                  ["1", "B1721001","Abhiraj Sinha", "BE-A"],
                  ["2", "B1721002","Rutuja Chaudhari","BE-A" ],
                  ["3","B1721003", "Aniket Ghandge", "BE-A"],
                  ["4","B1721004", "Hrithik Yadav", "BE-A"],
                  ["5", "B1721005","Ashwini Sayar", "BE-A"],
                  ["6", "B1721006","Prajakta Nigade","BE-A" ],
                  ["7","B1721007", "Bhagyashree Udhane", "BE-A"],
                  ["8","B1721008", "Ayush Singh", "BE-A"],
                  ["9","B1721009", "Rohan Shinde", "BE-A"],
                  ["10","B1721010", "Ashwin Pillai", "BE-A"],
                  ["11", "B1721011","Pranesh Gaikwad", "BE-A"],
                  ["12", "B1721012","Prateek Thakare","BE-A" ],
                  ["13","B1721013", "Tanushree Dharpure", "BE-A"],

                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

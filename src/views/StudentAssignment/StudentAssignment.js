import { Container } from '@material-ui/core';
import React, {useState, useEffect } from 'react';
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
import {getAssignmentList, getQuizList} from "./StudentAssignmentService";
  
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



export default function StudentAssignment(){
    const classes = useStyles();
    //__Integration code
 
  const [isChanged, setisChanged] = useState(0)
  const [data, setData] = useState({})
  const [redirect, setRedirect] = useState("")
  const [quizdata, setquizdata] = useState({})
  
  useEffect(() => {
    getAssignmentList().then(result =>{
      setData(result.data)
      
    }).catch(error=>{
      if(error.request.status === 0){
        localStorage.clear()
        //showNotification("bc")
        setTimeout(function() { setRedirect('/login'); }, 5000);
      }
      else if(error.response.status === 401){
        localStorage.clear()
        //showNotification("tl")
        setTimeout(function() { setRedirect('/login'); }, 5000);
      }
    })    
  });
  useEffect(() => {
    getQuizList().then(response =>{
      setquizdata(response.data)
    }).catch(error=>{
      if(error.request.status === 0){
        localStorage.clear()
        //showNotification("bc")
        setTimeout(function() { setRedirect('/login'); }, 5000);
      }
      else if(error.response.status === 401){
        localStorage.clear()
        //showNotification("tl")
        setTimeout(function() { setRedirect('/login'); }, 5000);
      }
    })
  });
  
  const assignmentList = [];
      for(let i = 0; i < data.length; i++) {
          //let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
          let cnt = i+1;
          let title = data[i].title;
          let description = data[i].description;
          let duedate = data[i].duedate;
          //let key = this.state.users[i].id.value;
          assignmentList.push([cnt,title,description,duedate]);
      }
      //console.log("List**********")
    //console.log(assignmentList)

    const quiztList = [];
    for(let i = 0; i < quizdata.length; i++) {
          //let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
          let cnt = i+1;
          let title = quizdata[i].title;
          let is_active = quizdata[i].is_active;
          let due_date = quizdata[i].due_date;
          //let key = this.state.users[i].id.value;
          quiztList.push([cnt,title,due_date,is_active]);
      }
      //console.log(" Quiz List**********")
    //console.log(quiztList)
    //___End of integration    
  
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
                    Link = "http://localhost:3000/student/submitquiz"
                    tableHead={["Sr. No.", "Quiz Heading", "Due Date"]}
                    tableData={[
                      ["1", <a href="test.com">Sorting Algorithm Quiz</a>, "02/04/2021"],
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
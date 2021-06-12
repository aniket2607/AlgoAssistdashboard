import { Container } from '@material-ui/core';
import React,{ useState,useEffect } from "react";
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
import {getAssignmentList, getQuizList} from "./ShowAssignmentService";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



export default function TeacherAddAssignmentFragment(){
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
          <Container  fixed>
                <div className={classes.root}>
                  <a href="http://localhost:3000/teacher/addAssignment">
                    <Button variant="contained" color="primary" >
                        Add Assignment
                    </Button>
                  </a> 
                  <a href="http://localhost:3000/teacher/addQuiz">
                    <Button variant="contained" color="primary">
                        Add Quiz
                    </Button>
                  </a>
                    <br/>     
                </div>
          </Container>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Assignments Added</h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Sr. No.", "Assignment Heading","Description","Duedate"]}
                    tableData={
                      assignmentList
                    }
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
                    tableData={ quiztList}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
    </div>
    )
  }

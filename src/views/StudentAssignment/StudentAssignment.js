import { Container } from '@material-ui/core';
import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {SubmitAssignmentPopUp} from 'components/Assignment/SubmitAssignmentPopUp';
import {SubmitQuizPopUp} from 'components/Assignment/SubmitQuizPopUp';
import { blue } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

  function createData(SrNo,AssignmentHeading,DueDate,Status) {
    return { SrNo,AssignmentHeading,DueDate,Status };
  }
  
  const rows = [
    createData(1,'Write Short note on different types of testing','02/03/2021','Completed'),
    createData(2,'Write Short note on different types of testing','02/03/2021','Pending'),
    createData(3,'Write Short note on different types of testing','02/03/2021','Pending'),
  ];

  function createQuizData(SrNo,QuizHeading,DueDate,Status) {
    return { SrNo,QuizHeading,DueDate,Status };
  }
  
  const Quizrows = [
    createQuizData(1,'DSA','02/03/2021','Completed'),
    createQuizData(2,'Sorting Types','02/03/2021','Pending'),
    createQuizData(3,'Unit 1 Quiz','02/03/2021','Pending'),
  ];

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
    const [openAssignment, setAssignmentOpen] = React.useState(false);

    const openAssignmentpage = () => {
        setAssignmentOpen((prev) => !prev);
    };
    //_______Open Add Quiz Popup_____________
    const [openQuiz, setQuizOpen] = React.useState(false);

    const openQuizpage = () => {
        setQuizOpen((prev) => !prev);
    };

    return (
        <div>
            <Container  fixed>
                <div className={classes.root}>
                    
                    <br/>
                    
                    <h3 style={{ color: blue[500] }}>Assignments</h3>
                    <br/>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Sr. No.</StyledTableCell>
                                <StyledTableCell align="left" >Assignment Heading</StyledTableCell>
                                <StyledTableCell align="left">Due Date</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" align = "right">{row.SrNo}</StyledTableCell>
                                <StyledTableCell align="left" onClick ={openAssignmentpage}>{row.AssignmentHeading}</StyledTableCell>
                                <SubmitAssignmentPopUp openAssignment={openAssignment} setAssignmentOpen={setAssignmentOpen}/>
                                <StyledTableCell align="left">{row.DueDate}</StyledTableCell>
                                <StyledTableCell align="left">{row.Status}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br/>
                    <br/>
                    <h3 style={{ color: blue[500] }}>Quizzes</h3>
                    <br/>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Sr. No.</StyledTableCell>
                                <StyledTableCell align="left">Quiz Heading</StyledTableCell>
                                <StyledTableCell align="left">Due Date</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {Quizrows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" align = "right">
                                    {row.SrNo}
                                </StyledTableCell>
                                <StyledTableCell align="left" onClick ={openQuizpage}>{row.QuizHeading}</StyledTableCell>
                                <SubmitQuizPopUp openQuiz={openQuiz} setQuizOpen={setQuizOpen}/>
                                <StyledTableCell align="left" >{row.DueDate}</StyledTableCell>
                                <StyledTableCell align="left">{row.Status}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Container>
        </div>
    )
}
import { Container } from '@material-ui/core';
import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {AddAssignmentPopUp} from 'components/Assignment/AddAssignmentPopUp';
import {AddQuizPopUp} from 'components/Assignment/AddQuiz';
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



export default function TeacherAddAssignmentFragment(){
    const classes = useStyles();
    //_______Open Add Assignment Popup_____________
    const [openAddAssignment, setAddAssignmentOpen] = React.useState(false);

    const openAddAssignmentpage = () => {
        setAddAssignmentOpen((prev) => !prev);
    };
    //_______Open Add Quiz Popup_____________
    const [openAddQuiz, setAddQuizOpen] = React.useState(false);

    const openAddQuizpage = () => {
        setAddQuizOpen((prev) => !prev);
    };

    return (
        <div>
            <Container  fixed>
                <div className={classes.root}>
                    <Button variant="contained" color="primary" onClick ={openAddAssignmentpage} >
                        Add Assignment
                    </Button>
                    
                    <Button variant="contained" color="primary" onClick = {openAddQuizpage}>
                        Add Quiz
                    </Button>
                    <AddAssignmentPopUp openAddAssignment={openAddAssignment} setAddAssignmentOpen={setAddAssignmentOpen}/>
                    <br/>
                    <br/>
                    <AddQuizPopUp openAddQuiz={openAddQuiz} setAddQuizOpen={setAddQuizOpen}/>
                    <h3 style={{ color: blue[500] }}>Assignments Added</h3>
                    <br/>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Sr. No.</StyledTableCell>
                                <StyledTableCell align="left">Assignment Heading</StyledTableCell>
                                <StyledTableCell align="left">Due Date</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" align = "right">
                                    {row.SrNo}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.AssignmentHeading}</StyledTableCell>
                                <StyledTableCell align="left">{row.DueDate}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br/>
                    <br/>
                    <h3 style={{ color: blue[500] }}>Quiz Added</h3>
                </div>
            </Container>
        </div>
    )
}
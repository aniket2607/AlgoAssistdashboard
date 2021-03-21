import React,{useRef, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { blue } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  blue: {
    align: "center",
    size: 66,
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(20),
    height: theme.spacing(20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'none',
  },
}));


export default function AddAssignment(){
  const classes = useStyles();
  const modalRef = useRef();

  return (    
          <div className={classes.paper}>
                  
            <h2 style={{ color: blue[500] }}>Add Assignment</h2>
                      
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                      <TableCell>Assignment Heading</TableCell>
                      <TableCell variant="outlined"><input type = "text" margin="dense" required rows = {4} multiline = {true}/> </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Description(If any)</TableCell>
                      <TableCell variant="outlined"><input type = "textarea" margin="dense" required/> </TableCell>
                  </TableRow>               
                  <TableRow>
                      <TableCell>Due Date</TableCell>
                      <TableCell variant="outlined"><input type = "date" margin="dense" required/> </TableCell>
                  </TableRow>
  
                </TableHead>  
              </Table>
            </TableContainer>
            <Button variant="contained" color="primary">
                Add
            </Button>
          </div>
  );
}

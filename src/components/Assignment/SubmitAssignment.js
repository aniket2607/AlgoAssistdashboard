import React,{useRef, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";


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
    width:'100%'
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

function createData(SrNo,AssignmentHeading,Description,DueDate,Status) {
  return { SrNo,AssignmentHeading,Description,DueDate,Status };
}

const rows = [
  createData(1,'Note on different types of testing','Write Short note on different types of testing','02/03/2021','Completed'),
];

export default function SubmitAssignment(){
  const classes = useStyles();
  const modalRef = useRef();

  return (
    <div className={classes.root} >
                    
    <GridContainer style={{width:"100%"}}>
      
      <GridItem xs={12} sm={12} md={12}>
                  
            <Card>
            <CardHeader color="primary">
              <h2 style={{color:"#ffff"}}>Assisgnment</h2>
            </CardHeader>
            <CardBody style={{paddingLeft:"15px",paddingRight:"35px"}}>
            
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                {rows.map((row) => (
                    <TableRow>                    
                      <TableCell>Assignment Heading</TableCell>
                      <TableCell variant="outlined">{row.AssignmentHeading} </TableCell>                    
                  </TableRow>
                ))}
                {rows.map((row) => (
                  <TableRow>
                      <TableCell>Description(If any)</TableCell>
                      <TableCell variant="outlined">{row.Description} </TableCell>
                  </TableRow> 
                ))}
                {rows.map((row) => (              
                  <TableRow>
                      <TableCell>Due Date</TableCell>
                      <TableCell variant="outlined">{row.DueDate} </TableCell>
                  </TableRow>
                ))}
                  <TableRow>
                      <TableCell>Select file</TableCell>
                      <TableCell variant="outlined">
                        <Button variant="contained"component="label">
                          <input variant="outlined" type="file" />
                        </Button>
                      </TableCell>
                  </TableRow>
                </TableHead>  
              </Table>
            
            <Button variant="contained" color="secondary" style={{marginTop: 18,marginBottom: 8,left:'40%'}}>
        Submit Assisgnment
      </Button>
            </CardBody>
          </Card>
          </GridItem>
      </GridContainer> 
      </div>   
  );
}

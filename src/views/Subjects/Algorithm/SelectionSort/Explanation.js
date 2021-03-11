import { Container } from '@material-ui/core';
import React from 'react';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    img: {
        alignItems :'center',
        height: 310,
        maxWidth: 450,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
      },
  }));
  

var explain = "Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items";
var imagepath = 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60';

//___To show data________
function createData(algoName, algoExplanation,algoImage) {
    return {algoName, algoExplanation,algoImage };
}
const rows = [
   createData('Bubble Sort',explain,imagepath ),
];

export default function Explanation(){
    const classes = useStyles();
        return (
            <div>
                <Container fixed>
                <div>
                    {rows.map((row) => (        
                        <h2 style={{ color: blue[500] }}>{row.algoName}</h2>
                    ))}
                    <br/>
                    <br/>
                    {rows.map((row) => ( 
                        <div>
                        <img
                        className={classes.img}
                        src={row.algoImage}
                        />
                        <br/>
                        <br/>
                        <Typography variant="body1" gutterBottom>
                            {row.algoExplanation}
                        </Typography>
                        </div>
                    ))} 
                    
                </div>

                </Container>
            </div>
        );
}


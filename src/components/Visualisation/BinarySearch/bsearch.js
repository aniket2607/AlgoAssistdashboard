import { render } from 'react-dom'
import React, { useState, useEffect, Fragment } from 'react'
import { useTransition, animated } from 'react-spring'
import './bsearch.css'
import binarySearch from './binarysearch'
import data from './data'
import resetArray from './resetArray'
import previousState from './prev'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Warning from "components/Typography/Warning.js";



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  }, 
}));

export default function BinarySearch() {
  
  const [rows, setArray] = useState({
   
    data:[...data], 
    tHandler:0, 
    found:false,
    notfound: false,
    low:0,
    high: 9,
    toSearch: undefined,
    mid:-1,
    part:"none"
  })
  
  let height = 0
  
  const transitions = useTransition(
    rows['data'].map(data => ({ ...data, y: (height += 100)})), 
    d => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height}) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height, opacity: 1 })
    }
  )
  
 
  const startVisual = () => {
    rows.mid=-1;rows.low=0;rows.high=9;rows.found=false;rows.notfound=false; rows.part="none";
    console.log("res",rows.mid)
    const timeoutHandler = setInterval(() => setArray(binarySearch),1000) 
    setArray({data: rows.data, tHandler: timeoutHandler, found: rows.found, notfound:rows.notfound, low: rows.low, high: rows.high, toSearch: rows.toSearch, mid: rows.mid, part: rows.part}) 
  }
  const setValue = () => {
    rows.toSearch = document.getElementById("outlined-basic").value
    setArray(rows)
    console.log(rows.toSearch,"searching this")
  }

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
    
      const handleChange = () => {
        setChecked((prev) => !prev);
      };
    
      const reset =()=>{
        setArray(resetArray)    
     }

  
  return (
  
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
      
      <div className="listbinary">
        {data && transitions.map(({ item, props: { y, x,...rest }, key }, index) => (
          <animated.div
          key={index}
          className="cardbinary"
          style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(${y}px,0,0)`), ...rest }}>
            <div className={`Arrow${rows.low===index || rows.high===index ? "" : "-hidden"} upArrow`}>
            </div>  
                <div className={`highlight${rows.low===index || rows.high===index ? "" : "-hidden"}`} id={index}>
                  <div className="detailsbinary" style={{ backgroundImage: item.css }} >
                    <div className="valsbinary">
                        {item.value}
                    </div>
                </div>
              
            </div>
            <div className={`low${rows.low===index ? "":"hide"}`}>low</div>
            <div className={`high${rows.high===index ? "":"hide"}`}>high</div>
            <div className={`mid${rows.mid===index ? "":"hide"}`}>mid</div>

          </animated.div>
        ))}
      </div>
      </Grid>
        <Grid item xs={12}>
      <div className="buttonsbinary"> 

        <form className="formlinear" noValidate autoComplete="off" >
      <TextField className="outlined" id="outlined-basic" label="Enter a number" variant="outlined"  type="text" onChange={setValue}/>
      </form>
      <Button color="primary" round onClick={() => {if(rows['tHandler']===0){startVisual();} }} disabled={!!rows['tHandler']}>Search</Button>
      <Button color="primary" round onClick={reset}>Reset Array</Button>
    
       
      </div>
        </Grid>
        <Grid item xs={6}>
        <div className="accord1">
      <div className={classes.container}>
      <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
          <div className="code1">
            <p>
        <div id="execText" ></div><br/>
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.high>=rows.low ? "green":"red"}`}>
            &nbsp;&nbsp;while high &gt;=low &nbsp;
            </div>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mid = l + floor( ( h-l ) / 2)&nbsp;
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.part=="e" ? "green":"hidden"}`}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if arr[mid] == element to search&nbsp;&nbsp;&nbsp;
            </div>
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.found ? "green":"none"}`}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return found at mid
            </div>&nbsp;
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.part=="l" ? "green":"hidden"}`}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if element to search &lt; arr[mid] 
            </div>
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.part=="l" ? "red":"hidden"}`}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;search in left half
            </div>&nbsp;
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.part=="g" ? "green":"hidden"}`}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if element to search &gt; arr[mid]</div>
            <div className={`tracer${rows.tHandler ? "":"hid"}${rows.part=="g" ? "red":"hidden"}`}>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;search in right half</div>
            <div className={`tracer${rows.part=="nf" ? "red":"none"}`}>
            &nbsp;&nbsp;return not found
            </div>
            </p>
      </div>
      </Paper>
        </Fade>
    </div>
    <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Code Trace"
      />
      
    </div>
        </Grid>
    </Grid>
    </div>

  )
}



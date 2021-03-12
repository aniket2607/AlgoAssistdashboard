import { render } from 'react-dom'
import React, { useState, useEffect, Fragment } from 'react'
import { useTransition, animated, useSpring } from 'react-spring'
import './linear-search.css'
import linearSearch  from "./search";
import data from './data'
import resetArray from './resetArray'
import PauseCircleFilledRounded from '@material-ui/icons/PauseCircleFilledRounded'
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  
}));


export default function LinearSearch() {

  const [rows, setArray] = useState({
   
    data:[...data], 
    tHandler:0, 
    found: false,
    notfound: false,
    curridx : -1,
    toSearch : undefined
  })
  
  let height = 0
  let width = 100
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
    const timeoutHandler = setInterval(() => setArray(linearSearch),1000)
    setArray({
      
      data:rows.data, 
      tHandler:timeoutHandler, 
      found: rows.found,
      notfound: rows.notfound,
      curridx : rows.curridx,
      toSearch : rows.toSearch
    })
    console.log("curr",rows.curridx)
    
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
      <div className="list1">
        {data && transitions.map(({ item, props: { y, x,...rest }, key }, index) => (
          <animated.div
          key={index}
          className="card1"
          style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(${y}px,0,0)`), ...rest }}>
            <div className={`Arrow${rows.curridx===index && !rows.found  ? "" : "-hidden"} upArrow`}>
            </div>
            <div className="cell1">
              
                <div className={`highlight${rows.curridx===index ? "" : "-hidden"}`} id={index}>
                  <div className="details1" style={{ backgroundImage: item.css }} >
                    <div className="vals1">
                        {item.value}
                    </div>
                  </div>
                
                </div>
              
            </div>

          </animated.div>
        ))}
      </div>
      </Grid>
        <Grid item xs={6}>
      <div className="buttons1">
        
        {/* <input id="elementToSearch" type="text" onChange={setValue}></input> */}
      <form className="formlinear" noValidate autoComplete="off" >
      <TextField className="outlined" id="outlined-basic" label="Enter a number" variant="outlined"  type="text" onChange={setValue}/>
      </form>
      <Button color="primary" round onClick={() => {if(rows['tHandler']===0){startVisual();} }}>Search</Button>
      <Button color="primary" round onClick={reset}>Reset Array</Button>
    
      
      </div>
      </Grid>
      <Grid item xs={6}>
        <div className="accord1">
      <div className={classes.container}>
      <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
          <div className="code1">
          <p>&nbsp;&nbsp;for each item in the list&nbsp;&nbsp;&nbsp;&nbsp;<br/> 
            <div className={`tracer1${rows.curridx>=0 && !rows.found? "" : "-hidden"}`}>
          &nbsp;&nbsp;&nbsp;&nbsp;if toSearch==arr[i]<br/>
            </div> 
            <div className={`foundtracer${rows.found ? "" : "-hidden"}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;found=True<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return item's index&nbsp;&nbsp;<br/>
            </div><br/>
            <div className={`tracer1${rows.notfound ? "" : "-hidden"}`}>  
            &nbsp;&nbsp;return notfound<br/>
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



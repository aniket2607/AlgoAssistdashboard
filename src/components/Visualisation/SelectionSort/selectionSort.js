import { render } from 'react-dom'
import React, { useState, useEffect, Fragment } from 'react'
import { useTransition, animated } from 'react-spring'
import './selectionSort.css'
import selectionSort from './sort'
import data from './data'
import resetArray from './resetArray'
import previousState from './prev'
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

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

export default function ListOrdering() {

  var paures = "Pause"
  
  const [rows, setArray] = useState({
   
    data:[...data], 
    tHandler:0,  
    min:-1,
    i:-1,
    j:-1,
    isMinimum: false,
    isSwapping: false,
    last_sorted : 10,
     speed : 800,
     allStates : [],
     type : 1
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
  
 
  
  const nextStep = () => {
    setArray(selectionSort)
  }

  const prevStep = () => {
    setArray(previousState)
    
  }

  
  const pause_resume = ()=>{
    if(rows['tHandler'] !== 0){
      
      clearInterval(rows['tHandler'])
      setArray({data:rows['data'],tHandler:0,min:rows.min,i:rows.i,j:rows.j,isMinimum:rows.isMinimum,isSwapping:rows.isSwapping,last_sorted:rows['last_sorted'],speed:rows.speed, allStates: rows.allStates, type: rows.type})
     
    }
    else{
      
      const resumeHandler = setInterval(()=> setArray(selectionSort),rows.speed)
      setArray({data:rows['data'],tHandler:resumeHandler,min:rows.min,i:rows.i,j:rows.j,isMinimum:rows.isMinimum,isSwapping:rows.isSwapping,last_sorted:rows['last_sorted'],speed:rows.speed, allStates: rows.allStates, type: rows.type})
     
    }
    return
  }
  const changeSpeed = (x) => {
    
    clearInterval(rows.tHandler)
    setArray({data:rows['data'],tHandler:0,min:rows.min,i:rows.i,j:rows.j,isMinimum:rows.isMinimum,isSwapping:rows.isSwapping,last_sorted:rows['last_sorted'],speed:x, allStates: rows.allStates, type: rows.type})
    
  }
    
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

      const reset =()=>{
        setArray(resetArray)  
         
     }

     const changeType = () => {
       if(rows.type == 1){
         clearInterval(rows.tHandler)
         let temp = [...rows.data]
         for(let i=0; i<temp.length;i++){
          temp[i]['css'] = 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
         }
         setArray({data:[...temp],tHandler:0, min:-1, i: -1, j:-1, isMinimum:false,isSwapping:false,last_sorted:9,speed:rows.speed, allStates: [], type: 0})
        }
        else{
          clearInterval(rows.tHandler)
          let temp = [...rows.data]
          for(let i=0; i<temp.length;i++){
           temp[i]['css'] = 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
          }
        
        setArray({data:[...temp],tHandler:0, min:-1, i: -1, j:-1, isMinimum:false,isSwapping:false,last_sorted:9,speed:rows.speed, allStates: [], type: 0})
      }
     }
  return (
  
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
      <div className="list">
        {data && transitions.map(({ item, props: { y, x,...rest }, key }, index) => (
          <animated.div
          key={index}
          className="card"
          style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(${y}px,0,0)`), ...rest }}>
            <div className={`Arrow${rows['i']===index || rows.min===index || rows.j === index? "" : "-hidden"} upArrow`}>
            </div>
            <div className="cell" style={{lineHeight:100+2*rows.data[index].value+"px"}} >
              
                <div className={`highlight${rows['i']===index || rows.min===index || rows.j === index? "" : "-hidden"}`} id={index}>
                  <div className="details" style={{ backgroundImage: item.css }} >
                    <div className="vals">
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
      <div className="buttons"> 

        <IconButton id="pr1" color="secondary" onClick={ pause_resume }  >
    {rows.tHandler?<PauseCircleFilledRounded style={{ fontSize: 30 }}/>:<PlayCircleFilledRoundedIcon style={{ fontSize: 30 }}/>}
  </IconButton>
  <IconButton id="pr1" color="secondary" onClick={ prevStep } disabled={!rows.allStates.length}  >
  <SkipPreviousRoundedIcon style={{ fontSize: 30 }}/>
  </IconButton>
  <IconButton id="pr1" color="secondary" onClick={ reset }  >
  <RefreshRoundedIcon style={{ fontSize: 30 }}/>
  </IconButton>
  <IconButton id="pr1" color="secondary" onClick={ nextStep }  >
  <SkipNextRoundedIcon style={{ fontSize: 30 }}/>
  </IconButton>
  <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item >Ascending</Grid>
          <Grid item>
          <Switch onChange={changeType} disabled={!!rows.tHandler}></Switch>
          </Grid>
          <Grid item>Descending</Grid>
        </Grid>
      
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        Fast
        </Grid>
        <Grid item xs>
        <Slider
        className="slide"
        defaultValue={1000}
        aria-labelledby="continuous-slider"
        color="secondary"
        step={100}
        min={100}
        max={2000}
        valueLabelDisplay="auto"
        x={rows.speed}
        onChange={changeSpeed} />
        </Grid>
        <Grid item>
          Slow
        </Grid>
      </Grid>
</div>
</Grid>
        <Grid item xs={6}>
        <div className="accord">
      <div className={classes.container}>
        <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
          <div className="code">
            <p>&nbsp;&nbsp;do<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;swapped = false <br/>   
            &nbsp;&nbsp;&nbsp;&nbsp;for i = 1 to indexOfLastUnsortedElement-1&nbsp;&nbsp; 
            <div className={`tracer${rows['isMinimum'] ? "" : "-hidden"}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if leftElement > rightElement<br/> 
            </div>
            <div className={`tracer${rows['isSwapping'] ? "" : "-hidden"}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(leftElement, rightElement)<br/>
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true<br/> 
            &nbsp;&nbsp;while swapped<br/> </p>
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



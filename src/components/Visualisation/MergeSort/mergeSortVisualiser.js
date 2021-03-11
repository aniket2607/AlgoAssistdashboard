import { render } from 'react-dom'
import React, { useState, useEffect, Fragment, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './mergeSortVisualiser.css'
import MergeSort from './sort'
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

export default function MergeSortVisualisation() {

  
  const [rows, setArray] = useState({
   
    data:[...data], 
    tHandler:0, 
    stack : [[0,9,0]],
    translateParams : 0,
    color:[90,100,80]
     
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

  const mergeSort = () => {
    const timeoutHandler = setInterval(()=> setArray(MergeSort),1000)
    setArray({data:rows.data, tHandler: timeoutHandler, stack: rows.stack, translateParams: rows.translateParams, color:rows.color})
    // console.log("FRom main:", rows.stack)
  }
  const next = () => {
    setArray(mergeSort)
  }

  const reset =()=>{
    setArray(resetArray)  
     
 }
 
  
  return (
  
    <div>

      <div className="list">
        {data && transitions.map(({ item, props: { y, x,...rest }, key }, index) => (
          <animated.div
          key={index}
          className="card"
          id={index}
          style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(${y}px,0,0)`), ...rest }}>
            {/* <div className={`Arrow${rows['i']===index || rows['j']===index ? "" : "-hidden"} upArrow`}> */}
            {/* </div> */}
            <div className="cell" style={{lineHeight:50+2*rows.data[index].value+"px"}} >
              
                <div className={`highlight${rows['i']===index || rows['j']===index ? "" : "-hidden"}`} >
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
      <div className="buttons"> 
      <IconButton id="pr1" color="secondary" onClick={ mergeSort }  >
  {rows.tHandler?<PauseCircleFilledRounded style={{ fontSize: 30 }}/>:<PlayCircleFilledRoundedIcon style={{ fontSize: 30 }}/>}
</IconButton>
<IconButton id="pr1" color="secondary" onClick={ reset }  >
<RefreshRoundedIcon style={{ fontSize: 30 }}/>
</IconButton>
<IconButton id="pr1" color="secondary" onClick={ next }  >
<SkipNextRoundedIcon style={{ fontSize: 30 }}/>
</IconButton>
        {/* <button onClick={() => {if(rows['tHandler']===0){startVisual();} }} disabled={!!rows['tHandler']}>Sort</button>  */}
        
        {/* <button onClick={reset}>Reset Array</button> 
        <button id="pauseresume"  onClick={ pause_resume } >Pause</button> 
        <button id="next"  onClick={ nextStep } >Next</button>
        <button id="prev"  onClick={ prevStep } disabled={!rows.allStates.length}>Previous</button>
         
        <Slider axis="x" xstep={-100} xmin={2000} xmax={100} x={rows.speed} onChange={({ x }) => { changeSpeed(x)}}/>
        <Switch onChange={changeType} disabled={!!rows.tHandler}></Switch> */}
       
      </div>
      {/* <div class="column" id="trace">
               
        <fieldset>
                   <legend>Trace</legend>         
          <ul type="none">
                      <li id="line1">do</li>          
            <li id="line2">&nbsp;&nbsp;swapped = false</li>          
            <li id="line3">
              &nbsp;&nbsp;for i = 1 to indexOfLastUnsortedElement-1
            </li>
             <div className={`tracer${rows['isComparing'] ? "" : "-hidden"}`}>
            <li id="line4">
              &nbsp;&nbsp;&nbsp;&nbsp;if leftElement > rightElement
            </li> 
              </div>         
              <div className={`tracer${rows['isSwapping'] ? "" : "-hidden"}`}>
            <li id="line5">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(leftElement, rightElement)
            </li>
            </div>
                      
            <li id="line6">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true
            </li>
                      <li id="line7">while swapped</li>         
          </ul>
                 
        </fieldset>

      </div> */}

    </div>

  )
}



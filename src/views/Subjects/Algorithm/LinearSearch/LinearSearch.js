import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, recomposeColor } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExplicitIcon from '@material-ui/icons/Explicit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';
import { Container } from '@material-ui/core';
import PreAssessment from './PreAssessment';
import Switch from "@material-ui/core/Switch";
import Explanation  from './Explanation';
import Visualization from './Visualization';
import PostAssessment from './PostAssessment';
import Coding from './Coding';

export default function AlgorithmFlow(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [fragment, setfragment] =useState("PREASSESSMENT");
  const loadFragment = () => {
    switch(fragment){
        case "PREASSESSMENT":
            return <PreAssessment/>
        case "ASSIGNMENT" :
            return <Explanation/>
        case "VISUALIZATION" :
            return <Visualization/>
        case "POSTASSESSMENT":
            return <PostAssessment/>
        case "CODING":
            return <Coding/>
    }
   
  }    
        return (
          <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="scrollable force tabs example"
                  centered
                >
                  <Tab label="Pre-Assessment" icon={<AssessmentIcon />} onClick ={e=>setfragment("PREASSESSMENT")}/>
                  <Tab label="Explanation" icon={<ExplicitIcon />} onClick ={e=>setfragment("ASSIGNMENT")}/>
                  <Tab label="Visualization" icon={<VisibilityIcon />} onClick ={e=>setfragment("VISUALIZATION")}/>
                  <Tab label="Coding Practice" icon={<CodeIcon />} onClick ={e=>setfragment("CODING")}/>
                  <Tab label="Post-Assessment" icon={<AssessmentIcon/>} onClick ={e=>setfragment("POSTASSESSMENT")}/>
                  
                </Tabs>
              </AppBar>
              {loadFragment()}
              </GridItem>
    </GridContainer>
        );
    
}


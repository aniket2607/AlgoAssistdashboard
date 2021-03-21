import { Container } from '@material-ui/core';
import React, {Component} from 'react';
import CodingRoom from "components/Coding/CodingRoom";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


export default function Coding(){
    
        return (
                <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CodingRoom></CodingRoom>
           </GridItem>
           </GridContainer>
        );
}


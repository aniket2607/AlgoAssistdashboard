import { Container } from '@material-ui/core';
import React, {Component} from 'react';
import ListOrdering from 'components/Visualisation/BubbleSort/list_ordering'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


export default function Visualization(){
    
        return (
                <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <ListOrdering>
            //<h1>hhhh</h1>
           </ListOrdering>
           </GridItem>
           </GridContainer>
        );
}

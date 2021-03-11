import { Container } from '@material-ui/core';
import React, {Component} from 'react';
import MergeSortVisualisation from 'components/Visualisation/MergeSort/mergeSortVisualiser.js'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


export default function Visualization(){
    
        return (
                <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <MergeSortVisualisation></MergeSortVisualisation>
           </GridItem>
           </GridContainer>
        );
}

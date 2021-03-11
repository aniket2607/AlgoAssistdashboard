import React, { useState } from 'react'

function isSortedAsc(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]['value']>arr[i+1]['value']){
            return false
        }
    }
    return true
}
function isSortedDesc(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]['value']<arr[i+1]['value']){
            return false
        }
    }
    return true
}


function sort(rowsDict){
 
    let currarray = [...rowsDict['data']]
    let tempi = 0
    if(rowsDict['i']!==-1)
        tempi = rowsDict['i']
    
    for(let i=tempi;i<currarray.length-1;i++){
        for(let j=i;j<currarray.length-1;j++){
            if(rowsDict.type===1){

                if(currarray[j]['value'] > currarray[j+1]['value']){
                    
                    if(!rowsDict['isComparing']){
                        var allStatesDict = {data:[...currarray], tHandler:0, isComparing: false, isSwapping:true, i:j, j:j+1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
    
                    if(rowsDict.allStates){
                        rowsDict.allStates.push(allStatesDict)
                    }
                    return {data:[...currarray], tHandler:rowsDict['tHandler'], isComparing: true, isSwapping:false, i:j, j:j+1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed,allStates: rowsDict.allStates,type: rowsDict.type}
                    }
                    if(!rowsDict.isSwapping){
    
                        [currarray[j],currarray[j+1]] = [currarray[j+1],currarray[j]]
                        
                         allStatesDict = {data:[...currarray], tHandler:0, isComparing: true, isSwapping:false, i:j,j:j+1, last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates: rowsDict.allStates, type: rowsDict.type}
                        
                        if(rowsDict.allStates){
                            rowsDict.allStates.push(allStatesDict)
                        }
                        // console.table(allStatesTemp1)
                        return {data:[...currarray], tHandler:rowsDict['tHandler'], isComparing: false, isSwapping:true, i:j,j:j+1, last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates: rowsDict.allStates, type: rowsDict.type}
                    }
                }
            }
            else{
                if(currarray[j]['value'] < currarray[j+1]['value']){
                    
                    if(!rowsDict['isComparing']){
                        var allStatesDict = {data:[...currarray], tHandler:0, isComparing: false, isSwapping:true, i:j, j:j+1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
    
                    if(rowsDict.allStates){
                        rowsDict.allStates.push(allStatesDict)
                    }
                    return {data:[...currarray], tHandler:rowsDict['tHandler'], isComparing: true, isSwapping:false, i:j, j:j+1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
                    }
                    if(!rowsDict.isSwapping){
    
                        [currarray[j],currarray[j+1]] = [currarray[j+1],currarray[j]]
                        
                         allStatesDict = {data:[...currarray], tHandler:0, isComparing: true, isSwapping:false, i:j,j:j+1, last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates: rowsDict.allStates, type: rowsDict.type}
                        
                        if(rowsDict.allStates){
                            rowsDict.allStates.push(allStatesDict)
                        }
                        // console.table(allStatesTemp1)
                        return {data:[...currarray], tHandler:rowsDict['tHandler'], isComparing: false, isSwapping:true, i:j,j:j+1, last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates: rowsDict.allStates, type: rowsDict.type}
                    }
                }
            }
           
            // return currarray
        }
        rowsDict['last_sorted'] = rowsDict['last_sorted']-1

        if(rowsDict.last_sorted>=0){

            currarray[rowsDict.last_sorted].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }
        
        
         allStatesDict = {data:[...currarray], tHandler:rowsDict['tHandler'], isComparing: false, isSwapping:false, i:-1,j:-1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates:rowsDict.allStates,type: rowsDict.type}
        if(rowsDict.allStates){
            rowsDict.allStates.push(allStatesDict)
        }
        if(rowsDict.type ===1){

            if(isSortedAsc(rowsDict.data))
                {
                    for(let i=0;i<=rowsDict.last_sorted;i++){
                        currarray[i].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    }
                    clearInterval(rowsDict['tHandler'])
                    return {data:[...currarray], tHandler:0, isComparing: false, isSwapping:false, i:-1,j:-1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates:rowsDict.allStates, type: rowsDict.type}
                }
        }
        else{
            if(isSortedDesc(rowsDict.data)){
                for(let i=0;i<currarray.length;i++){
                        currarray[i].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    }
                clearInterval(rowsDict['tHandler'])
                return {data:[...currarray], tHandler:0, isComparing: false, isSwapping:false, i:-1,j:-1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates:rowsDict.allStates, type: rowsDict.type}
                
            }

        }
        return {data:[...currarray], tHandler:rowsDict['tHandler'], isComparing: false, isSwapping:false, i:-1,j:-1,last_sorted:rowsDict['last_sorted'],speed:rowsDict.speed, allStates:rowsDict.allStates, type: rowsDict.type}
        
    }
    
    
}
export default function bubbleSort(rowsDict){
    
   return sort(rowsDict)
}


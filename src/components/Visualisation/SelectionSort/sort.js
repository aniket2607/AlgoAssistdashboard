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
    let min_id=0
    let currarray = [...rowsDict['data']]
    let tempi = 0
    if(rowsDict['i']!==-1)
        tempi = rowsDict['i']
    console.log(tempi,"tmpi",rowsDict['i'])
    for(let x=tempi;x<currarray.length-1;x++){
        if(rowsDict.min !== -1){
            min_id = rowsDict.min
        }
        
        let tmpj = 0
        if(rowsDict.j!==-1){
            tmpj = rowsDict.j
        }
        
        if(rowsDict.isSwapping){
            [currarray[rowsDict.min],currarray[x]] = [currarray[x],currarray[rowsDict.min]]

            var allStatesDict = {data:[...currarray], tHandler:0, min:-1, i: -1, j:-1, isMinimum:false,isSwapping:true,last_sorted:rowsDict.last_sorted,speed:rowsDict.speed, allStates: rowsDict.allStates, type: rowsDict.type}
                        
            if(rowsDict.allStates){
                rowsDict.allStates.push(allStatesDict)
            }

            return {data:[...currarray], tHandler:rowsDict['tHandler'],min:x+1,i:x+1,j:x+2,isMinimum:true,isSwapping:false,last_sorted:rowsDict.last_sorted,speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
        }
        for(let j=tmpj;j<currarray.length;j++){
            currarray[min_id].css='linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            currarray[j].css='linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
            
            if(currarray[j]['value'] < currarray[min_id]['value']){
                currarray[min_id].css= 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
                min_id = j 
                currarray[min_id].css= 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                return {data:[...currarray], tHandler:rowsDict['tHandler'],min:min_id,i:x,j:j+1,isMinimum:true,isSwapping:false,last_sorted:rowsDict.last_sorted,speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
            }
             var allStatesDict = {data:[...currarray], tHandler:0, min:min_id, i: x, j:j+1, isMinimum:true,isSwapping:true,last_sorted:rowsDict.last_sorted,speed:rowsDict.speed, allStates: rowsDict.allStates, type: rowsDict.type}
                        
            if(rowsDict.allStates){
                rowsDict.allStates.push(allStatesDict)
            }

            return {data:[...currarray], tHandler:rowsDict['tHandler'],min:min_id,i:x,j:j+1,isMinimum:true,isSwapping:false,last_sorted:rowsDict.last_sorted,speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
            }
            rowsDict['last_sorted'] = rowsDict['last_sorted']-1

            if(rowsDict.last_sorted>=0){

                currarray[rowsDict.last_sorted].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }
            
            return {data:[...currarray], tHandler:rowsDict['tHandler'],min:min_id,i:x,j:x,isMinimum:true,isSwapping:true,last_sorted:rowsDict.last_sorted,speed:rowsDict.speed,allStates: rowsDict.allStates, type: rowsDict.type}
        
 
        
    }
    currarray[tempi].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    clearInterval(rowsDict['tHandler'])
    return {data:[...currarray], allStates: rowsDict.allStates }
            
}
export default function selectionSort(rowsDict){
    
   return sort(rowsDict)
}


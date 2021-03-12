import data from './data'
function rstArray(rowsDict){
  let tempArray = [...data.slice(0,rowsDict.arraySize)]
  // console.table(data)
    for(let i=0;i<tempArray.length;i++){
      tempArray[i]['value'] = Math.floor(Math.random() * 101 + 1)
      document.getElementById(i).style.boxShadow = ""
      tempArray[i]['css'] = 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    }

    if(rowsDict['tHandler']){
      clearInterval(rowsDict['tHandler'])
    }
    for(let i=0;i<tempArray.length;i++){
      for(let j=0;j<tempArray.length-1;j++){
          if(tempArray[j]['value']>tempArray[j+1]['value']){
            [tempArray[j],tempArray[j+1]] = [tempArray[j+1],tempArray[j]]
          }
      }
    }

    return {
      data:[...tempArray], 
      tHandler:0,  
      found:false,
      notfound: false,
      low:0,
      high: 9,
      toSearch: undefined,
      mid:-1,
      part:"none"
    }
  }

export default function resetArray(rowsDict){
    return rstArray(rowsDict)
    }
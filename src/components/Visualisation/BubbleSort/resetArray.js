import data from './data'
function rstArray(rowsDict){
  let tempArray = [...data]
  // console.table(data)
    for(let i=0;i<tempArray.length;i++){
      tempArray[i]['value'] = Math.floor(Math.random() * 101 + 1)
      document.getElementById(i).style.boxShadow = ""
      tempArray[i]['css'] = 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    }

    if(rowsDict['tHandler']){
      clearInterval(rowsDict['tHandler'])
    }

    return {data:[...tempArray], tHandler:0, isComparing: false, isSwapping:false, i:-1,j:-1, last_sorted:9,speed:rowsDict.speed, allStates: [], type: rowsDict.type}
}

export default function resetArray(rowsDict){
    return rstArray(rowsDict)
    }
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

    return {
      data:[...data], 
      tHandler:0, 
      found: false,
      notfound: false,
      curridx : -1,
      toSearch : undefined}
}

export default function resetArray(rowsDict){
    return rstArray(rowsDict)
    }
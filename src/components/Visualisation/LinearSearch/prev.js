export default function previousState(rowsDict){
    
    console.log(rowsDict.last_sorted,"::::")
    if(rowsDict.tHandler)
        clearInterval(rowsDict.tHandler)
    if(rowsDict.allStates.length>0){
        
        var arr = rowsDict.allStates
        var prevArr = arr.pop()
        
        console.table(prevArr.data)
        if( prevArr.i === -1 &&  prevArr.j === -1 && prevArr.last_sorted!==9){
            for(let i=0; i<=prevArr.last_sorted;i++){

                prevArr.data[i].css = 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
            }
        }
        console.log(prevArr.last_sorted, prevArr.j, prevArr.i)
        
        return prevArr
        
    }
}
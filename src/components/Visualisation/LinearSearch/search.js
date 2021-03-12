import data from "./data"

function linearsearch(rowsDict){
    let arr = [...rowsDict.data]
    if(rowsDict.notfound || rowsDict.found){
        clearInterval(rowsDict.tHandler)
        return {data:[...arr],tHandler: rowsDict.tHandler, found:false, notfound:false, curridx:-1}
    }
    let currI = 0
    if(rowsDict.curridx!==-1)
        currI = rowsDict.curridx
    
    console.log("currIdx", rowsDict.curridx,"cuuuuu",currI)
    for(let i=currI;i<arr.length;i++){
        
        if(arr[i]['value']===parseInt(rowsDict.toSearch)){
            arr[i].css =  'linear-gradient(135deg, #90ee90 0%, #90aa90 100%)'
            return {data:[...arr], tHandler: rowsDict.tHandler, found:true, notfound:false, curridx:rowsDict.curridx, toSearch: rowsDict.toSearch}
        }
        arr[i].css =  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        return {data:[...arr],tHandler: rowsDict.tHandler, found:false, notfound:false, curridx:rowsDict.curridx+1, toSearch: rowsDict.toSearch}
    }
    return {data:[...arr],tHandler: rowsDict.tHandler, found:false, notfound:true, curridx:-1, toSearch: rowsDict.toSearch}
    
}

export default function linearSearch(rowsDict){
    
   return linearsearch(rowsDict)
}


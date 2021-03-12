
function search(rowsDict){
    let arr = [...rowsDict.data]
    let l = rowsDict.low
    let h = rowsDict.high
    console.log(rowsDict.toSearch,"toSearch", l, h)
    if(h<l){
        console.log("h<l")
        document.getElementById("execText").innerHTML = "High became less than low, element not found"
        clearInterval(rowsDict.tHandler)
       
        return {data: [...arr],tHandler: 0, found: false, notfound:true, low: -1, high: -1, toSearch: rowsDict.toSearch, mid: -1, part:"nf" }
    }
    else if(rowsDict.found){
        document.getElementById("execText").innerHTML = "Found element at index "+rowsDict.mid
        console.log("Found")
        clearInterval(rowsDict.tHandler)
        return {data: [...arr],tHandler: 0, found: true, notfound:false, low: -1, high: -1, toSearch: rowsDict.toSearch, mid: rowsDict.mid, part:"f"}
    }
    else{
        console.log("calc m")
        let m = l + Math.floor((h-l)/2) 
        
        if(arr[m]['value'] === parseInt(rowsDict.toSearch)){
            console.log("Eq")
          
            document.getElementById("execText").innerHTML = "arr[mid] == "+rowsDict.toSearch
            return {data: [...arr],tHandler: rowsDict.tHandler, found: true, notfound:false, low: -1, high: -1, toSearch: rowsDict.toSearch, mid: m, part:"e" }
        }
        else if(arr[m]['value'] > parseInt(rowsDict.toSearch)){
            console.log("LT")
            document.getElementById("execText").innerHTML = "arr[mid] > "+rowsDict.toSearch
            return {data: [...arr], tHandler: rowsDict.tHandler, found: false, notfound:false, low: rowsDict.low, high: m-1, toSearch: rowsDict.toSearch, mid: undefined, part:"l"}
        }
        else if(arr[m]['value'] < parseInt(rowsDict.toSearch)){
            console.log("GT")
            document.getElementById("execText").innerHTML = "arr[mid] < "+rowsDict.toSearch
            return {data: [...arr], tHandler: rowsDict.tHandler, found: false, notfound:false, low: m+1, high: rowsDict.high, toSearch: rowsDict.toSearch, mid: undefined, part:"g"}
        }
        
    }

}

export default function binarySearch(rowsDict){
    
   return search(rowsDict)
}


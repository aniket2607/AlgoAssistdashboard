function split(rowdict, tempStack,stack_pop, currarray){
  let translateP = rowdict.translateParams
  // console.log("/////",tempStack)
  var diff = stack_pop[1] - stack_pop[0]
  var mid = Math.floor(diff / 2)
  stack_pop[2] = 1
  tempStack.push(stack_pop)
  let colour = rowdict.color
  translateP += 50
  colour[0] = (colour[0]+10)
  colour[1] = (colour[1]+10)
  colour[2] = (colour[2]+10)
  for(let x=stack_pop[0];x<=(stack_pop[0]+mid);x++){
    
    // console.log('translate3d('+(x+1)*100+'px,'+transl/ateP+'px,0px)')
    currarray[x]['css'] = 'linear-gradient(100deg, rgb('+colour[0]+','+colour[1]+','+colour[2]+') 0%,'+'rgb('+colour[0]+','+colour[1]+','+colour[2]+')'+'100%)'
    document.getElementById(x).style.transform = 'translate('+(x+1)*100+'px,'+translateP+'px)'
  }
  translateP -= 25
  // colour[0] = (colour[0]+10) //b
  // colour[1] = (colour[1]+10) //r
  // colour[2] = (colour[2]+10) //g
  for(let y=(stack_pop[0]+mid+1);y<=stack_pop[1];y++){
    
    
    currarray[y]['css'] = 'linear-gradient(100deg, rgb('+colour[2]+','+colour[0]+','+colour[1]+') 0%,'+'rgb('+colour[0]+','+colour[2]+','+colour[1]+')'+'80%)'
    document.getElementById(y).style.transform = 'translate('+(y+1)*100+'px,'+translateP+'px)'
  }
  if(stack_pop[1] === (stack_pop[0]+mid+1)){
    tempStack.push([stack_pop[1],stack_pop[1],1])
  }
  else{
    tempStack.push([stack_pop[0]+mid+1,stack_pop[1],0])
  }
  if(stack_pop[0] === stack_pop[0]+mid){
    tempStack.push([stack_pop[0],stack_pop[0],1])
  }
  else{
    tempStack.push([stack_pop[0],stack_pop[0]+mid,0])
  }
  // }
  
  return {data:[...currarray], tHandler: rowdict.tHandler,stack: tempStack, translateParams: translateP, color: colour}
}

function sort(rowdict,currarray,stidx,eidx,tempStack){
  let tcurrArray = JSON.parse(JSON.stringify(currarray))
        let i = stidx
        let k = stidx
        let mididx = stidx + Math.floor((eidx-stidx)/2)
        let j = mididx+1
        console.log("iii",i,j,k, eidx)
        while(i<=mididx && j<=eidx){
          if(tcurrArray[i]['value']<tcurrArray[j]['value']){
            
            currarray[k] = tcurrArray[i]
            console.log("if:::::","i::",i,"k::",k)
            // document.getElementById(i).style.transform = 'translate('+(k+1)*100+'px,0px)'
            k+=1;
            i+=1
          }
          else{
            currarray[k] = tcurrArray[j]
            console.log("else::","j::",j,"k::",k)
            // document.getElementById(j).style.transform = 'translate('+(k+1)*100+'px,0px)'
            k++
            j++
          }
        }
        while(i<=mididx){
          currarray[k] = tcurrArray[i]
          console.log("while","i",i)
          // document.getElementById(i).style.transform = 'translate('+(k+1)*100+'px,0px)'
          i++
          k++
        }
        while(j<=eidx){
          currarray[k] = tcurrArray[j]
          console.log("while","j",j)
          // document.getElementById(j).style.transform = 'translate('+(k+1)*100+'px,0px)' 
          j++
          k++
    }
  return {data: [...currarray], tHandler: rowdict.tHandler, stack: tempStack, translateParams: rowdict.translateParams, color:rowdict.color}
}

function mergesort(rowsDict){
  let rowdict = JSON.parse(JSON.stringify(rowsDict))
  let currarray = [...rowdict.data]
  // console.log("Trans", rowsDict.translateParams)
  let sizeofPartitions = rowsDict.sizeofPartitions+1 //initial will be 1 change color of every card
  // var tempStack = rowsDict.stack.pop
  let tempStack = [...rowdict.stack]
  if(tempStack.length===0){
    clearInterval(rowdict.tHandler)
    return {data: rowdict.data}
  }
  // console.log(";;;;",tempStack)
  if(!tempStack[tempStack.length-1][2]){

    let stack_pop = tempStack.pop()
    // console.log(stack_pop,"stpop")
    // console.log("tStack",)
    if(!stack_pop[2] ){
      return split(rowdict,tempStack,stack_pop, currarray)
    }
    
  }
  else{
    let stack_pop1 = []
    
    if(tempStack[tempStack.length-1][2]){
      stack_pop1 = tempStack.pop()
    }
  
    // console.table(stack_pop1)
  
    let stidx= stack_pop1[0]
    let eidx= stack_pop1[1]
    // let mididx= Math.ceil(stidx + (eidx-stidx)/2)
    // console.log("i",i,"j",j)
    for(let x=stidx;x<=eidx;x++){
      
        currarray[x].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        // currarray[x+1].css = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      }
    return sort(rowdict,currarray,stidx,eidx,tempStack)
  }


  

  

  clearInterval(rowsDict.tHandler)
  return {data:rowsDict.data, tHandler:0 ,stack: tempStack}
  
}


export default function MergeSort(rowsDict){
  return mergesort(rowsDict)
}
export function checkIfNodeExists(schema){
    for(let i=0;i<schema.nodes.length;i++){
        if(parseInt(schema.myattri.element) === parseInt(schema.nodes[i].content)){
            return i
        }
    }
    return -1
}

export function checkPresencenode(nodeId, schema){
    for(let i=0;i<schema.nodes.length;i++){
        // console.log(nodeId,typeof(nodeId),schema.nodes[i].nodeId)
        if(nodeId === parseInt(schema.nodes[i].id)){
            return i
        }
   
    }
    return -1
}
export function checkPresencelink(linkId, schema){
    for(let i=0;i<schema.links.length;i++){
    
        if(linkId === parseInt(schema.links[i].id)){
            return i
        }
   
    }
    return -1
}



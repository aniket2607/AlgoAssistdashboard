import {checkPresencelink, checkPresencenode} from './helper'

export default function bstsearch(schema){
    schema.myattri.operationType = "ser"
    let elementtoSearch = schema.myattri.element
    let curr_node = schema.myattri.currNode
    let prev_node = schema.myattri.prevNode
    let curr_link = schema.myattri.currLink
    let prev_link = schema.myattri.prevLink

    if(schema.myattri.notfound){
        clearInterval(schema.myattri.tHandler)
        schema.myattri.tHandler = 0
        schema.myattri.ltgt = undefined
        return schema;
    }
    else if(schema.myattri.found){
        schema.myattri.found = true
        clearInterval(schema.myattri.tHandler)
        schema.myattri.tHandler = 0
        schema.myattri.ltgt = undefined
        return schema
    }
    else{
        schema.myattri.prevNode = curr_node
        schema.links[schema.myattri.currLink].className = ""
        if(!schema.myattri.nodelink){
            //node highlight and manipulations
            schema.nodes[schema.myattri.prevNode].className = ""
            if(elementtoSearch === parseInt(schema.nodes[curr_node].content)){
                schema.myattri.ltgt = "e"
                schema.myattri.found = true
                schema.nodes[curr_node].className = "nodehighlightfound"
                return schema
            }
            else if(elementtoSearch < parseInt(schema.nodes[curr_node].content)){
                schema.nodes[curr_node].className = "nodehighlight"
                let id = checkPresencenode(curr_node*2+1,schema)
                if(id>=0){
                    schema.myattri.ltgt = "l"
                    
                    schema.myattri.currNode = id
                    schema.myattri.nodelink = 1
                    return schema
                }
                schema.myattri.notfound = true
                schema.myattri.ltgt = undefined
                return schema
            }
            else{
                schema.nodes[curr_node].className = "nodehighlight"
                let id = checkPresencenode(curr_node*2+2,schema)
                if(id>=0){
                    schema.myattri.ltgt = "g"
                    schema.myattri.currNode = id
                    schema.myattri.nodelink = 1
                    return schema
                }
                schema.myattri.ltgt = undefined
                schema.myattri.notfound = true
                return schema
            }
        }
        else{
            //link highlight and manipulations
            schema.nodes[prev_node].className = ""
            // prev_link = curr_link
            // schema.myattri.prevLink = prev_node*2
            
            if(elementtoSearch < parseInt(schema.nodes[prev_node].content)){
                let id = checkPresencelink(prev_node*2,schema)
                // console.log("Less",id)
                if(id>=0){
                    schema.myattri.ltgt = 'lc'
                    schema.myattri.currLink = id
                    schema.links[id].className = "activateLink"
                    schema.myattri.nodelink = 0
                    return schema
                }
                schema.myattri.ltgt = undefined
                schema.myattri.notfound = true
                return schema
            }
            else if(elementtoSearch > parseInt(schema.nodes[prev_node].content)){
                let id = checkPresencelink(prev_node*2+1,schema)
                // console.log("More",id)
                if(id>=0){
                    schema.myattri.ltgt = 'rc'
                    schema.myattri.currLink = id
                    schema.links[id].className = "activateLink"
                    schema.myattri.nodelink = 0
                    return schema
                }
                schema.myattri.ltgt = undefined
                schema.myattri.notfound = true
                return schema
                
            }
            else{
                schema.myattri.prevLink = curr_link
                schema.links[curr_link].className = ""
                schema.myattri.nodelink = 0
                return schema
            }
        }
        

    }

         
}
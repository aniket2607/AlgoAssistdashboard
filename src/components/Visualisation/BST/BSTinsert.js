import { checkIfNodeExists, checkPresencenode, checkPresencelink } from './helper'


export default function bstinsert(schema){
    schema.myattri.operationType = "ins"
     // console.log(document.getElementById('canvas').style.width)
    if(checkIfNodeExists(schema)>-1 && schema.myattri.currNode===-1){
        console.log("BST cannot have duplicate nodes")
        clearInterval(schema.myattri.tHandler)
        schema.myattri.tHandler = 0
        return schema
    }
    let elementtoInsert = schema.myattri.element
    let curr_node = schema.myattri.currNode
    let prev_node = schema.myattri.prevNode
    schema.myattri.prevNode = curr_node
    schema.links[schema.myattri.currLink].className = ""
    if(!schema.myattri.nodelink){
        //node highlight and manipulations
        schema.nodes[schema.myattri.prevNode].className = ""
        if(elementtoInsert < parseInt(schema.nodes[curr_node].content)){
            schema.nodes[curr_node].className = "nodehighlight"
            let id = checkPresencenode(curr_node*2+1,schema)
            if(id>=0){
                schema.myattri.ltgt = "l"
                schema.myattri.currNode = id
                schema.myattri.nodelink = 1
                console.log("insssss",schema.myattri.prevNode,"   ", schema.myattri.currNode)
                return schema
            }
            else{
                //new node will inserted with id
                let cuurnode_coor = schema.nodes[curr_node].coordinates
                let new_node_coor = [cuurnode_coor[0]-75, cuurnode_coor[1]+75]
                let newId = (curr_node*2+1).toString()
                console.log(newId,"newID")
                let newNode = { id: newId, content: (elementtoInsert).toString(), coordinates: new_node_coor,className:"newNode"}
                schema.nodes.push(newNode)
                schema.myattri.nodelink = 1
                schema.myattri.prevNode = curr_node
                console.log("is ithis one",schema)
                schema.myattri.currNode = checkPresencenode(curr_node*2+1,schema)
                return schema
            }
        }
        else{
            schema.nodes[curr_node].className = "nodehighlight"
            let id = checkPresencenode(curr_node*2+2,schema)
            if(id>=0){
                schema.myattri.ltgt = "g"
                schema.myattri.currNode = id
                schema.myattri.nodelink = 1
                console.log("inssss",schema.myattri.prevNode,"   ", schema.myattri.currNode)
                return schema
            } 
            else{
                //new node will inserted with id
                let cuurnode_coor = schema.nodes[curr_node].coordinates
                let new_node_coor = [cuurnode_coor[0]+75, cuurnode_coor[1]+75]
                let newId = (curr_node*2+2).toString()
                schema.myattri.prevNode = curr_node
                console.log(newId,"newID")
                let newNode = { id: newId, content: (elementtoInsert).toString(), coordinates: new_node_coor,className:"newNode"}
                schema.nodes.push(newNode)
                schema.myattri.currNode = checkPresencenode(curr_node*2+2,schema)
                console.log("Or this one",schema)
                schema.myattri.nodelink = 1
                
                return schema
            }

        }
    }
    else{
        //link highlight and manipulations
        schema.nodes[prev_node].className = ""
        // prev_link = curr_link
        // schema.myattri.prevLink = prev_node*2
        console.log(prev_node,"prevnodelogg")
        if(elementtoInsert < parseInt(schema.nodes[prev_node].content)){
            let id = checkPresencelink(prev_node*2,schema)
            // console.log("Less",id)
            if(id>=0){
                schema.myattri.ltgt = 'lc'
                schema.myattri.currLink = id
                schema.links[id].className = "activateLink"
                schema.myattri.nodelink = 0
                return schema
            }
            else{
                let newlinkId = (prev_node*2).toString()
                console.log("Is newlink being pushed??")
                let newLink = { id:newlinkId,input: (schema.nodes[prev_node].id),  output: schema.nodes[curr_node].id, readonly: false, className:"" }
                clearInterval(schema.myattri.tHandler)
                schema.myattri.tHandler = 0
                schema.myattri.prevNode = 0
                schema.myattri.currNode = 0
                schema.myattri.currLink = 0
                schema.myattri.prevLink = 0
                schema.myattri.nodelink = 0
                schema.links.push(newLink)
                return schema
            }
        }
        else if(elementtoInsert > parseInt(schema.nodes[prev_node].content)){
            let id = checkPresencelink(prev_node*2+1,schema)
            // console.log("More",id)
            if(id>=0){
                schema.myattri.ltgt = 'rc'
                schema.myattri.currLink = id
                schema.links[id].className = "activateLink"
                schema.myattri.nodelink = 0
                return schema
            }
            else{
                console.log(":::::",prev_node, curr_node)
                let newlinkId = (prev_node*2+1).toString()
                let newLink = { id:newlinkId,input: schema.nodes[prev_node].id,  output: schema.nodes[curr_node].id, readonly: false, className:"" }
                clearInterval(schema.myattri.tHandler)
                schema.myattri.tHandler = 0
                schema.myattri.prevNode = 0
                schema.myattri.currNode = 0
                schema.myattri.currLink = 0
                schema.myattri.prevLink = 0
                schema.myattri.nodelink = 0
                schema.links.push(newLink)
                return schema
            }

            
        }
       
    }
}
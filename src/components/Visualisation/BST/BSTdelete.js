import {checkIfNodeExists, checkPresencelink, checkPresencenode} from './helper'
export default function bstdelete(schema){
    console.log("BST Delete")
    if(schema.myattri.prevNode === -1){
        let nodeIdx = checkIfNodeExists(schema)
        if(nodeIdx<0 && schema.myattri.currNode===-1){
            clearInterval(schema.myattri.tHandler)
            schema.clearInterval.tHandler = 0
            return schema
        }
        
        schema.myattri.prevNode = parseInt(schema.nodes[nodeIdx].id )
        schema.nodes[nodeIdx].className = "nodehighlight"
        console.log("Node num to be deleted (12)",schema.myattri.prevNode)
    }
    
    //delete the largest in left subtree or smallest in right subtree.
    if(schema.myattri.currNode ===-1){
        let idl = checkPresencenode(schema.myattri.prevNode*2+1, schema)
        let idr = checkPresencenode(schema.myattri.prevNode*2+2, schema)
        if(idl>-1){
            schema.nodes[idl].className = "nodehighlight"
            //left subtree is present
            schema.myattri.nodelink = idl
            console.log("Left Sub tree present")
            schema.myattri.currNode = schema.myattri.prevNode*2+1 
            schema.myattri.subtree = -1
            return schema
        }
        else if(idr>-1){
            schema.nodes[idr].className = "nodehighlight"
            schema.myattri.nodelink = idr
            //right subtree is present
            console.log("Right Sub tree present")
            schema.myattri.currNode = schema.myattri.prevNode*2+2 
            schema.myattri.subtree = 1
            return schema
            
        }
        else{
            //this is leaf node
            schema.myattri.currNode = schema.myattri.prevNode
            schema.myattri.subtree = 0
            return schema
            
        }
        
    }
    else{
        if(schema.myattri.subtree===-1){
            console.log("Left subtree operation init")
            schema.nodes[schema.myattri.nodelink].className = ""
            let nodeid = (schema.myattri.currNode)*2+2
            let id = checkPresencenode(nodeid,schema)
            console.log("nodeid with",nodeid,"is",id)
            if(id>-1){
                schema.myattri.currNode = nodeid
                schema.nodes[id].className = "nodehighlight"
                schema.myattri.nodelink = id
                console.log("currrrnode val",schema.myattri.currNode)
                return schema
            }
            else{
                console.log("Largest ele in leftsubtree:",schema.myattri.currNode)
                //replace the content of node to be deleted with this node's content.
                let idx_prev = checkPresencenode(schema.myattri.prevNode,schema)
                console.log("idx_prev",idx_prev)
                let idx_curr = checkPresencenode(schema.myattri.currNode,schema)
                console.log("idx_curr",idx_curr, typeof(schema.myattri.currNode))
                schema.nodes[idx_curr].className = "nodehighlight"
                schema.myattri.nodelink = idx_curr
                // clearInterval(schema.myattri.tHandler)
                schema.nodes[idx_prev].content = (schema.nodes[idx_curr].content).toString()
                if(checkPresencenode((schema.myattri.currNode)*2+1,schema)>-1){
                    schema.myattri.prevNode = schema.myattri.currNode
                    schema.myattri.currNode = -1    
                    return schema   
                }
                else{
                    let linkId = checkPresencelink(schema.myattri.currNode-1,schema)
                    schema.links.splice(linkId,1)
                    schema.nodes.splice(idx_curr,1)
                    clearInterval(schema.myattri.tHandler)
                    return schema
                }       
            }
        }
        else if(schema.myattri.subtree===1){
            console.log("In right subtree operation")
            let nodeid = (schema.myattri.currNode)*2+1
            let id = checkPresencenode(nodeid,schema)
            console.log("Left subtree?",nodeid,"is",id)
            if(id>-1){
                schema.myattri.currNode = nodeid
                return schema
            }
            else{
                console.log("small ele in rightsubtree:",schema.myattri.currNode)
                //replace the content of node to be deleted with this node's content.
                let idx_prev = checkPresencenode(schema.myattri.prevNode,schema)
                console.log("idx_prev",idx_prev, schema.myattri.prevNode)
                let idx_curr = checkPresencenode(schema.myattri.currNode,schema)
                console.log("idx_curr",idx_curr)
                schema.nodes[idx_prev].content = (schema.nodes[idx_curr].content).toString()
                console.log(schema.nodes)
               
                if(checkPresencenode((schema.myattri.currNode)*2+1,schema)>-1){
                    schema.myattri.prevNode = schema.myattri.currNode
                    schema.myattri.currNode = -1
                    return schema
                    
                }
                else{
                    let linkId = checkPresencelink(schema.myattri.currNode-1,schema)
                    console.log("Link to be released",linkId)
                    schema.links.splice(linkId,1)
                    schema.nodes.splice(idx_curr,1)
                    clearInterval(schema.myattri.tHandler)
                    return schema
                }
                
                
            }
            
        }
        else{
            let idx_curr = checkPresencenode(schema.myattri.currNode,schema)
            //else element to be deleted is the leaf node
            let linkId = checkPresencelink(schema.myattri.currNode-1,schema)
            schema.links.splice(linkId,1)
            schema.nodes.splice(idx_curr,1)
            clearInterval(schema.myattri.tHandler)
            return schema
        }
    }

        
        
    
}
import Diagram,{ useSchema, createSchema } from 'beautiful-react-diagrams';
import bstsearch from './BSTsearch'
import bstinsert from './BSTinsert'
import bstdelete from './BSTdelete'
// import 'beautiful-react-diagrams/styles.css';
import './BST.css'
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));


 
    const initialSchema = createSchema({
        nodes: [
            { id: '0', content: '60', coordinates: [565, 20],className:"node1"},
            { id: '1', content: '45', coordinates: [350, 100], className:"node2"},
            { id: '2', content: '75', coordinates: [780, 100], className:"node3"},
            { id: '3', content: '34', coordinates: [240, 200], className:"node4"},
            { id: '4', content: '51', coordinates: [460, 200], className:"node5"},
            { id: '5', content: '70', coordinates: [670, 200], className:"node6"},
            { id: '6', content: '84', coordinates: [890, 200], className:"node7"},
            { id: '7', content: '27', coordinates: [190, 300], className:"node7"},
            { id: '8', content: '41', coordinates: [290, 300], className:"node7"},
            { id: '9', content: '47', coordinates: [400, 300], className:"node7"},
            { id: '10', content: '59', coordinates: [520, 300], className:"node7"},
            { id: '12', content: '74', coordinates: [730, 300], className:"node7"},
        ],
        links: [
            { id:"0",input: '0',  output: '1', readonly: false,className:"link1" },
            { id:"1",input: '0',  output: '2', readonly: false, className:"link2" },
            { id:"2",input: '1',  output: '3', readonly: false, className:"link3" },
            { id:"3",input: '1',  output: '4', readonly: false, className:"link4" },
            { id:"4",input: '2',  output: '5', readonly: false, className:"link5" },
            { id:"5",input: '2',  output: '6', readonly: false, className:"link6" },
            { id:"6",input: '3',  output: '7', readonly: false, className:"link7" },
            { id:"7",input: '3',  output: '8', readonly: false, className:"link6" },
            { id:"8",input: '4',  output: '9', readonly: false, className:"link6" },
            { id:"9",input: '4',  output: '10', readonly: false, className:"link6" },
            { id:"11",input: '5',  output: '12', readonly: false, className:"link6" },
        ],
        myattri:{
            operationType : undefined,
            element: undefined,
            tHandler: 0,
            prevNode: -1,
            currNode: -1,
            prevLink: 0,
            currLink: 0,
            nodelink: 0,
            subtree: 0,
            found: false,
            notfound: false,
            ltgt: undefined,
            errors: undefined
        }
    });
    
    const UncontrolledDiagram = () => {
        // create diagrams schema
        const [schema, { onChange }] = useSchema(initialSchema);
        
    //    console.log("thand",schema.myattri.tHandler)
        
        const startVisual=()=>{
            if(schema.myattri.currNode>-1){
                schema.nodes[schema.myattri.currNode].className = ""}
            schema.myattri.found = false; schema.myattri.currLink = 0; schema.myattri.currNode=0
            schema.myattri.notfound = false; schema.myattri.prevLink=0; schema.myattri.prevNode=0
            const timeoutHandler = setInterval(()=> onChange(bstsearch(schema)),1000)
            schema.myattri.tHandler = timeoutHandler
            // console.log(schema.links)
        }
        const startInsertVisual=()=>{
            if(schema.myattri.currNode>-1){
                schema.nodes[schema.myattri.currNode].className = ""}
            schema.myattri.found = false; schema.myattri.currLink = 0; schema.myattri.currNode=0
            schema.myattri.notfound = false; schema.myattri.prevLink=0; schema.myattri.prevNode=0
            const timeoutHandler = setInterval(()=> onChange(bstinsert(schema)),1000)
            schema.myattri.tHandler = timeoutHandler
        }
        const startDelVisual=()=>{
            if(schema.myattri.currNode>-1){
            schema.nodes[schema.myattri.currNode].className = ""}
            schema.myattri.found = false; schema.myattri.currLink = 0; schema.myattri.currNode=-1
            schema.myattri.notfound = false; schema.myattri.prevLink=0; schema.myattri.prevNode=-1
            const timeoutHandler = setInterval(()=> onChange(bstdelete(schema)),1000)
            schema.myattri.tHandler = timeoutHandler
        }
        // console.log(schema.nodes)
        const setElementValue=()=>{
            schema.myattri.element = parseInt(document.getElementById("element").value )
        }

      const [checked, setChecked] = React.useState(false);
    
      const handleChangeSwitch = () => {
        setChecked((prev) => !prev);
      };

        const classes = useStyles();
        const theme = useTheme();
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        const handleChangeIndex = (index) => {
            setValue(index);
        };
        return (
            <div>
                <div>
                    <div style={{ height: "500px", width: '1152px' ,overflow:'auto' }} id="canvas">
                        <Diagram schema={schema} onChange={onChange} />
                    </div>
                </div>
                <div style={{lineheight:"500px"}} >
                <input placeholder="Input element" onChange={setElementValue} id="element"></input>
                        <button onClick={startVisual}>Search</button>
                        <button onClick={startInsertVisual}>Insert</button>
                        <button onClick={startDelVisual}>Delete</button>
               </div>

               <div className="accord1">
      <div className={classes.container}>
      <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
          <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Search" {...a11yProps(0)} />
          <Tab label="Insert" {...a11yProps(1)} />
          <Tab label="Delete" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <ul>
                            <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ser"? '':"hidden"}`}>
                                <li>while root != null</li>
                            </div>
                                <div  className={`tracer${schema.myattri.ltgt ==='l'  && schema.myattri.operationType==="ser"? '':"hidden"}`}>
                                <li>&emsp;if elementtoSearch &lt; root.val</li>
                                </div>
                                    <div  className={`tracer${schema.myattri.nodelink && schema.myattri.ltgt === 'l'  && schema.myattri.operationType==="ser"? '':"hidden"}`}>
                                    <li>&emsp;&emsp;root = root.left</li>
                                    </div>
                                <div  className={`tracer${schema.myattri.ltgt === 'g'  && schema.myattri.operationType==="ser"? '':"hidden"}`}>
                                <li>&emsp;if elementtoSearch &gt; root.val</li>
                                </div>
                                    <div  className={`tracer${schema.myattri.nodelink && schema.myattri.ltgt === 'g'  && schema.myattri.operationType==="ser"? '':"hidden"}`}>
                                    <li>&emsp;&emsp;root = root.right</li>
                                    </div>
                                <div  className={`tracer${schema.myattri.found  && schema.myattri.operationType==="ser"? '':"hidden"}`}>
                                <li>&emsp;return found</li>
                                </div>
                            <div  className={`tracer${schema.myattri.notfound && schema.myattri.operationType==="ser" ? '':"hidden"}`}>
                            <li>return notfound</li>
                            </div>
                        </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ul>
                        
                        <li>cur = root</li>
                        <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ins"? '':"hidden"}`}>
                        <li>while(cur)</li>
                        </div>
                        <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ins"? '':"hidden"}`}>
                        <li>&emsp;&emsp;if elementToInsert &lt; cur.data</li>
                        </div>
                        <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ins"? '':"hidden"}`}>
                        <li>&emsp;&emsp;&emsp;&emsp;cur = cur.left</li>
                        </div>
                        <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ins"? '':"hidden"}`}>
                        <li>&emsp;&emsp;else if elementToInsert &gt; cur.data</li>
                        </div>
                        <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ins"? '':"hidden"}`}>
                        <li>&emsp;&emsp;&emsp;&emsp;cur = cur.right</li>
                        </div>
                        <div className={`tracer${schema.myattri.tHandler>0 && schema.myattri.operationType==="ins"? '':"hidden"}`}>
                        <li>&emsp;&emsp;else</li>
                        <li>&emsp;&emsp;&emsp;&emsp;return "duplicate entry not allowed"</li>
                        </div>

                        <li>&emsp;&emsp;newnode = new TreeNode(elementToInsert)</li>
                        <li>&emsp;&emsp;if(root)</li>
                        <li>&emsp;&emsp;&emsp;&emsp;if elementToInsert&lt;curr</li>
                        <li>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cur.left = newnode</li>
                        <li>&emsp;&emsp;&emsp;&emsp;else</li>
                        <li>&emsp;&emsp;else</li>
                        <li>&emsp;&emsp;&emsp;&emsp;root = newnode</li>

                    </ul>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
      </Paper>
        </Fade>
    </div>
    <FormControlLabel
        control={<Switch checked={checked} onChange={handleChangeSwitch} />}
        label="Code Trace"
      />
      
    </div>

            </div>
  );
};




export default UncontrolledDiagram;
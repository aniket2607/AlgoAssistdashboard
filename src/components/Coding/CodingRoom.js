import React, { Fragment, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SyntaxEditor from "./CodingEditor";


const CodingRoom = (props) => {
 
  return (
        <Fragment>
          <div
            style={{
              backgroundColor: "#F3F7F7",
              fontFamily: "poppins",
              padding: "50px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                <SyntaxEditor />
              </Grid>
              </Grid>
          </div>
        </Fragment>
      
  );
};

export default CodingRoom;
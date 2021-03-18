import React from 'react'
import { BoxesLoader } from "react-awesome-loaders";

const Loader = () => {
    return (
        <div style={{display:"flex", justifyContent:"center",height:"100vh",alignItems:"center"}}>
            <BoxesLoader
              boxColor={"#2E186A"}
              style={{ marginBottom: "20px" }}
              desktopSize={"128px"}
              mobileSize={"80px"}
            />
          </div>
    )
}

export default Loader
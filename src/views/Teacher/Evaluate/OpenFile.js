import React, { useState } from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 
  
//PDFjs worker from an external cdn 
const url =  "http://www.fao.org/3/i9183en/i9183en.pdf";
//const URl = "E:/FInal\Year\Project/Project/FrontEnd/NewDashboard/AlgoAssistdashboard/src/views/Teacher/Evaluate/FebAttendance.pdf";

export default function OpenFile() { 
      
  return ( 
    <> 
    <div className="main"> 
        <object width="100%" height="800" data={url} type="application/pdf">   </object>
     </div> 
    </> 
  ); 
}
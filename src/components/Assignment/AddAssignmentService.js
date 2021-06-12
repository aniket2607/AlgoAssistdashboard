import axios from 'axios';


export function addAssignment(data) {
    console.log("Inside API")
    console.log(data)
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+localStorage.getItem("Token")
      },
    };
    console.log("bshbc Token")
    console.log(localStorage.getItem("Token"))
    // Request Body
    const body = JSON.stringify( data );
    console.log("####body")
    console.log(body)
    var bodyFormData = new FormData();
    bodyFormData.append("title",data.title)
    bodyFormData.append("description",data.description)
    bodyFormData.append("_class",data._class)
    bodyFormData.append("duedate",data.duedate)
    console.log("bodyFormData****************")
    console.log(bodyFormData)
    return axios.post('http://127.0.0.1:8000/api/assignment/create/', data, config).then(response => response)
          
  }

  export function getClassId(name){
    console.log("Inside getClassId API")
    console.log(name)
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+localStorage.getItem("Token")
        },
      };
      const body = JSON.stringify(name)
    return axios.post('http://127.0.0.1:8000/api/class/get/',name,config).then(response => response)
}


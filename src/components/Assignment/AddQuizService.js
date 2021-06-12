import axios from 'axios';


export function addQuiz(data) {
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
    
    return axios.post('http://127.0.0.1:8000/api/quiz/create', data, config).then(response => response)
          
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


import axios from 'axios'

export function getAssignmentList(){
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+localStorage.getItem("Token")
        },
      };
    return axios.get('http://127.0.0.1:8000/api/assignment/get/',config).then(response => response)
}

export function getQuizList(){
  const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+localStorage.getItem("Token")
      },
    };
  return axios.get('http://127.0.0.1:8000/api/quiz/viewall/',config).then(response => response)
}


export default getAssignmentList;
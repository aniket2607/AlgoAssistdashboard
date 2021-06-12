import axios from 'axios'

export function getUserProfile(){
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+localStorage.getItem("Token")
        },
      };
      console.log("bshbc Token")
    console.log(localStorage.getItem("Token"))
    return axios.get('http://127.0.0.1:8000/api/account/profile',config).then(response => response)
}

export function updateUserProfile(data){
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+localStorage.getItem("Token")
        },
      };
    const body = JSON.stringify(data)
    return axios.put('http://127.0.0.1:8000/api/account/profile/update',body,config).then(response => response)
    
}

export default getUserProfile
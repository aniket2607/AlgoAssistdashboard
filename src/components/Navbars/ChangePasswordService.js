import axios from 'axios'

export function changePassword(data){
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+localStorage.getItem("Token")
        },
      };
    const body = JSON.stringify(data)
    return axios.put('http://127.0.0.1:8000/api/account/change_password',body,config).then(response => response)
}

export default changePassword;
import axios from 'axios'

export default function axios_request(creds){
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    console.log("In axios",creds)
    const body = JSON.stringify( creds );
    return axios.post('http://127.0.0.1:8000/api/account/login',body,config).then(response => response)
}
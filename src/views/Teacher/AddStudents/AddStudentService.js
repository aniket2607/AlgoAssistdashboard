import React from 'react'
import axios, { post } from 'axios';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'http://127.0.0.1:8000/api/uploadFile/upload/';
    const formData = new FormData();
    formData.append('File',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization': 'Token '+localStorage.getItem("Token")
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <div>
        <FormLabel component="legend" style={{paddingLeft:"15px",marginTop: 13,marginBottom: 8}}>Upload .xlsx file :</FormLabel>
        <Button variant="contained"component="label"  style={{left:"15px"}}>
                          <input variant="outlined" type="file" onChange={this.onChange} />
                        </Button>
        {/* <button type="submit">Upload</button> */}
        </div>
        <Button  type="submit" variant="contained" color="secondary" style={{marginTop: 18,marginBottom: 8,left:'40%'}}>
        Add Students
      </Button>
      </form>
   )
  }
}



export default FileUpload
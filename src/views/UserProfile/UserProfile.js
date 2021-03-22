import React,{ useState,useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { getUserProfile, updateUserProfile } from './UserProfileService'
import avatar from "assets/img/faces/marc.jpg";
import { Redirect } from 'react-router-dom'
import { useFormik } from 'formik';
import { render } from "@testing-library/react";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [isChanged, setisChanged] = useState(0)
  const [data, setData] = useState({})
  const [redirect, setRedirect] = useState("")
  
  useEffect(() => {
    getUserProfile().then(result =>{
      setData(result.data)
    }).catch(error=>{
      if(error.request.status === 0){
        localStorage.clear()
        
        setRedirect('/login')
      }
      else if(error.response.status === 401){
        localStorage.clear()
        setRedirect('/login')
      }
    })
    
  }, [isChanged])
  const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
      rollno: '',
      prn:'',
      email: '',
      aboutme: ''
		},
		onSubmit: (values) => {
      console.log("test")
      updateUserProfile({
        firstname: values.firstname,
        lastname: values.lastname,
        rollno: values.rollno,
        prn:values.prn,
        email: values.email,
        aboutme: values.aboutme
      }).then(result=>{
          setData(result.data)
          setisChanged(!isChanged)          
      }).catch(function (error){
        if(error.request.status === 0){
          localStorage.clear()
          setRedirect('/login')
        }
        if(error.response.status === 400){
          //todo notify with errors from json
          localStorage.clear()
          setRedirect('/student/user')
        }
        if(error.response.status === 401){
          localStorage.clear()
          setRedirect('/login')
        }
      })

    }
  });
  if(redirect.length>0){
    return(
      <Redirect from="/student/user" to="/login" />
    )
  }
  else{
    render()
    {
      return (
        <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={5}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{data.firstname} {data.lastname}</h6>
              <h4 className={classes.cardTitle} >{data.classdiv}</h4>
              <h4 className={classes.cardTitle}>{data.prn}</h4>
              <h4 className={classes.cardTitle}>{data.email}</h4>
              <p className={classes.description}>{data.aboutme}</p>
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={7}>
          <form className={classes.form} onSubmit={()=>formik.handleSubmit}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
            </CardHeader>
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="firstname"
                    defaultValue={data.firstname}
                    onChange = {formik.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="lastname"
                    defaultValue={data.lastname}
                    onChange = {formik.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Roll No"
                    id="rollno"
                    defaultValue={data.rollno}
                    onChange = {formik.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="PRN"
                    id="prn"
                    defaultValue={data.prn}
                    onChange = {formik.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    defaultValue={data.email}
                    onChange = {formik.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    />
                </GridItem>
              </GridContainer>
              
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="About Me"
                    id="aboutme"
                    // defaultValue={data.aboutme}
                    onChange = {formik.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      
                    }}
                    />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
            <Button 
              classes = {classes.submit}
              onClick = {formik.handleSubmit}
              color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
          </form>
        </GridItem>
        
      </GridContainer>
    </div>
    );
  }
  }
}

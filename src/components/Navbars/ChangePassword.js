import React,{useRef, useEffect, useCallback, useState} from 'react';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import changePassword from './ChangePasswordService'
import { useFormik } from 'formik'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    minWidth: 650,
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const ChangePassword = ({openChangePassword, setChangePasswordOpen}) =>{
  const classes = useStyles();
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: openChangePassword ? 1 : 0,
    transform: openChangePassword ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
        setChangePasswordOpen(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && openChangePassword) {
        setChangePasswordOpen(false);
        console.log('I pressed');
      }
    },
    [setChangePasswordOpen, openChangePassword]
  );
  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  const [redirect, setredirect] = useState("")
  const formik = useFormik({
		initialValues: {
			oldpass: '',
			newpass: '',
      confirmnewpass: '',
		},
		onSubmit: (values) => {
      changePassword({
        old_password: values.old_password,
        new_password: values.new_password,
        confirm_new_password: values.confirm_new_password
      }).then(result=>{
        localStorage.clear()
        setredirect('/login')
      }).catch(function (error){
        if(error.request.status === 0){
          localStorage.clear()
          setredirect('/login')
        }
        if(error.response.status === 400){
          //todo notify with errors from json
          setredirect('/student/user')
        }
        
      })

    }
  });
  if(redirect.length>0){
    return(
    <Redirect from='./' to='/login'></Redirect>
    );
  }
  else{
    return (
      <>
    {openChangePassword ? (
      <div>
      <Modal
        aria-labelledby="transition-modal-title"        
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open = {openChangePassword}
        onClose = {() => setChangePasswordOpen(prev => !prev)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <animated.div style = {animation}>
        <Fade in = {openChangePassword}>
        
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Old Password"
            type="password"
            id="old_password"
            onChange={formik.handleChange}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="New Password"
            type="password"
            id="new_password"
            onChange={formik.handleChange}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            id="confirm_new_password"
            onChange={formik.handleChange}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {formik.handleSubmit}
            >
            Change Password
          </Button>
        </form>
      </div>
      
    </Container>
        </Fade>
        </animated.div>
      </Modal>
      </div>
      ):null}
      </>
    );
  } 
}

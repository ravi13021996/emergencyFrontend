import { Button, Box, Grid, TextField, Typography, InputLabel, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
//import backPic from "../images/loginBackImage.jpg"
//import LoginHeadPic from "../images/loginImageCoalFeild.png"
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import logo from '../../img/headerLogo.png';

import logonkc from '../../img/nkc.png';
// import logonkc from '../../img/nkc.png';

import bgImg from '../../img/banner.jpg';
import config from '../../Config/config';
import bgiMg from '../../img/ECL_LIVE_BG.jpg'
import bgiMgDJB from '../../img/tata-banner-client.png'
import logoDlb from '../../img/trentlogo.png'
import axios from "axios"
import {LoginAction} from "../../actions/login"
import {useNavigate} from "react-router-dom"

//console.log(`${config.baseUrl}${config.apiName.SiteList}`)
const useStyles = makeStyles(theme => ({
    root: {
      width: 'auto',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(600 + theme.spacing(3 * 2))]: {
        width: 450,
        marginLeft: 'auto',
        marginRight: 'auto',
        
      },
    },
    paper: {
      marginTop: '36%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3),
  
    },
    logo: {
      marginTop: theme.spacing(1),
      width:175
    },
    buttons: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-evenly',
      '& > *': {
        flexBasis: '30%',
      },
      color:"#fff",
      
    },
    buttoncolor:{
      backgroundColor:'rgba(0, 0, 0, 0.50)',
      
    }
  }));
  
export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [failed, setFailed] = useState();
    const navigate =useNavigate()
    let classes = useStyles();


    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    }

    const handleLogin = (event) => {
      event.preventDefault()
      console.log("hii")
      LoginAction.fetchLoginData({
      email:email,
      password:password
    }).then((res)=>{
      if(res){
          navigate(`/emergencylist`)
      }
    })
  
    }


    return (
        <div className={classes.root} style={{backgroundImage:`url(${bgiMg})`, display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
        <Paper style={{width:"40%", height:"50%",  }} id="mainId">
          <Box display={"flex"} justifyContent={"center"} style={{border:"",paddingTop:"1%",height:"22%", marginTop:"2%",marginBottom:"2%"}}>

            <img src={`${logo}`} ></img>
          </Box>
          <Box style={{border:""}}>
          <form onSubmit={handleLogin} className='mt-2 mx-4'>
  
            <TextField
              margin='normal'
              required
              fullWidth
              error={failed}
              label='Email'
              name='email'
              value={email}
              autoComplete='email'
              autoFocus
              onChange={handleEmailChange}
              helperText={failed && 'Invalid username or password'}  />
  
            <TextField
              margin='normal'
              required
              fullWidth
              error={failed}
              label='Password'
              name='password'
              value={password}
              type='password'
              autoComplete='current-password'
              onChange={handlePasswordChange} />
  
            <FormControl fullWidth margin='normal'>
              <div className={classes.buttons} style={{border:"", marginBottom:"10px"}}>
                {/* <Button type='button' variant='contained' onClick={handleRegister} disabled={!registrationEnabled}>
                  {t('loginRegister')}
                </Button> */}
                <Button className={classes.buttoncolor} type='submit' variant='contained' color='primary' >Login
                </Button>
              </div>
            </FormControl>
          </form>
          </Box>
          {/* {registerDialogShown && 
            <RegisterDialog showDialog={true} onResult={handleRegisterResult} />
          } */}
        
        </Paper>
      </div>
  
    )
}

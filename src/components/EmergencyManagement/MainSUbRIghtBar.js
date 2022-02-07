import { Grid } from '@material-ui/core';
import React, { Suspense,lazy,Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import EmergencyMainPage from './EmergencyMainPage';

import MapApi from './MapApi';

import ViewEmergency from './ViewEmergency';
import Practise from './Practise';
import LoginPage from "../Login/LoginPage.js";

const  AddEmergency  = lazy(()=>import('./AddEmergency')) 

export default function MainSUbRIghtBar() {
  return (
    <Grid  style={{ width: "100%" ,border:""}} >
      <Suspense fallback={"loading"}>
      <Routes>
         {/* <Route exact path="/" element={<LoginPage/>} ></Route> */}
         
         <Route exact path="/" element={<LoginPage/>}></Route>
        <Route exact path="/emergencylist" element={<EmergencyMainPage/>}></Route>
        <Route path="/addEmergency" element={<AddEmergency/>} />
        <Route path="/Emergencies/:id" element={<ViewEmergency />} />    
        <Route path="/practise" element={<Practise />} />
        
      </Routes>
      </Suspense>

      
    </Grid>)
}
{/**
  
  <MapApi/>
  
  <MuiSubRightBarPage3 />
        * <MuiSubRightBarPage2/>
        */}
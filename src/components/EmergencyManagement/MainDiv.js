import { Box, Grid } from '@material-ui/core';
import React from 'react';
import MainSubLeftBar from './MainSubLeftBar';

import MainSUbRIghtBar from './MainSUbRIghtBar';

export default function MainDiv() {
  return (
    <Grid  style={{height:"85%" ,display:"flex"}}>
      

              <MainSubLeftBar />
        
      

      
              <MainSUbRIghtBar />
      
        
        
      


    </Grid>
  )
}

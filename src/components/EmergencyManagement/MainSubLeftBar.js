import { Box, Grid } from '@material-ui/core';
import React from 'react';

export default function MainSubLeftBar() {
    return (
        <Grid  className=' d-flex flex-column justify-content-between' style={{ backgroundColor: "#552F86", width: "5%"  }}>

            <Box>
                <Grid container item display={"flex"} justifyContent={"center"} alignItems='center' style={{ paddingTop: "15px", paddingBottom: "20px" }}>
                    <i className="fas fa-user-plus fs-2 " style={{color:"#BAABD1"}}></i>
                </Grid >

                <Grid container item display={"flex"} justifyContent={"center"} alignItems='center' style={{backgroundColor:"#432070", paddingTop: "15px", paddingBottom: "20px" }}>
                    <i className="fas fa-map-marker-alt fs-2 text-light " style={{color:"#BAABD1"}}></i>
                </Grid>

                <Grid container item display={"flex"} justifyContent={"center"} alignItems='center' style={{ paddingTop: "15px", paddingBottom: "20px" }}>
                    <i className="fas fa-store-alt fs-2 " style={{color:"#BAABD1"}}></i>
                </Grid>

                <Grid container item display={"flex"} justifyContent={"center"} alignItems='center' style={{ paddingTop: "15px", paddingBottom: "20px" }}>
                    <i className="fas fa-car fs-2 " style={{color:"#BAABD1"}}></i>
                </Grid>
            </Box>


            <Box className='mb-3  d-flex justify-content-center' >
                <i className="fas fa-sign-out-alt fs-1 " style={{color:"#BAABD1"}}></i>
            </Box>

        </Grid>
        )
}

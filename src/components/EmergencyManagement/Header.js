import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Badge, Box, Grid } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

      
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    backCol: {

        paddingBottom: "10px",
        paddingTop: "10px"
    },

    djbNameStyle: {
        marginLeft: "20px",

    },
    border2: {
        border: " 1px solid black"
    },
    imageStyle1: {
        height: "50px"
    },
    font1: {
        fontSize: "7px",
        
        padding:"0px",
      },
      sizeAvatar: {
        height: theme.spacing(6),
        width: theme.spacing(6),
      },
      sideSpaceOfApbar:{
          marginLeft:"10px",
          margin:"10px"
      },
      paddinX:{
          paddingLeft:"15px",
          paddingRight:"20px"
      }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}  style={{ height: "10%" }}>
            <AppBar position="static"  className={classes.backCol} style={{ background: 'linear-gradient(to right, white , #573488)' ,height:"100%"}}>
                <Grid container >

                    <Grid item lg={7} md={6} sm={12} xs={12} className={classes} style={{ paddingLeft: "10px" }}>
                        <Box display={"flex"} className={classes.paddinX}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTra-egCU73RFQw17jnjo_QtjGwsxjVng_njA&usqp=CAU' className={classes.imageStyle1}></img>
                            <Typography display={'flex'}  style={{ fontWeight: "bold", fontSize: "25px", color: "black", paddingTop:"5px" }}> Delhi Jal Board</Typography>
                        </Box>
                    </Grid>


                    <Grid container item lg={5} md={6} sm={12} xs={12} className={classes} >


                        <Grid container justifyContent='space-between' alignItems='center' item lg={8} md={8} className={classes} style={{ paddingRight: "25px" }}>
                            <Box borderRadius={30} display={"flex"} alignItems={"center"} style={{ backgroundColor: "white", color: "black", maxWidth: "max-content", paddingLeft: "10px", height: "80%" }}>


                                <Typography variant="" className={classes} color="initial" style={{ marginRight: "70px", fontSize: "25px", paddingLeft: "5px" }}> Kolkatta Site</Typography>
                                <ArrowDropDownIcon className={classes} style={{ fontSize: "30px" }}></ArrowDropDownIcon>
                            </Box>

                            <Box>
                                <Avatar sx={{innerWidth:"100px", maxWidth:"200px",innerHeight:"200px"}} className={classes.sizeAvatar}  style={{ background: "white", padding: "px", color: "#573488" }}>
                                    <Badge badgeContent={2} color="secondary" style={{ margin: "10px" }} classes={{
                                        badge: classes.font1
                                    }}>
                                        <i className="fas fa-bell " style={{ color: "#573488" }}></i>
                                    </Badge>

                                </Avatar>
                            </Box>
                        </Grid>

                        <Grid container justifyContent='center' alignItems='center'  item lg={4} md={4} className={classes}>
                            <Box >
                                <Avatar style={{ backgroundColor: "white", padding: "3px" }} className={classes.sizeAvatar}>
                                    <i className="fas fa-user" style={{ fontSize: "25px", color: "#573488" }}></i>
                                </Avatar>

                            </Box>
                            <Box style={{ marginLeft: "10px" }} display={"flex"} alignItems={"center"}>
                                <Typography variant="h6" color="initial">Admin</Typography>
                            </Box>
                        </Grid>





                    </Grid>


                </Grid>
            </AppBar>
        </div>
    );
}

{/**
<Toolbar variant="dense">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTra-egCU73RFQw17jnjo_QtjGwsxjVng_njA&usqp=CAU" style={{height:"50px"}}></img>
          
          <Typography variant="h6" color="inherit" className={classes.djbNameStyle}>
            Delhi Jal Board
          </Typography>
          
        </Toolbar> */}

{/**
        
             <Grid display="flex" justifyContent={"space-between"} p={1} style={{ border: "1px solid", width: "100%" }} >

                                <Grid lg={6} md={6}>
                                    <Box display="flex">
                                        <Box p={1} order={1}  >
                                            <Box borderRadius={25} style={{ backgroundColor: "white", color: "black", maxWidth: "max-content" }}>


                                                <Typography variant="" className={classes.border2} color="initial" style={{ marginRight: "20px", fontSize: "25px", paddingLeft: "5px" }}> Kolkatta Site</Typography>
                                                <ArrowDropDownIcon className={classes.border2} style={{ fontSize: "30px" }}></ArrowDropDownIcon>
                                            </Box>
                                        </Box>

                                        <Box p={1} order={2} >
                                            <Box>
                                                <Avatar style={{ background: "white", padding: "3px", color: "#573488" }}>
                                                    <Badge badgeContent={4} color="secondary">
                                                        <i className="fas fa-bell " style={{ color: "#573488" }}></i>
                                                    </Badge>

                                                </Avatar>
                                            </Box>

                                        </Box>
                                    </Box>

                                </Grid>

                                <Grid item lg={6} md={6}>
                                    <Box display={"flex"}>
                                        <Box p={1} order={3} >
                                            <Box >
                                                <Avatar style={{ backgroundColor: "white", padding: "3px" }}>
                                                    <i className="fas fa-user" style={{ fontSize: "25px", color: "#573488" }}></i>
                                                </Avatar>

                                            </Box>

                                        </Box>

                                        <Box p={1} order={4} >
                                            <Box style={{ border: "1px solid" }} display={"flex"} alignItems={"center"}>
                                                <Typography variant="h6" color="initial">Admin</Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Grid>




                            </Grid>
        */}
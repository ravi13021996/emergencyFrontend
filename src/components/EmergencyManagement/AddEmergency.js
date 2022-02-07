import { Box, Grid, Typography, Button, Link, TextField, Input } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useNavigate } from 'react-router-dom';
import "../../App.css"
import Autocomplete from '@material-ui/lab/Autocomplete';
import { EmergancyAction } from '../../actions/emergencyActions';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "80%",
        maxHeight: 50
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    emDetails: {
        width: "100%",

    }
}));
//setInterval(()=>  console.log("hii"),1000)



export default function AddEmergency() {

    const classes = useStyles();
    let navigate = useNavigate();
    
    const [state, setState] = React.useState({
        age: 'Select Zone',
        name: 'hai',
    });
    const [designationValue,setDesignationValue]=useState()

    const [emergencyAttribute,setEmergencyAttribute]= useState({
        emergencyCode:null,
        emergencyName:null,
        emergencyZone:null,
        emergencyAdmin:null,
        emergencyPNumber:null,
        emergencyEmail:null,
        emergencyLatitude:null,
        emergencyLongitude:null,
        emergencyAddress:null
})


    useEffect(() => {
        EmergancyAction.fetchById({

        })
    }, []);

    const onChangeHandle=(event)=>{
        
        setEmergencyAttribute({...emergencyAttribute,[event.target.name]:event.target.value})
        console.log(event)
    }

    const onChangeHandleForZone=(event, newValue)=>{
        
        setEmergencyAttribute({...emergencyAttribute,[event.target.name]:newValue.title})
        
    }

    const onChangeHandleForAdmin=(event, newValue)=>{
        console.log(newValue)
        
        setEmergencyAttribute({...emergencyAttribute,emergencyAdmin:newValue.title})
        
    }
    // item need for server code, name, zoneId, companyId, address, latitude, longitude, siteTypeId, type,siteHierarchy

    const addEmergencyFunc=()=>{
        if(emergencyAttribute.emergencyName==null||
            emergencyAttribute.emergencyCode==null||
            emergencyAttribute.emergencyZone==null||
            emergencyAttribute.emergencyAddress==null||
            emergencyAttribute.emergencyLatitude==null||
            emergencyAttribute.emergencyLongitude==null)
            {
                alert("please fill entire form")
        }

else{


        EmergancyAction.saveEmergency({
            code:emergencyAttribute.emergencyCode,
            name:emergencyAttribute.emergencyName,
            zoneId:emergencyAttribute.emergencyZone,
            companyId:1,
            address:emergencyAttribute.emergencyAddress,
            latitude:emergencyAttribute.emergencyLatitude,
            longitude:emergencyAttribute.emergencyLongitude,
            siteTypeId:1,
            type:"EMERGENCY",
            siteHierarchy:1
        }).then((res)=>{
            console.log(res,"response")
            console.log(emergencyAttribute,"data in root")
            if(res){
                setEmergencyAttribute({
                emergencyCode:"",
                emergencyName:"",
                emergencyZone:"",
                emergencyAdmin:"",
                emergencyPNumber:"",
                emergencyEmail:"",
                emergencyLatitude:"",
                emergencyLongitude:"",
                emergencyAddress:""
                })
                alert(res)
            }
        })
    }
    }

    
        console.log(emergencyAttribute,"emergencyAttribute")

    console.log(classes, "classes")
    return (
        <Grid style={{ height: "100%", backgroundColor: "#F1F1F1", paddingTop: "5px", paddingBottom: "5px" }}>

            <Grid container style={{ width: "100%", height: "auto",paddingTop:"0.5%" }}>
                <Grid container justifyContent='start' item lg={6} md={6} className='' style={{ backgroundColor: "#F1F1F1" }}>
                    <Box style={{ border: "", cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <ArrowBackIcon style={{fontSize:"50px"}} onClick={() => navigate("/emergencylist")}/>   
                    </Box>
                    <Box style={{}}>
                        <Typography variant="h5" style={{ border: "", fontWeight: "bold" }}>
                            Emergency Management
                        </Typography>
                        <Typography style={{ border: "" }}>
                             Home>Emergency Management<b>>Emergancy Management</b>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "end", paddingRight: "2%" }}>
                    <Box >
                        <Button variant="text" color="" style={{ color: "white", backgroundColor: "#573488", paddingRight: "30px", paddingLeft: "30px" }} onClick={()=>addEmergencyFunc()}>
                            Add
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            {/**Emergancy details */}

            <Grid className={classes.emDetails} style={{ paddingLeft:"1%",height: "75%", backgroundColor: "white", paddingBottom: "4%", marginLeft: "7px", marginRight: "7px", maxWidth: "98%", marginTop: "10px", paddingTop: "15px" }} >
                <Box width={"80%"} border={""} paddingLeft={"25px"}>
                    <Box>
                        <Typography variant="h6" color="initial" align='left'  >Emergency Details</Typography>
                    </Box>
                    <Grid container style={{ marginTop: "20px" }}>
                        <Grid items lg={4} md={4} style={{ display: "flex", justifyContent: "start" }}>
                            <Box border={""} width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} style={{ marginBottom: "20px" }}>Emergency Code *</Box>
                                <TextField variant="outlined" placeholder='Enter Code' value={emergencyAttribute.emergencyCode} className="textfeildAddEmergencyname h-50 w-100" name='emergencyCode' onChange={(event)=>onChangeHandle(event)}></TextField>
                            </Box>
                        </Grid>

                        <Grid items lg={4} md={4}>
                            <Box border={""} width={"80%"} style={{ border: "" }}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} style={{ marginBottom: "20px" }}>Emergency Name *</Box>
                                <TextField variant="outlined" placeholder='Enter Name' value={emergencyAttribute.emergencyName} className="textfeildAddEmergencyname w-100" name='emergencyName' onChange={(event)=>onChangeHandle(event)}></TextField>
                            
                            </Box>
                            
                        </Grid>

                        <Grid items lg={4} md={4} >
                            <Box width={"80%"} style={{ border: "", marginTop: "1%" }}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'}  style={{marginBottom:"7px   "}}>Zone *</Box>
                                <Autocomplete
                                    className="user"
                                    name='emergencyZone'
                                    clearText="clear"
                                    disableClearable
                                    onChange={(event,newValue)=>onChangeHandleForZone(event,newValue)}
                                    id="header"
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    value={emergencyAttribute.emergencyZone}
                                    getOptionSelected={(option, value) => option.name === value.name}
                                    renderInput={(params) => <TextField {...params}  margin='dense' placeholder='Select Zone' variant="outlined" />}
                                />
                               
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container style={{ marginTop: "1%", }} >
                        <Grid items lg={4} md={4} style={{ display: "flex", justifyContent: "start" }}>
                            <Box border={""} width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} style={{marginBottom:"10px"}}>Select Admin *</Box>
                                <Autocomplete id='header'
                                    className='user'
                                    name='emergencyAdmin'
                                    clearText="clear"
                                    disableClearable    
                                    
                                    onChange={(event, newValue)=>onChangeHandleForAdmin(event,newValue)}
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                   // value={emergencyAttribute.emergencyAdmin}
                                    getOptionSelected={(option, value) => option.name === value.name}
                                    renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        variant='outlined'
                                        margin='dense'
                                        placeholder='Select Admin'
                                    />  }
                                 />
                            </Box>
                        </Grid>

                        <Grid items lg={4} md={4}>
                            <Box border={""} width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} style={{ marginBottom: "20px" }}>Phone Number *</Box>
                                <TextField variant="outlined" placeholder='Enter Number' value={emergencyAttribute.emergencyPNumber} className="textfeildAddEmergencyname w-100" name='emergencyPNumber' onChange={(event)=>onChangeHandle(event)}></TextField>
                            </Box>
                        </Grid>

                        <Grid items lg={4} md={4} >
                            <Box border={""} width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'}  style={{ marginBottom: "20px" }}>Email Id *</Box>
                                <TextField variant="outlined" placeholder='Enter Email' value={emergencyAttribute.emergencyEmail} className="textfeildAddEmergencyname w-100" name='emergencyEmail' onChange={(event)=>onChangeHandle(event)}></TextField>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box width={"80%"} border={""} marginTop={"2%"} paddingLeft={"25px"}>
                    <Box >
                        <Typography variant="h6" color="initial" align='left'  >Emergency Address <i className="fas fa-map-marker-alt rounded p-2  text-light" style={{ backgroundColor: "#5C318C" }}></i></Typography>
                    </Box>
                    <Grid container style={{ marginTop: "20px" }}>
                        <Grid items lg={4} md={4} style={{ display: "flex", justifyContent: "start" }}>
                            <Box border={""} width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} style={{ marginBottom: "20px" }}>Lattitude</Box>
                                <TextField variant="outlined" placeholder='Enter Latitude' value={emergencyAttribute.emergencyLatitude} className="textfeildAddEmergencyname w-100" name='emergencyLatitude' onChange={(event)=>onChangeHandle(event)}></TextField>
                            </Box>
                        </Grid>

                        <Grid items lg={4} md={4}>
                            <Box border={""} width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} style={{ marginBottom: "20px" }}>Longitude</Box>
                                <TextField variant="outlined" placeholder='Enter Longitude'value={emergencyAttribute.emergencyLongitude} className="textfeildAddEmergencyname w-100" name='emergencyLongitude' onChange={(event)=>onChangeHandle(event)}></TextField>
                            </Box>
                        </Grid>

                        <Grid items lg={4} md={4} >
                            <Box width={"80%"}>
                                <Box border={""} display={'flex'} justifyContent={'flex-start'} marginLeft={0} style={{ marginBottom: "20px" }}>Emergency Address</Box>
                                <TextField variant="outlined" placeholder='Enter Address' value={emergencyAttribute.emergencyAddress} className="textfeildAddEmergencyname w-100" name='emergencyAddress' onChange={(event)=>onChangeHandle(event)}></TextField>

                            </Box>
                        </Grid>
                    </Grid>


                </Box>

            </Grid>

            
                

            
            
        </Grid>
    )
}

const top100Films = [
    { title: 'zone I', year: 1994 },
    { title: 'zone II', year: 1972 },
    { title: 'zone III', year: 1974 },
    { title: 'zone IV', year: 2008 },
    { title: 'Zone V', year: 1957 },
    // { title: "Schindler's List", year: 1993 },
    // { title: 'Pulp Fiction', year: 1994 },
    // { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    // { title: 'The Good, the Bad and the Ugly', year: 1966 },
    // { title: 'Fight Club', year: 1999 },
    // { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    // { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    // { title: 'Forrest Gump', year: 1994 },
    // { title: 'Inception', year: 2010 },
    // { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    // { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    // { title: 'Goodfellas', year: 1990 },
    // { title: 'The Matrix', year: 1999 },
    // { title: 'Seven Samurai', year: 1954 },
    // { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    // { title: 'City of God', year: 2002 },
    // { title: 'Se7en', year: 1995 },
    // { title: 'The Silence of the Lambs', year: 1991 },
    // { title: "It's a Wonderful Life", year: 1946 },
    // { title: 'Life Is Beautiful', year: 1997 }
]
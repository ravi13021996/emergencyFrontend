import { Box, Button, Grid, makeStyles, TextField, Typography,withStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useNavigate } from "react-router-dom";
import {EmergancyAction} from "../../actions/emergencyActions"
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
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

    },
    table: {
        minWidth: 700,
      },
      
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#F4F8F9",
      color: "#7B7C7E",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);



  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {

      },
    },
  }))(TableRow);



  function createData(name, calories, fat,carb) {
    return { name, calories, fat ,carb};
  }
  
  const rows1 = [
    createData('EMP001',"shiv Charan", 6.0),
    createData('EMP002', "Anmol Vij", 9.0),
    createData('EMP003', "Rohit Changra", 16.0),
    
  ];

  const rows2 = [
    createData('F001',"Uttar Nagar,West", "28.304381","35.455255"),
    createData('F002', "Mohan Garden,west", "38.304381","40.455255"),
    
    
  ];
  const rows3 = [
    createData('DL01',"SK Building", "9125641234"),
    createData('DL01', "Dwarka Banquet", "9225641234"),

    
  ];

  const rows4 = [
    createData('Rudra Pratap Pvt.LTD',"03","Rudra Pratap","9873637600 "),
    
    
  ];


export default function ViewEmergency() {
    const [editSiteyn,setEditSiteyn] =useState(false)
    const classes = useStyles();
    let navigate = useNavigate();
    
    const [state, setState] = React.useState({
        age: 'Select Zone',
        name: 'hai',
    }
    );
    const [idData,setIdData]=useState()

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



    const onChangeHandle=(event)=>{
        
        setEmergencyAttribute({...emergencyAttribute,[event.target.name]:event.target.value})
        console.log(event)
    }

    const onChangeHandleForZone=(event, newValue)=>{
        
        setEmergencyAttribute({...emergencyAttribute,emergencyZone:newValue.title})
        
    }

    const onChangeHandleForAdmin=(event, newValue)=>{
        
        setEmergencyAttribute({...emergencyAttribute,emergencyAdmin:newValue.title})
        
    }
    // item need for server code, name, zoneId, companyId, address, latitude, longitude, siteTypeId, type,siteHierarchy

    const updateEmergencyFunc=()=>{
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


        EmergancyAction.updateEmergency({
            id:idData.id,
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
                setEditSiteyn(false)
                alert(`${res}`)
            }
        })
    }
    }

    
        console.log(emergencyAttribute,"emergencyAttribute")



useEffect(() => {
  console.log("hii useEffect")
  fetchIndivdualSiteData()
}, []);

function fetchIndivdualSiteData(){
    EmergancyAction.fetchById({
        userId:window.location.pathname.split("/")[2]
    }).then((res)=>setIdData(res[0]))
}
console.log(editSiteyn,"editSiteyn")
console.log(idData,"idData")

    // console.log(EmergancyAction.fetchById())

    return (

        <Grid style={{ height: "100%", backgroundColor: "#F1F1F1", paddingTop: "5px", paddingBottom: "5px" }}>
            <Box style={{ border: "", height: "10%",paddingLeft:"0.5%",paddingTop:"0.5%" }}>
                <Grid container style={{ width: "auto", height: "100%", border: "" }}>
                    <Grid container justifyContent='start' item lg={6} md={6} className='' style={{ backgroundColor: "#F1F1F1" }}>
                        <Box style={{ border: "", display: "flex",cursor:"pointer", alignItems: "center" }}>
                            <i className="fas fa-arrow-left fs-1 " onClick={()=>navigate("/emergencylist")} style={{ width: "40px" }}></i>
                        </Box>
                        <Box style={{}}>
                            <Typography variant="h4" style={{ border: "", fontWeight: "bold" }}>
                                View Emergency Management
                            </Typography>
                            <Typography style={{ border: "" }}>
                                 Home>Emergency Management<b>>View Emergancy Management</b>
                            </Typography>
                        </Box>
                    </Grid>




                    <Grid item lg={6} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "end", paddingRight: "2%" }}>
                        <Box >{ 
                             editSiteyn?<Box>  <Button variant="text" color="" style={{ color: "573488", backgroundColor: "white", paddingRight: "30px", paddingLeft: "30px" }} onClick={()=>setEditSiteyn(false)}>
                                Cancel
                                </Button>
                            <Button variant="text" color="" style={{ color: "white", backgroundColor: "#573488", paddingRight: "30px", paddingLeft: "30px" }} onClick={()=>updateEmergencyFunc()}>
                                Update
                            </Button> 
                            </Box>:
                            <Button variant="text" color="" style={{ color: "white", backgroundColor: "#573488", paddingRight: "30px", paddingLeft: "30px" }} onClick={()=>setEditSiteyn(true)}>
                                Edit
                            </Button>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/**Emergancy details */}
            <Box style={{ height: "90%", border: "", overflow: "scroll" }}>
                <Grid className={classes.emDetails} style={{ height: "300px",paddingLeft:"1%", border: "", backgroundColor: "white", paddingBottom: "4%", marginLeft: "7px", marginRight: "7px", maxWidth: "98%", marginTop: "10px", paddingTop: "15px" }} >
                    <Box width={"80%"} border={""} paddingLeft={"25px"}>
                        <Box >
                            <Typography variant="h6" color="initial" align='left'  >Emergency Details</Typography></Box>
                        <Grid container style={{ marginTop: "20px" }}>
                            <Grid items lg={4} md={4} style={{ display: "flex", justifyContent: "start" }}>
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Emergency Code *</Box>
                                   {
                                       editSiteyn?<TextField variant="outlined" placeholder={`${idData ?idData.code:""}`} value={emergencyAttribute.emergencyCode} name="emergencyCode" onChange={(event)=>onChangeHandle(event)}  className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>{idData ?idData.code:""}</Box>
                                   } 
                                </Box>
                            </Grid>

                            <Grid items lg={4} md={4}>
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Emergency Name *</Box>
                                    {
                                       editSiteyn?<TextField variant="outlined" placeholder={`${idData ?idData.name:""}`} value={emergencyAttribute.emergencyName} name="emergencyName" onChange={(event)=>onChangeHandle(event)} className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>{idData ?idData.name:""}</Box>
                                   }
                                    </Box>
                            </Grid>

                            <Grid items lg={4} md={4} >
                                <Box width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Zone *</Box>
                                    {
                                        editSiteyn?<Autocomplete
                                        className="addEmergencyNameInput"
                                        getOptionLabel="Enter Admin"
                                        id="combo-box-demo"
                                        onChange={(event, newValue)=>onChangeHandleForAdmin(event, newValue)}
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300,marginTop:"9px" }}
                                        renderInput={(params) => <TextField {...params} placeholder="Enter Admin" margin='dense' variant="outlined" />}
                                    ></Autocomplete> :<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={""} display={"flex"} justifyContent={"space-between"}><Typography>{idData ?idData.zoneId:""}</Typography><i className="fas fa-chevron-down border d-flex align-items-center"></i></Box>
                                    }
                                    
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container style={{ marginTop: "20px", }} >
                            <Grid items lg={4} md={4} style={{ display: "flex", justifyContent: "start" }}>
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Select Admin *</Box>
                                    
                                    {
                                        editSiteyn?<Autocomplete
                                        className="addEmergencyNameInput"
                                        getOptionLabel="Enter Admin"
                                        id="combo-box-demo"
                                        onChange={(event,newValue)=>onChangeHandleForZone(event,newValue)} 
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300,marginTop:"10px" }}
                                        renderInput={(params) => <TextField {...params} placeholder="Enter Admin" margin='dense' variant="outlined" />}
                                        ></Autocomplete>
                                        :<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={""} display={"flex"} justifyContent={"space-between"}><Typography>Select Admin</Typography><i className="fas fa-chevron-down border d-flex align-items-center"></i></Box>
                                    }
                                    
                                
                                    </Box>
                            </Grid>

                            <Grid items lg={4} md={4}>
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Phone Number *</Box>
                                    {
                                       editSiteyn?<TextField variant="outlined" placeholder={`${idData ?idData.phoneNumber:""}`} value={emergencyAttribute.emergencyPNumber} name="emergencyPNumber" onChange={(event)=>onChangeHandle(event)} className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>{"96556412556"}</Box>
                                   }
                                    </Box>
                            </Grid>

                            <Grid items lg={4} md={4} >
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'} marginLeft={1}>Email Id *</Box>
                                    {
                                       editSiteyn?<TextField variant="outlined" placeholder="Enter Email" name="emergencyEmail" value={emergencyAttribute.emergencyEmail} onChange={(event)=>onChangeHandle(event)} className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>Raja garden@gmail.com</Box>
                                   }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>

                <Grid className={classes.emDetails} style={{ border: "",paddingLeft:"1%", backgroundColor: "white", height: "35%", marginTop: "3px", paddingTop: "20px", marginLeft: "7px", marginRight: "7px", maxWidth: "98%" }} >
                    <Box width={"80%"} border={""} paddingLeft={"25px"}>
                        <Box >
                            <Typography variant="h6" color="initial" align='left'  >Emergency Address <i className="fas fa-map-marker-alt rounded p-2  text-light" style={{ backgroundColor: "#5C318C" }}></i></Typography></Box>
                        <Grid container style={{ marginTop: "20px" }}>
                            <Grid items lg={4} md={4} style={{ display: "flex", justifyContent: "start" }}>
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Lattitude</Box>
                                    {
                                       editSiteyn?<TextField variant="outlined" placeholder={`${idData ?idData.latitude:""}`} value={emergencyAttribute.emergencyLatitude} name="emergencyLatitude" onChange={(event)=>onChangeHandle(event)} className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>{idData ?idData.latitude:""}</Box>
                                   }
                                </Box>
                            </Grid>

                            <Grid items lg={4} md={4}>
                                <Box border={""} width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'}>Longiude</Box>
                                    {
                                       editSiteyn?<TextField variant="outlined" placeholder={`${idData ?idData.longitude:""}`} value={emergencyAttribute.emergencyLongitude} name="emergencyLongitude" onChange={(event)=>onChangeHandle(event)} className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>{idData ?idData.longitude:""}</Box>
                                   }
                                </Box>
                            </Grid>

                            <Grid items lg={4} md={4} >
                                <Box width={"80%"}>
                                    <Box border={""} display={'flex'} justifyContent={'flex-start'} marginLeft={1}>Emergency Address</Box>
                                    {
                                       editSiteyn?<TextField variant="outlined" placeholder="2425 rohini sector 15 delhi 110086" value={emergencyAttribute.emergencyAddress} name="emergencyAddress" onChange={(event)=>onChangeHandle(event)} className="textfeildAddEmergencyname w-100" style={{marginTop:"20px"}}></TextField>:<Box border={"1px solid"} marginTop={2} borderRadius={4} padding={"5px"} style={{ backgroundColor: "#F8F8F8" }} textAlign={"start"}>{idData?idData.address:""}</Box>
                                   }
                                </Box>
                            </Grid>
                        </Grid>



                    </Box>

                </Grid>


                <Accordion style={{ border: "", backgroundColor: "white", height: "auto", marginTop: "3px", paddingTop: "20px", marginLeft: "7px", marginRight: "7px", maxWidth: "98%" }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={{ backgroundColor: "#E4EBF3" }}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>User</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/**Table Of User */}

                        <TableContainer component={Paper} style={{paddingLeft:"1.5%"}}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead style={{}}>
                                    <TableRow>
                                        <StyledTableCell style={{backgroundColor:"#F4F8F9 !important"}} >UserCode </StyledTableCell>
                                        <StyledTableCell align="right">User Name</StyledTableCell>
                                        <StyledTableCell align="right">Designation</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows1.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>



                <Accordion style={{ border: "", backgroundColor: "white", height: "auto", marginTop: "3px", paddingTop: "20px", marginLeft: "7px", marginRight: "7px", maxWidth: "98%" }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={{ backgroundColor: "#E4EBF3" }}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>FPL</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <TableContainer component={Paper} style={{paddingLeft:"1.5%"}}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>FPL COde </StyledTableCell>
                                        <StyledTableCell align="right">FPL Name</StyledTableCell>
                                        <StyledTableCell align="right">Latitude</StyledTableCell>
                                        <StyledTableCell align="right">Longitude</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows2.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carb}</StyledTableCell>
                                            
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </AccordionDetails>
                </Accordion>


                <Accordion style={{ border: "", backgroundColor: "white", height: "auto", marginTop: "3px", paddingTop: "20px", marginLeft: "7px", marginRight: "7px", maxWidth: "98%" }} >
                    <AccordionSummary
                        style={{ backgroundColor: "#E4EBF3" }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Delivery</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <TableContainer component={Paper} style={{paddingLeft:"1.5%"}}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>DL Code </StyledTableCell>
                                        <StyledTableCell align="right">Client Name</StyledTableCell>
                                        <StyledTableCell align="right">Contact Person</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows3.map((row) => (
                                        <StyledTableRow key={row.calories}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carb}</StyledTableCell>
                                            
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </AccordionDetails>
                </Accordion>



                <Accordion style={{ border: "", backgroundColor: "white", height: "auto", marginTop: "3px", paddingTop: "20px", marginLeft: "7px", marginRight: "7px", maxWidth: "98%" }} >
                    <AccordionSummary
                        style={{ backgroundColor: "#E4EBF3" }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Agency</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <TableContainer component={Paper} style={{paddingLeft:"1.5%"}}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Agency Name </StyledTableCell>
                                        <StyledTableCell align="right">No of Tankers</StyledTableCell>
                                        <StyledTableCell align="right">Contact Person</StyledTableCell>
                                        <StyledTableCell align="right">Phone No</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows4.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carb}</StyledTableCell>
                                            
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </AccordionDetails>
                </Accordion>


            </Box>
        </Grid>

    )
}


const top100Films = [
    { title: 'zone I', year: 1994 },
    { title: 'zone II', year: 1972 },
    { title: 'zone III', year: 1974 },
    { title: 'zone IV', year: 2008 },
    { title: 'zone V', year: 1957 },
    { title: "zone VI", year: 1993 },
]
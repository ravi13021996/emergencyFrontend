import React, { useState,useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Grid, TablePagination } from '@material-ui/core';
import { NavLink, useLinkClickHandler,useNavigate} from 'react-router-dom';

import {EmergancyAction} from "../../actions/emergencyActions"
import "../../App.css"
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Sno, emergencyName, emergencyCode, zoneName, admin, contactName, fpl, agency, vehicle) {
  return { Sno, emergencyName, emergencyCode, zoneName, admin, contactName, fpl, agency, vehicle };
}



const rows = [
  createData(1, "EE S1", "Raja Garden", "Zone VI", "Shiv Charan", "912564124", "05", "02", "03"),
  createData(2, "EE W-II C", "Mohan Garden", "Zone III", "Anmol Vij", "9225641234", "04", "04", "04"),
  createData(3, 'WW SW-II c', "Kirti Nagar", "zone II", "Rohit Changra", "9435641234", "03", "01", "01"),
  createData(4, "EE c-II", "Rajauri Garden", "zone I", "Ashish Sharma", "9655641234", "02", "03", "03"),
  createData(5, "EE s-I", "Uttam Nagar", "zone V", "vijay Sharma", "9875641234", "05", "04", "04"),
  createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(7, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(8, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(9, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(10, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(11, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(12, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(13, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
  createData(14, "EE c-II", "Rajauri Garden", "zone I", "Ashish Sharma", "9655641234", "02", "03", "03"),
  createData(15, "EE s-I", "Uttam Nagar", "zone V", "vijay Sharma", "9875641234", "05", "04", "04"),
  createData(16, "EE c-II", "Rajauri Garden", "zone I", "Ashish Sharma", "9655641234", "02", "03", "03"),
  createData(17, "EE s-I", "Uttam Nagar", "zone V", "vijay Sharma", "9875641234", "05", "04", "04"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  headTable: {
    backgroundColor: "#F4F8F9 !important",
    color: "Grey",
    textAlign:"center"

  },
  dataHead:{
    color: "Grey",
    textAlign:"center",
    padding:"0px"
  }
});


export default function TableOfData() {
  const classes = useStyles();       
  const [gotfromApi,setGotFromApi]=useState([])
  const [totalPages,setTotalPages] =useState()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  // useEffect(() => {
  //   axios.post("https://temp-app-raviapp.herokuapp.com/api/v1/site/all").then((res)=>setGotFromApi(res.data))
    
  // }, []);

    useEffect(()=>{
        fetchemergencylist();
    },[])

    useEffect(()=>{
      fetchemergencylist();
  },[page])
  useEffect(()=>{
    fetchemergencylist();
},[rowsPerPage])
    function fetchemergencylist(){
            EmergancyAction.fetchEmergencyList({
              companyId: 1,
              pageNo: page+1,
              pageSize: rowsPerPage,
              search: null,
              status: null,
              siteTypeId: null,
              userId: 1,
              notFetchEmergencies: false,
              type: null
            }).then((res)=>{
            setGotFromApi(res.list)
            setTotalPages(res.totalElement)
        })

    }


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      
      setPage(0);
    };
  console.log(page)
  console.log(rowsPerPage)
  console.log(gotfromApi)
  let navigate=useNavigate()  

  return (
    <div style={{ height: "75%" , marginTop:"1%",border:""}}>
      <div className=' ' style={{height:"auto",maxHeight:"400px", minHeight:"60%",overflow:"scroll" }}>
      <TableContainer component={Paper} style={{ paddingLeft: "10px", paddingRight: "10px" }} >
        <Table className={classes.table} aria-label="customized table" style={{ }} >
          <TableHead stickyHeader style={{ width: "100%", border: "", }}>
            <TableRow style={{ width: "" }} >
              <StyledTableCell className={classes.headTable} style={{ display: "flex", justifyContent: "start" }}>S.No</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Emergency Code</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Emergency Name</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Zone Name</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Admin</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Contact Name</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">FLP</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Agency</StyledTableCell>
              <StyledTableCell className={classes.headTable} align="right">Vehical</StyledTableCell>


            </TableRow>
          </TableHead>
          <TableBody style={{height:"auto",maxHeight:"80%", minHeight:"80%",overflow:"scroll"  }} >
            {gotfromApi.map((row) => (
              <StyledTableRow key={row.id} >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right" style={{cursor:"pointer", padding:"8px"}} onClick={()=>navigate(`/Emergencies/${row.id}`)}> {row.code}</StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right">{row.name}</StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right">{row.zoneId}</StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right"></StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right">{row.phoneNumber}</StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right">Null</StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right">null</StyledTableCell>
                <StyledTableCell className={classes.dataHead} align="right">null</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      
       <div className="px-3 mt-3" style={{heigth:"20%"}}>
                
      <Grid container style={{display:"flex",border:""}} justifyContent='space-between'>
        <Grid item >
              Showing 1to 7 of 7 entries
        </Grid>

        <Grid  item style={{display:"flex",border:"", justifyContent:"space-between" }}>
          
        <TablePagination
            rowsPerPageOptions={[5,7,10]}
            component="div"
            count={totalPages}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          

        </Grid>
      </Grid>
      </div>
    </div>
  );
}
{/**

 */}
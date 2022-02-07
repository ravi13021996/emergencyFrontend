import { Box, FormControl, Grid, InputLabel, MenuItem, TablePagination, TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';

import React, { useState ,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableOfData from './TableOfData';
import {EmergancyAction} from "../../actions/emergencyActions"


import FormHelperText from '@material-ui/core/FormHelperText';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';




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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
        maxHeight: "50vh"
    },
    formControl: {
        margin: theme.spacing(1),


    },
    user: {
        height: "40px",
    },

    selectEmpty: {
        marginTop: theme.spacing(0),
    },
    selectStyle: {
        border: "1px solid red",
        height: "30px"


    },
    
}));
export default function EmergencyMainPage() {
    const classes = useStyles();
    
    const [age, setAge] = React.useState('');
    const [emergencyfetchList,setEmergencyfetchList]=useState()

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    


    return (
        <Grid style={{ background: "#F1F1F1", height: "100%", paddingLeft: "5px" }}>


            <Grid container className="" style={{ height: "12%" }}>

                <Grid item lg={6} md={6} style={{paddingLeft:"1%",paddingTop:"1%", paddingRight:"2%", display: "flex", justifyContent: "start", }} >
                    <Box style={{}}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            Emergency Management
                        </Typography>
                        <Typography>
                            <p>Home>Emergency Management<b>>Emergancy Management</b></p>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} style={{ display: "flex", justifyContent: "end", paddingRight: "1.5%" }}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                       <Link to="/addEmergency"> <Button style={{ backgroundColor: "#573488", color: "white" }} ><i className="fas fa-plus me-2"></i> Add Emergency</Button></Link>
                    </Box>

                </Grid>
            </Grid>

            <Grid style={{ height: "85%", backgroundColor: "White", borderRadius: "5px", marginRight: "20px", marginTop: "5px", }} >
                <Grid style={{marginLeft:"1%",paddingTop:"1%"}}>
                    <Grid container item lg={8} md={8} className=''>

                        <Grid item lg={4} md={4} className=''>
                            <Box >
                                <Typography color="initial">Search user Name</Typography>
                                <Box width={"80%"} style={{marginTop:"4px"}}>
                                    <Box style={{border:"1px solid #C4C4C4", padding:"4px",borderRadius:"5px",width:"100% " }}>
                                        <Input className="searchUserStyle" style={{width:"80%"}} disableUnderline={"true"}  placeholder='Search Client Name'/><i className='fas fa-search ms-2'></i>
                                    </Box>

                                </Box>
                            </Box>
                        </Grid>


                        <Grid item lg={3} md={3} className=''>
                            <Box >
                                <Typography color="initial">Select Zone</Typography>
                                <Box width={"80%"}>

                                    <Autocomplete
                                        className="user3"

                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Select Zone" variant="outlined" />}
                                    >Hello</Autocomplete>
                                </Box>

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={3}>
                            <Box >
                                <Typography color="initial">Select Emergancy</Typography>
                                <Box width={"80%"}>

                                    <Autocomplete
                                        className="user2"

                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Select Emergancy" variant="outlined" />}
                                    >Hello</Autocomplete>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item lg={2} md={2}>
                            <Box >
                                <Typography color="initial">Select Status</Typography>
                                <Box width={"80%"}>

                                    <Autocomplete
                                        className="user1"

                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} placeholder="Select Status" variant="outlined" />}
                                    >Hello</Autocomplete>
                                </Box>
                            </Box>
                        </Grid>




                    </Grid>

                    <Grid item lg={4} md={4}>

                    </Grid>
                </Grid>
                
                <TableOfData />
                
                

            </Grid>






        </Grid>
    )


}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];

{/**
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
    createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
    createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
    createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
    createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
    createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
    createData(6, "EE W-II C", "Dwarka Mor", "zone VI", "Ravi Kumar", "9544641234", "04", "02", "02"),
];
 */}
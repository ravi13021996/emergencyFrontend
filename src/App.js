import logo from './logo.svg';
import './App.css';


import { Avatar, Badge, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Header from "./components/EmergencyManagement/Header"


import { BrowserRouter } from 'react-router-dom';
import EmergencyFooter from './components/EmergencyManagement/EmergencyFooter';
import MainDiv from './components/EmergencyManagement/MainDiv';

let data =new FormData()
data.append("name","ravi")
data.append("course","mca")
data.append("address","badarpur")

let obj={}

// for(let n=0;n<data.keys().length();n++)
//   //obj={...obj, [n]:""}
  
// }


console.log(Object.fromEntries(data))
//console.log(obj,"obj")
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
  }
}));

function App() {

  const classes = useStyles();


  return (
    <BrowserRouter>
      <div className="App" style={{ height: "100vh" }}>
        <Header />
        <MainDiv />
        <EmergencyFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;

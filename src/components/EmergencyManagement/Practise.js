import React, { useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { Autocomplete } from '@material-ui/lab';
import TextField from "@material-ui/core/TextField";
import { Box } from '@material-ui/core';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [designationValue,setDesignationValue]=useState()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    
    setPage(0);
  };
  console.log(rowsPerPage)
  


  return (
      <div>
          <Box width={"30%"} marginTop="20px" marginLeft={"20px"}>
          <Autocomplete id='header'
        getOptionLabel={(designation) => designation.title}
        className='user'
        options={top100Films}
        filterSelectedOptions
        clearText="clear"

        getOptionSelected={(option, value) => option.name === value.name}
        disableClearable
        onChange={(event, newValue) => setDesignationValue(newValue)}
        renderInput={(params) =>
          <TextField
            {...params}
            variant='outlined'
            margin='dense'
            placeholder='Select Designation'
          />
      
          
        }
      />
      </Box>
      </div>
  );
}
const designationList=["manager","TL","Collegue"]
const top100Films = [
    { title: 'zone I', year: 1994 },
    { title: 'zone II', year: 1972 },
    { title: 'zone III', year: 1974 },
    { title: 'zone IV', year: 2008 },
    { title: 'Zone V', year: 1957 },
]
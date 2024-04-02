import React from 'react';
import { Card, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, Grid, TextField, InputAdornment, Button, Typography } from '@mui/material';
import { tableStyles } from '../constants/tableStyles';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import StatusCards from './StatusCard';
function CustomerTable(props) {
  const navigate = useNavigate();
  const classes = tableStyles();
  const content = props.data
  const tableHeader = [

    "Customer Company",
    "Phone Number",
    "E-mail ID",
    "Address",
    "Authorized Person",

  ];
  const handleAddCustomer = () => {
    navigate('/createcustomer');

  };
  return (
    <>
      <Grid item xs={12} marginTop={10} >
        <Typography style={{ fontWeight: 'bold' }}>Customer Creation</Typography>
      </Grid>
      <StatusCards />
      <Grid container xs={12} marginTop={2} flexDirection='row' spacing={2} >
        <Grid item xs={3}>
          <TextField
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "white",
              width: "100%",


            }}
          />
        </Grid>
        <Grid item xs={8} alignContent='center'>


          <Button
            onClick={handleAddCustomer}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              color: "black",
              m: 2,
              '&:hover': {
                backgroundColor: "white",
              },
            }}
          >
            Add New Customer
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FileUploadOutlinedIcon color="white" />}
            sx={{
              backgroundColor: "black",
              border: "1px solid black",
              color: "white",
              m: 2,
              '&:hover': {
                backgroundColor: "black",
              },
            }}
          >
            Import Customer
          </Button>


          <Button
            variant="contained"
            color="primary"
            startIcon={<PrintIcon />}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              color: "black",
              m: 2,
              '&:hover': {
                backgroundColor: "white",
              },
            }}
          >
            Print
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              color: "black",
              m: 2,
              '&:hover': {
                backgroundColor: "white",
              },
            }}
          >
            Download
          </Button>
        </Grid>
      </Grid>


      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Card component={Paper} sx={{ border: "1px solid #DADADA" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHeader.map((item, index) => (
                      <TableCell className={classes.tableHeader} key={`customer-${item}`}>{item}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(content || []).map((item1, index) => (
                    <React.Fragment key={`${index}-customerId`}>
                      <TableRow>

                        <TableCell className={classes.tableBody}>{item1.companyName}</TableCell>
                        <TableCell className={classes.tableBody}>{item1.phoneNumber}</TableCell>
                        <TableCell className={classes.tableBody}>{item1.emailId}</TableCell>
                        <TableCell className={classes.tableBody}>{item1.addressLine1 + item1.addressLine2 + item1.city + item1.state + item1.pincode}</TableCell>
                        <TableCell className={classes.tableBody}>{item1.authorisedPersonName}</TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}


export default CustomerTable
import  React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Box, Toolbar, IconButton, InputBase, Badge, Grid,  List } from '@mui/material';
import { mainListItems } from './ListItems';
import CustomerCreationForm from './CustomerForm';
import CustomerTable from './CustomerTable';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid black',
  backgroundColor: '#F6F6F6', 
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Dashboard() {
  const [customerData, setCustomerData] = useState([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{backgroundColor:'white'}}>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
       
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:'black'}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton >
            <IconButton   color="black" size="large">
                <SettingsIcon />
            </IconButton>
            <IconButton  color="black" size="large" >
                <Avatar  />
              </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid  container xs={12}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
           
          }}
        ></Toolbar>
        <Box sx={{ position: "fixed", top: "65px", backgroundColor:"black" , height:"100%", width:"4%"}}>
          <List component="nav">{mainListItems}</List>
        </Box>
        <Grid
          container
          xs={10}
          maxWidth="lg"
          sx={{
          marginLeft:5,
            zIndex: 999,
          }}
        >
   <Router>
      <Routes>
        <Route path="/createcustomer" element={<CustomerCreationForm setCustomerData={setCustomerData} />} />
        <Route path="/" element={<CustomerTable data={customerData} />} />
      </Routes>
    </Router>
        
       
        </Grid>
      </Grid>
    </Box>
  );
}

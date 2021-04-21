import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Img from './Images/logo.svg';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import './components/header.css';
import Test from './Test';
// import MenuIcon from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create('width'),
      backgroundColor: '#ffffff',
      boxShadow: '0 0.125em 0.25em 0 rgba(213, 213, 213, 0.5)',
      paddingLeft: '0px',
      paddingTop:'10px',
      height: '80px'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    header:{
        background:'#ffffff'
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    
    <div className={classes.header}> 
    
      <AppBar position="static" color='transparent' className={classes.appBar}>
        <Toolbar>

          <Typography variant="h6" className={classes.title} align="left">
            <img src={Img} style={{width:'14%',height:'14 %',paddingTop:'10px'}} /> 
          </Typography>

          <div style={{
            color:'#808080',
            fontSize:'14px',
            paddingRight:'50px',
            paddingLeft:'20px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',}}>
            
            <PhoneIphoneIcon/>
            <span>DOWNLOAD APP</span>
          </div>
            <div>
            <div >{"Nehal Jain"}</div>
            <div style={{fontSize:'12px',color:'gray'}}>{"8th Grade"}</div>
            </div>
            
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >

                               
                <AccountCircle />
                
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              > 
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      
    <div>
      <Test/>
      {/* <SwipeableTemporaryDrawer/> */}
    </div>
    
    </div>
     
  );
} 
   
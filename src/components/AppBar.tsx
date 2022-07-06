import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton ,MenuItem, Menu} from '@mui/material/';

import  AccountCircle from '@mui/icons-material/AccountCircle';
import Profile from './Profile';



export default function MenuAppBar() {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);    
  };

  const showProfile = () => {
    console.log("profile")
    setAnchorEl(null);
  }

  const handleClose = () => {    
    console.log('close');
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test-App
          </Typography>
          
            <div>
              <IconButton
                size="large"
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem href='#' onClick={showProfile}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
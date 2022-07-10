/* import * as React from 'react'; */
import React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton ,MenuItem, Menu} from '@mui/material/';

import  AccountCircle from '@mui/icons-material/AccountCircle';
import Profile from './Profile';

interface MenuProps { 
  setIsActive: (active: boolean) => void;    
}

const MenuAppBar: React.FC<MenuProps> = (props) => {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);    
  };

  const showProfile = () => {
    console.log("profile");
    props.setIsActive(true);
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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
                <MenuItem onClick={showProfile}>Profile</MenuItem>
                <MenuItem onClick={showProfile}>My account</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuAppBar;
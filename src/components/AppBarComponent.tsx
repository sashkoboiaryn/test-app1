/* import * as React from 'react'; */
import React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton ,MenuItem, Menu} from '@mui/material/';
import  AccountCircle from '@mui/icons-material/AccountCircle';
import {Link, Outlet} from 'react-router-dom';



const MenuAppBar: React.FC = () => {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);    
  };

  const handleClose = () => {    
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>         
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, borderBottom: 'none' }}>
            <Link className='mainLink' to='/'>Test-App</Link> 
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
                <Link className='menuLink' to="profile"><MenuItem onClick={handleClose}> Profile</MenuItem></Link>
                <Link className='menuLink' to="profile"><MenuItem onClick={handleClose}>My account</MenuItem></Link>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>

      <Outlet />

    </Box>
  );
}

export {MenuAppBar};
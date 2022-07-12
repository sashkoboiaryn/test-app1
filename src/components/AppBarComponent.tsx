import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material/";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, Outlet } from "react-router-dom";

const MenuAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, borderBottom: "none" }}
          >
            <Link className="mainLink" to="/">
              Test-App
            </Link>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Link className="menuLink" to="profile">
                <AccountCircle />
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export { MenuAppBar };

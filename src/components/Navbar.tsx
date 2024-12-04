import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ['Home', 'About', 'Project', 'Contact'];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dhanpal Rajpurohit
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {menuItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
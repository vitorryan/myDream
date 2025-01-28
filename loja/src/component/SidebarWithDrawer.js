import React, { useState } from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { Menu, Home, Info, ContactMail } from '@mui/icons-material';

function SidebarWithDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => {
    setOpen(state);
  };

  const menuItems = [
    { text: 'Home', icon: <Home /> },
    { text: 'About', icon: <Info /> },
    { text: 'Contact', icon: <ContactMail /> },
  ];

  return (
    <>
      {/* Menu Button */}
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{ position: 'absolute', 
            top: 10, 
            left: 10,
            width: 105,
            height: 105,
            color: 'rgb(0, 0, 0, 0)'
        }}
        aria-label="menu"
      >
        <Menu />
      </IconButton>

      {/* Drawer Component */}
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{ width: 300, bgcolor: 'background.paper', height: '100%' }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          {/* Drawer Header */}
          <Box sx={{
                    p: 2,
                    textAlign: 'center',
                    bgcolor: 'primary.main', 
                    color: 'white' }}>
            <Typography variant="h6">VITIN DO GRAU <br />motorcycle</Typography>
          </Box>

          {/* Menu List */}
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default SidebarWithDrawer;

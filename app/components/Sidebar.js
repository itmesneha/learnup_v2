import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Fugaz_One } from 'next/font/google';
import Grid2 from '@mui/material/Grid2'

const fugazOne = Fugaz_One({ 
    subsets: ['latin'], 
    weight: ['400'], // You can specify other weights if needed
  });

export default function Sidebar() {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Divider />
      <List>
        <ListItem> 
          <ListItemButton
           sx={{ // Apply custom styles to ListItemButton
            padding: '1rem', // Add padding
            typography: 'h4', // Use h5 typography for larger font size
            fontFamily: fugazOne.style.fontFamily, // Replace with your desired font
          }}
          className="gradient-text"
          >
            LearnUp 
          </ListItemButton>
        </ListItem>
        <ListItem>
        <Grid2 container spacing={2}> {/* Wrap buttons in Grid2 container */}
            <Grid2 item xs={9}> {/* New Plan button occupies 80% */}
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                sx={{ 
                  background: 'linear-gradient(to left,rgb(112, 126, 221),rgb(52, 94, 231))', 
                  '&:hover': {
                    background: 'linear-gradient(to left, #98a1f7, #574dc4)',
                  },
                  width: '100%', 
                }}
              >
                New Plan
              </Button>
            </Grid2>
            <Grid2 item xs={3}> 
              <IconButton 
                aria-label="search"
                sx={{ 
                  background: 'rgb(112, 126, 221)', 
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(to left, #98a1f7, #574dc4)',
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </Grid2>
          </Grid2>
        </ListItem>
      </List>
      <hr />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SpeakerNotesIcon />
            </ListItemIcon>
            Planner
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            Collections
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            Track
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            Discover
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer variant="permanent">
      {DrawerList}
    </Drawer>
  );
}
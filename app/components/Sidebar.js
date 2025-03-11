import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

export default function Sidebar() {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Divider />
      <List>
        <ListItem disablePadding> 
          <ListItemButton>
            <ListItemIcon>
              <LightbulbIcon />
            </ListItemIcon>
            LearnUp 
          </ListItemButton>
        </ListItem>
        <ListItem>
        <Stack direction="row" spacing={2}>
            <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                sx={{ 
                    background: 'linear-gradient(to left,rgb(112, 126, 221),rgb(52, 94, 231))', 
                    '&:hover': { // Hover effect
                    background: 'linear-gradient(to left, #98a1f7, #574dc4)', // Reverse gradient on hover
                    },
                    // textTransform: 'none',
                }}
                >
                New Plan
            </Button>
            <IconButton aria-label="search"
                sx={{ 
                    background: 'rgb(112, 126, 221)', 
                    color: 'white',
                    '&:hover': { // Hover effect
                    background: 'linear-gradient(to left, #98a1f7, #574dc4)', // Reverse gradient on hover
                    },
                    // textTransform: 'none',
                }}
            >
                <SearchIcon />
            </IconButton>
        </Stack>
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
'use client';
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
import { useRouter, usePathname } from 'next/navigation';

const fugazOne = Fugaz_One({ 
    subsets: ['latin'], 
    weight: ['400'], // You can specify other weights if needed
  });

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
  
    const handlePlannerClick = () => {
      router.push('/planner');
    };

    const handleCollectionsClick = () => {
      router.push('/collections');
    }

    const handleTrackCLick = () => {
      router.push('/track');
    }

    const handleDiscoverClick = () => {
      router.push('/discover');
    }

  const DrawerList = (
    <Box  role="presentation">
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
        <Grid2 container spacing={2}> 
            <Grid2 item xs={3}> 
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
            <Grid2 item xs={1}> 
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
          <ListItemButton onClick={handlePlannerClick}
            sx={{
              ...(pathname === '/planner' && { // Conditionally apply styles
                backgroundColor: 'rgba(8, 94, 181, 0.08)', 
                color: 'rgb(8, 94, 181)',
              }),
            }}>
            <ListItemIcon sx={{
              ...(pathname === '/planner' && { // Conditionally apply styles
                color: 'rgb(8, 94, 181)',
              }),
            }}>
              <SpeakerNotesIcon />
            </ListItemIcon>
            Planner
          </ListItemButton>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-400 '>Today</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>How do I learn python in 2 months...</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>What should I learn in order to get...</span>
        </ListItem>
        <hr className='p-2'/>
        <ListItem>
          <span className = 'text-slate-400'>7 days</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>How should I learn to understand...</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>Becoming a first time dog parent...</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>Learning to bake a cute cake 101...</span>
        </ListItem>
        <hr className='p-2'/>
        <ListItem>
          <span className = 'text-slate-400'>30 days</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>Finance guide for 20 somethings...</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>Market analysis sales supermarket...</span>
        </ListItem>
        <ListItem>
          <span className = 'text-slate-700 '>String Theory guide for dummies...</span>
        </ListItem>
        <hr className='p-5' sx={{ borderColor: 'red' }}/>
        <ListItem disablePadding>
          <ListItemButton onClick={handleCollectionsClick}
            sx={{
              ...(pathname === '/collections' && { // Conditionally apply styles
                backgroundColor: 'rgba(8, 94, 181, 0.08)', 
                color: 'rgb(8, 94, 181)',
              }),
            }}>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            Collections
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTrackCLick}>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            Track
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleDiscoverClick}>
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
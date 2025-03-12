import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';


export default function ChatBox() {
     const handleChatSend = () => {
            setIsChatActive(true); // Activate chat
        };
  return (
    <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            label="What do you want to learn?"
            variant = 'outlined' 
            fullWidth
            sx={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { // target the outline
                border: 'none', // remove outline
              },
              '&:focus-within': { // target the focus state
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // remove outline on focus
                }
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="send message" edge="end" sx={{ marginRight: '10px' }} onClick={handleChatSend}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
  )
}

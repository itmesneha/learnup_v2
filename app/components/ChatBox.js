import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { db, collection, query, where, getDocs, addDoc } from '../../firebase.js';

export default function ChatBox({ isChatActive, setIsChatActive }) { // Receive props
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const fetchResponse = async (input) => {
        const responsesCollection = collection(db, 'chatResponses');
        const q = query(responsesCollection, where('userInput', '==', input));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const responseDoc = querySnapshot.docs[0].data();
            return responseDoc.response;
        } else {
            return "I'm sorry, I don't have a response for that.";
        }
    };

    const handleChatSend = async () => {
        setIsChatActive(true); // Update state via prop setter
        const response = await fetchResponse(userInput);

        setChatMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, sender: 'user' },
            { text: response, sender: 'bot' },
        ]);

        setUserInput('');
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
          <div className = 'flex flex-col'>
            {chatMessages.map((message, index) => (
              <Box
                  key={index}
                  sx={{
                      maxWidth: '70%', // Limit message box width
                      padding: '10px',
                      margin: '5px 0',
                      borderRadius: '10px',
                      backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E5E5EA', // Different background colors
                      alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start', // Align left or right
                      textAlign: 'left', // Ensure text is left-aligned within the box
                      wordWrap: 'break-word', // Handle long words
                  }}
              >
                  {message.text}
              </Box>
          ))}
          </div> 
          <div>
            <TextField
                label="What do you want to learn?"
                variant="outlined"
                fullWidth
                sx={{
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:focus-within': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    },
                }}
                value={userInput}
                onChange={handleInputChange}
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
            </div>
        </Box>
    );
}
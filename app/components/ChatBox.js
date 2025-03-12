import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ArrowBack from '@mui/icons-material/ArrowBack';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { db, collection, query, where, getDocs, addDoc } from '../../firebase.js';
import { Button } from '@mui/material';

export default function ChatBox({ isChatActive, setIsChatActive }) {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const fetchResponse = async (input) => {
        const responsesCollection = collection(db, 'chat_prompts');
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
        setIsChatActive(true);
        const response = await fetchResponse(userInput);

        setChatMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, sender: 'user' },
            { text: response, sender: 'bot' },
        ]);

        setUserInput('');
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            await handleChatSend();
        }
    };


    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px 0',
                display: 'flex',
                flexDirection: 'column', // Arrange children vertically
                // height: '100vh', // Take full viewport height
                justifyContent: 'space-between', // Push textbox to bottom
            }}
        >
            {/* <Button variant="outlined" startIcon={<ArrowBack />}>
                  Back
            </Button> */}
            <div className="flex flex-col" style={{ overflowY: 'auto', flex: 1 }}> {/* Add scrollable container */}
                
                {chatMessages.map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            maxWidth: '70%',
                            padding: '10px',
                            margin: '5px 0',
                            borderRadius: '10px',
                            backgroundColor: message.sender === 'user' ? '#cdcaee' : '#E5E5EA',
                            alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                            textAlign: 'left',
                            wordWrap: 'break-word',
                        }}
                    >
                        {message.text}
                    </Box>
                ))}
            </div>
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
                onKeyDown={handleKeyDown}
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
    );
}
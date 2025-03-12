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
    const [response, setResponse] = useState(null); // Stores fetched response


    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const fetchResponse = async (input) => {
        try {
            const responsesCollection = collection(db, "chat_prompts");
            const querySnapshot = await getDocs(responsesCollection); // Fetch all documents
    
            let matchedDoc = null;
    
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.topic.toLowerCase().includes(input.toLowerCase())) { // Partial match
                    matchedDoc = {
                        topicId: doc.id, // Get Firestore document ID
                        topic: data.topic,
                        questions: [
                            data.q1 || "",
                            data.q2 || "",
                            data.q3 || "",
                            data.q4 || "",
                            data.q5 || "",
                        ].filter(Boolean), // Remove empty questions
                    };
                }
            });
    
            return matchedDoc || { topicId: null, topic: null, questions: ["No matching topic found."] };
    
        } catch (error) {
            console.error("Error fetching chat prompts:", error);
            return { topicId: null, topic: null, questions: ["Error fetching data."] };
        }
    };

    // const handleChatSend = async () => {
    //     setIsChatActive(true);
    //     const response = await fetchResponse(userInput);
    //     setChatMessages((prevMessages) => [
    //         ...prevMessages,
    //         { text: userInput, sender: 'user' },
    //         { text: response., sender: 'bot' },
    //     ]);

    //     setUserInput('');
    // };

    const handleChatSend = async () => {
        setIsChatActive(true);
    
        // Step 1: If no response has been fetched yet, fetch from Firestore
        if (!response) {
            const fetchedResponse = await fetchResponse(userInput); // Fetch topic data
    
            if (!fetchedResponse || fetchedResponse.questions.length === 0) {
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    { text: userInput, sender: "user" },
                    { text: "I'm sorry, I don't have a response for that.", sender: "bot" },
                ]);
                setUserInput("");
                return;
            }
    
            setResponse(fetchedResponse); // Store the full response
    
            // Step 1a: Immediately display the first question
            setChatMessages((prevMessages) => [
                ...prevMessages,
                { text: userInput, sender: "user" }, // Show user input
                { text: fetchedResponse.questions[0], sender: "bot" }, // Show first bot question
            ]);
    
            setUserInput(""); // Clear input field
    
            // Step 1b: Remove the first question from response
            setResponse((prevResponse) => ({
                ...prevResponse,
                questions: fetchedResponse.questions.slice(1), // Remove first question
            }));
            
            return; // Stop further execution so the function doesn't proceed
        }
    
        // Step 2: User sends a reply to a question
        setChatMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, sender: "user" },
        ]);
    
        setUserInput(""); // Clear input field
    
        // Step 3: If questions remain, add one question and remove it from response
        if (response.questions.length > 0) {
            const nextQuestion = response.questions[0]; // Get first question
            setChatMessages((prevMessages) => [
                ...prevMessages,
                { text: nextQuestion, sender: "bot" },
            ]);
    
            setResponse((prevResponse) => ({
                ...prevResponse,
                questions: prevResponse.questions.slice(1), // Remove first question
            }));
        }
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
            }}
        >
            <div className="flex flex-col" style={{ overflowY: 'auto', flex: 1 }}> 
                {chatMessages.map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            // maxWidth: '70%',
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
            <Box sx={{
              position: 'sticky',
              bottom: 0,
              width: '100%',
              padding: '10px',
              zIndex: 10,
              // boxShadow: '0px -2px 10px rgba(0,0,0,0.1)' // Optional: adds a subtle shadow
            }}>
              
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
        </Box>
    );
}
// app/planner/page.js
'use client';

import * as React from "react";
import Paper from '@mui/material/Paper';
import { Grid2 } from "@mui/material";
import Image from "next/image"; 
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';

export default function Planner() {
    const router = useRouter(); // Initialize router
    
      const handleSend = () => {
        router.push('/planner'); // Navigate to /planner
      };
    const cardsData1 = [
        {
          imageUrl: "/machinelearning.jpeg",
          text: "Get started with Machine Learning",
        },
        {
          imageUrl: "/sora.jpg",
          text: "Interface Design with Figma for UX designers",
        },
        {
          imageUrl: "/figma.jpeg",
          text: "Create a 3-D anime with SORA for publishing",
        },
        {
          imageUrl: "/comm.jpg",
          text: "Improve your communication skills",
        },
        {
          imageUrl: "/acca.png",
          text: "Prepare for ACCA exams with our study plans",
        },
      ];
    
      const cardsData2 = [
        {
          imageUrl: "/dog.jpg",
          text: "Golden Retriever Training For Hopeful pet owners 101",
        },
        {
          imageUrl: "/coins.jpg",
          text: "Household Investment Strategies",
        },
        {
          imageUrl: "/amazon.png",
          text: "Amazon Store Management for Business Owners",
        },
        {
          imageUrl: "/hiphop.jpeg",
          text: "Become a Hip-Hop Dancer in 30 days",
        },
        {
          imageUrl: "/scifi.jpeg",
          text: "Writing your first Sci-Fi Novel: A guide for Dummies",
        },
      ];
    
      return (
        <div className="w-full h-full flex pl-5 pr-5 flex-col">
          <div className="gradient-text" style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Hi there! <br />
            Ready to learn something new? 🚀 <br />
            What would you like to explore today? 
          </div>
          <div className="text-slate-500 font-bold pt-5">
            You might be interested in:
            <Paper className="p-4 pt-5" elevation={0} style={{ display: "flex", flexWrap: "wrap" }}>
              <Grid2 container spacing={2} justifyContent="flex-start">
                {cardsData1.map((card, index) => (
                  <Grid2 item key={index}>
                    <Paper
                      className="p-4 flex flex-col items-center justify-between" 
                      elevation={3}
                      style={{ width: "250px", height: "200px", textAlign: "center" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "8px",
                          padding: "5px",
                          display: "inline-block"
                        }}
                      >
                        <Image src={card.imageUrl} alt={card.text} width={100} height={100} />
                      </div>
                      <p className = "font-normal " style={{ wordWrap: "break-word" }}>
                        {card.text}
                      </p>
                    </Paper>
                  </Grid2>
                ))}
                <Grid2 sx = {{pt: 10, pl: 1}} justifyContent="flex-start">
                <Button 
                    endIcon={<ArrowForwardIcon />}
                    variant="contained" 
                    sx={{ 
                      background: 'linear-gradient(to left,rgb(112, 126, 221),rgb(52, 94, 231))', 
                      '&:hover': {
                        background: 'linear-gradient(to left, #98a1f7, #574dc4)',
                      },
                      width: '100%', 
                      textTransform:'none', 
                    }}
                  >
                    See more
                </Button>
                </Grid2>
              </Grid2>
            </Paper>
          </div>
          <div className="text-slate-500 font-bold pt-5">
            People are learning:
            <Paper className="p-4 pt-5" elevation={0} style={{ display: "flex", flexWrap: "wrap" }}>
              <Grid2 container spacing={2} justifyContent="flex-start">
                {cardsData2.map((card, index) => (
                  <Grid2 item key={index}>
                    <Paper
                      className="p-4 flex flex-col items-center justify-between" 
                      elevation={3}
                      style={{ width: "250px", height: "200px", textAlign: "center" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "8px",
                          padding: "5px",
                          display: "inline-block"
                        }}
                      >
                        <Image src={card.imageUrl} alt={card.text} width={100} height={100} />
                      </div>
                      <p className = "font-normal " style={{ wordWrap: "break-word" }}>
                        {card.text}
                      </p>
                    </Paper>
                  </Grid2>
                ))}
                <Grid2 sx = {{pt: 10, pl: 1}} justifyContent="flex-start">
                <Button 
                    endIcon={<ArrowForwardIcon />}
                    variant="contained" 
                    sx={{ 
                      background: 'linear-gradient(to left,rgb(112, 126, 221),rgb(52, 94, 231))', 
                      '&:hover': {
                        background: 'linear-gradient(to left, #98a1f7, #574dc4)',
                      },
                      width: '100%', 
                      textTransform:'none', 
                    }}
                  >
                    See more
                </Button>
                </Grid2>
              </Grid2>
            </Paper>
          </div>
          <div>
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
                  <IconButton aria-label="send message" edge="end" sx={{ marginRight: '10px' }} onClick={handleSend}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        </div>
        </div>
      );
}
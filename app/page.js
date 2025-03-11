'use client';

import * as React from "react";
import Paper from '@mui/material/Paper';
import { Grid2 } from "@mui/material";
import Image from "next/image"; 
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { transform } from "next/dist/build/swc/generated-native";

export default function Home() {
  const cardsData = [
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
      imageUrl: "/communication.jpg",
      text: "Improve your communication skills",
    },
    {
      imageUrl: "/acca.png",
      text: "Prepare for ACCA exams with our study plans",
    },
  ];

  return (
    <div className="w-full h-full flex p-10 flex-col">
      <div className="gradient-text pb-10" style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Hi there! <br />
        Ready to learn something new? 🚀 <br />
        What would you like to explore today? <br />
      </div>
      <div className="text-slate-500 font-bold">
        You might be interested in:<br />
        <Paper className="p-4" elevation={0} style={{ display: "flex", flexWrap: "wrap" }}>
          <Grid2 container spacing={2} justifyContent="flex-start">
            {cardsData.map((card, index) => (
              <Grid2 item key={index}>
                <Paper
                  className="p-4 flex flex-col items-center justify-between" // Added justify-between
                  elevation={3}
                  style={{ width: "250px", height: "250px", textAlign: "center" }}
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
                  <p style={{ whiteSpace: "normal", wordWrap: "break-word", marginTop: "10px" }}>
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
    </div>
  );
}

import React from 'react'
import Image from "next/image"; 
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';

export default function PeopleLearning() {
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
  )
}

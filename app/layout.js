'use client';

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Grid2 from '@mui/material/Grid2'; 
import ChatBox from "./components/ChatBox";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Grid2 container spacing={2} className="h-screen">
          <Grid2 size = {2}>
            <Sidebar />
          </Grid2>
          <Grid2 size = {10}>
            {children}
          </Grid2>
          {/* <Grid2 size = {10}>
            <ChatBox />
          </Grid2> */}
        </Grid2>
      </body>
    </html>
  );
}

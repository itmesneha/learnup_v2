'use client';

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Grid from '@mui/material/Grid2'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Grid container className="h-screen">
          {/* Sidebar with fixed width */}
          <Grid item sx={{ width: 250, flexShrink: 0 }}>
            <Sidebar />
          </Grid>
          
          {/* Main content should take the remaining space */}
          <Grid item sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", display: "flex" }}>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}

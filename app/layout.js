'use client';

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Grid2 from '@mui/material/Grid2'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Grid2 container spacing={2} className="h-screen">
          <Grid2 size = {4}>
            <Sidebar />
          </Grid2>
          <Grid2 size = {8}>
            {children}
          </Grid2>
        </Grid2>
      </body>
    </html>
  );
}

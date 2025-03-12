'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import IntroBanner from '../components/IntroBanner';
import InterestedIn from '../components/InterestedIn';
import PeopleLearning from '../components/PeopleLearning';
import ChatBox from '../components/ChatBox';
import Grid2 from '@mui/material/Grid2'; 

export default function Planner() {
    const [isChatActive, setIsChatActive] = useState(false);

    const router = useRouter();

    return (
        <div sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        }}
        >
            <Grid2 container spacing = {2}>
                <Grid2 size = {12}>
                {!isChatActive && (
                    <>
                    <IntroBanner />
                    <InterestedIn />
                    <PeopleLearning />
                    </>
                )}
                </Grid2>
                <Grid2 size = {12}>
                    <ChatBox sx = {{ position: 'sticky', bottom: 0, width: '100%', zIndex: 100  }} isChatActive={isChatActive} setIsChatActive={setIsChatActive} />
                </Grid2>
            </Grid2>
        </div>
    );
}
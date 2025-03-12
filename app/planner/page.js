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
        <div className="flex flex-col pr-5 pb-5">
            <Grid2 container spacing = {2}>
                {!isChatActive && (
                <Grid2 size = {12}>
                    <IntroBanner />
                    <InterestedIn />
                    <PeopleLearning />
                </Grid2>
                )}
                {/* {isChatActive && ( */}
                <Grid2 size = {12}>
                        <div>
                            <ChatBox isChatActive={isChatActive} setIsChatActive={setIsChatActive} /> 
                        </div>
                </Grid2>
                {/* )} */}
            </Grid2>
        </div>
    );
}
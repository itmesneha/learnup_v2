'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import IntroBanner from '../components/IntroBanner';
import InterestedIn from '../components/InterestedIn';
import PeopleLearning from '../components/PeopleLearning';
import ChatBox from '../components/ChatBox';

export default function Planner() {
    const [isChatActive, setIsChatActive] = useState(false);

    const router = useRouter();

    return (
        <div className="flex flex-col">
            {!isChatActive && (
                <>
                    <IntroBanner />
                    <InterestedIn />
                    <PeopleLearning />
                    <div>
                        <ChatBox isChatActive={isChatActive} setIsChatActive={setIsChatActive} /> {/* Pass state and setter */}
                    </div>
                </>
            )}
            {isChatActive && (
                <div>
                    <ChatBox isChatActive={isChatActive} setIsChatActive={setIsChatActive} /> {/* Pass state and setter */}
                </div>
            )}
        </div>
    );
}
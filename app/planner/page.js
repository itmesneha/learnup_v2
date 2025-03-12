// app/planner/page.js
'use client';

import React, { useState } from 'react';


import { useRouter } from 'next/navigation';
import IntroBanner from '../components/IntroBanner';
import InterestedIn from '../components/InterestedIn';
import PeopleLearning from '../components/PeopleLearning';
import ChatBox from '../components/ChatBox';

export default function Planner() {
    const [isChatActive, setIsChatActive] = useState(false);
    
    const router = useRouter(); // Initialize router
    
      return (
        <div className="w-full h-full flex pl-5 pr-5 flex-col">
            {!isChatActive && ( // Render main content if chat is not active
            <>
                <IntroBanner />
                <InterestedIn />
                <PeopleLearning />
          <div>
          <ChatBox />
        </div>
        </>
    )}
    {isChatActive && ( // Render chat interface if chat is active
      <div>
        <ChatBox />
      </div>
    )}
        </div>
      );
}
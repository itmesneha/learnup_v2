// app/page.js
'use client';

import * as React from "react";

export default function Home() {
  return (
    <div>
      <div className="w-full h-full flex p-30 gradient-text" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Hi there! <br />
          Ready to learn something new? 🚀 <br />
          What would you like to explore today?
      </div>
      <div>
        You might be interested in
      </div>
    </div>
  );
}
'use client';

import "./globals.css";
import Sidebar from "./components/Sidebar";


// export const metadata = {
//   title: "LearnUp",
//   description: "Learn Anything Today.",
// };

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex"> {/* Use flex for layout */}
          <Sidebar />
        <div className="flex-1"> {/* Main content area */}
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}

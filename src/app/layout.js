"use client";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}

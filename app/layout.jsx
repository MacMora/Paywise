"use client"; // This is a client component
import "./globals.css";

export default function RootLayout({ children }){
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
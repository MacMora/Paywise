"use client"; // This is a client component
import "./globals.css";
import { source_code_pro } from '@/public/fonts/index';

export default function RootLayout({ children }){
    return(
        <html lang="en" className={source_code_pro.variable}>
            <body>{children}</body>
        </html>
    )
}
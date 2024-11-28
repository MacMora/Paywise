"use client"; // This is a client component
import "./globals.css";
import { source_code_pro, cabin } from '@/public/fonts/index';

export default function RootLayout({ children }){
    return(
        <html lang="en" className={`${source_code_pro.variable} ${cabin.variable}`}>
            <body>{children}</body>
        </html>
    )
}
"use client";
import React, { useState } from "react";
import Image from 'next/image'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Seccion Logo */}
            <div className="bg-white flex items-center shadow-sm fixed z-20 py-3 px-5 w-full">
                <div className="flex lg:basis-1/5 gap-x-4">
                    <div className="flex items-center">
                        <h1>
                            <Image src='/images/paywise_logo.png' alt="Paywise Logo" width={130} height={30} />
                        </h1>
                    </div>
                    <div>
                        <div className="bg-[#1E64A7] text-white rounded-3xl py-2 px-2.5" id="Navbar">
                            <small>Documentation</small>
                        </div>
                    </div>
                </div>
                {/* Menú central (visible en pantallas grandes) */}
                <div className="hidden lg:flex basis-2/5 ml-auto gap-x-8">
                        <a href="https://devportal.pwapp.co/" className="text-gray-700">Home</a>
                        <a href="#" className="text-gray-700">Docs</a>
                        <a href="https://devportal.pwapp.co/apis" className="text-gray-700">APIs</a>
                        <a href="https://devportal.pwapp.co/products" className="text-gray-700">Products</a>
                        <a href="#" className="text-gray-700">Plugins</a>
                </div>
                {/* Menú de inicio de sesión */}
                <div className="hidden lg:flex basis-1/5 justify-end items-center gap-x-6">
                    <a href="https://devportal.pwapp.co/signin" className="text-gray-700">Sign in</a>
                    <a href="https://devportal.pwapp.co/signup" className="text-gray-700">Sign up</a>
                </div>
                <button 
                    className="lg:hidden ml-auto text-gray-700" 
                    onClick={toggleSidebar}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            {/* SideBar y Menú desplegable en pantallas pequeñas */}
            <div className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full hover:overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="p-5">
                    <div className="lg:hidden mb-4 flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-4 font-semibold px-2">
                            <a href="https://devportal.pwapp.co/" className="">Home</a>
                            <a href="#" className="">Docs</a>
                            <a href="https://devportal.pwapp.co/apis" className="">APIs</a>
                            <a href="https://devportal.pwapp.co/products" className="">Products</a>
                            <a href="#" className="">Plugins</a>
                        </div>
                        <div className="flex flex-col gap-y-4 font-semibold px-2 border-solid border-t border-[#d8dee4]">
                            <a href="https://devportal.pwapp.co/signin" className="pt-2">Sign in</a>
                            <a href="https://devportal.pwapp.co/signup" className="">Sign up</a>
                        </div>
                    </div>
                    {/* Contenido del Sidebar */}
                    <p className="font-semibold py-2 px-2 border-solid border-t border-[#d8dee4]"><small>Get Started</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#api_reference">About PayWise&apos;s API</a></li>
                        <li className="p-2"><a href="#use_cases">Use Cases</a></li>
                        <li className="p-2"><a href="#authentication">Authentication</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Setup</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#personal">Personal</a></li>
                        <li className="p-2"><a href="#business">Business</a></li>
                        <li className="p-2"><a href="#institutions">Institution</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Payment & Inquiry</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#general_payments">General</a></li>
                        <li className="p-2"><a href="#payment_authorization">Payment Authorization</a></li>
                        <li className="p-2"><a href="#payment_status">Payment Status</a></li>
                        <li className="p-2"><a href="#balance_inquiry">Balance Inquiry</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Transactions</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#agent_transactions">Agent Transactions</a></li>
                        <li className="p-2"><a href="#third_party_transactions">Third Party Transactions</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Merchant</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#request_payment">Request for Payment</a></li>
                        <li className="p-2"><a href="#generate_cc_payment_url">Generate Credit Card Payment URL</a></li>
                        <li className="p-2"><a href="#check_cc_transaction">Check Credit Card Transaction</a></li>
                        <li className="p-2"><a href="#qr_codes">QR Codes</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Products</small></p>
                    <ul className="">
                        <li className="p-2"><a href="https://devportal.pwapp.co/api-details#api=66a06819a8aecc7dd68da65b" target="_blank" rel="noopener noreferrer">Institution</a></li>
                        <li className="p-2"><a href="https://devportal.pwapp.co/api-details#api=66a06721f6563de21054271d" target="_blank" rel="noopener noreferrer">Merchant</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;

"use client";
import React, { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Seccion Logo */}
            <div className="bg-white flex items-center shadow-sm fixed z-20 py-3 px-5 w-full">
                <div className="flex gap-x-4">
                    <h1>
                        <img src='/images/paywise_logo.png' alt="Paywise Logo" />
                    </h1>
                    <div>
                        <div className="bg-[#1E64A7] text-white rounded-3xl py-2 px-2.5">
                            <small>Documentation</small>
                        </div>
                    </div>
                </div>
                <button 
                    className="lg:hidden ml-auto text-gray-700" 
                    onClick={toggleSidebar}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            {/* SideBar */}
            <div className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full hover:overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="p-5">
                    <p className="font-semibold pb-2 px-2"><small>Get Started</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#api_reference">About Paywise&apos;s API</a></li>
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
                        <li className="p-2"><a href="#third_party_transactions">Third Party transactions</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Merchant</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#request_payment">Request for payment</a></li>
                        <li className="p-2"><a href="#generate_cc_payment_url">Generate credit card payment URL</a></li>
                        <li className="p-2"><a href="#check_cc_transaction">Check credit card transaction</a></li>
                        <li className="p-2"><a href="#qr_codes">QR Codes</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Products</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#authentication">Institution</a></li>
                        <li className="p-2"><a href="#connected_accounts">Merchant</a></li>
                    </ul>
                   
                </div>
            </div>
        </div>
    );
}

export default SideBar;

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
                        <button className="bg-[#1E64A7] text-white rounded-3xl py-2 px-2.5">
                            Documentation
                        </button>
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
                    <p className="font-semibold"><a href="#api_reference">Get Started</a></p>
                    <ul className="p-3">
                        <li className="py-1"><a href="#authentication">About Paywise&apos;s API</a></li>
                        <li className="py-1"><a href="#connected_accounts">Use Cases</a></li>
                    </ul>
                    <p className="font-semibold">Register</p>
                    <ul className="p-3">
                        <li className="font-medium">Personal</li>
                        <ul className="p-3">
                            <li className="py-1">Steps to Add Individual Account</li>
                            <li className="py-1">General Account Information</li>
                            <li className="py-1">Compliance Requirement</li>
                            <li className="py-1">Proof of Address</li>
                            <li className="py-1">Bank Information (Optional)</li>
                        </ul>
                        <li className="font-medium">Business</li>
                        <ul className="p-3">
                            <li className="py-1">Steps to Add Business Account</li>
                            <li className="py-1">General Account Information</li>
                            <li className="py-1">Compliance Requirement</li>
                            <li className="py-1">Bank Information</li>
                            <li className="py-1">Documents Required</li>
                        </ul>
                        <li className="font-medium">Institutions</li>
                        <ul className="p-3">
                            <li className="py-1">Steps to Add Institution Account</li>
                            <li className="py-1">General Account Information</li>
                            <li className="py-1">Compliance Requirement</li>
                            <li className="py-1">Bank Information</li>
                            <li className="py-1">Documents Required</li>
                        </ul>
                    </ul>
                    <p className="font-semibold">Payment &amp; Inquiry</p>
                    <ul className="p-3">
                        <li className="py-1">General</li>
                        <li className="py-1">Payment Authorization</li>
                        <li className="py-1">Payment Status</li>
                        <li className="py-1">Balance Inquiry</li>
                    </ul>
                    <p className="font-semibold">Transactions</p>
                    <ul className="p-3">
                        <li className="py-1">Agent Transactions</li>
                        <li className="py-1">Third Party transactions</li>
                    </ul>
                    <p className="font-semibold">Merchant</p>
                    <ul className="p-3">
                        <li className="py-1">Request for payment</li>
                        <ul className="p-3">
                            <li className="py-1">Request transfer</li>
                        </ul>
                        <li className="py-1">Generate credit card payment URL</li>
                        <li className="py-1">Check credit card transaction</li>
                        <li className="py-1">QR Codes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;

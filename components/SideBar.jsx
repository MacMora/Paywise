import React from "react";

const SideBar = () => {
    return (
        <div>
            <div className="bg-white flex items-center shadow-sm fixed z-10 py-3 px-5 w-full">
                <h1>
                    <img src='/images/paywise_logo.png' alt="Paywise Logo"/>
                </h1>
            </div>
            <div className="text-sm sticky top-12 left-0 shadow-2xl h-screen w-1/5 hover:overflow-y-scroll overflow-hidden py-20 custom-scrollbar">
                <div className="p-5">
                    <p className="font-semibold">Get Started</p>
                    <ul className="p-3">
                        <li className="py-1">About Paywise&apos;s API</li>
                        <li className="py-1">Use Cases</li>
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

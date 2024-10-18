"use client";
import React from "react";


const SideBar_Doc = ({ isOpen, toggleSidebar, togglePluginsSidebar }) => {

    return (
        <div>
            {/* SideBar y Menú desplegable en pantallas pequeñas */}
            <div className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="p-5">
                    <div className="lg:hidden mb-4 flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-4 font-semibold px-2">
                            <a href="https://devportal.paywise.co/" className="">Home</a>
                            <a href="#" className="" onClick={() => { togglePluginsSidebar(); toggleSidebar(); }}>Docs</a>
                            <a href="https://devportal.paywise.co/apis" className="">APIs</a>
                            <a href="https://devportal.paywise.co/products" className="">Products</a>
                            <a href="#" className="" onClick={() => { togglePluginsSidebar(); toggleSidebar(); }}>Plugins</a>
                        </div>
                        <div className="flex flex-col gap-y-4 font-semibold px-2 border-solid border-t border-[#d8dee4]">
                            <a href="https://devportal.paywise.co/signin" className="pt-2">Sign in</a>
                            <a href="https://devportal.paywise.co/signup" className="">Sign up</a>
                        </div>
                    </div>
                    {/* Contenido del Sidebar */}
                    <p className="font-semibold py-2 px-2 border-solid border-t border-[#d8dee4]"><small>Get Started</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#api_reference" onClick={toggleSidebar}>About PayWise&apos;s API</a></li>
                        <li className="p-2"><a href="#use_cases" onClick={toggleSidebar}>Use Cases</a></li>
                        <li className="p-2"><a href="#authentication" onClick={toggleSidebar}>Authentication</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Setup</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#personal" onClick={toggleSidebar}>Personal</a></li>
                        <li className="p-2"><a href="#business" onClick={toggleSidebar}>Business</a></li>
                        <li className="p-2"><a href="#institutions" onClick={toggleSidebar}>Institution</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Payment & Inquiry</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#general_payments" onClick={toggleSidebar}>General</a></li>
                        <li className="p-2"><a href="#payment_authorization" onClick={toggleSidebar}>Payment Authorization</a></li>
                        <li className="p-2"><a href="#payment_status" onClick={toggleSidebar}>Payment Status</a></li>
                        <li className="p-2"><a href="#balance_inquiry" onClick={toggleSidebar}>Balance Inquiry</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Transactions</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#agent_transactions" onClick={toggleSidebar}>Agent Transactions</a></li>
                        <li className="p-2"><a href="#third_party_transactions" onClick={toggleSidebar}>Third Party Transactions</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Merchant</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#request_payment" onClick={toggleSidebar}>Request for Payment</a></li>
                        <li className="p-2"><a href="#generate_cc_payment_url" onClick={toggleSidebar}>Generate Credit Card Payment URL</a></li>
                        <li className="p-2"><a href="#check_cc_transaction" onClick={toggleSidebar}>Check Credit Card Transaction</a></li>
                        <li className="p-2"><a href="#qr_codes" onClick={toggleSidebar}>QR Codes</a></li>
                    </ul>
                    <p className="font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Products</small></p>
                    <ul className="">
                        <li className="p-2"><a href="https://devportal.paywise.co/api-details#api=66a06819a8aecc7dd68da65b" target="_blank" rel="noopener noreferrer">Institution</a></li>
                        <li className="p-2"><a href="https://devportal.paywise.co/api-details#api=66a06721f6563de21054271d" target="_blank" rel="noopener noreferrer">Merchant</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar_Doc;

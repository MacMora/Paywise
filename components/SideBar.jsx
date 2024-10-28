"use client";
import React from "react";

const SideBar_Doc = ({ isOpen, toggleSidebar, showWooCommerce, showPluginDocs, showDocumentation }) => {

    return (
        <div>
            {/* SideBar y Menú desplegable en pantallas pequeñas */}
            <div className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="p-5">
                    <div className="lg:hidden mb-4 flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-4 font-semibold px-2">
                            <a href="https://devportal.paywise.co/" className="">Home</a>
                            <a href="#" className="" onClick={() => { showDocumentation(); toggleSidebar(); }}>Docs</a>
                            <a href="https://devportal.paywise.co/apis" className="">APIs</a>
                            <a href="https://devportal.paywise.co/products" className="">Products</a>
                            <a href="#" className="" onClick={() => { showPluginDocs(); toggleSidebar(); }}>Plugins</a>
                        </div>
                        <div className="flex flex-col gap-y-4 font-semibold px-2 border-solid border-t border-[#d8dee4]">
                            <a href="https://devportal.paywise.co/signin" className="pt-2">Sign in</a>
                            <a href="https://devportal.paywise.co/signup" className="">Sign up</a>
                        </div>
                    </div>
                    {/* Contenido del Sidebar */}
                    <p className="text-[#8D9298] font-semibold py-2 px-2 border-solid border-t border-[#d8dee4]"><small>About PayWise's API</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#quick_start" onClick={toggleSidebar}>Quick Start</a></li>
                        <li className="p-2"><a href="#environments" onClick={toggleSidebar}>Environments</a></li>
                        <li className="p-2"><a href="#integrations" onClick={toggleSidebar}>Integrations</a></li>
                    </ul>
                    <p className="text-[#8D9298] font-semibold p-2 border-solid border-t border-[#d8dee4]"><a href="#developers_portal"><small>Developers Portal</small></a></p>
                    <ul className="">
                        <li className="p-2"><a href="#installation" onClick={toggleSidebar}>Installation</a></li>
                        <li className="p-2"><a href="#registration" onClick={toggleSidebar}>Registration</a></li>
                        <li className="p-2"><a href="#api_product" onClick={toggleSidebar}>API Products</a></li>
                    </ul>
                    <ul className="">
                        <li className="py-2 px-4"><a href="#general_payments" onClick={toggleSidebar}>Headers</a></li>
                        <li className="py-2 px-4"><a href="#payment_authorization" onClick={toggleSidebar}>Errors</a></li>
                        <li className="py-2 px-4"><a href="#payment_status" onClick={toggleSidebar}>Account API</a></li>
                        <li className="py-2 px-4"><a href="#balance_inquiry" onClick={toggleSidebar}>Institution API</a></li>
                    </ul>
                    <p className="text-[#8D9298] font-semibold p-2 border-solid border-t border-[#d8dee4]"><small>Production Portal</small></p>
                    <ul className="">
                        <li className="p-2"><a href="#agent_transactions" onClick={toggleSidebar}>Installation</a></li>
                        <li className="p-2"><a href="#third_party_transactions" onClick={toggleSidebar}>Registration</a></li>
                        <li className="p-2"><a href="#" onClick={toggleSidebar}>API Products</a></li>
                    </ul>
                    <ul className="">
                    <li className="py-2 px-4"><a href="#general_payments" onClick={toggleSidebar}>Headers</a></li>
                        <li className="py-2 px-4"><a href="#payment_authorization" onClick={toggleSidebar}>Errors</a></li>
                        <li className="py-2 px-4"><a href="#account_api" onClick={toggleSidebar}>Account API</a></li>
                        <li className="py-2 px-4"><a href="#balance_inquiry" onClick={toggleSidebar}>Institution API</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar_Doc;

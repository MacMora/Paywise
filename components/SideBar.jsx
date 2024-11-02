"use client";
import React, { useState } from "react";


const SideBar_Doc = ({ isOpen, toggleSidebar, showPluginDocs, showDocumentation }) => {

    const [openSections, setOpenSections] = useState({});
    const [rotations, setRotations] = useState({});

    // Función para alternar la visibilidad de una sección específica
    const toggleVisibility = (id) => {
    setOpenSections((prev) => ({
      ...prev,
        [id]: !prev[id], // Alterna el estado de la sección específica
        }));
    };

    const toggleRotation = (key) => {
        setRotations(prevState => ({
        ...prevState,
        [key]: prevState[key] ? '' : 'rotate-[270deg]'
        }));
    };

    const handleClick = (key) => {
        toggleRotation(key);
        toggleVisibility(key);
    };

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
                    <p className="text-[#8D9298] font-semibold py-2 px-2 border-solid border-t border-[#d8dee4]"><a href="#paywise_api"><small>About PayWise's API</small></a></p>
                    <ul className="">
                        <li className="p-2"><a href="#quick_start" onClick={toggleSidebar}>Quick Start</a></li>
                        <li className="p-2"><a href="#environments" onClick={toggleSidebar}>Environments</a></li>
                        <li className="p-2"><a href="#integrations" onClick={toggleSidebar}>Integrations</a></li>
                    </ul>
                    <p className="text-[#8D9298] font-semibold p-2 border-solid border-t border-[#d8dee4]"><a href="#developers_portal"><small>Developers Portal</small></a></p>
                    <ul className="">
                        <li className="p-2"><a href="#installation" onClick={toggleSidebar}>Installation</a></li>
                        <li className="p-2"><a href="#registration" onClick={toggleSidebar}>Registration</a></li>
                        <div className="p-2 flex flex-row justify-between gap-6 items-center">
                            <a href="#api_product">API Products</a>
                            <img onClick={() => handleClick("developers_portal")} className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["developers_portal"]}`} width={"8px"} height={"8px"} src="/images/woocommerce/chevron.svg"/>
                        </div>
                        {openSections["developers_portal"] && (
                            <ul className="">
                                <li className="py-2 px-4"><a href="#headers" onClick={toggleSidebar}>Headers</a></li>
                                <li className="py-2 px-4"><a href="#errors" onClick={toggleSidebar}>Errors</a></li>
                                <li className="py-2 px-4"><a href="#account_api" onClick={toggleSidebar}>Account API</a></li>
                                    {openSections["account_api"] && (
                                        <ul className="">
                                            <li className="py-2 px-4"><a href="#headers" onClick={toggleSidebar}>Headers</a></li>
                                            <li className="py-2 px-4"><a href="#errors" onClick={toggleSidebar}>Errors</a></li>
                                            <li className="py-2 px-4"><a href="#account_api" onClick={toggleSidebar}>Account API</a></li>
                                            <li className="py-2 px-4"><a href="#institution_api" onClick={toggleSidebar}>Institution API</a></li>
                                        </ul>
                                    )}
                                <li className="py-2 px-4"><a href="#institution_api" onClick={toggleSidebar}>Institution API</a></li>
                            </ul>
                        )}
                    </ul>
                    <p className="text-[#8D9298] font-semibold p-2 border-solid border-t border-[#d8dee4]"><a href="#production_portal"><small>Production Portal</small></a></p>
                    <ul className="">
                        <li className="p-2"><a href="#production_portal" onClick={toggleSidebar}>Installation</a></li>
                        <li className="p-2"><a href="#production_registration" onClick={toggleSidebar}>Registration</a></li>
                        <div className="p-2 flex flex-row justify-between gap-6 items-center">
                            <a href="#production_api_products">API Products</a>
                            <img onClick={() => handleClick("production_portal")} className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["production_portal"]}`} width={"8px"} height={"8px"} src="/images/woocommerce/chevron.svg"/>
                        </div>
                        {openSections["production_portal"] && (
                        <ul className="">
                            <li className="py-2 px-4"><a href="#production_url" onClick={toggleSidebar}>Production URL</a></li>
                            <li className="py-2 px-4"><a href="#production_account_api" onClick={toggleSidebar}>Account API</a></li>
                            <li className="py-2 px-4"><a href="#production_institution_api" onClick={toggleSidebar}>Institution API</a></li>
                        </ul> 
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar_Doc;

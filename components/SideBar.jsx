"use client";
import React, { useState } from "react";

const SideBar_Doc = ({
    isOpen,
    toggleSidebar,
    showPluginDocs,
    showDocumentation,
}) => {
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
        setRotations((prevState) => ({
            ...prevState,
            [key]: prevState[key] ? "" : "rotate-[270deg]",
        }));
    };

    const handleClick = (key) => {
        toggleRotation(key);
        toggleVisibility(key);
    };

    return (
        <div className="font-cabin">
            {/* SideBar y Menú desplegable en pantallas pequeñas */}
            <div
                className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
            >
                <div className="p-5">
                    <div className="lg:hidden mb-4 flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-4 font-semibold px-2">
                            <a href="https://devportal.paywise.co/" className="">
                                Dev Portal
                            </a>
                            <a
                                href="#"
                                className=""
                                onClick={() => {
                                    showDocumentation();
                                    toggleSidebar();
                                }}
                            >
                                Docs
                            </a>
                            <a href="https://devportal.paywise.co/products" className="">
                                API Products
                            </a>
                            <a
                                href="#"
                                className=""
                                onClick={() => {
                                    showPluginDocs();
                                    toggleSidebar();
                                }}
                            >
                                Plugins
                            </a>
                            <a href="https://pwapp.co/home">
                                PayWise.co
                            </a>
                        </div>
                        <div className="flex flex-col gap-y-4 font-semibold px-2 border-solid border-t border-[#d8dee4]">
                            <a href="https://devportal.paywise.co/signin" className="pt-2">
                                Sign in
                            </a>
                            <a href="https://devportal.paywise.co/signup" className="">
                                Sign up
                            </a>
                        </div>
                    </div>
                    {/* Contenido del Sidebar */}
                    <p className="text-[#8D9298] font-semibold py-2 px-2 border-solid border-t border-[#d8dee4]">
                        <a href="#paywise_api">
                            <small>About PayWise's API</small>
                        </a>
                    </p>
                    <ul className="">
                        <li className="p-2">
                            <a href="#quick_start" onClick={toggleSidebar}>
                                Quick Start
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="#environments" onClick={toggleSidebar}>
                                Environments
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="#integrations" onClick={toggleSidebar}>
                                Integrations
                            </a>
                        </li>
                    </ul>
                    <p className="text-[#8D9298] font-semibold p-2 border-solid border-t border-[#d8dee4]">
                        <a href="#developers_portal">
                            <small>Developers Portal</small>
                        </a>
                    </p>
                    <ul className="">
                        <li className="p-2">
                            <a href="#installation" onClick={toggleSidebar}>
                                Installation
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="#registration" onClick={toggleSidebar}>
                                Registration
                            </a>
                        </li>
                        <div className="p-2 flex flex-row justify-between gap-6 items-center">
                            <a onClick={toggleSidebar} href="#api_product">
                                API Products
                            </a>
                            <img
                                onClick={() => handleClick("developers_portal")}
                                className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["developers_portal"]}`}
                                width={"8px"}
                                height={"8px"}
                                src="/images/woocommerce/chevron.svg"
                            />
                        </div>
                        {openSections["developers_portal"] && (
                            <ul className="">
                                <li className="py-2 px-4">
                                    <a href="#headers" onClick={toggleSidebar}>
                                        Headers
                                    </a>
                                </li>
                                <li className="py-2 px-4">
                                    <a href="#errors" onClick={toggleSidebar}>
                                        Errors
                                    </a>
                                </li>
                                <div className="py-2 px-4 flex flex-row justify-between gap-6 items-center">
                                    <a onClick={toggleSidebar} href="#account_api">
                                        Account API
                                    </a>
                                    <img
                                        onClick={() => handleClick("account_api")}
                                        className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["account_api"]}`}
                                        width={"8px"}
                                        height={"8px"}
                                        src="/images/woocommerce/chevron.svg"
                                    />
                                </div>
                                {openSections["account_api"] && (
                                    <ul className="">
                                        <li className="py-2 px-6">
                                            <a href="#register_account" onClick={toggleSidebar}>
                                                register_account
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#dev_account" onClick={toggleSidebar}>
                                                account
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#personal_account" onClick={toggleSidebar}>
                                                personal_account
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#business_account" onClick={toggleSidebar}>
                                                business_account
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#balance_account" onClick={toggleSidebar}>
                                                balance
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#history_account" onClick={toggleSidebar}>
                                                account_history
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#bless_account" onClick={toggleSidebar}>
                                                bless_account
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <div className="py-2 px-4 flex flex-row justify-between gap-6 items-center">
                                    <a onClick={toggleSidebar} href="#institution_api">
                                        Institution API
                                    </a>
                                    <img
                                        onClick={() => handleClick("institution_api")}
                                        className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["institution_api"]}`}
                                        width={"8px"}
                                        height={"8px"}
                                        src="/images/woocommerce/chevron.svg"
                                    />
                                </div>
                                {openSections["institution_api"] && (
                                    <ul className="">
                                        <li className="py-2 px-6">
                                            <a
                                                href="#institution_transaction"
                                                onClick={toggleSidebar}
                                            >
                                                transaction
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#transaction_get" onClick={toggleSidebar}>
                                                transaction/{`{transaction_id}`}
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#exchange_rate_usd" onClick={toggleSidebar}>
                                                exchange_rate_usd
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#quote_post" onClick={toggleSidebar}>
                                                quote
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#quote_get" onClick={toggleSidebar}>
                                                quote/{`{quote_id}`}
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </ul>
                        )}
                    </ul>
                    <p className="text-[#8D9298] font-semibold p-2 border-solid border-t border-[#d8dee4]">
                        <a href="#production_portal">
                            <small>Production Portal</small>
                        </a>
                    </p>
                    <ul className="">
                        <li className="p-2">
                            <a href="#production_portal" onClick={toggleSidebar}>
                                Installation
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="#production_registration" onClick={toggleSidebar}>
                                Registration
                            </a>
                        </li>
                        <div className="p-2 flex flex-row justify-between gap-6 items-center">
                            <a onClick={toggleSidebar} href="#production_api_products">
                                API Products
                            </a>
                            <img
                                onClick={() => handleClick("production_portal")}
                                className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["production_portal"]}`}
                                width={"8px"}
                                height={"8px"}
                                src="/images/woocommerce/chevron.svg"
                            />
                        </div>
                        {openSections["production_portal"] && (
                            <ul className="">
                                <li className="py-2 px-4">
                                    <a href="#production_url" onClick={toggleSidebar}>
                                        Production URL
                                    </a>
                                </li>
                                <li className="py-2 px-4">
                                    <a href="#production_account_api" onClick={toggleSidebar}>
                                        Account API
                                    </a>
                                </li>
                                <li className="py-2 px-4">
                                    <a href="#production_institution_api" onClick={toggleSidebar}>
                                        Institution API
                                    </a>
                                </li>
                            </ul>
                        )}
                        <li className="p-2 border-t"><a href="#look-up" onClick={toggleSidebar}>Look Up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar_Doc;

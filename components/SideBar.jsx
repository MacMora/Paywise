"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; // Importar los íconos

const SideBar_Doc = ({
    isOpen,
    toggleSidebar,
}) => {
    const [openSections, setOpenSections] = useState({});
    const [rotations, setRotations] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

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
        toggleSidebar(key)
    };

    // Función para manejar el término de búsqueda
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const clearSearch = () => {
        setSearchTerm("");
    };

    // Elementos del Sidebar
    const sidebarItems = [
        { label: "About PayWise's API", href: "#paywise_api", },
        { label: "Quick Start", href: "#quick_start" },
        { label: "Environments", href: "#environments" },
        { label: "Integrations", href: "#integrations" },
        { label: "Developers Portal", href: "#developers_portal" },
        { label: "Installation - Developers Portal", href: "#installation" },
        { label: "Registration - Developers Portal", href: "#registration" },
        { label: "API Product - Developers Portal", href: "#api_product" },
        { label: "Headers", href: "#headers" },
        { label: "Errors", href: "#errors" },
        { label: "Account API - Developers Portal", href: "#account_api" },
        { label: "register_account", href: "#register_account" },
        { label: "account", href: "#dev_account" },
        { label: "personal_account", href: "#personal_account" },
        { label: "business_account", href: "#business_account" },
        { label: "balance", href: "#balance_account" },
        { label: "account_history", href: "#history_account" },
        { label: "bless_account", href: "#bless_account" },
        { label: "Institution API - Developers Portal", href: "#institution_api" },
        { label: "transaction", href: "#institution_transaction" },
        { label: "transaction/{transaction_id}", href: "#transaction_get" },
        { label: "exchange_rate_usd", href: "#exchange_rate_usd" },
        { label: "quote", href: "#quote_post" },
        { label: "quote/{quote_id}", href: "#quote_get" },
        { label: "Merchant API - Developers Portal", href: "#merchant_api" },
        { label: "request", href: "#request_merchant" },
        { label: "cancel", href: "#cancel_merchant" },
        { label: "status", href: "#status_merchant" },
        { label: "Production Portal", href: "#production_portal" },
        { label: "Installation - Production Portal", href: "#production_portal" },
        { label: "Registration - Production Portal", href: "#production_registration" },
        { label: "API Product - Production Portal", href: "#production_api_products" },
        { label: "Production URL - Production Portal", href: "#production_url" },
        { label: "Account API - Production Portal", href: "#production_account_api" },
        { label: "Institution API - Production Portal", href: "#production_institution_api" },
        { label: "Look Up", href: "#look-up" },
        
    ];

    // Filtrar elementos en función del término de búsqueda
    const filteredItems = sidebarItems.filter((item) =>
        item.label.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="font-cabin">

            {/* SideBar y Menú desplegable en pantallas pequeñas */}
            <div
                className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
            >

                <div className="p-5">
                    {/* Campo de búsqueda */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-2 border rounded-md pl-10"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <div
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                            onClick={searchTerm ? clearSearch : null}
                        >
                            {searchTerm ? <FaTimes /> : <FaSearch />}
                        </div>
                    </div>

                    {/* Mostrar resultados en submenu */}
                    {searchTerm && (
                        <ul className="bg-[#f5f6f8]">
                        {filteredItems.map((item, index) => (
                            <li key={index} className="p-2">
                                <a href={item.href} onClick={toggleSidebar}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    )}
                    <div className="lg:hidden mb-4 flex flex-col gap-y-6 py-5">
                        <div className="flex flex-col gap-y-4 font-semibold px-2">
                            <a href="https://devportal.paywise.co/" className="">
                                Dev Portal
                            </a>
                            <a href="#" className=""
                            >
                                Docs
                            </a>
                            <a href="https://devportal.paywise.co/products" className="">
                                API Products
                            </a>
                            <a href="https://docs.paywise.co/plugins" className=""
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
                        <div onClick={() => handleClick("developers_portal")} className="p-2 flex flex-row justify-between gap-6 items-center">
                            <a href="#api_product">
                                API Products
                            </a>
                            <img
                                className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["developers_portal"]}`}
                                width={"8px"}
                                height={"8px"}
                                src="/images/chevron.svg"
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
                                <div onClick={() => handleClick("account_api")} className="py-2 px-4 flex flex-row justify-between gap-6 items-center">
                                    <a href="#account_api">
                                        Account API
                                    </a>
                                    <img
                                        className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["account_api"]}`}
                                        width={"8px"}
                                        height={"8px"}
                                        src="/images/chevron.svg"
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
                                <div onClick={() => handleClick("institution_api")} className="py-2 px-4 flex flex-row justify-between gap-6 items-center">
                                    <a href="#institution_api">
                                        Institution API
                                    </a>
                                    <img
                                        className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["institution_api"]}`}
                                        width={"8px"}
                                        height={"8px"}
                                        src="/images/chevron.svg"
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
                                <div onClick={() => handleClick("merchant_api")} className="py-2 px-4 flex flex-row justify-between gap-6 items-center">
                                    <a href="#merchant_api">
                                        Merchant API
                                    </a>
                                    <img
                                        className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["merchant_api"]}`}
                                        width={"8px"}
                                        height={"8px"}
                                        src="/images/chevron.svg"
                                    />
                                </div>
                                {openSections["merchant_api"] && (
                                    <ul className="">
                                        <li className="py-2 px-6">
                                            <a
                                                href="#request_merchant"
                                                onClick={toggleSidebar}
                                            >
                                                request
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#cancel_merchant" onClick={toggleSidebar}>
                                                cancel
                                            </a>
                                        </li>
                                        <li className="py-2 px-6">
                                            <a href="#status_merchant" onClick={toggleSidebar}>
                                                status
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
                        <div onClick={() => handleClick("production_portal")} className="p-2 flex flex-row justify-between gap-6 items-center">
                            <a href="#production_api_products">
                                API Products
                            </a>
                            <img
                                className={`cursor-pointer rotate-90 transition-transform duration-150 ${rotations["production_portal"]}`}
                                width={"8px"}
                                height={"8px"}
                                src="/images/chevron.svg"
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

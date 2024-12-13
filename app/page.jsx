"use client";
import Documentation from "@/components/Documentation";
import Plugin_Docs from "@/components/plugins_components/plugin_docs";
import SideBar_Doc from "@/components/SideBar";
import Sidebar_Plugin from "@/components/plugins_components/SideBar_Plugin";
import WooCommerce from "@/components/plugins_components/woocommerce/woocommerce"; // Import WooCommerce component
import React, { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false); // Controla el sidebar principal
  const [showPluginsSidebar, setShowPluginsSidebar] = useState(false); // Controla la vista del sidebar de plugins
  const [activeComponent, setActiveComponent] = useState(''); // Track the active component

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna el sidebar
  };

  const showWooCommerce = () => {
    setActiveComponent('WooCommerce'); // Set WooCommerce as the active component
    setShowPluginsSidebar(true); // Ensure the plugins sidebar is shown
    setIsOpen(false); // Optionally close the sidebar after clicking
  };

  const showPluginDocs = () => {
    setActiveComponent('Plugin_Docs'); // Set Plugin_Docs as the active component
    setShowPluginsSidebar(true); // Ensure the plugins sidebar is shown
  };

  const showDocumentation = () => {
    setActiveComponent('Documentation'); // Set Documentation as the active component
    setShowPluginsSidebar(false); // Ensure the plugins sidebar is hidden
  };

  return (
    <div className="font-cabin">
      <div className="bg-white flex items-center shadow-sm fixed z-20 py-3 px-5 w-full">
        <div className="flex lg:basis-1/5 gap-x-4">
          <div className="flex items-center">
            <a href="https://pwapp.co/home">
              <Image src="/images/paywise_logo.png" alt="Paywise Logo" width={130} height={30}/>
            </a>
          </div>
          <div>
            <div className="bg-[#1E64A7] text-white rounded-3xl py-2 px-2.5" id="Navbar">
              <small>Documentation</small>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex basis-2/5 ml-auto gap-x-8">
          <a href="https://devportal.paywise.co/" className="text-gray-700">
            Dev Portal
          </a>
          <a href="#" className="text-gray-700" onClick={showDocumentation}>
            Docs
          </a>
          <a href="https://devportal.paywise.co/products" className="text-gray-700">
            API Products
          </a>
          <a href="#" className="text-gray-700" onClick={showPluginDocs}>
            Plugins
          </a>
          <a href="https://pwapp.co/home" className="text-gray-700">
            PayWise.co
          </a>
        </div>
        <div className="hidden lg:flex basis-1/5 justify-end items-center gap-x-6">
          <a href="https://devportal.paywise.co/signin" className="text-gray-700">
            Sign in
          </a>
          <a href="https://devportal.paywise.co/signup" className="text-gray-700">
            Sign up
          </a>
        </div>
        <button className="lg:hidden ml-auto text-gray-700" onClick={toggleSidebar}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5ba845"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1E64A7"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Conditionally Render Components */}
      {showPluginsSidebar ? (
        <div>
          <Sidebar_Plugin isOpen={isOpen} toggleSidebar={toggleSidebar} showWooCommerce={showWooCommerce} showPluginDocs={showPluginDocs} showDocumentation={showDocumentation}/>
          {activeComponent === 'WooCommerce' ? <WooCommerce /> : <Plugin_Docs showWooCommerce={showWooCommerce} />}
        </div>
      ) : (
        <div>
          <SideBar_Doc isOpen={isOpen} toggleSidebar={toggleSidebar} showWooCommerce={showWooCommerce} showPluginDocs={showPluginDocs} showDocumentation={showDocumentation}/>
          <Documentation showWooCommerce={showWooCommerce} />
        </div>
      )}
    </div>
  );
}

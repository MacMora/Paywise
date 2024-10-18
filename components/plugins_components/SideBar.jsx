"use client";
import React from "react";

const SideBar_Plugin = ({ isOpen, toggleSidebar, togglePluginsSidebar }) => {
  return (
    <div>
      {/* SideBar y Menú desplegable en pantallas pequeñas */}
      <div
        className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-5">
          <div className="lg:hidden mb-4 flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4 font-semibold px-2">
              <a href="https://devportal.paywise.co/" className="">
                Home
              </a>
              <a href="#" className="" onClick={() => { togglePluginsSidebar(); toggleSidebar(); }} >
                Docs
              </a>
              <a href="https://devportal.paywise.co/apis" className="">
                APIs
              </a>
              <a href="https://devportal.paywise.co/products" className="">
                Products
              </a>
              <a href="/plugins" className="" onClick={() => { togglePluginsSidebar(); toggleSidebar(); }}>
                Plugins
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
          <p className="font-semibold px-2 py-3 text-[#8D9298] border-solid border-t border-[#d8dee4]">
            <small>Plugins</small>
          </p>
          <p className="font-semibold p-2">
            <a href="#woocommerce" onClick={toggleSidebar}>
              Woocommerce
            </a>
          </p>
          <ul className="">
            <li className="p-2">
              <a href="#install_plugin" onClick={toggleSidebar}>
                &gt; Install Plugin
              </a>
            </li>
            <li className="p-2">
              <a href="#configure_plugin" onClick={toggleSidebar}>
                &gt; Configure Plugin
              </a>
            </li>
            <li className="p-2">
              <a href="#get_api_key" onClick={toggleSidebar}>
                &gt; Get API Key
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar_Plugin;
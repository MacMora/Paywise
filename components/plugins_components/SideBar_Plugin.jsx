"use client";
import React from "react";

const SideBar_Plugin = ({ isOpen, toggleSidebar, showWooCommerce, showPluginDocs, showDocumentation }) => {
  return (
    <div>
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
              <a href="#" className="" onClick={() => { showDocumentation(); toggleSidebar(); }} >
                Docs
              </a>
              <a href="https://devportal.paywise.co/products" className="">
                API Products
              </a>
              <a href="#" className="" onClick={() => { showPluginDocs(); toggleSidebar(); }}>
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
          <p className="font-semibold px-2 py-3 text-[#8D9298] border-solid border-t border-[#d8dee4]">
            <small>About PayWise's API</small>
          </p>
          <p className="font-bold px-2 pb-3 cursor-pointer" onClick={() => { showDocumentation(); toggleSidebar(); }}>
            Back to API Documentation
          </p>
          <p className="font-semibold p-2 text-[#8D9298] border-solid border-t border-[#d8dee4]">
            <small>Plugins</small>
          </p>
          <p className="font-semibold p-2">
            <a href="#woocommerce" onClick={() => { showPluginDocs(); toggleSidebar(); }}>
              Woocommerce
            </a>
          </p>
          <ul className="">
            <li className="p-2 flex flex-row gap-2">
              <img src="/images/woocommerce/chevron.svg" width={"6px"} height={"6px"} />
              <a href="#install_plugin" onClick={() => { showWooCommerce(); toggleSidebar(); }}>
                Install Plugin
              </a>
            </li>
            <li className="p-2 flex flex-row gap-2">
              <img src="/images/woocommerce/chevron.svg" width={"6px"} height={"6px"} />
              <a href="#configure_plugin" onClick={() => { showWooCommerce(); toggleSidebar(); }}>
                Configure Plugin
              </a>
            </li>
            <li className="p-2 flex flex-row gap-2">
              <img src="/images/woocommerce/chevron.svg" width={"6px"} height={"6px"} />
              <a href="#get_api_key" onClick={() => { showWooCommerce(); toggleSidebar(); }}>
                Get API Key
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar_Plugin;

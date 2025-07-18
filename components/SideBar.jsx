"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from 'lucide-react';

// Estructura centralizada del menú, ahora con searchLabel para búsqueda
const menuConfig = [
  {
    type: "section",
    label: "About PayWise's API",
    searchLabel: "About PayWise's API",
    items: [
      { type: "link", label: "About PayWise's API", searchLabel: "About PayWise's API", href: "#paywise_api" },
      { type: "link", label: "Quick Start", searchLabel: "Quick Start", href: "#quick_start" },
      { type: "link", label: "Environments", searchLabel: "Environments", href: "#environments" },
      { type: "link", label: "Integrations", searchLabel: "Integrations", href: "#integrations" },
    ],
  },
  {
    type: "section",
    label: "Developers Portal",
    searchLabel: "Developers Portal",
    items: [
      { type: "link", label: "Installation", searchLabel: "Installation - Developers Portal", href: "#installation" },
      { type: "link", label: "Registration", searchLabel: "Registration - Developers Portal", href: "#registration" },
      { type: "link", label: "Token Encryption Guide", searchLabel: "Token Encryption Guide", href: "#token_encryption_guide" },
      {
        type: "submenu",
        label: "API Products",
        searchLabel: "API Product - Developers Portal",
        key: "developers_portal",
        items: [
          { type: "link", label: "Headers", searchLabel: "Headers", href: "#headers" },
          { type: "link", label: "Errors", searchLabel: "Errors", href: "#errors" },
          {
            type: "submenu",
            label: "Account API",
            searchLabel: "Account API - Developers Portal",
            key: "account_api",
            items: [
              { type: "link", label: "register_account", searchLabel: "register_account", href: "#register_account" },
              { type: "link", label: "account", searchLabel: "account", href: "#dev_account" },
              { type: "link", label: "personal_account", searchLabel: "personal_account", href: "#personal_account" },
              { type: "link", label: "business_account", searchLabel: "business_account", href: "#business_account" },
              { type: "link", label: "balance", searchLabel: "balance", href: "#balance_account" },
              { type: "link", label: "account_history", searchLabel: "account_history", href: "#history_account" },
              { type: "link", label: "bless_account", searchLabel: "bless_account", href: "#bless_account" },
            ],
          },
          {
            type: "submenu",
            label: "Institution API",
            searchLabel: "Institution API - Developers Portal",
            key: "institution_api",
            items: [
              { type: "link", label: "transaction", searchLabel: "transaction", href: "#institution_transaction" },
              { type: "link", label: "transaction/{transaction_id}", searchLabel: "transaction/{transaction_id}", href: "#transaction_get" },
              { type: "link", label: "exchange_rate_usd", searchLabel: "exchange_rate_usd", href: "#exchange_rate_usd" },
              { type: "link", label: "quote", searchLabel: "quote", href: "#quote_post" },
              { type: "link", label: "quote/{quote_id}", searchLabel: "quote/{quote_id}", href: "#quote_get" },
            ],
          },
          {
            type: "submenu",
            label: "Merchant API",
            searchLabel: "Merchant API - Developers Portal",
            key: "merchant_api",
            items: [
              { type: "link", label: "request", searchLabel: "request", href: "#request_merchant" },
              { type: "link", label: "cancel", searchLabel: "cancel", href: "#cancel_merchant" },
              { type: "link", label: "status", searchLabel: "status", href: "#status_merchant" },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "section",
    label: "Production Portal",
    searchLabel: "Production Portal",
    items: [
      { type: "link", label: "Installation", searchLabel: "Installation - Production Portal", href: "#production_portal" },
      { type: "link", label: "Registration", searchLabel: "Registration - Production Portal", href: "#production_registration" },
      {
        type: "submenu",
        label: "API Products",
        searchLabel: "API Product - Production Portal",
        key: "production_portal",
        items: [
          { type: "link", label: "Production URL", searchLabel: "Production URL - Production Portal", href: "#production_url" },
          { type: "link", label: "Account API", searchLabel: "Account API - Production Portal", href: "#production_account_api" },
          { type: "link", label: "Institution API", searchLabel: "Institution API - Production Portal", href: "#production_institution_api" },
        ],
      },
      { type: "link", label: "Look Up", searchLabel: "Look Up", href: "#look-up" },
    ],
  },
];

// Links externos y de navegación rápida (móviles)
const externalLinks = [
  { label: "Dev Portal", href: "https://devportal.paywise.co/" },
  { label: "Docs", href: "#" },
  { label: "API Products", href: "https://devportal.paywise.co/products" },
  { label: "Plugins", href: "https://docs.paywise.co/plugins" },
  { label: "PayWise.co", href: "https://pwapp.co/home" },
];
const authLinks = [
  { label: "Sign in", href: "https://devportal.paywise.co/signin" },
  { label: "Sign up", href: "https://devportal.paywise.co/signup" },
];

// Renderizado recursivo del menú
const renderMenuItems = (items, openSections, rotations, handleClick, toggleSidebar, level = 0) => {
  return (
    <ul className="">
      {items.map((item, idx) => {
        if (item.type === "link") {
          return (
            <li key={item.label + idx} className={level > 0 ? "py-2 px-4" : "p-2"}>
              <a href={item.href} onClick={toggleSidebar}>{item.label}</a>
            </li>
          );
        }
        if (item.type === "submenu") {
          return (
            <React.Fragment key={item.label + idx}>
              <div
                onClick={() => handleClick(item.key)}
                className={`${level > 0 ? "py-2 px-4" : "p-2"} flex flex-row justify-between gap-6 items-center`}
              >
                <a href={`#${item.key}`}>{item.label}</a>
                <ChevronDownIcon className={`text-[#536374] cursor-pointer transition-transform duration-150 ${rotations[item.key]}`} />
              </div>
              {openSections[item.key] && renderMenuItems(item.items, openSections, rotations, handleClick, toggleSidebar, level + 1)}
            </React.Fragment>
          );
        }
        if (item.type === "section") {
          return (
            <React.Fragment key={item.label + idx}>
              <p className={`text-[#8D9298] font-semibold ${level === 0 ? "py-2 px-2 border-solid border-t border-[#d8dee4]" : "p-2"}`}>
                <a href={`#${item.label.toLowerCase().replace(/\s+/g, "_")}`}>
                  <small>{item.label}</small>
                </a>
              </p>
              {renderMenuItems(item.items, openSections, rotations, handleClick, toggleSidebar, level + 1)}
            </React.Fragment>
          );
        }
        return null;
      })}
    </ul>
  );
};

// Función recursiva para filtrar el menú según el término de búsqueda (usando searchLabel)
const flattenMenuForSearch = (items) => {
  let flat = [];
  for (const item of items) {
    if (item.type === "link") {
      flat.push({ label: item.searchLabel || item.label, href: item.href });
    } else if ((item.type === "submenu" || item.type === "section") && item.items) {
      // El propio submenu/section también puede tener un searchLabel
      if (item.searchLabel) {
        flat.push({ label: item.searchLabel, href: `#${(item.key || item.label).toLowerCase().replace(/\s+/g, "_")}` });
      }
      flat = flat.concat(flattenMenuForSearch(item.items));
    }
  }
  return flat;
};

const SideBar_Doc = ({ isOpen, toggleSidebar }) => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleVisibility = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleRotation = (key) => {
    setRotations((prevState) => ({ ...prevState, [key]: prevState[key] ? "" : "rotate-180" }));
  };
  const handleClick = (key) => {
    toggleRotation(key);
    toggleVisibility(key);
    toggleSidebar(key);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filtrar elementos en función del término de búsqueda
  const allSearchItems = flattenMenuForSearch(menuConfig);
  const filteredItems = allSearchItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="font-cabin">
      <div
        className={`z-10 text-sm fixed top-12 left-0 shadow-2xl h-screen lg:w-1/5 md:w-1/3 sm:w-2/3 w-full overflow-y-scroll overflow-hidden py-8 custom-scrollbar bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
              {externalLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-y-4 font-semibold px-2 border-solid border-t border-[#d8dee4]">
              {authLinks.map((link) => (
                <a key={link.label} href={link.href} className={link.label === "Sign in" ? "pt-2" : ""}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* Renderizado del menú principal */}
          {renderMenuItems(menuConfig, openSections, rotations, handleClick, toggleSidebar)}
        </div>
      </div>
    </div>
  );
};

export default SideBar_Doc;

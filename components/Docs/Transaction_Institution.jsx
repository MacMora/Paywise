"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../LenguageContext';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/account?version=2024-10-20" 
    `
      },
      Ruby: {
        description: `
require 'net/http'
    `
      },
      PHP: {
        description: `
$curl = curl_init();
    `
    },
    JavaScript: {
        description: `
const url = "https://devapi.paywise.co/account?version=2024-10-20";
    `
    },
    Python: {
        description: `
import requests
    `
    },
};

const Reques_Example = () => {
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
  

  return (
    <div>
        <div className="bg-[#699EC7] rounded my-8 md:mb-4">
            <div className='bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t'>
                <div className='w-2/4 py-2 sm:px-2'>
                    <h2 className='text-base text-[#F2F2F2]'>Request example:</h2>
                </div>
                <div className='w-2/6 flex justify-center'>
                    <select className='bg-[#699EC7] rounded text-[#F2F2F2] p-1' value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                        {Object.keys(languageData).map((lang) => (
                        <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='px-4 py-2 flex text-sm text-[#F2F2F2]'>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                    {languageData[selectedLanguage]?.description}
                </pre>
            </div>
        </div>
        <div className="bg-[#699EC7] rounded my-8 md:mb-4">
            <div className='bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t'>
                <div className='w-2/4 py-2 sm:px-2'>
                    <h2 className='text-base text-[#F2F2F2]'>Response example::</h2>
                </div>
                <div className='w-2/6 flex justify-center'>
                    <select className='bg-[#699EC7] rounded text-[#F2F2F2] p-1' value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                        {Object.keys(languageData).map((lang) => (
                        <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='px-4 py-2 flex text-sm text-[#F2F2F2]'>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
        {`{

}
`}
                </pre>
            </div>
        </div>
    </div>
  );
};

const Transaction_Institutions = () => {
    
    // Estado para controlar la visibilidad del div que contiene el <p>
    const [openSections, setOpenSections] = useState({});

    // Función para alternar la visibilidad de una sección específica
    const toggleVisibility = (id) => {
      setOpenSections((prev) => ({
        ...prev,
        [id]: !prev[id], // Alterna el estado de la sección específica
      }));
    };
    
    return(
        <div id='institution_api' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                            <h2 className='text-2xl lg:text-3xl font-semibold py-3'>Institution API</h2>
                            <p className='py-5 text-base'>
                            Perform transactions, retrieve exchange rates, and generate quotes between PayWise accounts and external financial institutions.
                            </p>
                            <span className='py-5 text-base font-semibold'>transaction:</span>
                            <p className='py-5 text-base'>
                            This endpoint is used to post a transaction, either crediting or debiting a PayWise account. It allows third-party institutions to initiate transactions within the PayWise ecosystem, whether for remittances, payments, or other financial interactions. The <span className='text-[#6FA43A]'>transaction </span> endpoint ensures that funds are securely moved between accounts with detailed tracking of the transaction.
                            </p>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Request Parameters:</h3>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => toggleVisibility("version")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                        <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>version</span> string</p>
                                    </div>
                                    {openSections["version"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic'>Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Body Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("session_token")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">session_token</span> string</p>
                                        </div>
                                        {openSections["session_token"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Encrypted session_token. Institution encrypts the session_token sent using shared key.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 20 - 40</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("transaction_id")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">transaction_id</span> string</p>
                                        </div>
                                        {openSections["transaction_id"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Encrypted transaction id, generated by Institution. Encryption public keys are shared with PayWise.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 30 - 60</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("transaction_date")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">transaction_date</span> string</p>
                                        </div>
                                        {openSections["transaction_date"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> The created date and time of the transaction. Format "YYYY-MM-DD HH:mm:ss"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 19</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("amount")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">amount</span> string</p>
                                        </div>
                                        {openSections["amount"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Amount payable to beneficiary in TTD with precision of 2 decimal places</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 8, 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("sender_currency")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">sender_currency</span> string</p>
                                        </div>
                                        {openSections["sender_currency"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Source currency in ISO 4217 format. Example "USD"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 3</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("sender_amount")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">sender_amount</span> string</p>
                                        </div>
                                        {openSections["sender_amount"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> PayWise will record this amount for their own reconciliation. This amount may not be made visible to account holder. Precision of 2 decimal places</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 8, 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("description")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">description</span> string</p>
                                        </div>
                                        {openSections["description"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Freeform text description of the transaction provided by the client.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 256</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("transaction_type")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">transaction_type</span> string</p>
                                        </div>
                                        {openSections["transaction_type"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Enum = { `inttransfer, p2p` }</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 3 - 11</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("debit_party")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">debit_party</span> object</p>
                                        </div>
                                        {openSections["debit_party"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains information about the Sender.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("mobile_number")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">mobile_number</span> string</p>
                                        </div>
                                        {openSections["mobile_number"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full number of the Sender. Example: "+18681234567"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10 - 18</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("organization_id")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">organization_id</span> string</p>
                                        </div>
                                        {openSections["organization_id"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full name of the sending organization. Example: "PayWise"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 30</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("account_number")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">account_number</span> string</p>
                                        </div>
                                        {openSections["account_number"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Wallet account (or Bank account or IBAN number or card number) of the debit party.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 5 - 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("account_type")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">account_type</span> string</p>
                                        </div>
                                        {openSections["account_type"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Type of wallet or bank account of the Sender. This is not the user account type.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("metadata_sender")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">metadata</span> string</p>
                                        </div>
                                        {openSections["metadata_sender"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Additional metadata needed for the Sender.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("credit_party")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">credit_party</span> object</p>
                                        </div>
                                        {openSections["credit_party"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains information about the Recipient.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("mobile_number_recipient")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">mobile_number</span> string</p>
                                        </div>
                                        {openSections["mobile_number_recipient"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full number of the Recipient. Example: "+18681234567"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10 - 18</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("organization_id_recipient")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">organization_id</span> string</p>
                                        </div>
                                        {openSections["organization_id_recipient"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full name of the receiving organization. Example: "PayWise"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 30</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("account_number_recipient")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">account_number</span> string</p>
                                        </div>
                                        {openSections["account_number_recipient"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Wallet account (or Bank account or IBAN number) of the Recipient.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 5 - 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("account_type_recipient")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">account_type</span> string</p>
                                        </div>
                                        {openSections["account_type_recipient"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Type of account of the Recipient. This is not the user account type.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("metadata_recipient")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">metadata</span> string</p>
                                        </div>
                                        {openSections["metadata_recipient"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Additional metadata needed for the Recipient.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("sender_kyc")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">sender_kyc</span> object</p>
                                        </div>
                                        {openSections["sender_kyc"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains information about the sender's KYC.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("nationality")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">nationality</span> string</p>
                                        </div>
                                        {openSections["nationality"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Nationality in ISO Alpha-2 format. Example "TT".</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("date_of_birth")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">date_of_birth</span> string</p>
                                        </div>
                                        {openSections["date_of_birth"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Date of birth in YYYY-MM-DD format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("country_of_birth")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">country_of_birth</span> string</p>
                                        </div>
                                        {openSections["country_of_birth"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country of birth in ISO Alpha-2 format. Example: "TT".</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("gender")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">gender</span> string</p>
                                        </div>
                                        {openSections["gender"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Gender. Enum = (M)ale, (F)emale, (U)nspecified.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("id_document")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">id_document</span> object</p>
                                        </div>
                                        {openSections["id_document"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains KYC document information for the Sender.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("id_type")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">id_type</span> string</p>
                                        </div>
                                        {openSections["id_type"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document type of account holder used in sign up. Enum = { `NationalIdCard, Passport, DriversPermit, Other` }.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("id_number")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">id_number</span> string</p>
                                        </div>
                                        {openSections["id_number"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document number.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 30</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("issue_date")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">issue_date</span> string</p>
                                        </div>
                                        {openSections["issue_date"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document issue date in YYYY-MM-DD format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("expiry_date")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">expiry_date</span> string</p>
                                        </div>
                                        {openSections["expiry_date"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document expiry date in YYYY-MM-DD format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("issued_country")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">issued_country</span> string</p>
                                        </div>
                                        {openSections["issued_country"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country where the ID document was issued in ISO Alpha-2 format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address</span> object</p>
                                        </div>
                                        {openSections["address"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains KYC address information for the Sender.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address_line1")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address_line1</span> string</p>
                                        </div>
                                        {openSections["address_line1"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> First line of the address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address_line2")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address_line2</span> string</p>
                                        </div>
                                        {openSections["address_line2"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Second line of the address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address_line3")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address_line3</span> string</p>
                                        </div>
                                        {openSections["address_line3"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Third line of the address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("city")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">city</span> string</p>
                                        </div>
                                        {openSections["city"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> City/Town of address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("state_province")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">state_province</span> string</p>
                                        </div>
                                        {openSections["state_province"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> State of address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4 - 40</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("postal_code")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">postal_code</span> string</p>
                                        </div>
                                        {openSections["postal_code"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Postal Code of address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("country")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">country</span> string</p>
                                        </div>
                                        {openSections["country"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country in ISO Alpha-2 format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("subject_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">subject_name</span> object</p>
                                        </div>
                                        {openSections["subject_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains KYC name information for the Sender.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("title")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">title</span> string</p>
                                        </div>
                                        {openSections["title"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Title.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 0 - 6</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("first_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">first_name</span> string</p>
                                        </div>
                                        {openSections["first_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> First name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("middle_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">middle_name</span> string</p>
                                        </div>
                                        {openSections["middle_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Middle name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 0 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("last_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">last_name</span> string</p>
                                        </div>
                                        {openSections["last_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Last name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("full_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">full_name</span> string</p>
                                        </div>
                                        {openSections["full_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("recipient_kyc")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">recipient_kyc</span> object</p>
                                        </div>
                                        {openSections["recipient_kyc"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains information about the Recipient's KYC.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("nationality")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">nationality</span> string</p>
                                        </div>
                                        {openSections["nationality"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Nationality in ISO Alpha-2 format. Example "TT".</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("date_of_birth")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">date_of_birth</span> string</p>
                                        </div>
                                        {openSections["date_of_birth"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Date of birth in YYYY-MM-DD format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("id_document")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">id_document</span> object</p>
                                        </div>
                                        {openSections["id_document"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains KYC document information for the Recipient.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("id_type")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">id_type</span> string</p>
                                        </div>
                                        {openSections["id_type"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document type of Recipient holder used in sign-up. Enum = { `NationalIdCard, Passport, DriversPermit, Other` }.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("id_number")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">id_number</span> string</p>
                                        </div>
                                        {openSections["id_number"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Id document number.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 30</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("issue_date")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">issue_date</span> string</p>
                                        </div>
                                        {openSections["issue_date"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Id document issue date in YYYY-MM-DD format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("expiry_date")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">expiry_date</span> string</p>
                                        </div>
                                        {openSections["expiry_date"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Id document expiry date in YYYY-MM-DD format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("issued_country")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">issued_country</span> string</p>
                                        </div>
                                        {openSections["issued_country"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country where the Id document was issued in ISO Alpha-2 format. Example "TT".</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address</span> object</p>
                                        </div>
                                        {openSections["address"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains KYC address information for the Recipient.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address_line1")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address_line1</span> string</p>
                                        </div>
                                        {openSections["address_line1"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> First line of the address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address_line2")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address_line2</span> string</p>
                                        </div>
                                        {openSections["address_line2"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Second line of the address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("address_line3")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">address_line3</span> string</p>
                                        </div>
                                        {openSections["address_line3"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Third line of the address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("city")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">city</span> string</p>
                                        </div>
                                        {openSections["city"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> City/Town of address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("state_province")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">state_province</span> string</p>
                                        </div>
                                        {openSections["state_province"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> State of address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4 - 40</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("postal_code")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">postal_code</span> string</p>
                                        </div>
                                        {openSections["postal_code"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Postal Code of address.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("country")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">country</span> string</p>
                                        </div>
                                        {openSections["country"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country in ISO Alpha-2 format.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("subject_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">subject_name</span> object</p>
                                        </div>
                                        {openSections["subject_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains KYC name information for the Recipient.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> N/A</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("title")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">title</span> string</p>
                                        </div>
                                        {openSections["title"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Title.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 0 - 6</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("first_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">first_name</span> string</p>
                                        </div>
                                        {openSections["first_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> First name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("middle_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">middle_name</span> string</p>
                                        </div>
                                        {openSections["middle_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Middle name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 0 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("last_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">last_name</span> string</p>
                                        </div>
                                        {openSections["last_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Last name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("full_name")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">full_name</span> string</p>
                                        </div>
                                        {openSections["full_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full name.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("transfer_information")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">transfer_information</span> object</p>
                                        </div>
                                        {openSections["transfer_information"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains associated data to the transaction that provides auxiliary information and additional security information.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> N/A</p>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("quote_id")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">quote_id</span> string</p>
                                        </div>
                                        {openSections["quote_id"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> The specific quoteId to be used for the transaction. This quoteId is generated when a quotation is created and it is returned on the quotation response.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 16 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("receiving_country")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">receiving_country</span> string</p>
                                        </div>
                                        {openSections["receiving_country"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Destination country where the payout is to be made. To be specified in ISO Alpha 2 format. Example "TT".</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("remittance_purpose")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">remittance_purpose</span> string</p>
                                        </div>
                                        {openSections["remittance_purpose"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Reason for the transfer. Enum = {values}.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 50</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("source_of_funds")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">source_of_funds</span> string</p>
                                        </div>
                                        {openSections["source_of_funds"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Source of funds. Please click here for accepted values. Enum = {values}.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4 - 17</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="pt-4">
                                        <div onClick={() => toggleVisibility("relationship_sender")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">relationship_sender</span> string</p>
                                        </div>
                                        {openSections["relationship_sender"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> The relation between the sender and the beneficiary. Enum = {values}.</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 3 - 11</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Response Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("status")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>status</span> string</p>
                                        </div>
                                        {openSections["status"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("code")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>code</span> integer</p>
                                        </div>
                                        {openSections["code"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> HTTP return code.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "pt-4">
                                        <div onClick={() => toggleVisibility("message")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>message</span> string</p>
                                        </div>
                                        {openSections["message"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-2/4 w-full sticky top-0'>
                            <Reques_Example/>
                        </div>
                    </div>
    )
}

export default Transaction_Institutions;

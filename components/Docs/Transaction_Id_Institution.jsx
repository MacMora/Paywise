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

const Transaction_Id_Institutions = () => {
    
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
        <div id='transaction_get' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                            
                            <span className='py-5 text-base font-semibold'>transaction/{`{transaction_id}`}:</span>
                            <p className='py-5 text-base'>
                            The <span className='text-[#6FA43A]'>transaction/{`{transaction_id}`} </span> endpoint retrieves a confirmation of the transaction’s completion. Once a transaction has been posted, this call allows the institution to verify its success or failure, providing detailed status updates on the specific transaction based on its unique ID. This is critical for transparency and transaction reconciliation.
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
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> optional</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Body Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("transaction_id_get")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">transaction_id</span> string</p>
                                        </div>
                                        {openSections["transaction_id_get"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Encrypted key generated by Institution</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 40-60</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("institution_receipt_id")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">institution_receipt_id</span> string</p>
                                        </div>
                                        {openSections["institution_receipt_id"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Institution transaction receipt that can be saved to</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 30</p>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className="pt-4">
                                        <div onClick={() => toggleVisibility("friendly_id")} className="flex flex-row gap-0.5 items-center cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">friendly_id</span> string</p>
                                        </div>
                                        {openSections["friendly_id"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> tbd</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> tbd</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> n/a</p>
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

export default Transaction_Id_Institutions;

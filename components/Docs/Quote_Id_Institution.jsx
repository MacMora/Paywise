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
                    <h2 className='text-sm text-[#F2F2F2]'>Request example:</h2>
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
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                    {languageData[selectedLanguage]?.description}
                </pre>
            </div>
        </div>
        <div className="bg-[#699EC7] rounded my-8 md:mb-4">
            <div className='bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t'>
                <div className='w-2/4 py-2 sm:px-2'>
                    <h2 className='text-sm text-[#F2F2F2]'>Response example::</h2>
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
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
        {`{

}
`}
                </pre>
            </div>
        </div>
    </div>
  );
};

const Quote_Id_Institutions = () => {
    
    // Estado para controlar la visibilidad del div que contiene el <p>
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
        [key]: prevState[key] ? '' : 'rotate-90'
        }));
    };

    const handleClick = (key) => {
        toggleRotation(key);
        toggleVisibility(key);
    };
    
    return(
        <div id='quote_get' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                            
                            <span className='py-5 font-semibold'>quote/{`{quote_id}`}:</span>
                            <p className='py-5 text-sm'>
                            The <span className='text-[#6FA43A]'>quote/{`{quote_id}`} </span> endpoint retrieves the details of a previously generated quote. This allows institutions to check the terms of the quote, such as the conversion rate and the expiry period, ensuring that they have the necessary information before proceeding with the transaction.
                            </p>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    
                                    <div className="border-b-2 py-4">
                                        <div onClick={() => handleClick("version_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["version_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>version</span> string</p>
                                        </div>
                                        {openSections["version_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className="pt-4">
                                        <div onClick={() => handleClick("quote_id_quote_get")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["quote_id_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className="font-semibold">quote_id</span> string</p>
                                        </div>
                                        {openSections["quote_id_quote_get"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Unique identifier of the quote</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 20 - 40</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Body Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    
                                </div>
                            </div>
                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Response Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("status_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>status</span> string</p>
                                        </div>
                                        {openSections["status_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("code_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["code_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>code</span> integer</p>
                                        </div>
                                        {openSections["code_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> HTTP return code.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("rate_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["rate_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>rate</span> string</p>
                                        </div>
                                        {openSections["rate_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> The TTD equivalent for 1 dollar of the currency pair. Precision of up to 4 decimal points.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 8 , 4</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("request_date_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["request_date_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>request_date</span> string</p>
                                        </div>
                                        {openSections["request_date_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Date to source the currency rate. Format "YYYY-MM-DD"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("quote_date_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["quote_date_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>quote_date</span> string</p>
                                        </div>
                                        {openSections["quote_date_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Date & time to source the currency rate. Format "YYYY-MM-DD HH:mi:ss"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 19</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("amount_quoted_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_quoted_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>amount_quoted</span> string</p>
                                        </div>
                                        {openSections["amount_quoted_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> The quote amount. Precision of up to 2 decimal places</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10 , 2</p>
                                        </div>
                                        )}
                                    </div>
                                    <div className= "pt-4">
                                        <div onClick={() => handleClick("expiry_date_quote_get")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expiry_date_quote_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>expiry_date</span> string</p>
                                        </div>
                                        {openSections["expiry_date_quote_get"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Date and time when this currency rate is no longer be valid. Format "YYYY-MM-DD HH:mi:ss"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 19</p>
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

export default Quote_Id_Institutions;

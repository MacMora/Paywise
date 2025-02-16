"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/quote?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/quote?version=2024-10-20";
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
    const [copiedRequest, setCopiedRequest] = useState(false);
    const [copiedResponse, setCopiedResponse] = useState(false);

    const handleCopy = async (text, setCopied) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const responseExample = `{
    "status": "success",
    "code": 200,
    "message": "Quote generated successfully",
    "expire_date": "2025-02-15 12:30:00",
    "quote_id": "Q12345678901234567890",
    "rate": "6.7450",
    "quote_date": "2025-02-14 12:00:00",
    "amount_quoted": "1500.75"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 403,
    "message": "Error: Exceeds user limits.",
    "expire_date": "2025-02-15 12:30:00",
    "quote_id": "Q12345678901234567890"
}`;


    return (
        <div>
            <div className="bg-[#699EC7] rounded my-8 md:mb-4">
                <div className='bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t'>
                    <div className='w-2/4 py-2 sm:px-2'>
                        <h2 className='text-sm text-[#F2F2F2]'>Request example:</h2>
                    </div>
                    <div className='w-2/6 flex justify-center items-center gap-2'>
                        <select
                            className='bg-[#699EC7] rounded text-[#F2F2F2] p-1'
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                        >
                            {Object.keys(languageData).map((lang) => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => handleCopy(languageData[selectedLanguage]?.description, setCopiedRequest)}
                            className="p-1 hover:bg-[#699EC7] rounded transition-colors duration-200"
                        >
                            {copiedRequest ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4 text-[#F2F2F2]" />
                            )}
                        </button>
                    </div>
                </div>
                <div className='overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]'>
                    <pre>
                        {languageData[selectedLanguage]?.description}
                    </pre>
                </div>
            </div>
            <div className="bg-[#699EC7] rounded my-8 md:mb-4">
                <div className='bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t'>
                    <div className='w-2/4 py-2 sm:px-2'>
                        <h2 className='text-sm text-[#F2F2F2]'>Response example:</h2>
                    </div>
                    <div className='w-2/6 flex justify-center items-center gap-2'>
                        <select
                            className='bg-[#699EC7] rounded text-[#F2F2F2] p-1'
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                        >
                            {Object.keys(languageData).map((lang) => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => handleCopy(responseExample, setCopiedResponse)}
                            className="p-1 hover:bg-[#699EC7] rounded transition-colors duration-200"
                        >
                            {copiedResponse ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4 text-[#F2F2F2]" />
                            )}
                        </button>
                    </div>
                </div>
                <div className='overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]'>
                    <pre>
                        {responseExample}
                    </pre>
                </div>
            </div>
        </div>
    );
};

const Quote_Institutions = () => {

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

    return (
        <div id='quote_post' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>

                <span className='py-5 font-semibold'>quote:</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>quote </span> endpoint allows institutions to request a quote for a transaction. This provides an estimate of the TTD amount for a given USD value and returns a valid period for the quoted rate. It ensures the institution understands the currency conversion and rate locking period, facilitating better planning for transactions involving foreign exchange.
                </p>
                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                    <div className='font-code text-sm italic text-[#495059] py-2'>
                        <div onClick={() => handleClick("version")} className='flex flex-row gap-2 items-center cursor-pointer'>
                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["version"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className='font-semibold'>version <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                        </div>
                        {openSections["version"] && (
                            <div className='py-3'>
                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> mandatory</p>
                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Body Parameters:</h3>
                    <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("session_token_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["session_token_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>session_token <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["session_token_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Encrypted session_token. Institution encrypts the session_token sent using shared key.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 20 - 40</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("request_amount_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["request_amount_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>request_amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["request_amount_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Requested quotation amount with precision of 2 decimal places.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> "8 , 2"</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("request_currency_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["request_currency_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>request_currency <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["request_currency_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Currency of the requestAmount provided in ISO 4217 format. Eg. TTD.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("debit_party")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["debit_party"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>debit_party <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                            </div>
                            {openSections["debit_party"] && (
                                <div className="py-3">
                                    <div className="pb-4">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> An object that contains information about the debit participant.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("mobile_number_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["mobile_number_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full number of the debit participant. Example: "+18681234567".</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10 - 18</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("organization_id_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["organization_id_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>organization_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["organization_id_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full name of the organization where the funds is harboured for the debit_party. Example: "PayWise"</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 30</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("account_number_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_number_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>account_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["account_number_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Wallet account (or Bank account or IBAN number or card number) of the debit party.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 5 - 50</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("account_type_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_type_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>account_type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["account_type_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Type of account of the credit party.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 50</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("currency_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["currency_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>currency <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["currency_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Sender's currency of the debitor in ISO 4217 format. Eg. USD.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("country_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["country_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Sender's country where the payout is to be made. To be specified in ISO Alpha 2 format. Eg. US.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-2 pt-4">
                                        <div onClick={() => handleClick("metadata_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["metadata_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Additional metadata needed for the credit party.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className="pt-4">
                            <div onClick={() => handleClick("credit_party_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["credit_party_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>credit_party <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                            </div>
                            {openSections["credit_party_quote_post"] && (
                                <div className="py-3">
                                    <div className='pb-4'>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> An object that contains information about the credit participant.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("mobile_number_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["mobile_number_quote_post"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full number of the credit participant. Example: "+18681234567".</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10 - 18</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("organization_id_quote_post_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["organization_id_quote_post_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>organization_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["organization_id_quote_post_2"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full name of the organization where the funds is harboured for the credit_party. Example: "PayWise".</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 30</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("account_number_quote_post_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_number_quote_post_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>account_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["account_number_quote_post_2"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Wallet account (or Bank account or IBAN number) of the credit party.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 5 - 50</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("account_type_quote_post_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_type_quote_post_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>account_type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["account_type_quote_post_2"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Type of account of the credit party.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 50</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("currency_quote_post_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["currency_quote_post_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>currency <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["currency_quote_post_2"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Currency of the creditor in ISO 4217 format. Eg. TTD.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("country_quote_post_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country_quote_post_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["country_quote_post_2"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Destination country where the payout is to be made. To be specified in ISO Alpha 2 format. Eg. TT.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-2 pt-4">
                                        <div onClick={() => handleClick("metadata_quote_post_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_quote_post_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["metadata_quote_post_2"] && (
                                            <div className="py-3">
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Additional metadata needed for the credit party.</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Response Parameters:</h3>
                    <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>

                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("status_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["status_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("code_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["code_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>code <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                            </div>
                            {openSections["code_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> HTTP return code.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("message_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["message_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>message <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["message_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Error: Exceeds user limits."</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("rate_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["rate_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>rate <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["rate_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The TTD equivalent for 1 dollar of the currency pair. Precision of up to 4 decimal points.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8 , 4</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("quote_date_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["quote_date_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>quote_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["quote_date_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Date & time to source the currency rate. Format "YYYY-MM-DD HH:mi:ss".</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 19</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("amount_quoted_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_quoted_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>amount_quoted <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["amount_quoted_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The quote amount. Precision of up to 2 decimal places.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10 , 2</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("message_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["message_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>message <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["message_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Message is conditional. Messages will show based on condition applied. Example: "Error: Exceeds user limits."</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("expiry_date_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expiry_date_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>expiry_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["expiry_date_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Date and time when this currency rate is no longer valid. Format "YYYY-MM-DD HH:mi:ss".</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 19</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("quote_id_quote_post")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["quote_id_quote_post"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>quote_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["quote_id_quote_post"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Unique identifier of the quote.</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 20 - 40</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className='lg:w-2/4 w-full sticky top-0'>
                <Reques_Example />
            </div>
        </div>
    )
}

export default Quote_Institutions;

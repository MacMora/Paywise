"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/transaction?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/transation?version=2024-10-20";
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
    "message": "Registration request sent",
    "institution_receipt_id": "PW-9876543210"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 400,
    "message": "Invalid registration request"
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

const Transaction_Institutions = () => {

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
        <div>

            {/* INSTITUTION_API */}

            <div id='institution_api' className='py-12 border-b-2'>
                <h2 className='text-2xl lg:text-3xl font-semibold py-3'>Institution API</h2>
                <p className='py-5 text-sm'>
                    The Institution API allows third-party entities (e.g., financial institutions, remittance services, or payment processors) to integrate with the PayWise system to facilitate transactions on behalf of their customers. These entities do not need to hold a PayWise account to interact with PayWise accounts and can still perform operations like crediting or debiting PayWise customer accounts, enabling seamless cross-platform payments.
                    <br />
                    This API is specifically designed to provide integrations for external platforms, enabling them to:
                </p>
                <ol className='text-sm p-4'>
                    <li>I. Perform transactions such as sending or receiving money into a PayWise account.</li>
                    <li>II. Retrieve real-time foreign exchange rate data for conversions.</li>
                    <li>III. Generate quotes for currency exchanges.</li>
                </ol>
                <p className='py-5 text-sm'>By using the Institution API, third-party platforms can integrate secure financial services to support remittances, bill payments, and money transfers while maintaining compliance with regulations such as Know Your Customer (KYC) and Anti-Money Laundering (AML).</p>
                <div className='bg-[#F5F6F8] overflow-hidden rounded'>
                    <div className='bg-[#ebeef1] py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
                        <div className='basis-[10%] text-base font-bold'>
                            <p>HTTP</p>
                        </div>
                        <div className='md:basis-[43%] xl:basis-[20%] font-bold'>
                            <p>Sandbox URL</p>
                        </div>
                        <div className='basis-[50%] md:basis-[20%] font-bold'>
                            <p>Endpoint</p>
                        </div>
                        <div className='basis-[50%] font-bold'>
                            <p>Endpoints Description</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
                        <div className='basis-[10%] text-base'>
                            <p>POST</p>
                        </div>
                        <div className='md:basis-[43%] xl:basis-[20%] font-bold'>
                            <p className='text-[#1e64a7] font-semibold'>https://devapi.paywise.co</p>
                        </div>
                        <div className='basis-[50%] md:basis-[20%] font-bold'>
                            <a href='#institution_transaction'>/transaction</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Post a creditt or debit transaction</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
                        <div className='basis-[10%] text-base'>
                            <p>GET</p>
                        </div>
                        <div className='md:basis-[43%] xl:basis-[20%] font-bold'>
                            <p className='text-[#1e64a7] font-semibold'>https://devapi.paywise.co</p>
                        </div>
                        <div className='basis-[50%] md:basis-[20%] font-bold'>
                            <a href='#transaction_get'>/transaction/{`{transaction_id}`}</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Retrieve a transaction completion confirmation</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
                        <div className='basis-[10%] text-base'>
                            <p>GET</p>
                        </div>
                        <div className='md:basis-[43%] xl:basis-[20%] font-bold'>
                            <p className='text-[#1e64a7] font-semibold'>https://devapi.paywise.co</p>
                        </div>
                        <div className='basis-[50%] md:basis-[20%] font-bold'>
                            <a href='#exchange_rate_usd'>/exchange_rate_usd</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Gets the exchange rate price on a particular date. Defaults to TTD for 1 USD.</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
                        <div className='basis-[10%] text-base'>
                            <p>POST</p>
                        </div>
                        <div className='md:basis-[43%] xl:basis-[20%] font-bold'>
                            <p className='text-[#1e64a7] font-semibold'>https://devapi.paywise.co</p>
                        </div>
                        <div className='basis-[50%] md:basis-[20%] font-bold'>
                            <a href='#quote_post'>/quote</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Post a quote to understand what the TTD amount will be and the period of time to keep it valid</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
                        <div className='basis-[10%] text-base'>
                            <p>GET</p>
                        </div>
                        <div className='md:basis-[43%] xl:basis-[20%] font-bold'>
                            <p className='text-[#1e64a7] font-semibold'>https://devapi.paywise.co</p>
                        </div>
                        <div className='basis-[50%] md:basis-[20%] font-bold'>
                            <a href='#balance_account'>/quote/{`{quote_id}`}</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Retrieves the quoted payload</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TRANSACTION_INSTITUTION */}
            <div id='institution_transaction' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <span className='py-5 font-semibold'>transaction:</span>
                    <p className='py-5 text-sm'>
                        This endpoint is used to post a transaction, either crediting or debiting a PayWise account. It allows third-party institutions to initiate transactions within the PayWise ecosystem, whether for remittances, payments, or other financial interactions. The <span className='text-[#6FA43A]'>transaction </span> endpoint ensures that funds are securely moved between accounts with detailed tracking of the transaction.
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
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='border-b border-[#6FA43A] py-4'>
                        <h3 className='text-[#1E64A7] font-semibold py-3'>Body Parameters:</h3>
                        <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("session_token")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["session_token"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>session_token <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["session_token"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Encrypted session_token. Institution encrypts the session_token sent using shared key.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 20 - 40</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("transaction_id")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>transaction_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["transaction_id"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Transaction id, generated by Institution. Encryption public keys are shared with PayWise.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 30 - 60</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("transaction_date")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>transaction_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["transaction_date"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The created date and time of the transaction. Format "YYYY-MM-DD HH:mm:ss"</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 19</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("amount")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["amount"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Amount payable to beneficiary in TTD with precision of 2 decimal places</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                    </div>
                                )}
                            </div>

                            {/* Fees */}
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("fees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>fees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["fees"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON object capturing the fees</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                        </div>

                                        {/* total */}
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("total")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["total"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>total <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["total"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total transaction fees</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* convenience */}
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("convenience")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["convenience"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>convenience <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["convenience"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Institution fee charged</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* sender_pays */}
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("sender_pays")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_pays"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>sender_pays <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["sender_pays"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Fee paid by Sender</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* recipient_pays */}
                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("recipient_pays")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["recipient_pays"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>recipient_pays <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["recipient_pays"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Fee paid by Receiver</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("sender_currency")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_currency"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>sender_currency <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["sender_currency"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Source currency in ISO 4217 format. Example "USD"</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("sender_amount")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_amount"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>sender_amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["sender_amount"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> PayWise will record this amount for their own reconciliation. This amount may not be made visible to account holder. Precision of 2 decimal places</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("description")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["description"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>description <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["description"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Freeform text description of the transaction provided by the client.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 256</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("transaction_type")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_type"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>transaction_type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["transaction_type"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Enum = {`inttransfer, p2p`}</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3 - 11</p>
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
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full name of the sending organization. Example: "PayWise".</p>
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

                            <div className="border-b-2 py-4">
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
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full name of the sending organization. Example: "PayWise".</p>
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

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("sender_kyc")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_kyc"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>sender_kyc <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["sender_kyc"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains information about the sender's KYC.</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("nationality")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["nationality"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>nationality <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["nationality"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Nationality in ISO Alpha-2 format. Example "TT".</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("date_of_birth")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["date_of_birth"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>date_of_birth <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["date_of_birth"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Date of birth in YYYY-MM-DD format.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("country_of_birth")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country_of_birth"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>country_of_birth <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["country_of_birth"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Country of birth in ISO Alpha-2 format. Example: "TT".</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("gender")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["gender"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>gender <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["gender"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Gender. Enum = (M)ale, (F)emale, (U)nspecified.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("id_document")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_document"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>id_document <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["id_document"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains KYC document information for the Sender.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("id_type")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_type"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["id_type"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document type of account holder used in sign up. Enum = {`NationalIdCard, Passport, DriversPermit, Other`}.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 20</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("id_number")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_number"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["id_number"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document number.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 30</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("issue_date")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issue_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>issue_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["issue_date"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document issue date in YYYY-MM-DD format.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("expiry_date")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expiry_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>expire_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["expiry_date"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document expiry date in YYYY-MM-DD format.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("issued_country")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issued_country"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>issued_country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["issued_country"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Country where the ID document was issued in ISO Alpha-2 format.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("address")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>address <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["address"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON object that contains address information for the person associated with the business</p>
                                                        <p className="pt-2 pb-4"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    </div>

                                                    <div className="border-y-2 px-2 py-4">
                                                        <div onClick={() => handleClick("address_line1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>address_line1 <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["address_line1"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> First line of the address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1-255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("address_line2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>address_line2 <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["address_line2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Second line of the address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1-255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("address_line3")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line3"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>address_line3 <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["address_line3"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Third line of the address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1-255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("city")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["city"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>city <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["city"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> City/Town of address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 4-20</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("state_province")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["state_province"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>state_province <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["state_province"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> State of address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 4-40</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("postal_code")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["postal_code"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>postal_code <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["postal_code"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Postal Code of address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("country")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["country"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Country in ISO Alpha-2 format</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("subject_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["subject_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>subject_name <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["subject_name"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains KYC name information for the Sender.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("title")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["title"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>title <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["title"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Title.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 0 - 6</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("first_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["first_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>first_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["first_name"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> First name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("middle_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["middle_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>middle_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["middle_name"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Middle name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 0 - 20</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("last_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["last_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>last_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["last_name"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Last name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("full_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["full_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>full_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["full_name"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>


                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("recipient_kyc")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["recipient_kyc"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>recipient_kyc <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["recipient_kyc"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains information about the Recipient's kyc</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("nationality_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["nationality_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>nationality <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["nationality_2"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Nationality in ISO Alpha-2 format. Example "TT".</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("date_of_birth_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["date_of_birth_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>date_of_birth <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["date_of_birth_2"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Date of birth in YYYY-MM-DD format.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("country_of_birth_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country_of_birth_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>country_of_birth <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["country_of_birth_2"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Country of birth in ISO Alpha-2 format. Example: "TT".</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("gender_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["gender_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>gender <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["gender_2"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Gender. Enum = (M)ale, (F)emale, (U)nspecified.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("id_document_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_document_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>id_document <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["id_document_2"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains KYC document information for the Recipient.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("id_type_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_type_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["id_type_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document type of account holder used in sign up. Enum = {`NationalIdCard, Passport, DriversPermit, Other`}.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 20</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("id_number_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_number_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["id_number_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document number.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 30</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("issue_date_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issue_date_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>issue_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["issue_date_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document issue date in YYYY-MM-DD format.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("expiry_date_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expiry_date_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>expire_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["expiry_date_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> ID document expiry date in YYYY-MM-DD format.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("issued_country_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issued_country_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>issued_country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["issued_country_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Country where the ID document was issued in ISO Alpha-2 format.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("address_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>address <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["address_2"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON object that contains address information for the person associated with the business</p>
                                                        <p className="pt-2 pb-4"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    </div>

                                                    <div className="border-y-2 px-2 py-4">
                                                        <div onClick={() => handleClick("address_line1_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line1_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>address_line1 <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["address_line1_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> First line of the address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1-255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("address_line2_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line2_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>address_line2 <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["address_line2_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Second line of the address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1-255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("address_line3_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line3_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>address_line3 <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["address_line3_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Third line of the address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1-255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("city_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["city_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>city <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["city_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> City/Town of address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 4-20</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("state_province_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["state_province_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>state_province <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["state_province_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> State of address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 4-40</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("postal_code_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["postal_code_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>postal_code <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["postal_code_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Postal Code of address</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("country_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["country_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Country in ISO Alpha-2 format</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("subject_name_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["subject_name_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>subject_name <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["subject_name_2"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains KYC name information for the Recipient.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> n/a</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("title_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["title_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>title <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["title_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Title.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 0 - 6</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("first_name_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["first_name_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>first_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["first_name_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> First name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("middle_name_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["middle_name_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>middle_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["middle_name_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Middle name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 0 - 20</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("last_name_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["last_name_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>last_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["last_name_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Last name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("full_name_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["full_name_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>full_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["full_name_2"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full name.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>

                            <div className="pt-4">
                                <div onClick={() => handleClick("transfer_information")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transfer_information"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>transfer_information <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["transfer_information"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains associated data to the transaction that provides auxiliary information and additional security information.</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> N/A</p>
                                        </div>

                                        <div className="border-b-2 py-4">
                                            <div onClick={() => handleClick("quote_id")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["quote_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>quote_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["quote_id"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The specific quoteId to be used for the transaction. This quoteId is generated when a quotation is created and it is returned on the quotation response.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 16-20</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 py-4">
                                            <div onClick={() => handleClick("institution_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["institution_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>institution_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["institution_name"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Name of party who request this api.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 py-4">
                                            <div onClick={() => handleClick("receiving_country")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["receiving_country"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>receiving_country <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["receiving_country"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Destination country where the payout is to be made. To be specified in ISO Alpha 2 format. Example "TT".</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 py-4">
                                            <div onClick={() => handleClick("remittance_purpose")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["remittance_purpose"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>remittance_purpose <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["remittance_purpose"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Reason for the transfer. Enum = {`{values}`}.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 50</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 py-4">
                                            <div onClick={() => handleClick("source_of_funds")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["source_of_funds"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>source_of_funds <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["source_of_funds"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Source of funds. Please click here for accepted values. Enum = {`{values}`}.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 4 - 17</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="pt-4">
                                            <div onClick={() => handleClick("relationship_Recipient")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["relationship_Recipient"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>relationship_recipient <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["relationship_Recipient"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The relation between the Recipient and the beneficiary. Enum = {`{values}`}.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3 - 11</p>
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
                                <div onClick={() => handleClick("status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["status"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("code")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["code"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>code <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                </div>
                                {openSections["code"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> HTTP return code.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 3</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("message")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["message"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>message <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["message"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 255</p>
                                    </div>
                                )}
                            </div>
                            <div className="pt-4">
                                <div onClick={() => handleClick("institution_receipt_id")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["institution_receipt_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>institution_receipt_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["institution_receipt_id"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The PayWise ID returned once the transaction has been posted.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10-40</p>
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
        </div>
    )
}

export default Transaction_Institutions;

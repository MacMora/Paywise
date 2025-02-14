"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/payment/request?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/payment/request?version=2024-10-20";
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
    "rate": "6.7890",
    "request_date": "2024-10-23",
    "quote_date": "2024-10-23 14:30:00",
    "amount_quoted": "500.00",
    "expiry_date": "2024-10-23 14:33:00"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 404,
    "message": " Quote not found"
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
                <div className='px-4 py-2 flex text-sm text-[#F2F2F2]'>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
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
                <div className='px-4 py-2 flex text-sm text-[#F2F2F2]'>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        {responseExample}
                    </pre>
                </div>
            </div>
        </div>
    );
};

const Request_Merchant = () => {

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
            <div id='merchant_api' className='py-12 border-b-2'>
                <h2 className='text-2xl lg:text-3xl font-semibold py-3'>Merchant API</h2>
                <p className='py-5 text-sm'>
                    The Merchant API provides a set of endpoints designed to empower PayWise business account holders to process payments seamlessly. With these endpoints, merchants can accept payments via multiple channels, including the PayWise wallet, credit cards, or by generating QR codes for customers to complete transactions at any authorized PayWise agent location. Additionally, this API includes endpoints to check the status of transactions, giving merchants real-time insight into payment confirmations, processing statuses, and settlement updates.
                    <br /><br />
                    This API is ideal for businesses looking to offer flexible payment options to their customers, streamline payment processing, and keep track of transaction histories—all within a secure, centralized environment.
                </p>
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
                            <a href='#request_merchant'>/payment/request</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Enable merchants to request and process payments through PayWise, supporting multiple payment methods including wallets, credit or debit cards, and QR codes. This endpoint facilitates robust payment scenarios, such as partial payments, split payments, and metadata-rich transactions. With advanced features like custom fee management, payer/payee handling, and optional fraud detection, merchants can ensure a secure and seamless checkout experience for their customers.</p>
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
                            <a href='#cancel_merchant'>/payment/cancel</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Empowers merchants to cancel a pending transaction before it is completed. This feature is ideal for scenarios where a customer changes their mind, an error occurs in the payment request, or any other situation that warrants canceling the payment. Merchants must provide their API key and the unique transaction receipt (payment_details_id) to execute the cancellation. An optional reason parameter can also be included for tracking purposes. Upon successful cancellation, the endpoint returns the updated transaction status and the timestamp of the cancellation.</p>
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
                            <a href='#status_merchant'>/payment/status</a>
                        </div>
                        <div className='full xl:basis-[50%]'>
                            <p>Provides real-time updates on the status of a specific transaction processed through PayWise. Merchants can use this endpoint to check whether a transaction is pending, completed, canceled, or failed. It also delivers detailed transaction metadata, including payer and payee information, timestamps, fees, and fraud detection outcomes, offering full transparency and control over the payment lifecycle.</p>
                        </div>
                    </div>
                    {/*<div className='py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center'>
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
                    </div>*/}
                </div>
            </div>

            <div id='request_merchant' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>

                    <span className='py-5 font-semibold'>request:</span>
                    <p className='py-5 text-sm'>
                        Enable merchants to request and process payments through PayWise, supporting multiple payment methods including wallets, credit or debit cards, and QR codes. This endpoint facilitates robust payment scenarios, such as partial payments, split payments, and metadata-rich transactions. With advanced features like custom fee management, payer/payee handling, and optional fraud detection, merchants can ensure a secure and seamless checkout experience for their customers.
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
                                <div onClick={() => handleClick("api_key")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["api_key"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>api_key <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["api_key"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> PayWise business (Merchant) account api key. Found in your profile.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 30</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("transaction_request")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_request"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>transaction_request <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["transaction_request"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains information about the Merchant's transaction request</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("id")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["id"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Merchant's unique transaction id/ order number</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("amount")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["amount"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amount in transaction payable to Merchant in TTD with precision of 2 decimal places.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("partial_payments")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["partial_payments"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>partial_payments <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["partial_payments"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON Object defining details about any partial payment. Merchants decide if partial payments are allowed if they set this object. Allows combining on-platform (PayWise) and off-platform (e.g., cash) payments.<br />Supported use cases:</p>
                                                        <ol className='py-2'>
                                                            <li className='py-2'>I. Customer pays a fixed amount off-platform with an alternative source e.g. cash. AND then uses PayWise to fund the amount to be processed on the platform.</li>
                                                            <li className='py-2'>II. Customer uses PayWise to fund the amount AND then uses an off-platform source to fund the rest of amount.</li>
                                                        </ol>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("amount_partial")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_partial"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["amount_partial"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amount in transaction payable to Merchant (or Payees) in TTD with precision of 2 decimal places on the PayWise platform.<br /><b>This amount includes fees + taxes + tips + convenience charges.</b></p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("metadata_partial")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_partial"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                        </div>
                                                        {openSections["metadata_partial"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This object captures metadata about the partial payment as key-value pairs if the information does not fit, example description {`--> "<some description>" or notes --> "<some notes>"`}</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("fees_transaction")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees_transaction"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>fees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["fees_transaction"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This object captures information about the payment fee structure</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("pays_fees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["pays_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>pays_fees <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                                        </div>
                                                        {openSections["pays_fees"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Determines who pays all of the payment fees.  {`Enum = {"1", "2", "3"}. 1 = Merchant (default), 2 = Merchant's customer, 3 = both`} </p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("payee_covers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payee_covers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>payee_covers <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                                        </div>
                                                        {openSections["payee_covers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Percent payable by Payee. Example 40 = Payees will cover 40% of the fee. Merchant's customers will cover the rest (i.e. 60%). This field only applies if "pays_fees = 3" is used, otherwise it is ignored. Payees.fees_covered and/ or Payers.fees_covered must respect these ratios.<br /><b>Default is 50%.</b></p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("tax")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["tax"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>tax <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["tax"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Any amount that represents the tax paid</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("tip")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["tip"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>tip <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["tip"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> An amount that represents the total tip paid. Tip must be less than 50% of the amount.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("convenience")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["convenience"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>convenience <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["convenience"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Additional Merchant fee charged to payer(s)</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("currency")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["currency"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>currency <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["currency"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Currency in ISO 4217 format. Example "TTD"</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("description")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["description"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>description <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["description"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This field is used to provide additional context or details about the payment request. It can include a summary of the transaction, such as the goods or services being purchased, to make it clear to both the merchant and payer what the payment is for.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("metadata")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["metadata"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This object allows the merchant to pass additional information as key-value pairs if the information does not fit, example product data</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("payees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>payees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["payees"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description: </span>
                                                            <b>This supports splitting payments to multiple payees. The first Payee is always the Merchant.</b> JSON object that is an array to define how the payment disburses to different accounts. This is optional. If this object is not set, the disbursement will be tied to the Merchant's account based on the API key.
                                                            <p className='py-2'>
                                                                A merchant can explicitly decide which member within the array will cover the fees as well. The sum of the total amount across the array must add up to the transaction_details.partial_payments.amount or transaction_details.amount (which already includes fees, taxes & tips). The merchant account must be one of the members in the array.
                                                            </p>
                                                            <p className='py-2'>
                                                                Supports splitting payments to multiple accounts. Includes options for delayed payouts and per-payee metadata.
                                                            </p>
                                                        </p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("mobile_number_payee")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_payee"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["mobile_number_payee"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payee/ destination account. The PW account that the funds will be deposited within. Full mobile number of account holder. Example: "+18681234567".</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 12</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("amount_payee")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_payee"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["amount_payee"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Amount sent to Payee/ destination account by the payer in TTD with precision of 2 decimal places.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("fees_covered_payee")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees_covered_payee"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>fees_covered <span className='font-cabin text-[#8D9298] font-normal'>number</span></p>
                                                        </div>
                                                        {openSections["fees_covered_payee"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description: </span>
                                                                    Percent of payment fees payable by a Payee.
                                                                    <br />N.B. This field will only be applicable if the "transaction_request.fees.pays_fees = 3" AND all "payees.fees_covered" values are set and aggregate to 100, otherwise, this field is ignored.
                                                                </p>
                                                                <p className='py-2'>
                                                                    Example: If for this API POST request, "transaction_request.fees.fees.pays_fees = 3", "transaction_request.fees.payee_covers = 20"
                                                                    <br />Suppose the total payment fees calculated across all relevant payment methods is $100, and there are two (2) Payees: the first payee has "transaction_request.payees.fees_covered = 40" and the second has "transaction_request.payees.fees_covered = 60".
                                                                    <br />This means that the 2 payees will pay a total of 20$ towards the 100$ fee. The first Payee will cover 40% of the percentage of the fee that and would have 8$ deducted from the funds they receive in their PayWise account, the 2nd Payee will pay 12$
                                                                </p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("delay_days_payee")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["delay_days_payee"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>delay_days <span className='font-cabin text-[#8D9298] font-normal'>number</span></p>
                                                        </div>
                                                        {openSections["delay_days_payee"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Number of days to delay sending the funds. Defaults to 0. Max is 30 days</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("metadata_payee")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_payee"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                        </div>
                                                        {openSections["metadata_payee"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This object captures metadata for a Payee as key-value pairs if the information does not fit, example description {`--> "<some description>" or notes --> "<some notes>"`}</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
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
                                <div onClick={() => handleClick("url")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["url"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>url <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["url"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains information about the URLs</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("success")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["success"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>success <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["success"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This is used to redirect to merchant domain after a successful payment is made.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("notify")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["notify"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>notify <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["notify"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This is used to notify the merchant about the order status after a payment is made. The Merchant can provide their customized webhook address to receive asynchronous payment status updates from here.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("error")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["error"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>error <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["error"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This is used to redirect to an error handling page. This could happen due to insufficient funds, declined transactions, or connectivity issues.<br /><br />Best Practice: Ensure that the error URL provides clear instructions or options for the payer, such as retrying the payment, contacting customer support, or checking the transaction status.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("callback")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["callback"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>callback <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["callback"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Merchants can use this to receive a synchronous real-time updates on the transaction's status.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>payers <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["payers"] && (
                                    <div className="py-3">
                                        <div className="pb-4">
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This supports receiving payments from multiple payers. JSON object to validate up to 20 payers and dynamically calculate amounts based on split payment preferences.</p>
                                            <p className='py-2'>A merchant can support spliting the bill, the array will include fees as well. The sum of the total amount across the array must add up to the transaction_details.partial_payments.amount or transaction_details.amount (which already includes fees, taxes & tips)</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("mobile_number_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["mobile_number_payers"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Full number of the Payer. Example: "+18681234567". Payer may or may not be a PW account holder.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10 - 18</p>
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
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payer's first name</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
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
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payer's last name</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("email")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["email"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>email <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["email"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Email address</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 150</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("payment_channel")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_channel"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>payment_channel <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["payment_channel"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payer's channel field identifies whether the payment is being made through an agent, a direct QR code scan, or online via a payment link. Enum = agent, direct_qr, payment_link</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 5 - 12</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("payment_method")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_method"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>payment_method <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["payment_method"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payer's method of payment to Merchant. Enum = card, credit, debit, wallet, qr_code, crypto</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 5 - 20</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("amount_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["amount_payers"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Amount payable to Merchant by this payer in TTD with precision of 2 decimal places.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("tip_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["tip_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>tip <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["tip_payers"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> An amount that represents the tip paid. Tip must be less than 50% of the amount.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("fees_covered_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees_covered_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>fees_covered <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                            </div>
                                            {openSections["fees_covered_payers"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Percent of the payment fees payable by a Payee. Example: "40"  means that this Payee will cover 40% of the fees component. This field only applies if "transaction _details.fees.pays_fees = 3" is used, otherwise it is ignored. If "pays_fees = 3" AND this key/ value is not used by all Payees in the array, the merchant will pay the proportion of the fees defined by "payee_covers". </p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("metadata_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["metadata_payers"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> This object captures metadata for a Payer as key-value pairs if the information does not fit, example description {`--> "<some description>" or notes --> "<some notes>"`}</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("qr_code")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["qr_code"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>qr_code <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["qr_code"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON object capturing the QR code data for this payer.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("expire_date_qr")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expire_date_qr"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>expire_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["expire_date_qr"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Timestamp of when the code will expire. Format = YYYY-MM-DD HH:MI:SS</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 11 - 19</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("type_qr")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["type_qr"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["type_qr"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> QR code type. Enum = static, dynamic</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 6 - 7</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("format_qr")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["format_qr"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>format <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["format_qr"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The format the merchant wants it returned to them. Default is "url". Enum = data, url</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3 - 4</p>
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
                                <div onClick={() => handleClick("fraud_check")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fraud_check"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>fraud_check <span className='font-cabin text-[#8D9298] font-normal'>boolean</span></p>
                                </div>
                                {openSections["fraud_check"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Indicate if the payment should invoke fraud detection via a third-party system (e.g., MetaMap). Enum = 0, 1<br /><br />Optional fraud detection adds an additional security layer.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='border-b border-[#6FA43A] py-4'>
                        <h3 className='text-[#1E64A7] font-semibold py-3'>POST Callback URL:</h3>
                        <div className='font-code text-sm italic text-[#495059] py-2'>
                            <div onClick={() => handleClick("authorisation_token_callback")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["authorisation_token_callback"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>authorisation_token <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["authorisation_token_callback"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> PW shares this token in the merchant's profile. Merchants are strongly encouraged to verify this header for all incoming POST calls.</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 20 - 40</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='border-b border-[#6FA43A] py-4'>
                        <h3 className='text-[#1E64A7] font-semibold py-3'>POST Notify URL:</h3>
                        <div className='font-code text-sm italic text-[#495059] py-2'>
                            <div onClick={() => handleClick("authorisation_token_notify")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["authorisation_token_notify"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>authorisation_token <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["authorisation_token_notify"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> PW shares this token in the merchant's profile. Merchants are strongly encouraged to verify this header for all incoming POST calls.</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 20 - 40</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='border-b border-[#6FA43A] py-4'>
                        <h3 className='text-[#1E64A7] font-semibold py-3'>Response Parameters:</h3>
                        <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("status_request")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status_request"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["status_request"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 10</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("code_request")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["code_request"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>code <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                </div>
                                {openSections["code_request"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> HTTP return code.</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 3</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("message_request")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["message_request"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>message <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["message_request"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Payment request successful"</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255</p>
                                    </div>
                                )}
                            </div>
                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("payment_details")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_details"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>payment_details <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                </div>
                                {openSections["payment_details"] && (
                                    <div className="py-3">
                                        <div className='pb-4'>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> A JSON object that contains payload about successfully beginning the payment process.</p>
                                            <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("id_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["id_response"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Unique PW transaction receipt.</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("transaction_id")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>transaction_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["transaction_id"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Merchant's unique transaction id/ order number</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 50</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("amount_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                            </div>
                                            {openSections["amount_response"] && (
                                                <div className="py-3">
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amonut of the transaction including fees, tax, and tip</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("fees_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>fees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["fees_response"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amonut of the transaction including fees, tax, and tip</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("total_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["total_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>total <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["total_response"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amount of for the transaction</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("card_processing_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["card_processing_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>card_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["card_processing_response"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Fees associated with processing cards</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("crypto_processing_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["crypto_processing_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>crypto_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["crypto_processing_response"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Fees associated with processing crypto payments</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("platform_processing_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["platform_processing_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>platform_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["platform_processing_response"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Fees associated with processing, including wallet-to-wallet optional fraud checks on via the PW platform</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("agent_processing_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["agent_processing_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>agent_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["agent_processing_response"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Fees associated with processing a transaction</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("convenience_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["convenience_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>convenience <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["convenience_response"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Additional fees charged by the Merchant</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("payers_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payers_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>payers <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["payers_response"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON array of payers contributing to the transaction.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("mobile_number_response_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_response_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["mobile_number_response_payers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payer's mobile number.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 12</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("amount_response_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_response_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["amount_response_payers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amount paid by the payer in TTD.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("fee_response_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fee_response_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>fee <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["fee_response_payers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Wherever applicable, total fee amount paid by the payer.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("tip_response_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["tip_response_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>tip <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["tip_response_payers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Tip amount paid by the payer, if applicable</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("status_response_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status_response_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["status_response_payers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payment request status for payer. Enum = pending, completed, failed, rejected</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 6 - 9</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("metadata_response_payers")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_response_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                        </div>
                                                        {openSections["metadata_response_payers"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Key-value pairs for additional payer details.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                        <div className="border-b-2 px-2 py-4">
                                            <div onClick={() => handleClick("payees_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payees_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>payees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["payees_response"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON array of payees receiving split payments.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("mobile_number_response_payees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_response_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["mobile_number_response_payees"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payee's mobile number.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 12</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("amount_response_payees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_response_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["amount_response_payees"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Total amount received by the payee.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 8, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("fee_response_payees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fee_response_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>fee <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["fee_response_payees"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Wherever applicable, total fee amount paid by the payee.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 7, 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("delay_days_response_payees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["delay_days_response_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>delay_days <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                                        </div>
                                                        {openSections["delay_days_response_payees"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Number of days before the payment is disbursed to the payee.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("metadata_response_payees")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_response_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                        </div>
                                                        {openSections["metadata_response_payees"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Key-value pairs for additional payee details.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2 pt-4">
                                            <div onClick={() => handleClick("qr_code_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["qr_code_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className='font-semibold'>qr_code <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                            </div>
                                            {openSections["qr_code_response"] && (
                                                <div className="py-3">
                                                    <div className='pb-4'>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> JSON object capturing the QR code data for this payer.</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("data_response_qr")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["data_response_qr"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>data <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["data_response_qr"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> QR code returned as data.</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Optional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 2 - 255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="border-b-2 px-2 py-4">
                                                        <div onClick={() => handleClick("url_response_qr")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["url_response_qr"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>url <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["url_response_qr"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Payment URL such as hosted QR codes or payment URL</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 1 - 255</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="px-2 pt-4">
                                                        <div onClick={() => handleClick("expire_time_response_qr")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expire_time_response_qr"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className='font-semibold'>expire_time <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                        </div>
                                                        {openSections["expire_time_response_qr"] && (
                                                            <div className="py-3">
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> The expiration time for the payment request (for QR codes and payment links). Format = YYYY-MM-DD HH:MI:SS</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                                                <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 11 - 19</p>
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
                                <div onClick={() => handleClick("fraud_check_status_response")} className="flex flex-row gap-2 items-center cursor-pointer">
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fraud_check_status_response"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>fraud_check_status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["fraud_check_status_response"] && (
                                    <div className="py-3">
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> "Outcome of the fraud detection check. {`Enum = { "passed", "failed", "skipped" }.`}</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Conditional</p>
                                        <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 6 - 8</p>
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

export default Request_Merchant;

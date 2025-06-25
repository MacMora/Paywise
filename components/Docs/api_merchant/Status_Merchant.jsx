"use client";
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/payment/status?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/payment/status?version=2024-10-20";
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
    "message": "Payment successful",
    "payment_details": {
        "id": "PW-1234567890",
        "transaction_id": "ORD-987654321",
        "amount": "150.00",
        "tax": "10.00",
        "fees": {
            "total": "5.00",
            "card_processing": "2.00",
            "platform_processing": "1.50",
            "agent_processing": "0.50",
            "payer_pays": "3.00",
            "payee_pays": "2.00"
        },
        "currency": "TTD",
        "payments_status": {
            "paid": "100.00",
            "remaining": "50.00"
        },
        "timestamps": {
            "created_time": "2024-10-23 12:00:00",
            "updated_time": "2024-10-23 12:05:00",
            "expire_time": "2024-10-23 12:30:00"
        },
        "payers": [
            {
                "mobile_number": "1234567890",
                "amount": "100.00",
                "fee": "3.00",
                "tip": "2.00",
                "payment_method": "card",
                "status": "completed"
            }
        ],
        "payees": [
            {
                "mobile_number": "0987654321",
                "amount": "97.00",
                "fee": "2.00",
                "payment_date": "2024-10-23 12:10:00",
                "delay_days": 2,
                "status": "pending",
                "payments_status": {
                    "paid": "50.00",
                    "remaining": "47.00"
                }
            }
        ]
    },
    "fraud_check_status": "passed"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 404,
    "message": "Payment request not found"
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


const Status_Merchant = () => {

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
        <div id='status_merchant' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>

                <span className='py-5 font-semibold'>status</span>
                <p className='py-5 text-sm'>
                    Provides real-time updates on the status of a specific transaction processed through PayWise. Merchants can use this endpoint to check whether a transaction is pending, completed, canceled, or failed. It also delivers detailed transaction metadata, including payer and payee information, timestamps, fees, and fraud detection outcomes, offering full transparency and control over the payment lifecycle.
                </p>
                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                    <div className='font-code text-sm italic text-[#495059] py-2'>

                        <div className="border-b-2 py-4">
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

                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("api_key")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["api_key"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>api_key <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["api_key"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> PayWise business (Merchant) account api key. Found in your profile.</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 30</p>
                                </div>
                            )}
                        </div>
                        <div className="pt-4">
                            <div onClick={() => handleClick("payment_details_id")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_details_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>payment_details_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["payment_details_id"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Unique PW transaction receipt id.</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1 - 50</p>
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
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Payment successful"</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 255</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("payment_details")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_details"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>payment_details <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                            </div>
                            {openSections["payment_details"] && (
                                <div className='py-3'>
                                    <div className='pb-4'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> A JSON object that contains payload about successfully beginning the payment process.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("id")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["id"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Unique PW transaction receipt.</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1 - 255</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("transaction_id")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>transaction_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["transaction_id"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Merchant's unique transaction id/ order number</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1 - 50</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("amount")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["amount"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total transaction amount including tax and fees.</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1 - 255</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("tax")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["tax"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>tax <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["tax"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Any amount that represents the tax paid</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>fees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                        </div>
                                        {openSections["fees"] && (
                                            <div className='py-3'>
                                                <div className='pb-4'>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> JSON object breakdown of fees (card processing fees, percentage covered by payer/ merchant)</p>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("total_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["total_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>total <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["total_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total amount of fees for the transaction</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("card_processing_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["card_processing_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>card_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["card_processing_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Fees associated with processing a card</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("platform_processing_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["platform_processing_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>platform_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["platform_processing_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Fees associated with processing, including optional fraud checks on via the PW platform</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("agent_processing_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["agent_processing_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>agent_processing <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["agent_processing_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Fees associated with processing a transaction</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("payer_pays_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payer_pays_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>payer_pays <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["payer_pays_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total fee covered by the Payers</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("payee_pays_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payee_pays_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>payee_pays <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["payee_pays_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total fee covered by the Payees</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("merchant_pays_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["merchant_pays_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>merchant_pays <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["merchant_pays_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total fee covered by the Merchant</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-2 pt-4">
                                                    <div onClick={() => handleClick("convenience_fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["convenience_fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>convenience <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["convenience_fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Additional fees charged by the Merchant</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("currency")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["currency"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>currency <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["currency"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Currency in ISO 4217 format. Example "TTD"</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 3</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("payments_status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payments_status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>payments_status <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                        </div>
                                        {openSections["payments_status"] && (
                                            <div className='py-3'>
                                                <div className='pb-4'>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> JSON object defining any partial payments processed</p>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("paid_payment")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["paid_payment"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>paid <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["paid_payment"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Amount paid so far via PayWise in TTD</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("remaining_payment")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["remaining_payment"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>remaining <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["remaining_payment"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Amount remaining to be paid in TTD</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-2 pt-4">
                                                    <div onClick={() => handleClick("metadata_payment")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_payment"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                    </div>
                                                    {openSections["metadata_payment"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Key-value pairs for additional partial payment information</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("timestamps")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["timestamps"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>timestamps <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["timestamps"] && (
                                            <div className='py-3'>
                                                <div className='pb-4'>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> JSON object of all timestamps</p>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10 - 19</p>
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("created_time_timestamps")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["created_time_timestamps"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>created_time <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["created_time_timestamps"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The creation time for the payment request. Format = YYYY-MM-DD HH:MI:SS</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 11 - 19</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("updated_time_timestamps")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["updated_time_timestamps"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>updated_time <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["updated_time_timestamps"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The last status update timestamp. Format = YYYY-MM-DD HH:MI:SS</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 11 - 19</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-2 pt-4">
                                                    <div onClick={() => handleClick("expire_time_timestamps")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expire_time_timestamps"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>expire_time <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["expire_time_timestamps"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The expiration time for the payment request (for QR codes and payment links). This is at the parent transaction level Format = YYYY-MM-DD HH:MI:SS</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 11 - 19</p>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        )}
                                    </div>

                                    <div className="border-b-2 px-2 py-4">
                                        <div onClick={() => handleClick("payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>payers <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                        </div>
                                        {openSections["payers"] && (
                                            <div className='py-3'>
                                                <div className='pb-4'>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> JSON array of payers contributing to the transaction.</p>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("mobile_number_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["mobile_number_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Mobile number of the payer.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10 - 18</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("amount_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["amount_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total amount contributed by the payer, including tip.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("fee_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fee_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>fee <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["fee_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Wherever applicable, total fee amount paid by the payer.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("tip_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["tip_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>tip <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["tip_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Tip amount paid by the payer, if applicable</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("payment_method_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_method_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>payment_method <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["payment_method_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Method used by the payer. {`Enum = { "card", "credit", "debit", "wallet", "qr_code" }`}.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("status_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["status_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Payment status. Enum = pending, completed, failed, declined, expired</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 6 - 9</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("expire_time_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expire_time_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>expire_time <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["expire_time_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The expiration time for the payment to complete depending on the particular payment method/ channel (for example Wallet, QR codes and payment links) for a particular Payer. Format = YYYY-MM-DD HH:MI:SS</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 11 - 19</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-2 pt-4">
                                                    <div onClick={() => handleClick("metadata_payers")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_payers"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                    </div>
                                                    {openSections["metadata_payers"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Key-value pairs for additional payer information (if applicable).</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 pt-4">
                                        <div onClick={() => handleClick("payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>payees <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                        </div>
                                        {openSections["payees"] && (
                                            <div className='py-3'>
                                                <div className='pb-4'>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> JSON array of payees receiving the payment.</p>
                                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("mobile_number_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["mobile_number_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Mobile number of the payee.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 12</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("amount_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["amount_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total amount allocated to the payee.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("fee_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fee_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>fee <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["fee_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Wherever applicable, total fee amount paid by the payee.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 7, 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("payment_date_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payment_date_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>payment_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["payment_date_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Date and time payment made/ will be paid</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 11 - 19</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("delay_days_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["delay_days_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>delay_days <span className='font-cabin text-[#8D9298] font-normal'>integer</span></p>
                                                    </div>
                                                    {openSections["delay_days_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Number of days before the payment is disbursed to the payee.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 2</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("status_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["status_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Payment status. Enum = pending, completed, failed, rejected</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 6 - 9</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="border-b-2 px-2 py-4">
                                                    <div onClick={() => handleClick("payments_status_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["payments_status_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>payments_status <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                    </div>
                                                    {openSections["payments_status_payees"] && (
                                                        <div className='py-3'>
                                                            <div className='pb-4'>
                                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> JSON object defining any partial payments processed to this Payee</p>
                                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            </div>

                                                            <div className="border-b-2 px-2 py-4">
                                                                <div onClick={() => handleClick("paid_payments_status_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["paid_payments_status_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className='font-semibold'>paid <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                                </div>
                                                                {openSections["paid_payments_status_payees"] && (
                                                                    <div className='py-3'>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Amount paid so far via PayWise in TTD to this Payee</p>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="border-b-2 px-2 py-4">
                                                                <div onClick={() => handleClick("remaining_payments_status_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["remaining_payments_status_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className='font-semibold'>remaining <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                                </div>
                                                                {openSections["remaining_payments_status_payees"] && (
                                                                    <div className='py-3'>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Amount remaining to be paid, in TTD to this Payee</p>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="px-2 pt-4">
                                                                <div onClick={() => handleClick("metadata_payments_status_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_payments_status_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                                </div>
                                                                {openSections["metadata_payments_status_payees"] && (
                                                                    <div className='py-3'>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Key-value pairs for additional partial payment information to this Payee</p>
                                                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                                    </div>
                                                                )}
                                                            </div>

                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-2 pt-4">
                                                    <div onClick={() => handleClick("metadata_payees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata_payees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                                                    </div>
                                                    {openSections["metadata_payees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Key-value pairs for additional payee information (if applicable).</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
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
                            <div onClick={() => handleClick("fraud_check_status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fraud_check_status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>fraud_check_status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["fraud_check_status"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> "Outcome of the fraud detection check. {`Enum = { "passed", "failed", "skipped" }`}.	"</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 6 - 8</p>
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

export default Status_Merchant;

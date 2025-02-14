"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/transaction/{transaction_id}?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/transaction/{transaction_id}?version=2024-10-20";
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

const Transaction_Id_Institutions = () => {

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
        <div id='transaction_get' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>

                <span className='py-5 font-semibold'>transaction/{`{transaction_id}`}:</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>transaction/{`{transaction_id}`} </span> endpoint retrieves a confirmation of the transaction’s completion. Once a transaction has been posted, this call allows the institution to verify its success or failure, providing detailed status updates on the specific transaction based on its unique ID. This is critical for transparency and transaction reconciliation.
                </p>
                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                    <div className='font-code text-sm italic text-[#495059] py-2'>
                        <div className='border-b-2 py-4'>
                            <div onClick={() => handleClick("version")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["version"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>version <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["version"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> optional</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("transaction_id_get")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_id_get"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>transaction_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["transaction_id_get"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Description:</span> Encrypted key generated by Institution</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 40-60</p>
                                </div>
                            )}
                        </div>
                        <div className="pt-4">
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
                                    <p className="py-2"><span className="font-semibold not-italic font-cabin">Field Length:</span> 255  </p>
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
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 255</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("transaction")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>transaction <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                            </div>
                            {openSections["transaction"] && (
                                <div className='py-3'>
                                    <div className='pb-4'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> A JSON object that contains information about the transaction record</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("id")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["id"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> PayWise friendly transaction id.</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 30-60</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("type")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["type"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>type <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["type"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Transaction type. Enum = {`{debit, credit}`}</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 6</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("amount")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["amount"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>amount <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["amount"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total transaction amount in TTD with precision of 2 decimal places. Includes any fees.</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
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

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("sender_full_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_full_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>sender_full_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["sender_full_name"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Full name of sender</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1-255</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("recipient_full_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["recipient_full_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>recipient_full_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["recipient_full_name"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Full name of recipient</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1-255</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("cleared_date")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["cleared_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>cleared_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["cleared_date"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Date transaction has cleared. Format = "YYYY-MM-DD"</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("posted_date")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["posted_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>posted_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["posted_date"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Date transaction submitted. Format = "YYYY-MM-DD"</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("description")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["description"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>description <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["description"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Transaction description detailing any notes about the transaction</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 255</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>status <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["status"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Transaction status. Enum = {`{pending, cancelled, completed, failed}`}</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("source")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["source"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>source <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["source"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Source of the transaction funds. Enum = {`{wallet, agent, thirdparty}`}</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("transaction_method")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transaction_method"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>transaction_method <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["transaction_method"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Transaction method. Enum = {`{wallet_transfer, card, cash_at_agent, bank_transfer, international_transfer, internal_transfer}`}</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10-30</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("parent_mobile_number")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["parent_mobile_number"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>parent_mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["parent_mobile_number"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Full mobile number of account holder of the parent account. Example: "+18681234567".</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 12</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("metadata")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["metadata"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>metadata <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["metadata"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Additional data about the particular transaction</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1-255</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 border-b-2 py-4">
                                        <div onClick={() => handleClick("bless_balance")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["bless_balance"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>balance <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["bless_balance"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Returns the account balance of the recipient.</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10, 2</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-2 pt-4">
                                        <div onClick={() => handleClick("quote_id")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["quote_id"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='font-semibold'>quote_id <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                        </div>
                                        {openSections["quote_id"] && (
                                            <div className='py-3'>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Unique identifier of the quote</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 20-40</p>
                                            </div>
                                        )}
                                    </div>

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
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The PayWise transaction ID returned once the transaction has been posted.</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1-40</p>
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

export default Transaction_Id_Institutions;

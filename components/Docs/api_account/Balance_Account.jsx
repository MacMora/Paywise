"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/account/balance"
-H "Content-Type: application/json"
-H "PW_subscription_key: eed0d85c530c4b26a91d09b783d8fab3"
-H "PW_origin_country: TT"
-H "PW_request_date: 2024-01-10 12:00:00"
-d '{"mobile_number": "+18681234567", "version": "2024-01-10"}'  
    `
    },
    Ruby: {
        description: `
require 'net/http'
require 'json'
require 'uri'

uri = URI("https://devapi.paywise.co/account/balance")
headers = {
    "Content-Type" => "application/json",
    "PW_subscription_key" => "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country" => "TT",
    "PW_request_date" => "2024-01-10 12:00:00"
}
params = {
    "mobile_number" => "+18681234567",
    "version" => "2024-01-10"
}

uri.query = URI.encode_www_form(params)
response = Net::HTTP.get_response(uri, headers)
puts response.body
    `
    },
    PHP: {
        description: `
<?php
$url = "https://devapi.paywise.co/account/balance";
$headers = [
    "Content-Type: application/json",
    "PW_subscription_key: eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country: TT",
    "PW_request_date: 2024-01-10 12:00:00"
];
$params = [
    "mobile_number" => "+18681234567",
    "version" => "2024-01-10"
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url . '?' . http_build_query($params));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
    `
    },
    JavaScript: {
        description: `
const axios = require('axios');

const url = "https://devapi.paywise.co/account/balance";
const headers = {
    "Content-Type": "application/json",
    "PW_subscription_key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country": "TT",
    "PW_request_date": "2024-01-10 12:00:00"
};
const params = {
    mobile_number: "+18681234567",
    version: "2024-10-01"
};

axios.get(url, { headers, params })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
    `
    },
    Python: {
        description: `
import requests

url = "https://devapi.paywise.co/account/balance"
headers = {
    "Content-Type": "application/json",
    "PW_subscription_key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country": "TT",
    "PW_request_date": "2024-01-10 12:00:00"
}
params = {
    "mobile_number": "+18681234567",
    "version": "2024-01-10"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
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
    "message":"Account is in good standing and balance is $400.30",
    "balance":400.30
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 404,
    "message": " Account not found"
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

const Balance_Account = () => {

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
        <div id="balance_account" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                <span className='py-5 font-semibold'>balance</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>balance</span> endpoint retrieves the current balance of the PayWise account for a member. <span className='font-bold'>N.B. This endpoint is for development and testing purposes and only works on the Developer portal.</span>
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
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                </div>
                            )}
                        </div>
                        <div className=" pt-4">
                            <div onClick={() => handleClick("mobile_number")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["mobile_number"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Full mobile number of account holder. Example: "+18681234567".</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 12</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Body Parameters:</h3>
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
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Account is in good standing with a balance of [$balance]."</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 255</p>
                                </div>
                            )}
                        </div>

                        <div className="pt-4">
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
                    </div>
                </div>
            </div>
            <div className='lg:w-2/4 w-full sticky top-0'>
                <Reques_Example />
            </div>
        </div>
    )
}

export default Balance_Account;
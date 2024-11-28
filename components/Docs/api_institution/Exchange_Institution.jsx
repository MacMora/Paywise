"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23" 
-H "Content-Type: application/json" 
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-23 12:34:56"
    `
    },
    Ruby: {
        description: `
require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23")
header = {
  "PW-subscription-key" => "your_subscription_key",
  "PW-origin-country" => "TT",
  "PW-request-date" => "2024-10-23 12:34:56"
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Get.new(uri.request_uri, header)

response = http.request(request)
puts response.body
    `
    },
    PHP: {
        description: `
<?php
$api_url = "https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23";

$headers = [
    "PW-subscription-key: your_subscription_key",
    "PW-origin-country: TT",
    "PW-request-date: 2024-10-23 12:34:56"
];

$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
    `
    },
    JavaScript: {
        description: `
const api_url = "https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23";

const headers = {
  "PW-subscription-key": "your_subscription_key",
  "PW-origin-country": "TT",
  "PW-request-date": "2024-10-23 12:34:56"
};

fetch(api_url, {
  method: "GET",
  headers: headers
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error('Error:', error));
    `
    },
    Python: {
        description: `
import requests

url = "https://devapi.paywise.co/institution/exchange_rate_usd"
params = {
    "currency_pair": "USD",
    "rate_type": "selling",
    "request_date": "2024-10-23",
    "version": "2023-10-23"
}
headers = {
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

response = requests.get(url, headers=headers, params=params)

print(response.status_code)
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
    "rate": "6.7890",
    "request_date": "2024-10-23"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 400,
    "message": "Invalid currency pair"
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

const Exchange_Institutions = () => {

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
        <div id='exchange_rate_usd' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>

                <span className='py-5 font-semibold'>exchange_rate_usd:</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>exchange_rate_usd </span> endpoint retrieves the current USD to TTD exchange rate for a particular date. Institutions can use this to understand the conversion rates being applied when transacting in foreign currencies, ensuring accurate pricing for international payments and foreign exchange operations.
                </p>
                <div className='border-b border-[#6FA43A] py-4'>
                    <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                    <div className='font-code text-sm italic text-[#495059] py-2'>

                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("currency_pair")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["currency_pair"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>currency_pair</span> string</p>
                            </div>
                            {openSections["currency_pair"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> The trading pair. Trading codes from ISO 4217. Example "USD"</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("rate_type")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["rate_type"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>rate_type</span> string</p>
                            </div>
                            {openSections["rate_type"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Enum = {`{buying, selling}`}. Default to "selling"</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 6 - 8</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("request_date")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["request_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>request_date</span> string</p>
                            </div>
                            {openSections["request_date"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Date to source the currency rate. Format "YYYY-MM-DD"</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> optional</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                </div>
                            )}
                        </div>
                        <div className="pt-4">
                            <div onClick={() => handleClick("version_exchange_rate")} className="flex flex-row gap-2 items-center cursor-pointer">
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["version_exchange_rate"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className="font-semibold">version</span> string</p>
                            </div>
                            {openSections["version_exchange_rate"] && (
                                <div className="py-3">
                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
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
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("code_exchange")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["code_exchange"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>code</span> integer</p>
                            </div>
                            {openSections["code_exchange"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> HTTP return code.</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("message")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["message"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>message</span> string</p>
                            </div>
                            {openSections["message"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Messages will show based on condition applied. Added one example only. Example: {`"{Date's}: {rate}"`}</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                </div>
                            )}
                        </div>
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("rate_exchange")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["rate_exchange"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>rate</span> string</p>
                            </div>
                            {openSections["rate_exchange"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> The TTD equivalent for 1 dollar of the currency pair. Precision of up to 4 decimal points.</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 8 , 4</p>
                                </div>
                            )}
                        </div>
                        <div className="pt-4">
                            <div onClick={() => handleClick("request_date_exchange")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["request_date_exchange"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><span className='font-semibold'>request_date</span> string</p>
                            </div>
                            {openSections["request_date_exchange"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Date to source the currency rate. Format "YYYY-MM-DD"</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                    <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 19</p>
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

export default Exchange_Institutions;

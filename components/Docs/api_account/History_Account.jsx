"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X GET "https://devapi.paywise.co/account/transaction_history?mobile_number=%2B18681234567&start_date=2024-01-01&end_date=2024-11-25&version=2024-11-25"
-H "PW_subscription_key: eed0d85c530c4b26a91d09b7"
-H "PW_origin_country: TT"
-H "PW_request_date: 2024-11-25 12:00:00"
    `
    },
    Ruby: {
        description: `
require 'net/http'
require 'uri'
require 'json'

base_url = "https://api.paywise.co/account/transaction_history"
mobile_number = "+18681234567" # Example mobile number
version = "2023-11-24" # Example version

uri = URI("#{base_url}?mobile_number=#{URI.encode(mobile_number)}&version=#{URI.encode(version)}")

headers = {
    "PW_subscription_key" => "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country" => "TT",
    "PW_request_date" => Time.now.strftime("%Y-%m-%d %H:%M:%S")
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri, headers)
response = http.request(request)

if response.code == "200"
  puts "Response: #{response.body}"
else
  puts "Error: #{response.code} - #{response.message}"
end
    `
    },
    PHP: {
        description: `
<?php
$base_url = "https://devapi.paywise.co/account/transaction_history";
$mobile_number = "+18681234567"; // Example mobile number
$version = "2023-11-24"; // Example version

$url = $base_url . "?mobile_number=" . urlencode($mobile_number) . "&version=" . urlencode($version);

$headers = [
    "PW_subscription_key: eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country: TT",
    "PW_request_date: " . date("Y-m-d H:i:s")
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo "cURL Error: " . curl_error($ch);
} else {
    echo "Response: " . $response;
}
curl_close($ch);
?>
    `
    },
    JavaScript: {
        description: `
const axios = require('axios');

const baseURL = "https://api.paywise.co/account/transaction_history";
const mobileNumber = "+18681234567"; // Example mobile number
const version = "2023-11-24"; // Example version

const url = {baseURL}?mobile_number={encodeURIComponent(mobileNumber)}&version={encodeURIComponent(version)};

const headers = {
    "PW_subscription_key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country": "TT",
    "PW_request_date": new Date().toISOString().replace('T', ' ').slice(0, 19)
};

axios.get(url, { headers })
    .then(response => {
        console.log("Response:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
    `
    },
    Python: {
        description: `
import requests

url = "https://devapi.paywise.co/account/transaction_history"
headers = {
    "PW_subscription_key": "eed0d85c530c4b26a91d09b7",
    "PW_origin_country": "TT",
    "PW_request_date": "2024-11-25 12:00:00"
}
params = {
    "mobile_number": "+18681234567",
    "start_date": "2024-01-01",
    "end_date": "2024-11-25",
    "version": "2024-11-25"
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
  "message": "Transaction history retrieved successfully",
  "transactions": [
      {
        "transaction_id": "txn_01GZ74H2XYZ",
        "type": "credit",
        "amount": "150.50",
        "currency": "TTD",
        "date": "2024-05-03 10:45:00",
        "description": "Funds received from John Doe",
        "status": "completed",
        "source": "wallet",
        "transaction_method": "wallet_transfer"
      },
      {
        "transaction_id": "txn_01GZ74H4ABC",
        "type": "debit",
        "amount": "50.00",
        "currency": "TTD",
        "date": "2024-05-02 09:15:00",
        "description": "Bill payment to FLOW",
        "status": "completed",
        "source": "wallet",
        "transaction_method": "bill_payment"
      },
      {
        "transaction_id": "txn_01GZ74H5DEF",
        "type": "credit",
        "amount": "100.00",
        "currency": "TTD",
        "date": "2024-05-01 14:30:00",
        "description": "Cash-in at PayWise Agent",
        "status": "completed",
        "source": "agent",
        "transaction_method": "cash_in"
      }
    ]
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

const History_Account = () => {

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
        <div id="history_account" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                <span className='py-5 font-semibold'>account_history</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>account_history</span> endpoint retrieves the transaction history of a given PayWise account. <span className='font-bold'>N.B. This endpoint is for development and testing purposes and only works on the Developer portal.</span>
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
                        <div className="border-b-2 py-4">
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
                        <div className="border-b-2 py-4">
                            <div onClick={() => handleClick("start_date")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["start_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>start_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["start_date"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The starting date to capture the account period. Defaults to 7 days prior to end date. If end_date is set and is earlier to start_date, this default will kick in. Format = "YYYY-MM-DD"</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Conditional</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                </div>
                            )}
                        </div>
                        <div className="pt-4">
                            <div onClick={() => handleClick("end_date")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["end_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>end_date <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                            </div>
                            {openSections["end_date"] && (
                                <div className='py-3'>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> The end date for the capture of the user's account information. Defaults to today. Format = "YYYY-MM-DD"</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                    <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
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
                            <div onClick={() => handleClick("transactions")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["transactions"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='font-semibold'>transactions <span className='font-cabin text-[#8D9298] font-normal'>object</span></p>
                            </div>
                            {openSections["transactions"] && (
                                <div className='py-3'>
                                    <div className='pb-4'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> An array of transaction record objects.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                    </div>

                                    <div className="px-2 pt-4">
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
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> PayWise transaction id.</p>
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
                                                    <div onClick={() => handleClick("fees")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["fees"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className='font-semibold'>fees <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                                    </div>
                                                    {openSections["fees"] && (
                                                        <div className='py-3'>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Total amount (in TTD with precision of 2 decimal places) of fees associated with the transaction.</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 8, 2</p>
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
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Transaction status. Enum = {`{pending, cancelled, completed, failed}`}</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
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
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Transaction status. Enum = {`{pending, cancelled, completed, failed}`}</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                                            <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10</p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-2 pt-4">
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
                                        )}
                                    </div>

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

export default History_Account;
"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X POST https://devapi.paywise.co/account/personal_account?version=2023-10-23
-H "Content-Type: application/json"
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT" 
-H "PW-request-date: 2024-10-23 12:34:56" 
-d '{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "mobile_number": "+18681234567",
  "address": {
    "address_line1": "123 Main Street",
    "address_line2": "Apt 4",
    "city": "Port of Spain",
    "state_province": "POS",
    "postal_code": "0000",
    "country": "TT"
  },
  "dob": "1990-01-01",
  "ids": {
    "id_document1": {
      "id_type": "Passport",
      "id_number": "123456789",
      "issue_date": "2010-01-01",
      "expiry_date": "2025-01-01",
      "issued_country": "TT",
      "name": "John Doe",
      "file": "path/to/file.jpg"
    },
    "id_document2": {
      "id_type": "NationalIdCard",
      "id_number": "A1234567",
      "issue_date": "2010-01-01",
      "expiry_date": "2025-01-01",
      "issued_country": "TT",
      "name": "John Doe",
      "file": "path/to/file.jpg"
    }
  },
  "poa": {
    "poa_type": "UtilityBill",
    "poa_bill_date": "2023-01-01",
    "poa_name": "John Doe",
    "poa_address": "123 Main Street",
    "poa_file": "path/to/utilitybill.jpg"
  },
  "selfie": "path/to/selfie.jpg"
}'  
    `
      },
      Ruby: {
        description: `
require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://devapi.paywise.co/account/personal_account?version=2023-10-23")
header = {
  "Content-Type" => "application/json",
  "PW-subscription-key" => "your_subscription_key",
  "PW-origin-country" => "TT",
  "PW-request-date" => "2024-10-23 12:34:56"
}
body = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  mobile_number: "+18681234567",
  address: {
    address_line1: "123 Main Street",
    address_line2: "Apt 4",
    city: "Port of Spain",
    state_province: "POS",
    postal_code: "0000",
    country: "TT"
  },
  dob: "1990-01-01",
  ids: {
    id_document1: {
      id_type: "Passport",
      id_number: "123456789",
      issue_date: "2010-01-01",
      expiry_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    },
    id_document2: {
      id_type: "NationalIdCard",
      id_number: "A1234567",
      issue_date: "2010-01-01",
      expiry_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    }
  },
  poa: {
    poa_type: "UtilityBill",
    poa_bill_date: "2023-01-01",
    poa_name: "John Doe",
    poa_address: "123 Main Street",
    poa_file: "path/to/utilitybill.jpg"
  },
  selfie: "path/to/selfie.jpg"
}.to_json

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri.request_uri, header)
request.body = body

response = http.request(request)
puts response.body
    `
      },
      PHP: {
        description: `
<?php
$api_url = "https://devapi.paywise.co/account/personal_account?version=2023-10-23";
$data = [
    "first_name" => "John",
    "last_name" => "Doe",
    "email" => "john.doe@example.com",
    "mobile_number" => "+18681234567",
    "address" => [
        "address_line1" => "123 Main Street",
        "address_line2" => "Apt 4",
        "city" => "Port of Spain",
        "state_province" => "POS",
        "postal_code" => "0000",
        "country" => "TT"
    ],
    "dob" => "1990-01-01",
    "ids" => [
        "id_document1" => [
            "id_type" => "Passport",
            "id_number" => "123456789",
            "issue_date" => "2010-01-01",
            "expiry_date" => "2025-01-01",
            "issued_country" => "TT",
            "name" => "John Doe",
            "file" => "path/to/file.jpg"
        ],
        "id_document2" => [
            "id_type" => "NationalIdCard",
            "id_number" => "A1234567",
            "issue_date" => "2010-01-01",
            "expiry_date" => "2025-01-01",
            "issued_country" => "TT",
            "name" => "John Doe",
            "file" => "path/to/file.jpg"
        ]
    ],
    "poa" => [
        "poa_type" => "UtilityBill",
        "poa_bill_date" => "2023-01-01",
        "poa_name" => "John Doe",
        "poa_address" => "123 Main Street",
        "poa_file" => "path/to/utilitybill.jpg"
    ],
    "selfie" => "path/to/selfie.jpg"
];

$headers = [
    "Content-Type: application/json",
    "PW-subscription-key: your_subscription_key",
    "PW-origin-country: TT",
    "PW-request-date: 2024-10-23 12:34:56"
];

$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
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
const api_url = "https://devapi.paywise.co/account/personal_account?version=2023-10-23";

const headers = {
  "Content-Type": "application/json",
  "PW-subscription-key": "your_subscription_key",
  "PW-origin-country": "TT",
  "PW-request-date": "2024-10-23 12:34:56"
};

const data = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  mobile_number: "+18681234567",
  address: {
    address_line1: "123 Main Street",
    address_line2: "Apt 4",
    city: "Port of Spain",
    state_province: "POS",
    postal_code: "0000",
    country: "TT"
  },
  dob: "1990-01-01",
  ids: {
    id_document1: {
      id_type: "Passport",
      id_number: "123456789",
      issue_date: "2010-01-01",
      expiry_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    },
    id_document2: {
      id_type: "NationalIdCard",
      id_number: "A1234567",
      issue_date: "2010-01-01",
      expiry_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    }
  },
  poa: {
    poa_type: "UtilityBill",
    poa_bill_date: "2023-01-01",
    poa_name: "John Doe",
    poa_address: "123 Main Street",
    poa_file: "path/to/utilitybill.jpg"
  },
  selfie: "path/to/selfie.jpg"
};

fetch(api_url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
    `
    },
    Python: {
        description: `
import requests
import json

url = "https://devapi.paywise.co/account/personal_account?version=2023-10-23"

headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

data = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "mobile_number": "+18681234567",
    "address": {
        "address_line1": "123 Main Street",
        "address_line2": "Apt 4",
        "city": "Port of Spain",
        "state_province": "POS",
        "postal_code": "0000",
        "country": "TT"
    },
    "dob": "1990-01-01",
    "ids": {
        "id_document1": {
            "id_type": "Passport",
            "id_number": "123456789",
            "issue_date": "2010-01-01",
            "expiry_date": "2025-01-01",
            "issued_country": "TT",
            "name": "John Doe",
            "file": "path/to/file.jpg"
        },
        "id_document2": {
            "id_type": "NationalIdCard",
            "id_number": "A1234567",
            "issue_date": "2010-01-01",
            "expiry_date": "2025-01-01",
            "issued_country": "TT",
            "name": "John Doe",
            "file": "path/to/file.jpg"
        }
    },
    "poa": {
        "poa_type": "UtilityBill",
        "poa_bill_date": "2023-01-01",
        "poa_name": "John Doe",
        "poa_address": "123 Main Street",
        "poa_file": "path/to/utilitybill.jpg"
    },
    "selfie": "path/to/selfie.jpg"
}

response = requests.post(url, headers=headers, data=json.dumps(data))

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
    "code": 201,
    "message": "Account created successfully",
    "pin": "123456"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 400,
    "message": "Invalid email address format"
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

const Personal_Account = () => {
    
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
        <div id="personal_account" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                            <span className='py-5 font-semibold'>personal_account:</span>
                            <p className='py-5 text-sm'>
                            The <span className='text-[#6FA43A]'>personal_account</span> endpoint allows the creation of a personal PayWise account for testing purposes on the Developer Portal. Developers can simulate account creation workflows for individual users before proceeding with live transactions. N.B. This endpoint is not available in the production environment.
                            </p>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => handleClick("personal_version")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["personal_version"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>version</span> string</p>
                                    </div>
                                    {openSections["personal_version"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic'>Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                    </div>
                                    )}
                                </div>
                            </div>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Body Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("first_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["first_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">first_name</span> string</p>
                                    </div>
                                    {openSections["first_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> First name</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-50</p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("last_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["last_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">last_name</span> string</p>
                                    </div>
                                    {openSections["last_name"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Last name</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-50</p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("email")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["email"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">email</span> string</p>
                                    </div>
                                    {openSections["email"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Email address</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("mobile_number")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">mobile_number</span> string</p>
                                    </div>
                                    {openSections["mobile_number"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Full mobile number of account holder. Example: "+18681234567"</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 12</p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("address")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">address</span> object</p>
                                    </div>
                                    {openSections["address"] && (
                                        <div className="py-3">
                                            <div className='pb-4'>
                                                <p className="py-2"><span className="font-semibold not-italic">Description:</span> JSON object that contains address information for the person associated with the business</p>
                                                <p className="pt-2 pb-4"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            </div>
                                            
                                            <div className="border-y-2 px-2 py-4">
                                                <div onClick={() => handleClick("address_line1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">address_line1</span> string</p>
                                                </div>
                                                {openSections["address_line1"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> First line of the address</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-255</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("address_line2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">address_line2</span> string</p>
                                                </div>
                                                {openSections["address_line2"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Second line of the address</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-255</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("address_line3")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_line3"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">address_line3</span> string</p>
                                                </div>
                                                {openSections["address_line3"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Third line of the address</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-255</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("city")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["city"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">city</span> string</p>
                                                </div>
                                                {openSections["city"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> City/Town of address</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4-20</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("state_province")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["state_province"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">state_province</span> string</p>
                                                </div>
                                                {openSections["state_province"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> State of address</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 4-40</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("postal_code")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["postal_code"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">postal_code</span> string</p>
                                                </div>
                                                {openSections["postal_code"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Postal Code of address</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="px-2 pt-4">
                                                <div onClick={() => handleClick("country")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["country"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">country</span> string</p>
                                                </div>
                                                {openSections["country"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country in ISO Alpha-2 format</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                

                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("dob")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["dob"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">dob</span> string</p>
                                    </div>
                                    {openSections["dob"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> Date of birth in YYYY-MM-DD format</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                        </div>
                                    )}
                                </div>

                                {/* ids */}
                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("ids")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["ids"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">ids</span> object</p>
                                    </div>
                                    {openSections["ids"] && (
                                        <div className="py-3">
                                            <div className='pb-4'>
                                                <p className="py-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains the government IDs</p>
                                                <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            </div>

                                            {/* id_document1 */}
                                            <div className="border-y-2 px-2 py-4">
                                                <div onClick={() => handleClick("id_document1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_document1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">id_document1</span> object</p>
                                                </div>
                                                {openSections["id_document1"] && (
                                                    <div className="py-3">
                                                        <div className='px-2 pb-4'>
                                                            <p className="p-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains ID document information for 1st ID card</p>
                                                            <p className="p-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                        </div>
                                                        

                                                        {/* id_type (within id_document1) */}
                                                        <div className="border-y-2 px-2 py-4">
                                                            <div onClick={() => handleClick("id_type_1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_type_1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">id_type</span> string</p>
                                                            </div>
                                                            {openSections["id_type_1"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document type of account holder used in sign up. Enum = {`{NationalIdCard, Passport, DriversPermit, Other}`}</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-20</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* id_number (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("id_number_1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_number_1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">id_number</span> string</p>
                                                            </div>
                                                            {openSections["id_number_1"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document number</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-30</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* issue_date (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("issue_date_1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issue_date_1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">issue_date</span> string</p>
                                                            </div>
                                                            {openSections["issue_date_1"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document issue date in YYYY-MM-DD format</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* expiry_date (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("expiry_date_1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expiry_date_1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">expiry_date</span> string</p>
                                                            </div>
                                                            {openSections["expiry_date_1"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document expiry date in YYYY-MM-DD format</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* issued_country (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("issued_country_1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issued_country_1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">issued_country</span> string</p>
                                                            </div>
                                                            {openSections["issued_country_1"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country where the ID document was issued in ISO Alpha-2 format</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* name */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">name</span> string</p>
                                                            </div>
                                                            {openSections["name"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> Name on the document</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* address */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("address_1")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_1"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">address</span> string</p>
                                                            </div>
                                                            {openSections["address_1"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> Address on document on DriversPermit</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Conditional</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* file */}
                                                        <div className="px-2 pt-4">
                                                            <div onClick={() => handleClick("file")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["file"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">file</span> file</p>
                                                            </div>
                                                            {openSections["file"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> File for the document</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                    </div>
                                                )}
                                            </div>

                                            {/* id_document2 */}
                                            <div className=" px-2 pt-4">
                                                <div onClick={() => handleClick("id_document2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_document2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">id_document2</span> object</p>
                                                </div>
                                                {openSections["id_document2"] && (
                                                    <div className="py-3">
                                                        <div className='px-2 pb-4'>
                                                            <p className="p-2"><span className="font-semibold not-italic">Description:</span> A JSON object that contains ID document information for 1st ID card</p>
                                                            <p className="p-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                        </div>
                                                        

                                                        {/* id_type (within id_document1) */}
                                                        <div className="border-y-2 px-2 py-4">
                                                            <div onClick={() => handleClick("id_type_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_type_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">id_type</span> string</p>
                                                            </div>
                                                            {openSections["id_type_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document type of account holder used in sign up. Enum = {`{NationalIdCard, Passport, DriversPermit, Other}`}</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-20</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* id_number (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("id_number_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["id_number_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">id_number</span> string</p>
                                                            </div>
                                                            {openSections["id_number_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document number</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 1-30</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* issue_date (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("issue_date_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issue_date_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">issue_date</span> string</p>
                                                            </div>
                                                            {openSections["issue_date_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document issue date in YYYY-MM-DD format</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Optional</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* expiry_date (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("expiry_date_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["expiry_date_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">expiry_date</span> string</p>
                                                            </div>
                                                            {openSections["expiry_date_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> ID document expiry date in YYYY-MM-DD format</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* issued_country (within id_document1) */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("issued_country_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["issued_country_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">issued_country</span> string</p>
                                                            </div>
                                                            {openSections["issued_country_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> Country where the ID document was issued in ISO Alpha-2 format</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 2</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* name */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("name_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["name_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">name</span> string</p>
                                                            </div>
                                                            {openSections["name_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> Name on the document</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* address */}
                                                        <div className="border-b-2 px-2 py-4">
                                                            <div onClick={() => handleClick("address_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["address_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">address</span> string</p>
                                                            </div>
                                                            {openSections["address_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> Address on document on DriversPermit</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Conditional</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* file */}
                                                        <div className="px-2 pt-4">
                                                            <div onClick={() => handleClick("file_2")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                                <svg className={`cursor-pointer transition-transform duration-150 ${rotations["file_2"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <p><span className="font-semibold">file</span> file</p>
                                                            </div>
                                                            {openSections["file_2"] && (
                                                                <div className="py-3">
                                                                    <p className="py-2"><span className="font-semibold not-italic">Description:</span> File for the document</p>
                                                                    <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    )}
                                </div>

                                
                                {/* poa */}
                                <div className="border-b-2 py-4">
                                    <div onClick={() => handleClick("poa")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["poa"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">poa</span> object</p>
                                    </div>
                                    {openSections["poa"] && (
                                        <div className="py-3">
                                            <div className='pb-4'>
                                                <p className="py-2"><span className="font-semibold not-italic">Description:</span> JSON object Proof of address</p>
                                                <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                            </div>
                                            
                                            {/* poa_type */}
                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("poa_type")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["poa_type"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">poa_type</span> string</p>
                                                </div>
                                                {openSections["poa_type"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Enum = {`{"UtilityBill", "BankStatement", "GovernmentDocument", "Other"}`}`</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* poa_bill_date */}
                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("poa_bill_date")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["poa_bill_date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">poa_bill_date</span> string</p>
                                                </div>
                                                {openSections["poa_bill_date"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Date on bill in the YYYY-MM-DD format</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Field Length:</span> 10</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* poa_name */}
                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("poa_name")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["poa_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">poa_name</span> string</p>
                                                </div>
                                                {openSections["poa_name"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Name on the document</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* poa_address */}
                                            <div className="border-b-2 px-2 py-4">
                                                <div onClick={() => handleClick("poa_address")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["poa_address"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">poa_address</span> string</p>
                                                </div>
                                                {openSections["poa_address"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> Address on the document</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* poa_file */}
                                            <div className="px-2 pt-4">
                                                <div onClick={() => handleClick("poa_file")} className="flex flex-row gap-2 items-center cursor-pointer">
                                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["poa_file"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p><span className="font-semibold">poa_file</span> file</p>
                                                </div>
                                                {openSections["poa_file"] && (
                                                    <div className="py-3">
                                                        <p className="py-2"><span className="font-semibold not-italic">Description:</span> File for the document</p>
                                                        <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    )}
                                </div>

                                

                                {/* selfie */}
                                <div className="pt-4">
                                    <div onClick={() => handleClick("selfie")} className="flex flex-row gap-2 items-center cursor-pointer">
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["selfie"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p><span className="font-semibold">selfie</span> file</p>
                                    </div>
                                    {openSections["selfie"] && (
                                        <div className="py-3">
                                            <p className="py-2"><span className="font-semibold not-italic">Description:</span> File for the document</p>
                                            <p className="py-2"><span className="font-semibold not-italic">Requirement:</span> Mandatory</p>
                                        </div>
                                    )}
                                </div>

                                    
                                </div>
                            </div>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Response Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("personal_status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["personal_status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>status</span> string</p>
                                        </div>
                                        {openSections["personal_status"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("personal_code")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["personal_code"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>code</span> integer</p>
                                        </div>
                                        {openSections["personal_code"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> HTTP return code.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("personal_message")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["personal_message"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>message</span> string</p>
                                        </div>
                                        {openSections["personal_message"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className= "pt-4">
                                        <div onClick={() => handleClick("personal_pin")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["personal_pin"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>pin</span> string</p>
                                        </div>
                                        {openSections["personal_pin"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> The pin associated with the newly created account</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 6</p>
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

export default Personal_Account;

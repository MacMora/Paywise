"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';
import ParameterItem from '@/components/ParameterItem';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X POST https://devapi.paywise.co/account/bless_account?version=2023-10-23
-H "Content-Type: application/json"
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-23 12:34:56"
-d '{
  "amount": "500.00",
  "mobile_number": "+18681234567"
}'  
    `
    },
    Ruby: {
        description: `
require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://devapi.paywise.co/account/bless_account?version=2023-10-23")
header = {
  "Content-Type" => "application/json",
  "PW-subscription-key" => "your_subscription_key",
  "PW-origin-country" => "TT",
  "PW-request-date" => "2024-10-23 12:34:56"
}
body = {
  amount: "500.00",
  mobile_number: "+18681234567"
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
$api_url = "https://devapi.paywise.co/account/bless_account?version=2023-10-23";
$data = [
    "amount" => "500.00",
    "mobile_number" => "+18681234567"
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
const api_url = "https://devapi.paywise.co/account/bless_account?version=2023-10-23";

const headers = {
  "Content-Type": "application/json",
  "PW-subscription-key": "your_subscription_key",
  "PW-origin-country": "TT",
  "PW-request-date": "2024-10-23 12:34:56"
};

const data = {
  amount: "500.00",
  mobile_number: "+18681234567"
};

fetch(api_url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error('Error:', error));
    `
    },
    Python: {
        description: `
import requests
import json

url = "https://devapi.paywise.co/account/bless_account?version=2023-10-23"
headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

data = {
    "amount": "500.00",
    "mobile_number": "+18681234567"
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
    "code": 200,
    "message": "Funds credited successfully",
    "balance": "1500.25"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 400,
    "message": "Invalid account number"
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

const blessAccountParameters = [
    {
        key: "version",
        label: "version",
        type: "string",
        section: "Request Parameters",
        description: "For version control. Format = YYYY-MM-DD. Defaults to the latest version",
        requirement: "Mandatory",
        length: "10",
    },
    {
        key: "amount",
        label: "amount",
        type: "string",
        section: "Body Parameters", 
        description: "Amount payable to beneficiary in TTD with precision of 2 decimal places. Default $500.",
        requirement: "Mandatory",
        length: "8, 2",
    },
    {
        key: "mobile_number",
        label: "mobile_number",
        type: "string",
        section: "Body Parameters",
        description: "Full mobile number of account holder. Example: +18681234567.",
        requirement: "Mandatory",
        length: "12",
    },
    {
        key: "status",
        label: "status",
        type: "string",
        section: "Response Parameters",
        description: "Returns the API call status. Enum = {success, error}",
        requirement: "Mandatory",
        length: "10",
    },
    {
        key: "code",
        label: "code",
        type: "integer",
        section: "Response Parameters",
        description: "HTTP return code.",
        requirement: "Mandatory",
        length: "3",
    },
    {
        key: "message",
        label: "message",
        type: "string",
        section: "Response Parameters",
        description: "Message is conditional. Messages will show based on condition applied. Added one example only. Example: Funds credited successfully",
        requirement: "Mandatory",
        length: "255",
    },
    {
        key: "balance",
        label: "balance",
        type: "string",
        section: "Response Parameters",
        description: "Returns the account balance.",
        requirement: "Mandatory",
        length: "10, 2",
    }
]

const Bless_Account = () => {

    // Estado para controlar la visibilidad del div que contiene el <p>
    const [openSections, setOpenSections] = useState({});
    const [rotations, setRotations] = useState({});

    const sections = [
        "Request Parameters",
        "Body Parameters",
        "Response Parameters",
    ];

    return (
        <div id="bless_account" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                <span className='py-5 font-semibold'>bless_account</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>bless_account</span> endpoint is designed to add credit to a specified account. It simulates funding an account and can be used for testing in the sandbox environment. This functionality is useful for validating scenarios where accounts are credited as part of a transaction flow, helping to ensure the reliability of payment processes. <span className='font-bold'>N.B. This endpoint is for development and testing purposes and only works on the Developer portal.</span>
                </p>

                {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {blessAccountParameters
                .filter((param) => param.section === section)
                .map((param, idx, arr) => (
                  <ParameterItem
                    key={param.key}
                    param={param}
                    openSections={openSections}
                    setOpenSections={setOpenSections}
                    rotations={rotations}
                    setRotations={setRotations}
                    isLast={idx === arr.length - 1}
                  />
                ))}
            </div>
          </div>
        ))}

            </div>
            <div className='lg:w-2/4 w-full sticky top-0'>
                <Reques_Example />
            </div>
        </div>
    )
}

export default Bless_Account;

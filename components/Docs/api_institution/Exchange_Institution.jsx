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
    "message": "2025-02-14: 6.7450",
    "rate": "6.7450",
    "request_date": "2025-02-14"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 404,
    "message": "Exchange rate not available for the requested date",
    "rate": "0.0000",
    "request_date": "2025-02-14"
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

const exchangeInstitutionParameters = [
    {
        key: "currency_pair",
        label: "currency_pair",
        type: "string",
        section: "Request Parameters",
        description: "The trading pair. Trading codes from ISO 4217. Example: USD",
        requirement: "Mandatory",
        length: "3",
    },
    {
        key: "rate_type",
        label: "rate_type",
        type: "string",
        section: "Request Parameters",
        description: "Enum = {buying, selling}. Default to 'selling'",
        requirement: "Mandatory",
        length: "6-8",
    },
    {
        key: "request_date",
        label: "request_date",
        type: "string",
        section: "Request Parameters",
        description: "Date to source the currency rate. Format = YYYY-MM-DD",
        requirement: "Optional",
        length: "10",
    },
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
        description: "Messages will show based on condition applied. Added one example only. Example: {Date's}: {rate}",
        requirement: "Mandatory",
        length: "255",
    },
    {
        key: "rate",
        label: "rate",
        type: "string",
        section: "Response Parameters",
        description: "The TTD equivalent for 1 dollar of the currency pair. Precision of up to 4 decimal points.",
        requirement: "Mandatory",
        length: "8, 4",
    },
    {
        key: "response_request_date",
        label: "request_date",
        type: "string",
        section: "Response Parameters",
        description: "Date to source the currency rate. Format = YYYY-MM-DD",
        requirement: "Mandatory",
        length: "19",
    }
]

const Exchange_Institutions = () => {

    // Estado para controlar la visibilidad del div que contiene el <p>
    const [openSections, setOpenSections] = useState({});
    const [rotations, setRotations] = useState({});

    const sections = [
        "Request Parameters",
        "Body Parameters",
        "Response Parameters",
    ];

    return (
        <div id='exchange_rate_usd' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>

                <span className='py-5 font-semibold'>exchange_rate_usd:</span>
                <p className='py-5 text-sm'>
                    The <span className='text-[#6FA43A]'>exchange_rate_usd </span> endpoint retrieves the current USD to TTD exchange rate for a particular date. Institutions can use this to understand the conversion rates being applied when transacting in foreign currencies, ensuring accurate pricing for international payments and foreign exchange operations.
                </p>
                
                {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {exchangeInstitutionParameters
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

export default Exchange_Institutions;

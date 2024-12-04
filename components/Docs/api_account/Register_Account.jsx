"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X POST https://devapi.paywise.co/account/register_account?version=2023-10-23
-H "Content-Type: application/json"
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-23 12:34:56"
-d '{
    "mobile_number": "+18681234567",
    "institution_name": "Institution Name",
    "callback_url": "https://yourcallbackurl.com/response",
    "first_name": "John",
    "last_name": "Doe",
    "session_token": "encrypted_session_token",
    "authorisation_token": "unencrypted_authorisation_token"
}'
    
    `
    },
    Ruby: {
        description: `
require 'net/http'
require 'uri'
require 'json'
    
uri = URI.parse("https://devapi.paywise.co/account/register_account?version=2023-10-23")
header = {
    "Content-Type" => "application/json",
    "PW-subscription-key" => "your_subscription_key",
    "PW-origin-country" => "TT",
    "PW-request-date" => "2024-10-23 12:34:56"
}
body = {
    mobile_number: "+18681234567",
    institution_name: "Institution Name",
    callback_url: "https://yourcallbackurl.com/response",
    first_name: "John",
    last_name: "Doe",
    session_token: "encrypted_session_token",
    authorisation_token: "unencrypted_authorisation_token"
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
$api_url = "https://devapi.paywise.co/account/register_account?version=2023-10-23";
$data = [
    "mobile_number" => "+18681234567",
    "institution_name" => "Institution Name",
    "callback_url" => "https://yourcallbackurl.com/response",
    "first_name" => "John",
    "last_name" => "Doe",
    "session_token" => "encrypted_session_token",
    "authorisation_token" => "unencrypted_authorisation_token"
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
const api_url = "https://devapi.paywise.co/account/register_account?version=2023-10-23";

const headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
};

const data = {
    mobile_number: "+18681234567",
    institution_name: "Institution Name",
    callback_url: "https://yourcallbackurl.com/response",
    first_name: "John",
    last_name: "Doe",
    session_token: "encrypted_session_token",
    authorisation_token: "unencrypted_authorisation_token"
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

url = "https://devapi.paywise.co/account/register_account?version=2023-10-23"

headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

data = {
    "mobile_number": "+18681234567",
    "institution_name": "Institution Name",
    "callback_url": "https://yourcallbackurl.com/response",
    "first_name": "John",
    "last_name": "Doe",
    "session_token": "encrypted_session_token",
    "authorisation_token": "unencrypted_authorisation_token"
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
    "message": "Registration request sent"
    }
#if there is an error, the response may look like:
    {
    "status": "error",
    "code": 400,
    "message": "Invalid mobile number format"
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

const Register_Account = () => {

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
            {/* ACCOUNT_API */}
            <div id="account_api" className='py-12 border-b-2'>
                <h2 className='text-2xl lg:text-3xl font-semibold py-3'>Account API</h2>
                <p className='py-5 text-sm'>
                    The Account Product API provides a comprehensive set of endpoints for managing user registrations and creating both business and personal accounts within the platform. This API is designed to streamline the onboarding process, allowing seamless creation and management of user identities. It supports various operations such as registering new users, handling account information, and managing business-specific attributes. The API is secured with role-based access control and rate limiting, ensuring a robust and compliant solution for account management.
                </p>
                <div className='bg-[#F5F6F8] overflow-hidden rounded'>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>POST</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devportal.paywise.co/register-customer' target='_blank'>https://devportal.paywise.co/register-customer</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='https://api.paywise.co/' target='_blank'>https://api.paywise.co/</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#register_account'>/account/register_account</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Calling institution (i.e. caller) and/or PayWise, requests and retains the authorization or rejection from the PayWise account holder to establish a connection to Calling institution There needs to be adequate transparency as data about the user, may be shared via this connection.</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>GET</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devportal.paywise.co/register-customer' target='_blank'>https://devportal.paywise.co/register-customer</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='https://api.paywise.co/' target='_blank'>https://api.paywise.co/</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#dev_account'>/account/account</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Retrieves the account status. This checks that the account is in good standing and is available to receive or send funds.</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>POST</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devportal.paywise.co/register-customer' target='_blank'>https://devportal.paywise.co/register-customer</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a></a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#personal_account'>/account/personal_account</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Create a personal account for testing on the Developer portal.</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>POST</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devportal.paywise.co/register-customer' target='_blank'>https://devportal.paywise.co/register-customer</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a></a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#business_account'>/account/business_account</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Create a business account for testing on the Developer portal.</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>GET</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devapi.paywise.co/' target='_blank'>https://devapi.paywise.co/</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a></a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#balance_account'>/account/balance</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Retrieves the current balance of the PayWise account.</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>GET</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devapi.paywise.co/' target='_blank'>https://devapi.paywise.co/</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a></a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#history_account'>/account/transaction_history</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Returns a list of all transactions within a specified date range. Defaults to last 7 days</p>
                        </div>
                    </div>
                    <div className='py-4 px-2 border flex flex-row max-xl:flex-wrap gap-4 text-sm items-center'>
                        <div className='basis-[5%] text-base'>
                            <p>POST</p>
                        </div>
                        <div className='basis-[30%]'>
                            <a href='https://devapi.paywise.co/' target='_blank'>https://devapi.paywise.co/</a>
                        </div>
                        <div className='basis-[15%]'>
                            <a></a>
                        </div>
                        <div className='basis-[15%]'>
                            <a href='#bless_account'>/account/bless_account</a>
                        </div>
                        <div className='full xl:basis-[35%]'>
                            <p>Adds credit to an account</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* REGISTER_ACCOUNT */}
            <div id='register_account' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <span className='py-5 font-semibold'>register_account:</span>
                    <p className='py-5 text-sm'>
                        The <span className='text-[#6FA43A]'>register_account</span> endpoint allows the calling institution to request and manage authorization or rejection from the PayWise account holder to establish a connection with the institution. Adequate transparency is provided to the user, ensuring they are aware of the data being shared through this connection. This step is crucial in integrating the institution with the user's PayWise account, maintaining security and consent throughout the process.
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
                                <div onClick={() => handleClick("mobile_number")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["mobile_number"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>mobile_number <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["mobile_number"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Full mobile number of account holder. Example: "+18681234567"</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 12</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("institution_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["institution_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>institution_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["institution_name"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Name of party who request this api.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 255</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("callback_url")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["callback_url"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>callback_url <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["callback_url"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Url to return the respone to request</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 200</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("first_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["first_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>first_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["first_name"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> First name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1 - 50</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("last_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["last_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>last_name <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["last_name"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Last name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Optional</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 1 - 75</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-b-2 py-4">
                                <div onClick={() => handleClick("session_token")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["session_token"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>session_token <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["session_token"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Encrypted session_token. Institution encrypts the session_token sent using shared key.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 20 - 40</p>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4">
                                <div onClick={() => handleClick("authorisation_token")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg className={`cursor-pointer transition-transform duration-150 ${rotations["authorisation_token"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='font-semibold'>authorisation_token <span className='font-cabin text-[#8D9298] font-normal'>string</span></p>
                                </div>
                                {openSections["authorisation_token"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Description:</span> Unencrypted token shared by institution for callback POST method. PW will encrypt using shared key.</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic font-cabin'>Field Length:</span> 10 - 40</p>
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

                            <div className="pt-4">
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

export default Register_Account;

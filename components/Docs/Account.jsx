"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../LenguageContext';
import { Copy, Check } from 'lucide-react';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X POST "https://devapi.paywise.co/account?version=2024-10-20"
-H "PW-subscription-key: eed0d85c530c4b26a91d09b783d8fab3"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-20 15:30:00"
-d '{
    "account_mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "account_first_name": "John",
    "account_last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
}'  
    `
      },
      Ruby: {
        description: `
require 'net/http'
require 'json'

url = URI("https://devapi.paywise.co/account?version=2024-10-20")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

headers = {
  'PW-subscription-key' => 'eed0d85c530c4b26a91d09b783d8fab3',
  'PW-origin-country' => 'TT',
  'PW-request-date' => '2024-10-20 15:30:00',
  'Content-Type' => 'application/json'
}

body = {
  "account_mobile_number" => "+18681234567",
  "institution_name" => "PayWise Institution",
  "account_first_name" => "John",
  "account_last_name" => "Doe",
  "sender_first_name" => "Jane",
  "sender_last_name" => "Smith"
}

request = Net::HTTP::Post.new(url, headers)
request.body = body.to_json

response = http.request(request)
puts response.read_body
    `
      },
      PHP: {
        description: `
<?php 
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://devapi.paywise.co/account?version=2024-10-20",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "PW-subscription-key: eed0d85c530c4b26a91d09b783d8fab3",
        "PW-origin-country: TT",
        "PW-request-date: 2024-10-20 15:30:00",
        "Content-Type: application/json"
    ),
    CURLOPT_POSTFIELDS => json_encode(array(
        "account_mobile_number" => "+18681234567",
        "institution_name" => "PayWise Institution",
        "account_first_name" => "John",
        "account_last_name" => "Doe",
        "sender_first_name" => "Jane",
        "sender_last_name" => "Smith"
    )),
));

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
    `
    },
    JavaScript: {
        description: `
const url = "https://devapi.paywise.co/account?version=2024-10-20";
const headers = {
    "PW-subscription-key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-20 15:30:00",
    "Content-Type": "application/json"
};

const body = {
    "account_mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "account_first_name": "John",
    "account_last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
};

fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
    `
    },
    Python: {
        description: `
import requests

url = "https://devapi.paywise.co/account"
headers = {
    "PW-subscription-key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-20 15:30:00"
}

params = {
    "version": "2024-10-20"
}

data = {
    "account_mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "account_first_name": "John",
    "account_last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
}

response = requests.get(url, headers=headers, params=params, json=data)
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
    "message": "Registration request sent",
    "account_status": "available",
    "session_token": "abcd1234xyz"
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

const Account = () => {
    
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
        <div id="dev_account" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
            <div className='lg:w-2/5 w-full'>
                            <span className='py-5 font-semibold'>account:</span>
                            <p className='py-5 text-sm'>
                            The <span className='text-[#6FA43A]'>account</span> endpoint retrieves the status of a PayWise account. It checks whether the account is in good standing and available for receiving or sending funds. This ensures that the account can actively participate in transactions, providing peace of mind for both the institution and the user.
                            </p>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Request Parameters:</h3>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => handleClick("version_account")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                        <svg className={`cursor-pointer transition-transform duration-150 ${rotations["version_account"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>version</span> string</p>
                                    </div>
                                    {openSections["version_account"] && (
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
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_mobile_number")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_mobile_number"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>account_mobile_number</span> string</p>
                                        </div>
                                        {openSections["account_mobile_number"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Full mobile number of account holder. Example: "+18681234567"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 12</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_institution_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_institution_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>institution_name</span> string</p>
                                        </div>
                                        {openSections["account_institution_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Name of the institution or party requesting this API.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_first_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_first_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>account_first_name</span> string</p>
                                        </div>
                                        {openSections["account_first_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> First name of the account holder as registered with PayWise. This should match the KYC document provided during registration.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_last_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_last_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>account_last_name</span> string</p>
                                        </div>
                                        {openSections["account_last_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Last name of the account holder as registered with PayWise. This should match the KYC document provided during registration.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 1 - 75</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("sender_first_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_first_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>sender_first_name</span> string</p>
                                        </div>
                                        {openSections["sender_first_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> First name of the sender as registered with the sender partner. This should match the KYC document provided during registration.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "pt-4">
                                        <div onClick={() => handleClick("sender_last_name")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["sender_last_name"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>sender_last_name</span> string</p>
                                        </div>
                                        {openSections["sender_last_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Last name of the sender as registered with the sender partner. This should match the KYC document provided during registration.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 1 - 75</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] font-semibold py-3'>Response Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("acc_status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["acc_status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>status</span> string</p>
                                        </div>
                                        {openSections["acc_status"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_code")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_code"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>code</span> integer</p>
                                        </div>
                                        {openSections["account_code"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> HTTP return code.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_message")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_message"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>message</span> string</p>
                                        </div>
                                        {openSections["account_message"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => handleClick("account_status")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["account_status"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>account_status</span> string</p>
                                        </div>
                                        {openSections["account_status"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Returns the status of the user.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> {`Enum = {available, unavailable, unknown}`}</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 8 - 11</p>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className= "pt-4">
                                        <div onClick={() => handleClick("session_token")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                            <svg className={`cursor-pointer transition-transform duration-150 ${rotations["session_token"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>session_token</span> string</p>
                                        </div>
                                        {openSections["session_token"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Unencrypted session_token passed to be encrypted using shared keys with Institution.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10 - 20</p>
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

export default Account;

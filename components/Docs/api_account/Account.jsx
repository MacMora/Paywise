"use client";
// Importamos useState desde React
import { useState } from 'react';
import { useLanguage } from '../../LenguageContext';
import { Copy, Check } from 'lucide-react';
import ParameterItem from '@/components/ParameterItem';
//import { accountParameters } from './ParameterItem';

// Datos de lenguajes de programación
const languageData = {
    Bash: {
        description: `
curl -X POST "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith"
-H "PW-subscription-key: eed0d85c530c4b26a91d09b783d8fab3"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-20 15:30:00" 
-d '{
    "mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "first_name": "John",
    "last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
}'  
    `
    },
    Ruby: {
        description: `
require 'net/http'
require 'json'

url = URI("https://devapi.paywise.co/account/account?version=2024-10-20")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

headers = {
  'PW-subscription-key' => 'eed0d85c530c4b26a91d09b783d8fab3',
  'PW-origin-country' => 'TT',
  'PW-request-date' => '2024-10-20 15:30:00',
  'Content-Type' => 'application/json'
}

body = {
  "mobile_number" => "+18681234567",
  "institution_name" => "PayWise Institution",
  "first_name" => "John",
  "last_name" => "Doe",
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
    CURLOPT_URL => "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "PW-subscription-key: eed0d85c530c4b26a91d09b783d8fab3",
        "PW-origin-country: TT",
        "PW-request-date: 2024-10-20 15:30:00",
        "Content-Type: application/json"
    ),
    CURLOPT_POSTFIELDS => json_encode(array(
        "mobile_number" => "+18681234567",
        "institution_name" => "PayWise Institution",
        "first_name" => "John",
        "last_name" => "Doe",
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
const url = "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith";
const headers = {
    "PW-subscription-key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-20 15:30:00",
    "Content-Type": "application/json"
};

const body = {
    "mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "first_name": "John",
    "last_name": "Doe",
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

url = "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith"
headers = {
    "PW-subscription-key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-20 15:30:00"
}

params = {
    "version": "2024-10-20"
}

data = {
    "mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "first_name": "John",
    "last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
}

response = requests.get(url, headers=headers, params=params, json=data)
print(response.json())
    `
    },
};

const accountParameters = [
    // Request Parameters
    {
      key: "version",
      label: "version",
      type: "string",
      section: "Request Parameters",
      description: 'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
      requirement: 'mandatory',
      length: '10',
    },
    {
      key: "mobile_number",
      label: "mobile_number",
      type: "string",
      section: "Request Parameters",
      description: 'Full mobile number of account holder. Example: "+18681234567"',
      requirement: 'mandatory',
      length: '12',
    },
    {
      key: "institution_name",
      label: "institution_name",
      type: "string",
      section: "Request Parameters",
      description: 'Name of party who requested this api.',
      requirement: 'mandatory',
      length: '255',
    },
    {
      key: "first_name",
      label: "first_name",
      type: "string",
      section: "Request Parameters",
      description: 'First name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.',
      requirement: 'mandatory',
      length: '1 - 50',
    },
    {
      key: "last_name",
      label: "last_name",
      type: "string",
      section: "Request Parameters",
      description: 'Last name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.',
      requirement: 'mandatory',
      length: '1 - 75',
    },
    {
      key: "sender_first_name",
      label: "sender_first_name",
      type: "string",
      section: "Request Parameters",
      description: 'First name of the sender as registered with the sender partner. This should be the complete name as per the KYC document provided during the registration process.',
      requirement: 'optional',
      length: '1 - 50',
    },
    {
      key: "sender_last_name",
      label: "sender_last_name",
      type: "string",
      section: "Request Parameters",
      description: 'Last name of the sender as registered with the sender partner. This should be the complete name as per the KYC document provided during the registration process.',
      requirement: 'optional',
      length: '1 - 75',
    },
    {
      key: "email",
      label: "email",
      type: "string",
      section: "Request Parameters",
      description: 'Email verification to take place on the email of the PayWise account holder',
      requirement: 'optional',
      length: '5 - 200',
    },
  
    // Response Parameters
    {
      key: "status",
      label: "status",
      type: "string",
      section: "Response Parameters",
      description: 'Returns the API call status. Enum = { "success", "error" }',
      requirement: 'mandatory',
      length: '10',
    },
    {
      key: "code",
      label: "code",
      type: "integer",
      section: "Response Parameters",
      description: 'HTTP return code.',
      requirement: 'mandatory',
      length: '3',
    },
    {
      key: "message",
      label: "message",
      type: "string",
      section: "Response Parameters",
      description: 'Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"',
      requirement: 'mandatory',
      length: '255',
    },
    {
      key: "account_status",
      label: "account_status",
      type: "string",
      section: "Response Parameters",
      description: 'Returns the status of the user. Enum = {available, unavailable, unknown}',
      requirement: 'mandatory',
      length: '8 - 11',
    },
    {
      key: "session_token",
      label: "session_token",
      type: "string",
      section: "Response Parameters",
      description: 'Unencrypted session_token passed to be encrypted using shared keys with Institution.',
      requirement: 'mandatory',
      length: '10 - 20',
    },
  ];

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
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 400,
    "message": "Invalid mobile number format"
}
`;

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



const Account = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  // Agrupar parámetros por sección
  const sections = [
    'Request Parameters',
    'Body Parameters',
    'Response Parameters',
  ];

  return (
    <div id="dev_account" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
      <div className='lg:w-2/5 w-full'>
        <span className='py-5 font-semibold'>account:</span>
        <p className='py-5 text-sm'>
          The <span className='text-[#6FA43A]'>account</span> endpoint retrieves the status of a PayWise account. It checks whether the account is in good standing and available for receiving or sending funds. This ensures that the account can actively participate in transactions, providing peace of mind for both the institution and the user.
        </p>
        {sections.map((section) => (
          <div key={section} className='border-b border-[#6FA43A] py-4'>
            <h3 className='text-[#1E64A7] font-semibold py-3'>{section}:</h3>
            <div className={`flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2`}>
              {accountParameters.filter((param) => param.section === section).map((param, idx, arr) => (
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
  );
};

export default Account;

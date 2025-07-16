"use client";
// Importamos useState desde React
import { useState } from "react";
import { useLanguage } from "../../LenguageContext";
import { Copy, Check } from "lucide-react";
import ParameterItem from "@/components/ParameterItem";

// Datos de lenguajes de programación
const languageData = {
  Bash: {
    description: `
curl -X POST https://devapi.paywise.co/account/business_account?version=2023-10-23
-H "Content-Type: application/json"
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-23 12:34:56"
-d '{
  "business_name": "Doe Enterprises",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@doeenterprises.com",
  "mobile_number": "+18681234567",
  "business_type": "Company",
  "business_relationship": "Director",
  "industry": "Technology",
  "sector": "IT Services",
  "addresses": {
    "address": {
      "address_line1": "123 Main Street",
      "city": "Port of Spain",
      "state_province": "POS",
      "postal_code": "0000",
      "country": "TT"
    },
    "business_address": {
      "address_line1": "456 Business Ave",
      "city": "Port of Spain",
      "state_province": "POS",
      "postal_code": "0000",
      "country": "TT"
    }
  },
  "dob": "1980-01-01",
  "ids": {
    "id_document1": {
      "type": "Passport",
      "number": "123456789",
      "issue_date": "2010-01-01",
      "expire_date": "2025-01-01",
      "issued_country": "TT",
      "name": "John Doe",
      "file": "path/to/passport_file.jpg"
    },
    "id_document2": {
      "type": "NationalIdCard",
      "number": "A1234567",
      "issue_date": "2010-01-01",
      "expire_date": "2025-01-01",
      "issued_country": "TT",
      "name": "John Doe",
      "file": "path/to/id_file.jpg"
    }
  },
  "poa": {
    "type": "UtilityBill",
    "bill_date": "2023-01-01",
    "name": "John Doe",
    "address": "123 Main Street",
    "file": "path/to/utilitybill.jpg"
  },
  "selfie": "path/to/selfie.jpg",
  "signature": "path/to/signature.jpg"
}' 
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://devapi.paywise.co/account/business_account?version=2023-10-23")
header = {
  "Content-Type" => "application/json",
  "PW-subscription-key" => "your_subscription_key",
  "PW-origin-country" => "TT",
  "PW-request-date" => "2024-10-23 12:34:56"
}
body = {
  business_name: "Doe Enterprises",
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@doeenterprises.com",
  mobile_number: "+18681234567",
  business_type: "Company",
  business_relationship: "Director",
  industry: "Technology",
  sector: "IT Services",
  addresses: {
    address: {
      address_line1: "123 Main Street",
      city: "Port of Spain",
      state_province: "POS",
      postal_code: "0000",
      country: "TT"
    },
    business_address: {
      address_line1: "456 Business Ave",
      city: "Port of Spain",
      state_province: "POS",
      postal_code: "0000",
      country: "TT"
    }
  },
  dob: "1980-01-01",
  ids: {
    id_document1: {
      type: "Passport",
      number: "123456789",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/passport_file.jpg"
    },
    id_document2: {
      type: "NationalIdCard",
      number: "A1234567",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/id_file.jpg"
    }
  },
  poa: {
    type: "UtilityBill",
    bill_date: "2023-01-01",
    name: "John Doe",
    address: "123 Main Street",
    file: "path/to/utilitybill.jpg"
  },
  selfie: "path/to/selfie.jpg",
  signature: "path/to/signature.jpg"
}.to_json

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri.request_uri, header)
request.body = body

response = http.request(request)
puts response.body
    `,
  },
  PHP: {
    description: `
<?php
$api_url = "https://devapi.paywise.co/account/business_account?version=2023-10-23";
$data = [
    "business_name" => "Doe Enterprises",
    "first_name" => "John",
    "last_name" => "Doe",
    "email" => "john.doe@doeenterprises.com",
    "mobile_number" => "+18681234567",
    "business_type" => "Company",
    "business_relationship" => "Director",
    "industry" => "Technology",
    "sector" => "IT Services",
    "addresses" => [
        "address" => [
            "address_line1" => "123 Main Street",
            "city" => "Port of Spain",
            "state_province" => "POS",
            "postal_code" => "0000",
            "country" => "TT"
        ],
        "business_address" => [
            "address_line1" => "456 Business Ave",
            "city" => "Port of Spain",
            "state_province" => "POS",
            "postal_code" => "0000",
            "country" => "TT"
        ]
    ],
    "dob" => "1980-01-01",
    "ids" => [
        "id_document1" => [
            "type" => "Passport",
            "number" => "123456789",
            "issue_date" => "2010-01-01",
            "expire_date" => "2025-01-01",
            "issued_country" => "TT",
            "name" => "John Doe",
            "file" => "path/to/passport_file.jpg"
        ],
        "id_document2" => [
            "type" => "NationalIdCard",
            "number" => "A1234567",
            "issue_date" => "2010-01-01",
            "expire_date" => "2025-01-01",
            "issued_country" => "TT",
            "name" => "John Doe",
            "file" => "path/to/id_file.jpg"
        ]
    ],
    "poa" => [
        "type" => "UtilityBill",
        "bill_date" => "2023-01-01",
        "name" => "John Doe",
        "address" => "123 Main Street",
        "file" => "path/to/utilitybill.jpg"
    ],
    "selfie" => "path/to/selfie.jpg",
    "signature" => "path/to/signature.jpg"
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
    `,
  },
  JavaScript: {
    description: `
const api_url = "https://devapi.paywise.co/account/business_account?version=2023-10-23";

const headers = {
  "Content-Type": "application/json",
  "PW-subscription-key": "your_subscription_key",
  "PW-origin-country": "TT",
  "PW-request-date": "2024-10-23 12:34:56"
};

const data = {
  business_name: "Doe Enterprises",
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@doeenterprises.com",
  mobile_number: "+18681234567",
  business_type: "Company",
  business_relationship: "Director",
  industry: "Technology",
  sector: "IT Services",
  addresses: {
    address: {
      address_line1: "123 Main Street",
      city: "Port of Spain",
      state_province: "POS",
      postal_code: "0000",
      country: "TT"
    },
    business_address: {
      address_line1: "456 Business Ave",
      city: "Port of Spain",
      state_province: "POS",
      postal_code: "0000",
      country: "TT"
    }
  },
  dob: "1980-01-01",
  ids: {
    id_document1: {
      type: "Passport",
      number: "123456789",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/passport_file.jpg"
    },
    id_document2: {
      type: "NationalIdCard",
      number: "A1234567",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/id_file.jpg"
    }
  },
  poa: {
    type: "UtilityBill",
    bill_date: "2023-01-01",
    name: "John Doe",
    address: "123 Main Street",
    file: "path/to/utilitybill.jpg"
  },
  selfie: "path/to/selfie.jpg",
  signature: "path/to/signature.jpg"
};

fetch(api_url, {
  method: "POST",
  headers: headers,
  body: JSON.<span className='font-cabin text-[#8D9298] font-normal'>string</span> ify(data)
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error('Error:', error));
    `,
  },
  Python: {
    description: `
import requests
import json

url = "https://devapi.paywise.co/account/business_account?version=2023-10-23"
headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

data = {
    "business_name": "Doe Enterprises",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@doeenterprises.com",
    "mobile_number": "+18681234567",
    "business_type": "Company",
    "business_relationship": "Director",
    "industry": "Technology",
    "sector": "IT Services",
    "addresses": {
        "address": {
            "address_line1": "123 Main Street",
            "city": "Port of Spain",
            "state_province": "POS",
            "postal_code": "0000",
            "country": "TT"
        },
        "business_address": {
            "address_line1": "456 Business Ave",
            "city": "Port of Spain",
            "state_province": "POS",
            "postal_code": "0000",
            "country": "TT"
        }
    },
    "dob": "1980-01-01",
    "ids": {
        "id_document1": {
            "type": "Passport",
            "number": "123456789",
            "issue_date": "2010-01-01",
            "expire_date": "2025-01-01",
            "issued_country": "TT",
            "name": "John Doe",
            "file": "path/to/passport_file.jpg"
        },
        "id_document2": {
            "type": "NationalIdCard",
            "number": "A1234567",
            "issue_date": "2010-01-01",
            "expire_date": "2025-01-01",
            "issued_country": "TT",
            "name": "John Doe",
            "file": "path/to/id_file.jpg"
        }
    },
    "poa": {
        "type": "UtilityBill",
        "bill_date": "2023-01-01",
        "name": "John Doe",
        "address": "123 Main Street",
        "file": "path/to/utilitybill.jpg"
    },
    "selfie": "path/to/selfie.jpg",
    "signature": "path/to/signature.jpg"
}

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.status_code)
print(response.json())
    `,
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
      console.error("Failed to copy text: ", err);
    }
  };

  const responseExample = `{
    "status": "success",
    "code": 201,
    "message": "Business account created successfully",
    "pin": "654321",
    "api_key": "ed02d894a530c4b26a91d09b783d8f123456789abcdef123456789abcdef12"
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 400,
    "message": "Invalid business name format"
}`;

  return (
    <div>
      <div className="bg-[#699EC7] rounded my-8 md:mb-4">
        <div className="bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t">
          <div className="w-2/4 py-2 sm:px-2">
            <h2 className="text-sm text-[#F2F2F2]">Request example:</h2>
          </div>
          <div className="w-2/6 flex justify-center items-center gap-2">
            <select
              className="bg-[#699EC7] rounded text-[#F2F2F2] p-1"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Object.keys(languageData).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <button
              onClick={() =>
                handleCopy(
                  languageData[selectedLanguage]?.description,
                  setCopiedRequest
                )
              }
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
        <div className="overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]">
          <pre>{languageData[selectedLanguage]?.description}</pre>
        </div>
      </div>
      <div className="bg-[#699EC7] rounded my-8 md:mb-4">
        <div className="bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t">
          <div className="w-2/4 py-2 sm:px-2">
            <h2 className="text-sm text-[#F2F2F2]">Response example:</h2>
          </div>
          <div className="w-2/6 flex justify-center items-center gap-2">
            <select
              className="bg-[#699EC7] rounded text-[#F2F2F2] p-1"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Object.keys(languageData).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
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
        <div className="overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]">
          <pre>{responseExample}</pre>
        </div>
      </div>
    </div>
  );
};

const businessAccountParameters = [
  // Request Parameters
  {
    key: 'business_version',
    label: 'version',
    type: 'string',
    section: 'Request Parameters',
    description: 'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: 'Mandatory',
    length: '10',
  },
  // Body Parameters
  {
    key: 'business_name',
    label: 'business_name',
    type: 'string',
    section: 'Body Parameters',
    description: 'Name of the business',
    requirement: 'Mandatory',
    length: '1-255',
  },
  {
    key: 'business_first_name',
    label: 'first_name',
    type: 'string',
    section: 'Body Parameters',
    description: 'First name',
    requirement: 'Mandatory',
    length: '1-50',
  },
  {
    key: 'business_last_name',
    label: 'last_name',
    type: 'string',
    section: 'Body Parameters',
    description: 'Last name',
    requirement: 'Mandatory',
    length: '1-50',
  },
  {
    key: 'business_email',
    label: 'email',
    type: 'string',
    section: 'Body Parameters',
    description: 'Email address',
    requirement: 'Mandatory',
    length: '1-150',
  },
  {
    key: 'business_mobile_number',
    label: 'mobile_number',
    type: 'string',
    section: 'Body Parameters',
    description: 'Full mobile number of account holder. Example: "+18681234567"',
    requirement: 'Mandatory',
    length: '10-18',
  },
  {
    key: 'business_type',
    label: 'business_type',
    type: 'string',
    section: 'Body Parameters',
    description: 'Enum = {"Sole Trader", "Partnership", "Company"}',
    requirement: 'Mandatory',
    length: '7-11',
  },
  {
    key: 'business_relationship',
    label: 'business_relationship',
    type: 'string',
    section: 'Body Parameters',
    description: 'If business_type = "Company", then Enum = {"Director", "Secretary", "Acting Secretary", "Shareholder", "Person of Interest", "Shareholder, Director and/or Secretary"}',
    requirement: 'Conditional',
    length: '4-40',
  },
  {
    key: 'industry',
    label: 'industry',
    type: 'string',
    section: 'Body Parameters',
    description: 'Enum = {values}. Example: "Retail Trade"',
    requirement: 'Mandatory',
    length: '1-255',
  },
  {
    key: 'sector',
    label: 'sector',
    type: 'string',
    section: 'Body Parameters',
    description: 'Enum = {values}. Example: "Department Stores"',
    requirement: 'Mandatory',
    length: '1-255',
  },
  {
    key: 'addresses',
    label: 'addresses',
    type: 'object',
    section: 'Body Parameters',
    description: 'An object that contains the addresses',
    requirement: 'Mandatory',
    children: [
      {
        key: 'address',
        label: 'address',
        type: 'object',
        description: 'JSON object that contains address information for the person associated with the business',
        requirement: 'Mandatory',
        children: [
          {
            key: 'address_line1',
            label: 'address_line1',
            type: 'string',
            description: 'First line of the address',
            requirement: 'Mandatory',
            length: '1-255',
          },
          {
            key: 'address_line2',
            label: 'address_line2',
            type: 'string',
            description: 'Second line of the address',
            requirement: 'Optional',
            length: '1-255',
          },
          {
            key: 'address_line3',
            label: 'address_line3',
            type: 'string',
            description: 'Third line of the address',
            requirement: 'Optional',
            length: '1-255',
          },
          {
            key: 'city',
            label: 'city',
            type: 'string',
            description: 'City/Town of address',
            requirement: 'Mandatory',
            length: '4-20',
          },
          {
            key: 'state_province',
            label: 'state_province',
            type: 'string',
            description: 'State of address',
            requirement: 'Optional',
            length: '4-40',
          },
          {
            key: 'postal_code',
            label: 'postal_code',
            type: 'string',
            description: 'Postal Code of address',
            requirement: 'Optional',
            length: '10',
          },
          {
            key: 'country',
            label: 'country',
            type: 'string',
            description: 'Country in ISO Alpha-2 format',
            requirement: 'Mandatory',
            length: '2',
          },
        ],
      },
      {
        key: 'business_address',
        label: 'business_address',
        type: 'object',
        description: 'An object that contains address information for the business',
        requirement: 'Mandatory',
        children: [
          {
            key: 'address_line1_1',
            label: 'address_line1',
            type: 'string',
            description: 'First line of the address',
            requirement: 'Mandatory',
            length: '1-255',
          },
          {
            key: 'address_line2_1',
            label: 'address_line2',
            type: 'string',
            description: 'Second line of the address',
            requirement: 'Optional',
            length: '1-255',
          },
          {
            key: 'address_line3_1',
            label: 'address_line3',
            type: 'string',
            description: 'Third line of the address',
            requirement: 'Optional',
            length: '1-255',
          },
          {
            key: 'city_1',
            label: 'city',
            type: 'string',
            description: 'City/Town of address',
            requirement: 'Mandatory',
            length: '4-20',
          },
          {
            key: 'state_province_1',
            label: 'state_province',
            type: 'string',
            description: 'State of address',
            requirement: 'Optional',
            length: '4-40',
          },
          {
            key: 'postal_code_1',
            label: 'postal_code',
            type: 'string',
            description: 'Postal Code of address',
            requirement: 'Optional',
            length: '10',
          },
          {
            key: 'country_1',
            label: 'country',
            type: 'string',
            description: 'Country in ISO Alpha-2 format',
            requirement: 'Mandatory',
            length: '2',
          },
        ],
      },
    ],
  },
  {
    key: 'dob',
    label: 'dob',
    type: 'string',
    section: 'Body Parameters',
    description: 'Date of birth in YYYY-MM-DD format',
    requirement: 'Optional',
    length: '10',
  },
  {
    key: 'ids',
    label: 'ids',
    type: 'object',
    section: 'Body Parameters',
    description: 'A JSON object that contains the government IDs',
    requirement: 'Mandatory',
    children: [
      {
        key: 'id_document1',
        label: 'id_document1',
        type: 'object',
        description: 'A JSON object that contains ID document information for 1st ID card',
        requirement: 'Mandatory',
        children: [
          {
            key: 'type_1',
            label: 'type',
            type: 'string',
            description: 'ID document type of account holder used in sign up. Enum = {NationalIdCard, Passport, DriversPermit, Other}',
            requirement: 'Mandatory',
            length: '1-20',
          },
          {
            key: 'number_1',
            label: 'number',
            type: 'string',
            description: 'ID document number',
            requirement: 'Mandatory',
            length: '1-30',
          },
          {
            key: 'issue_date_1',
            label: 'issue_date',
            type: 'string',
            description: 'ID document issue date in YYYY-MM-DD format',
            requirement: 'Optional',
            length: '10',
          },
          {
            key: 'expire_date_1',
            label: 'expire_date',
            type: 'string',
            description: 'ID document expiry date in YYYY-MM-DD format',
            requirement: 'Mandatory',
            length: '10',
          },
          {
            key: 'issued_country_1',
            label: 'issued_country',
            type: 'string',
            description: 'Country where the ID document was issued in ISO Alpha-2 format',
            requirement: 'Mandatory',
            length: '2',
          },
          {
            key: 'name',
            label: 'name',
            type: 'string',
            description: 'Name on the document',
            requirement: 'Mandatory',
            length: '1-150',
          },
          {
            key: 'address_1',
            label: 'address',
            type: 'string',
            description: 'Address on document on DriversPermit',
            requirement: 'Conditional',
            length: '1-255',
          },
          {
            key: 'file',
            label: 'file',
            type: 'file',
            description: 'File for the document',
            requirement: 'Mandatory',
            length: '1-255',
          },
        ],
      },
      {
        key: 'id_document2',
        label: 'id_document2',
        type: 'object',
        description: 'A JSON object that contains ID document information for 2nd ID card',
        requirement: 'Mandatory',
        children: [
          {
            key: 'type_2',
            label: 'type',
            type: 'string',
            description: 'ID document type of account holder used in sign up. Enum = {NationalIdCard, Passport, DriversPermit, Other}',
            requirement: 'Mandatory',
            length: '1-20',
          },
          {
            key: 'number_2',
            label: 'number',
            type: 'string',
            description: 'ID document number',
            requirement: 'Mandatory',
            length: '1-30',
          },
          {
            key: 'issue_date_2',
            label: 'issue_date',
            type: 'string',
            description: 'ID document issue date in YYYY-MM-DD format',
            requirement: 'Optional',
            length: '10',
          },
          {
            key: 'expire_date_2',
            label: 'expire_date',
            type: 'string',
            description: 'ID document expiry date in YYYY-MM-DD format',
            requirement: 'Mandatory',
            length: '10',
          },
          {
            key: 'issued_country_2',
            label: 'issued_country',
            type: 'string',
            description: 'Country where the ID document was issued in ISO Alpha-2 format',
            requirement: 'Mandatory',
            length: '2',
          },
          {
            key: 'name_2',
            label: 'name',
            type: 'string',
            description: 'Name on the document',
            requirement: 'Mandatory',
            length: '1-150',
          },
          {
            key: 'address_2',
            label: 'address',
            type: 'string',
            description: 'Address on document on DriversPermit',
            requirement: 'Conditional',
            length: '1-255',
          },
          {
            key: 'file_2',
            label: 'file',
            type: 'file',
            description: 'File for the document',
            requirement: 'Mandatory',
            length: '1-255',
          },
        ],
      },
    ],
  },
  {
    key: 'poa',
    label: 'poa',
    type: 'object',
    section: 'Body Parameters',
    description: 'JSON object Proof of address',
    requirement: 'Mandatory',
    children: [
      {
        key: 'poa_type',
        label: 'type',
        type: 'string',
        description: 'Enum = {"UtilityBill", "BankStatement", "GovernmentDocument", "Other"}',
        requirement: 'Mandatory',
        length: '1-150',
      },
      {
        key: 'poa_bill_date',
        label: 'bill_date',
        type: 'string',
        description: 'Date on bill in the YYYY-MM-DD format',
        requirement: 'Mandatory',
        length: '10',
      },
      {
        key: 'poa_name',
        label: 'name',
        type: 'string',
        description: 'Name on the document',
        requirement: 'Mandatory',
        length: '1-150',
      },
      {
        key: 'poa_address',
        label: 'address',
        type: 'string',
        description: 'Address on the document',
        requirement: 'Mandatory',
        length: '1-255',
      },
      {
        key: 'poa_file',
        label: 'file',
        type: 'file',
        description: 'File for the document',
        requirement: 'Mandatory',
        length: '1-255',
      },
    ],
  },
  {
    key: 'selfie',
    label: 'selfie',
    type: 'file',
    section: 'Body Parameters',
    description: 'File for the document',
    requirement: 'Mandatory',
    length: '1-255',
  },
  {
    key: 'signature',
    label: 'signature',
    type: 'string',
    section: 'Body Parameters',
    description: 'File for the document',
    requirement: 'Mandatory',
    length: '1-255',
  },
  {
    key: 'institution',
    label: 'institution',
    type: 'object',
    section: 'Body Parameters',
    description: 'JSON object containing payload information from the institution about their member',
    requirement: 'Conditional',
    children: [
      {
        key: 'institution_id',
        label: 'id',
        type: 'string',
        description: 'Institution id needed to create account linkage',
        requirement: 'Conditional',
        length: '21-40',
      },
      {
        key: 'institution_name',
        label: 'name',
        type: 'string',
        description: 'Institution name needed to create account linkage',
        requirement: 'Conditional',
        length: '21-40',
      },
      {
        key: 'member_key',
        label: 'member_key',
        type: 'string',
        description: 'Membership key needed to create account linkage',
        requirement: 'Conditional',
        length: '21-40',
      },
      {
        key: 'instituton_account_type',
        label: 'account_type',
        type: 'string',
        description: 'Type of account at the institution',
        requirement: 'Optional',
        length: '1-50',
      },
      {
        key: 'instituton_account_number',
        label: 'account_number',
        type: 'string',
        description: 'Member\'s account number at the institution.',
        requirement: 'Conditional',
        length: '1-60',
      },
      {
        key: 'metadata',
        label: 'metadata',
        type: 'object',
        description: 'Additional data sent in the payload as key/ value pairs',
        requirement: 'Optional',
      },
    ],
  },
  // Response Parameters
  {
    key: 'status',
    label: 'status',
    type: 'string',
    section: 'Response Parameters',
    description: 'Returns the API call status. Enum = { "success", "error" }',
    requirement: 'Mandatory',
    length: '10',
  },
  {
    key: 'code',
    label: 'code',
    type: 'integer',
    section: 'Response Parameters',
    description: 'HTTP return code.',
    requirement: 'Mandatory',
    length: '3',
  },
  {
    key: 'message',
    label: 'message',
    type: 'string',
    section: 'Response Parameters',
    description: 'Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"',
    requirement: 'Mandatory',
    length: '255',
  },
  {
    key: 'pin',
    label: 'pin',
    type: 'string',
    section: 'Response Parameters',
    description: 'The pin associated with the newly created account',
    requirement: 'Conditional',
    length: '6',
  },
  {
    key: 'api_key',
    label: 'api_key',
    type: 'string',
    section: 'Response Parameters',
    description: 'The api key associated with the newly created account',
    requirement: 'Conditional',
    length: '40 - 60',
  },
  {
    key: 'authorisation_token',
    label: 'authorisation_token',
    type: 'string',
    section: 'Response Parameters',
    description: 'A token that PayWise will use during callback events',
    requirement: 'Conditional',
    length: '40 - 60',
  },
];

const Business_Account = () => {
  // Estado para controlar la visibilidad del div que contiene el <p>
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="business_account"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">business_account:</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">business_account</span> endpoint
          enables the creation of a business account for testing on the
          Developer Portal. Like personal accounts, this allows developers to
          safely test and simulate account creation for businesses within a
          sandbox environment, helping to ensure seamless integration for
          real-world applications.{" "}
          <span className="font-bold">
            N.B. This endpoint is for development and testing purposes and only
            works on the Developer portal.
          </span>
        </p>

        {sections.map((section) => (
            <div key={section} className="border-b border-[#6FA43A] py-4">
              <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
              <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
                {businessAccountParameters
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
      <div className="lg:w-2/4 w-full sticky top-0">
        <Reques_Example />
      </div>
    </div>
  );
};

export default Business_Account;
"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
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
      "type": "Passport",
      "number": "123456789",
      "issue_date": "2010-01-01",
      "expire_date": "2025-01-01",
      "issued_country": "TT",
      "name": "John Doe",
      "file": "path/to/file.jpg"
    },
    "id_document2": {
      "type": "NationalIdCard",
      "number": "A1234567",
      "issue_date": "2010-01-01",
      "expire_date": "2025-01-01",
      "issued_country": "TT",
      "name": "John Doe",
      "file": "path/to/file.jpg"
    }
  },
  "poa": {
    "type": "UtilityBill",
    "bill_date": "2023-01-01",
    "name": "John Doe",
    "address": "123 Main Street",
    "file": "path/to/utilitybill.jpg"
  },
  "selfie": "path/to/selfie.jpg"
}'  
    `,
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
      type: "Passport",
      number: "123456789",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    },
    id_document2: {
      type: "NationalIdCard",
      number: "A1234567",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    }
  },
  poa: {
    type: "UtilityBill",
    bill_date: "2023-01-01",
    name: "John Doe",
    address: "123 Main Street",
    file: "path/to/utilitybill.jpg"
  },
  selfie: "path/to/selfie.jpg"
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
            "type" => "Passport",
            "number" => "123456789",
            "issue_date" => "2010-01-01",
            "expire_date" => "2025-01-01",
            "issued_country" => "TT",
            "name" => "John Doe",
            "file" => "path/to/file.jpg"
        ],
        "id_document2" => [
            "type" => "NationalIdCard",
            "number" => "A1234567",
            "issue_date" => "2010-01-01",
            "expire_date" => "2025-01-01",
            "issued_country" => "TT",
            "name" => "John Doe",
            "file" => "path/to/file.jpg"
        ]
    ],
    "poa" => [
        "type" => "UtilityBill",
        "bill_date" => "2023-01-01",
        "name" => "John Doe",
        "address" => "123 Main Street",
        "file" => "path/to/utilitybill.jpg"
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
    `,
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
      type: "Passport",
      number: "123456789",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    },
    id_document2: {
      type: "NationalIdCard",
      number: "A1234567",
      issue_date: "2010-01-01",
      expire_date: "2025-01-01",
      issued_country: "TT",
      name: "John Doe",
      file: "path/to/file.jpg"
    }
  },
  poa: {
    type: "UtilityBill",
    bill_date: "2023-01-01",
    name: "John Doe",
    address: "123 Main Street",
    file: "path/to/utilitybill.jpg"
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
    `,
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
            "type": "Passport",
            "number": "123456789",
            "issue_date": "2010-01-01",
            "expire_date": "2025-01-01",
            "issued_country": "TT",
            "name": "John Doe",
            "file": "path/to/file.jpg"
        },
        "id_document2": {
            "type": "NationalIdCard",
            "number": "A1234567",
            "issue_date": "2010-01-01",
            "expire_date": "2025-01-01",
            "issued_country": "TT",
            "name": "John Doe",
            "file": "path/to/file.jpg"
        }
    },
    "poa": {
        "type": "UtilityBill",
        "bill_date": "2023-01-01",
        "name": "John Doe",
        "address": "123 Main Street",
        "file": "path/to/utilitybill.jpg"
    },
    "selfie": "path/to/selfie.jpg"
}

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.status_code)
print(response.json())
    `,
  },
};

// Response example
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

// Parameters
const personalAccountParameters = [
  // Request Parameters
  {
    key: "personal_version",
    label: "version",
    type: "string",
    section: "Request Parameters",
    description:
      'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: "Mandatory",
    length: "10",
  },

  // Body Parameters
  {
    key: "first_name",
    label: "first_name",
    type: "string",
    section: "Body Parameters",
    description: "First name",
    requirement: "Mandatory",
    length: "1-50",
  },
  {
    key: "last_name",
    label: "last_name",
    type: "string",
    section: "Body Parameters",
    description: "Last name",
    requirement: "Mandatory",
    length: "1-50",
  },
  {
    key: "email",
    label: "email",
    type: "string",
    section: "Body Parameters",
    description: "Email address",
    requirement: "Mandatory",
    length: "1-150",
  },
  {
    key: "mobile_number",
    label: "mobile_number",
    type: "string",
    section: "Body Parameters",
    description:
      'Full mobile number of account holder. Example: "+18681234567"',
    requirement: "Mandatory",
    length: "12",
  },
  // address (padre con hijos)
  {
    key: "address",
    label: "address",
    type: "object",
    section: "Body Parameters",
    description:
      "JSON object that contains address information for the person associated with the business",
    requirement: "Mandatory",
    children: [
      {
        key: "address_line1",
        label: "address_line1",
        type: "string",
        description: "First line of the address",
        requirement: "Mandatory",
        length: "1-255",
      },
      {
        key: "address_line2",
        label: "address_line2",
        type: "string",
        description: "Second line of the address",
        requirement: "Optional",
        length: "1-255",
      },
      {
        key: "address_line3",
        label: "address_line3",
        type: "string",
        description: "Third line of the address",
        requirement: "Optional",
        length: "1-255",
      },
      {
        key: "city",
        label: "city",
        type: "string",
        description: "City/Town of address",
        requirement: "Mandatory",
        length: "4-20",
      },
      {
        key: "state_province",
        label: "state_province",
        type: "string",
        description: "State of address",
        requirement: "Optional",
        length: "4-40",
      },
      {
        key: "postal_code",
        label: "postal_code",
        type: "string",
        description: "Postal Code of address",
        requirement: "Optional",
        length: "10",
      },
      {
        key: "country",
        label: "country",
        type: "string",
        description: "Country in ISO Alpha-2 format",
        requirement: "Mandatory",
        length: "2",
      },
    ],
  },
  {
    key: "dob",
    label: "dob",
    type: "string",
    section: "Body Parameters",
    description: "Date of birth in YYYY-MM-DD format",
    requirement: "Mandatory",
    length: "10",
  },
  // ids (padre con hijos id_document1 y id_document2, que a su vez tienen hijos)
  {
    key: "ids",
    label: "ids",
    type: "object",
    section: "Body Parameters",
    description: "A JSON object that contains the government IDs",
    requirement: "Mandatory",
    children: [
      {
        key: "id_document1",
        label: "id_document1",
        type: "object",
        description:
          "A JSON object that contains ID document information for 1st ID card",
        requirement: "Mandatory",
        children: [
          {
            key: "type_1",
            label: "type",
            type: "string",
            description:
              "ID document type of account holder used in sign up. Enum = {NationalIdCard, Passport, DriversPermit, Other}",
            requirement: "Mandatory",
            length: "1-20",
          },
          {
            key: "number_1",
            label: "number",
            type: "string",
            description: "ID document number",
            requirement: "Mandatory",
            length: "1-30",
          },
          {
            key: "issue_date_1",
            label: "issue_date",
            type: "string",
            description: "ID document issue date in YYYY-MM-DD format",
            requirement: "Optional",
            length: "10",
          },
          {
            key: "expire_date_1",
            label: "expire_date",
            type: "string",
            description: "ID document expiry date in YYYY-MM-DD format",
            requirement: "Mandatory",
            length: "10",
          },
          {
            key: "issued_country_1",
            label: "issued_country",
            type: "string",
            description:
              "Country where the ID document was issued in ISO Alpha-2 format",
            requirement: "Mandatory",
            length: "2",
          },
          {
            key: "name",
            label: "name",
            type: "string",
            description: "Name on the document",
            requirement: "Mandatory",
          },
          {
            key: "address_1",
            label: "address",
            type: "string",
            description: "Address on document on DriversPermit",
            requirement: "Conditional",
          },
          {
            key: "file",
            label: "file",
            type: "file",
            description: "File for the document",
            requirement: "Conditional",
          },
        ],
      },
      {
        key: "id_document2",
        label: "id_document2",
        type: "object",
        description:
          "A JSON object that contains ID document information for 2nd ID card",
        requirement: "Mandatory",
        children: [
          {
            key: "type_2",
            label: "type",
            type: "string",
            description:
              "ID document type of account holder used in sign up. Enum = {NationalIdCard, Passport, DriversPermit, Other}",
            requirement: "Mandatory",
            length: "1-20",
          },
          {
            key: "number_2",
            label: "number",
            type: "string",
            description: "ID document number",
            requirement: "Mandatory",
            length: "1-30",
          },
          {
            key: "issue_date_2",
            label: "issue_date",
            type: "string",
            description: "ID document issue date in YYYY-MM-DD format",
            requirement: "Optional",
            length: "10",
          },
          {
            key: "expire_date_2",
            label: "expire_date",
            type: "string",
            description: "ID document expiry date in YYYY-MM-DD format",
            requirement: "Mandatory",
            length: "10",
          },
          {
            key: "issued_country_2",
            label: "issued_country",
            type: "string",
            description:
              "Country where the ID document was issued in ISO Alpha-2 format",
            requirement: "Mandatory",
            length: "2",
          },
          {
            key: "name_2",
            label: "name",
            type: "string",
            description: "Name on the document",
            requirement: "Mandatory",
          },
          {
            key: "address_2",
            label: "address",
            type: "string",
            description: "Address on document on DriversPermit",
            requirement: "Conditional",
          },
          {
            key: "file_2",
            label: "file",
            type: "file",
            description: "File for the document",
            requirement: "Conditional",
          },
        ],
      },
    ],
  },
  // poa (padre con hijos)
  {
    key: "poa",
    label: "poa",
    type: "object",
    section: "Body Parameters",
    description: "JSON object Proof of address",
    requirement: "Conditional",
    children: [
      {
        key: "poa_type",
        label: "type",
        type: "string",
        description:
          'Enum = {"UtilityBill", "BankStatement", "GovernmentDocument", "Other"}',
        requirement: "Conditional",
      },
      {
        key: "poa_bill_date",
        label: "bill_date",
        type: "string",
        description: "Date on bill in the YYYY-MM-DD format",
        requirement: "Conditional",
        length: "10",
      },
      {
        key: "poa_name",
        label: "name",
        type: "string",
        description: "Name on the document",
        requirement: "Conditional",
      },
      {
        key: "poa_address",
        label: "address",
        type: "string",
        description: "Address on the document",
        requirement: "Conditional",
      },
      {
        key: "poa_file",
        label: "file",
        type: "file",
        description: "File for the document",
        requirement: "Conditional",
      },
    ],
  },
  {
    key: "selfie",
    label: "selfie",
    type: "file",
    section: "Body Parameters",
    description: "File for the document",
    requirement: "Conditional",
  },
  // institution (padre con hijos)
  {
    key: "institution",
    label: "institution",
    type: "object",
    section: "Body Parameters",
    description:
      "JSON object containing payload information from the institution about their member",
    requirement: "Conditional",
    children: [
      {
        key: "institution_id",
        label: "id",
        type: "string",
        description: "Institution id needed to create account linkage",
        requirement: "Conditional",
        length: "21-40",
      },
      {
        key: "institution_name",
        label: "name",
        type: "string",
        description: "Institution name needed to create account linkage",
        requirement: "Conditional",
        length: "21-40",
      },
      {
        key: "member_key",
        label: "member_key",
        type: "string",
        description: "Membership key needed to create account linkage",
        requirement: "Conditional",
        length: "21-40",
      },
      {
        key: "instituton_account_type",
        label: "account_type",
        type: "string",
        description: "Type of account at the institution",
        requirement: "Optional",
        length: "1-50",
      },
      {
        key: "instituton_account_number",
        label: "account_number",
        type: "string",
        description: "Member's account number at the institution.",
        requirement: "Conditional",
        length: "1-60",
      },
      {
        key: "metadata",
        label: "metadata",
        type: "object",
        description: "Additional data sent in the payload as key/ value pairs",
        requirement: "Optional",
      },
    ],
  },

  // Response Parameters
  {
    key: "personal_status",
    label: "status",
    type: "string",
    section: "Response Parameters",
    description: 'Returns the API call status. Enum = { "success", "error" }',
    requirement: "Mandatory",
    length: "10",
  },
  {
    key: "personal_code",
    label: "code",
    type: "integer",
    section: "Response Parameters",
    description: "HTTP return code.",
    requirement: "Mandatory",
    length: "3",
  },
  {
    key: "personal_message",
    label: "message",
    type: "string",
    section: "Response Parameters",
    description:
      'Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"',
    requirement: "Mandatory",
    length: "255",
  },
  {
    key: "personal_pin",
    label: "pin",
    type: "string",
    section: "Response Parameters",
    description: "The pin associated with the newly created account",
    requirement: "Conditional",
    length: "6",
  },
];

const Personal_Account = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="personal_account"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">personal_account:</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">personal_account</span> endpoint
          allows the creation of a personal PayWise account for testing purposes
          on the Developer Portal. Developers can simulate account creation
          workflows for individual users before proceeding with live
          transactions.{" "}
          <span className="font-bold">
            N.B. This endpoint is for development and testing purposes and only
            works on the Developer portal.
          </span>
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {personalAccountParameters
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
        <CodeExampleBox title="Request example" languageData={languageData} />
        <CodeExampleBox
          title="Response example"
          content={responseExample}
          showLanguageSelector={false}
        />
      </div>
    </div>
  );
};

export default Personal_Account;

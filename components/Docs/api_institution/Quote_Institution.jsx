"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";
import { ResponseExampleBox } from '../../ResponseExampleBox';

// Language data
const languageData = {
  Bash: {
    description: `
VERSION="2024-10-01"
API_KEY="acdb459a0f384b7c8fc2205e13c09036"
REQUEST_DATE=$(date +"%Y-%m-%d %H:%M:%S")
ORIGIN_COUNTRY="TT"
IP_ADDRESS="192.0.2.1"

QUOTE_URL="https://devapi.paywise.co/quote?version=$\{VERSION}"

curl -X POST "$QUOTE_URL" 
  -H "Content-Type: application/json" 
  -H "pw-origin-country: \${ORIGIN_COUNTRY}" 
  -H "pw-subscription-key: \${API_KEY}" 
  -H "pw-request-date: \${REQUEST_DATE}" 
  -H "pw-ip-address: \${IP_ADDRESS}" 
  -d '{
    "session_token": "encrypted-session-token",
    "institution_name": "PayWise",
    "request_amount": "100.00",
    "request_currency": "TTD",
    "debit_party": {
      "mobile_number": "+18681234567",
      "currency": "USD",
      "country": "US"
    },
    "credit_party": {
      "mobile_number": "+18681234567",
      "currency": "TTD",
      "country": "TT"
    }
  }'
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'json'
require 'uri'

uri = URI("https://devapi.paywise.co/quote?version=2024-10-01")

headers = {
  "Content-Type" => "application/json",
  "pw-origin-country" => "TT",
  "pw-subscription-key" => "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date" => Time.now.strftime("%Y-%m-%d %H:%M:%S"),
  "pw-ip-address" => "192.0.2.1"
}

body = {
  session_token: "encrypted-session-token",
  institution_name: "PayWise",
  request_amount: "100.00",
  request_currency: "TTD",
  debit_party: {
    mobile_number: "+18681234567",
    currency: "USD",
    country: "US"
  },
  credit_party: {
    mobile_number: "+18681234567",
    currency: "TTD",
    country: "TT"
  }
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri.path + "?" + uri.query, headers)
request.body = body.to_json

response = http.request(request)
puts "Status: #{response.code}"
puts "Body: #{response.body}"
    `,
  },
  PHP: {
    description: `
<?php

$url = "https://devapi.paywise.co/quote?version=2024-10-01";
$data = [
    "session_token" => "encrypted-session-token",
    "institution_name" => "PayWise",
    "request_amount" => "100.00",
    "request_currency" => "TTD",
    "debit_party" => [
        "mobile_number" => "+18681234567",
        "currency" => "USD",
        "country" => "US"
    ],
    "credit_party" => [
        "mobile_number" => "+18681234567",
        "currency" => "TTD",
        "country" => "TT"
    ]
];

$headers = [
    "Content-Type: application/json",
    "pw-origin-country: TT",
    "pw-subscription-key: acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date: " . date("Y-m-d H:i:s"),
    "pw-ip-address: 192.0.2.1"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

echo "Response:\n$response\n";
    `,
  },
  JavaScript: {
    description: `
const axios = require('axios');

const headers = {
  "Content-Type": "application/json",
  "pw-origin-country": "TT",
  "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date": new Date().toISOString().slice(0, 19).replace("T", " "),
  "pw-ip-address": "192.0.2.1"
};

const body = {
  session_token: "encrypted-session-token",
  institution_name: "PayWise",
  request_amount: "100.00",
  request_currency: "TTD",
  debit_party: {
    mobile_number: "+18681234567",
    currency: "USD",
    country: "US"
  },
  credit_party: {
    mobile_number: "+18681234567",
    currency: "TTD",
    country: "TT"
  }
};

axios.post("https://devapi.paywise.co/quote?version=2024-10-01", body, { headers })
  .then(res => {
    console.log("Status:", res.status);
    console.log("Response:", res.data);
  })
  .catch(err => {
    console.error("Error:", err.response?.data || err.message);
  });
    `,
  },
  Python: {
    description: `
import requests
from datetime import datetime

headers = {
    "Content-Type": "application/json",
    "pw-origin-country": "TT",
    "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "pw-ip-address": "192.0.2.1"
}

data = {
    "session_token": "encrypted-session-token",
    "institution_name": "PayWise",
    "request_amount": "100.00",
    "request_currency": "TTD",
    "debit_party": {
        "mobile_number": "+18681234567",
        "currency": "USD",
        "country": "US"
    },
    "credit_party": {
        "mobile_number": "+18681234567",
        "currency": "TTD",
        "country": "TT"
    }
}

url = "https://devapi.paywise.co/quote?version=2024-10-01"
response = requests.post(url, json=data, headers=headers)
print("Status:", response.status_code)
print("Response:", response.text)
    `,
  },
};

const responseExamples = {
  success: {
    label: "Posted successfully",
    description: "Quote created successfully.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Posted successfully",
}`
  },
  invalidVersion: {
    label: "Missing version field",
    description: "Invalid `version` format. Expected “YYYY-MM-DD”.",
    response: `{
  "status": "Error",
  "code": 400,
  "message": "Invalid version format. Expected “YYYY-MM-DD”"
}`
  },
  missingSessionToken: {
    label: "Missing session token",
    description: "session_token is required.",
    response: `{
  "status": "Error",
  "code": 400,
  "message": "session_token is required"
}`
  },
  invalidSessionToken: {
    label: "Malformed or expired token",
    description: "session_token is invalid or expired.",
    response: `{
  "status": "Error",
  "code": 400,
  "message": "session_token is invalid or expired"
}`
  },
  missingInstitutionName: {
    label: "Missing or empty field",
    description: "institution_name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "institution_name is required"
}`
  },
  invalidRequestAmount: {
    label: "Invalid format or precision (e.g., 100.999)",
    description: "request_amount format invalid. Expected decimal (8,2).",
    response: `{
  "status": "error",
  "code": 400,
  "message": "request_amount format invalid. Expected decimal (8,2)"
}`
  },
  invalidRequestCurrency: {
    label: "Invalid value like 'TTDD' or 'usd'",
    description: "request_currency must be a 3-letter ISO 4217 code.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "request_currency must be a 3-letter ISO 4217 code"
}`
  },
  missingDebitPartyPhoneNumber: {
    label: "Missing debit party phone number",
    description: "debit_party.mobile_number is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "debit_party.mobile_number is required"
}`
  },
  invalidDebitPartyCountry: {
    label: "Invalid or misspelled country code (e.g., 'Trinidad')",
    description: "debit_party.country must be a valid ISO Alpha-2 code.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "debit_party.country must be a valid ISO Alpha-2 code"
}`
  },
  missingCreditPartyPhoneNumber: {
    label: "Missing credit party phone number",
    description: "credit_party.mobile_number is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "credit_party.mobile_number is required"
}`
  },
  missingCreditPartyCurrency: {
    label: "Missing required currency field",
    description: "credit_party.currency is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "credit_party.currency is required"
}`
  },
  invalidCreditPartyCountry: {
    label: "Invalid country code like 'Trinidad' or 'TTT'",
    description: "credit_party.country must be a valid ISO Alpha-2 code.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "credit_party.country must be a valid ISO Alpha-2 code"
}`
  },
  missingDebitPartyCurrency: {
    label: "Inconsistent currency data between request and credit party",
    description: "credit_party.currency and request_currency must match",
    response: `{
  "status": "error",
  "code": 400,
  "message": "credit_party.currency and request_currency must match"
}`
  },
  quoteRequestExceedsAllowableAmountLimits: {
    label: "Business rule violation",
    description: "Quote request exceeds allowable amount limits.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Quote request exceeds allowable amount limits"
}`
  },
  institutionNotAuthorized: {
    label: "Unauthorized client name or missing API key",
    description: "institution_name not authorized to request quote.",
    response: `{
  "status": "error",
  "code": 40,
  "message": "institution_name not authorized to request quote"
}`
  },
  invalidSubscriptionKey: {
    label: "Unauthorized due to missing header",
    description: "Invalid or missing PW-subscription-key header.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "Invalid or missing PW-subscription-key header"
}`
  },
  invalidRequestDate: {
    label: "Incorrect format (e.g., no time or wrong separators)",
    description: "PW-request-date format invalid. Expected “YYYY-MM-DD HH:mm:ss”.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "PW-request-date format invalid. Expected “YYYY-MM-DD HH:mm:ss”"
}`
  },
  invalidOriginCountry: {
    label: "Missing or invalid ISO Alpha-2 code",
    description: "PW-origin-country is required and must be 2-letter code.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "PW-origin-country is required and must be 2-letter code"
}`
  },
  serverError: {
    label: "Internal server or system error",
    description: "Server Error.",
    response: `{
  "status": "error",
  "code": 500,
  "message": "Server Error"
}`
  }
};

// Parameters
const quoteInstitutionParameters = [
  {
    key: "version",
    label: "version",
    type: "string",
    description:
      'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: "mandatory",
    length: "10",
    section: "Request Parameters",
  },
  {
    key: "session_token",
    label: "session_token",
    type: "string",
    description:
      "Encrypted session_token. Institution encrypts the session_token sent using shared key.",
    requirement: "Mandatory",
    length: "20 - 40",
    section: "Body Parameters",
  },
  {
    key: "institution_name",
    label: "institution_name",
    type: "string",
    description: "Name of party who requested this api.",
    requirement: "Mandatory",
    length: "255",
    section: "Body Parameters",
  },
  {
    key: "request_amount",
    label: "request_amount",
    type: "string",
    description:
      "Requested quotation amount with precision of 2 decimal places.",
    requirement: "Mandatory",
    length: "8 , 2",
    section: "Body Parameters",
  },
  {
    key: "request_currency",
    label: "request_currency",
    type: "string",
    description:
      "Currency of the requestAmount provided in ISO 4217 format. Eg. TTD.",
    requirement: "Mandatory",
    length: "3",
    section: "Body Parameters",
  },
  {
    key: "debit_party",
    label: "debit_party",
    type: "object",
    description:
      "An object that contains information about the debit participant.",
    requirement: "Conditional",
    section: "Body Parameters",
    children: [
      {
        key: "debit_mobile_number",
        label: "mobile_number",
        type: "string",
        description:
          "Full number of the debit participant. Example: '+18681234567'.",
        requirement: "Mandatory",
        length: "10 - 18",
      },
      {
        key: "debit_organization_id",
        label: "organization_id",
        type: "string",
        description:
          "Full name of the organization where the funds is harboured for the debit_party. Example: 'PayWise'",
        requirement: "Optional",
        length: "30",
      },
      {
        key: "debit_account_number",
        label: "account_number",
        type: "string",
        description:
          "Wallet account (or Bank account or IBAN number or card number) of the debit party.",
        requirement: "Optional",
        length: "5 - 50",
      },
      {
        key: "debit_account_type",
        label: "account_type",
        type: "string",
        description: "Type of account of the credit party.",
        requirement: "Optional",
        length: "50",
      },
      {
        key: "debit_currency",
        label: "currency",
        type: "string",
        description:
          "Sender's currency of the debitor in ISO 4217 format. Eg. USD.",
        requirement: "Mandatory",
        length: "3",
      },
      {
        key: "debit_country",
        label: "country",
        type: "string",
        description:
          "Sender's country where the payout is to be made. To be specified in ISO Alpha 2 format. Eg. US.",
        requirement: "Mandatory",
        length: "2",
      },
      {
        key: "debit_metadata",
        label: "metadata",
        type: "string",
        description: "Additional metadata needed for the credit party.",
        requirement: "Optional",
        length: "255",
      },
    ],
  },
  {
    key: "credit_party",
    label: "credit_party",
    type: "object",
    description:
      "An object that contains information about the credit participant.",
    requirement: "Conditional",
    section: "Body Parameters",
    children: [
      {
        key: "credit_mobile_number",
        label: "mobile_number",
        type: "string",
        description:
          "Full number of the credit participant. Example: '+18681234567'.",
        requirement: "Mandatory",
        length: "10 - 18",
      },
      {
        key: "credit_organization_id",
        label: "organization_id",
        type: "string",
        description:
          "Full name of the organization where the funds is harboured for the credit_party. Example: 'PayWise'.",
        requirement: "Optional",
        length: "30",
      },
      {
        key: "credit_account_number",
        label: "account_number",
        type: "string",
        description:
          "Wallet account (or Bank account or IBAN number) of the credit party.",
        requirement: "Optional",
        length: "5 - 50",
      },
      {
        key: "credit_account_type",
        label: "account_type",
        type: "string",
        description: "Type of account of the credit party.",
        requirement: "Optional",
        length: "50",
      },
      {
        key: "credit_currency",
        label: "currency",
        type: "string",
        description: "Currency of the creditor in ISO 4217 format. Eg. TTD.",
        requirement: "Mandatory",
        length: "3",
      },
      {
        key: "credit_country",
        label: "country",
        type: "string",
        description:
          "Destination country where the payout is to be made. To be specified in ISO Alpha 2 format. Eg. TT.",
        requirement: "Mandatory",
        length: "2",
      },
      {
        key: "credit_metadata",
        label: "metadata",
        type: "string",
        description: "Additional metadata needed for the credit party.",
        requirement: "Optional",
        length: "255",
      },
    ],
  },
  // Response parameters
  {
    key: "status",
    label: "status",
    type: "string",
    description: "Returns the API call status. Enum = { 'success', 'error' }.",
    requirement: "Mandatory",
    length: "10",
    section: "Response Parameters",
  },
  {
    key: "code",
    label: "code",
    type: "integer",
    description: "HTTP return code.",
    requirement: "Mandatory",
    length: "3",
    section: "Response Parameters",
  },
  {
    key: "message",
    label: "message",
    type: "string",
    description:
      "Message is conditional. Messages will show based on condition applied. Added one example only. Example: 'Error: Exceeds user limits.'",
    requirement: "Mandatory",
    length: "255",
    section: "Response Parameters",
  },
  {
    key: "rate",
    label: "rate",
    type: "string",
    description:
      "The TTD equivalent for 1 dollar of the currency pair. Precision of up to 4 decimal points.",
    requirement: "Optional",
    length: "8 , 4",
    section: "Response Parameters",
  },
  {
    key: "quote_date",
    label: "quote_date",
    type: "string",
    description:
      "Date and time to the quote was created. Format 'YYYY-MM-DD HH:mi:ss'",
    requirement: "Optional",
    length: "19",
    section: "Response Parameters",
  },
  {
    key: "amount_quoted",
    label: "amount_quoted",
    type: "string",
    description: "The quote amount. Precision of up to 2 decimal places.",
    requirement: "Optional",
    length: "10 , 2",
    section: "Response Parameters",
  },
  {
    key: "expire_date",
    label: "expire_date",
    type: "string",
    description:
      "Date and time when this quote and currency rate is no longer be valid. Format 'YYYY-MM-DD HH:mi:ss'",
    requirement: "Mandatory",
    length: "19",
    section: "Response Parameters",
  },
  {
    key: "quote_id",
    label: "quote_id",
    type: "string",
    description: "Unique identifier of the quote.",
    requirement: "Mandatory",
    length: "20 - 40",
    section: "Response Parameters",
  },
];

const Quote_Institutions = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="quote_post"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">quote:</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">quote </span> endpoint allows
          institutions to request a quote for a transaction. This provides an
          estimate of the TTD amount for a given USD value and returns a valid
          period for the quoted rate. It ensures the institution understands the
          currency conversion and rate locking period, facilitating better
          planning for transactions involving foreign exchange.
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {quoteInstitutionParameters
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
        <ResponseExampleBox
          title="Response Example"
          examples={responseExamples}
          defaultKey="success"
        />
      </div>
    </div>
  );
};

export default Quote_Institutions;

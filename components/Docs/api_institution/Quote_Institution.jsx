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
    label: "Transaction completed",
    description: "Transaction completed successfully.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction completed successfully",
  "transaction": {
    "status": "completed"
  }
}`
  },
  posted: {
    label: "Transaction posted",
    description: "Transaction posted.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction posted",
  "transaction": {
    "status": "pending"
  }
}`
  },
  pendingApproval: {
    label: "Transaction is pending approval",
    description: "Transaction is pending approval.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction is pending approval",
  "transaction": {
    "status": "pending"
  }
}`
  },
  cancelled: {
    label: "Transaction is cancelled",
    description: "Transaction is cancelled.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction is cancelled",
  "transaction": {
    "status": "cancelled"
  }
}`
  },
  insufficientFunds: {
    label: "Insufficient Funds",
    description: "Transaction failed due to insufficient funds.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Transaction failed due to insufficient funds",
  "transaction": {
    "status": "failed"
  }
}`
  },
  serverError: {
    label: "Server Error",
    description: "Server Error.",
    response: `{
  "status": "error",
  "code": 500,
  "message": "Server Error"
}`
  },
  missingHeader: {
    label: "<header_parameter> request header is required",
    description: "<header_parameter> request header is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "<header_parameter> request header is required"
}`
  },
  invalidSubscriptionKey: {
    label: "PW-subscription-key format invalid",
    description: "PW-subscription-key format invalid. Expected 32 chars.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "PW-subscription-key format invalid. Expected 32 chars"
}`
  },
  invalidOriginCountry: {
    label: "PW-origin-country format invalid",
    description: "PW-origin-country format invalid. Expected 2 chars.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "PW-origin-country format invalid. Expected 2 chars"
}`
  },
  invalidRequestDate: {
    label: "PW-request-date format invalid",
    description: "PW-request-date format invalid. Expected “YYYY-MM-DD HH:mm:ss”.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "PW-request-date format invalid. Expected \`YYYY-MM-DD HH:mm:ss\`"
}`
  },
  unauthorized: {
    label: "Unauthorized access",
    description: "Unauthorized access to this transaction.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "Unauthorized access to this transaction"
}`
  },
  missingGetParam: {
    label: "<mandatory_get_parameter> is required",
    description: "<mandatory_get_parameter> is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "<mandatory_get_parameter> is required"
}`
  },
  missingTransactionId: {
    label: "transaction_id is required",
    description: "transaction_id is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_id is required"
}`
  },
  missingInstitutionName: {
    label: "institution_name is required",
    description: "institution_name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "institution_name is required"
}`
  },
  invalidVersion: {
    label: "Invalid `version` format",
    description: "Invalid `version` format. Expected “YYYY-MM-DD”.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Invalid \`version\` format. Expected \`YYYY-MM-DD\`"
}`
  },
  invalidTransactionId: {
    label: "transaction_id format invalid",
    description: "transaction_id format invalid. Expected 1–200 chars.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_id format invalid. Expected 1–200 chars"
}`
  },
  institutionNotRecognized: {
    label: "institution_name not recognized",
    description: "institution_name not recognized or not authorized.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "institution_name not recognized or not authorized"
}`
  },
  transactionNotFound: {
    label: "Transaction not found",
    description: "Transaction not found.",
    response: `{
  "status": "error",
  "code": 404,
  "message": "Transaction not found"
}`
  },
  missingHeader2: {
    label: "header_parameter request header is missing",
    description: "header_parameter request header is missing.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "header_parameter request header is missing"
}`
  },
  invalidHeader: {
    label: "{header_parameter} format invalid",
    description: "{header_parameter} format invalid.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "{header_parameter} format invalid."
}`
  },
  cancelledByUser: {
    label: "Transaction was cancelled by user",
    description: "Transaction was cancelled by user.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Transaction was cancelled by user",
  "transaction": {
    "status": "cancelled"
  }
}`
  },
  duplicateRequest: {
    label: "Duplicate transaction request",
    description: "Duplicate transaction request.",
    response: `{
  "status": "error",
  "code": 409,
  "message": "Duplicate transaction request"
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

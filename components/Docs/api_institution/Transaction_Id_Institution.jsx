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
TRANSACTION_ID="YourCompany"
INSTITUTION_NAME="YourCompany"
API_KEY="acdb459a0f384b7c8fc2205e13c09036"
REQUEST_DATE=$(date +"%Y-%m-%d %H:%M:%S")
ORIGIN_COUNTRY="TT"
IP_ADDRESS="192.0.2.1"

URL="https://devapi.paywise.co/institution/transaction?version=$\{VERSION}&transaction_id=$\{TRANSACTION_ID}&institution_name=$\{INSTITUTION_NAME}"

curl -X GET "$URL" 
  -H "Content-Type: application/json" 
  -H "pw-origin-country: \${ORIGIN_COUNTRY}" 
  -H "pw-subscription-key: \${API_KEY}" 
  -H "pw-request-date: \${REQUEST_DATE}" 
  -H "pw-ip-address: \${IP_ADDRESS}"
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'uri'
require 'time'

params = {
  version: "2024-10-01",
  transaction_id: "YourCompany",
  institution_name: "YourCompany"
}

uri = URI("https://devapi.paywise.co/institution/transaction")
uri.query = URI.encode_www_form(params)

headers = {
  "Content-Type" => "application/json",
  "pw-origin-country" => "TT",
  "pw-subscription-key" => "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date" => Time.now.strftime("%Y-%m-%d %H:%M:%S"),
  "pw-ip-address" => "192.0.2.1"
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Get.new(uri, headers)

response = http.request(request)
puts "Status: #{response.code}"
puts "Response: #{response.body}"
    `,
  },
  PHP: {
    description: `
<?php

$url = "https://devapi.paywise.co/institution/transaction?" . http_build_query([
    "version" => "2024-10-01",
    "transaction_id" => "YourCompany",
    "institution_name" => "YourCompany"
]);

$headers = [
    "Content-Type: application/json",
    "pw-origin-country: TT",
    "pw-subscription-key: acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date: " . date("Y-m-d H:i:s"),
    "pw-ip-address: 192.0.2.1"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
curl_close($ch);

echo "Response:\n$response\n";
    `,
  },
  JavaScript: {
    description: `
const axios = require('axios');

const params = {
  version: "2024-10-01",
  transaction_id: "YourCompany",
  institution_name: "YourCompany"
};

const headers = {
  "Content-Type": "application/json",
  "pw-origin-country": "TT",
  "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date": new Date().toISOString().slice(0, 19).replace("T", " "),
  "pw-ip-address": "192.0.2.1"
};

axios.get("https://devapi.paywise.co/institution/transaction", { params, headers })
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

params = {
    "version": "2024-10-01",
    "transaction_id": "YourCompany",
    "institution_name": "YourCompany"
}

headers = {
    "Content-Type": "application/json",
    "pw-origin-country": "TT",
    "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "pw-ip-address": "192.0.2.1"
}

response = requests.get("https://devapi.paywise.co/institution/transaction", params=params, headers=headers)
print("Status:", response.status_code)
print("Response:", response.text)
    `,
  },
};

const responseExamples = {
  successTransactionCompleted: {
    label: "Success - Transaction Completed",
    description: "Transaction completed successfully.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction completed successfully",
}`
  },
  successTransactionPosted: {
    label: "Success - Transaction Posted",
    description: "Transaction posted successfully.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction posted",
}`
  },
  successTransactionPendingApproval: {
    label: "Success - Transaction Pending Approval",
    description: "Transaction is pending approval.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction is pending approval",
}`
  },
  successTransactionCancelled: {
    label: "Success - Transaction Cancelled",
    description: "Transaction is cancelled.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction is cancelled",
}`
  },
  errorInsufficientFunds: {
    label: "Error - Insufficient Funds",
    description: "Transaction failed due to insufficient funds.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Transaction failed due to insufficient funds"
}`
  },
  errorServerError: {
    label: "Error - Server Error",
    description: "Internal server error occurred.",
    response: `{
  "status": "error",
  "code": 500,
  "message": "Server Error"
}`
  },
  errorHeaderParameterRequired: {
    label: "Error - Header Parameter Required",
    description: "Header parameter request header is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`<header_parameter>\` request header is required"
}`
  },
  errorSubscriptionKeyFormatInvalid: {
    label: "Error - Subscription Key Format Invalid",
    description: "PW-subscription-key format invalid. Expected 32 characters.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`PW-subscription-key\` format invalid. Expected 32 chars"
}`
  },
  errorOriginCountryFormatInvalid: {
    label: "Error - Origin Country Format Invalid",
    description: "PW-origin-country format invalid. Expected 2 characters.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`PW-origin-country\` format invalid. Expected 2 chars"
}`
  },
  errorRequestDateFormatInvalid: {
    label: "Error - Request Date Format Invalid",
    description: "PW-request-date format invalid. Expected YYYY-MM-DD HH:mm:ss format.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`PW-request-date\` format invalid. Expected \"YYYY-MM-DD HH:mm:ss\""
}`
  },
  errorUnauthorizedAccess: {
    label: "Error - Unauthorized Access",
    description: "Unauthorized access to this transaction.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "Unauthorized access to this transaction"
}`
  },
  errorMandatoryGetParameterRequired: {
    label: "Error - Mandatory GET Parameter Required",
    description: "Mandatory GET parameter is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`<mandatory_get_parameter>\` is required"
}`
  },
  errorTransactionIdRequired: {
    label: "Error - Transaction ID Required",
    description: "Transaction ID is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`transaction_id\` is required"
}`
  },
  errorInstitutionNameRequired: {
    label: "Error - Institution Name Required",
    description: "Institution name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`institution_name\` is required"
}`
  },
  errorInvalidVersionFormat: {
    label: "Error - Invalid Version Format",
    description: "Invalid version format. Expected YYYY-MM-DD format.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Invalid \`version\` format. Expected \"YYYY-MM-DD\""
}`
  },
  errorTransactionIdFormatInvalid: {
    label: "Error - Transaction ID Format Invalid",
    description: "Transaction ID format invalid. Expected 1-200 characters.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`transaction_id\` format invalid. Expected 1–200 chars"
}`
  },
  errorInstitutionNotRecognized: {
    label: "Error - Institution Not Recognized",
    description: "Institution name not recognized or not authorized.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "\`institution_name\` not recognized or not authorized"
}`
  },
  errorTransactionNotFound: {
    label: "Error - Transaction Not Found",
    description: "Transaction not found.",
    response: `{
  "status": "error",
  "code": 404,
  "message": "Transaction not found"
}`
  },
  errorHeaderParameterMissing: {
    label: "Error - Header Parameter Missing",
    description: "Header parameter request header is missing.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "header_parameter request header is missing"
}`
  },
  errorHeaderParameterFormatInvalid: {
    label: "Error - Header Parameter Format Invalid",
    description: "Header parameter format invalid.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "{header_parameter} format invalid."
}`
  },
  errorTransactionCancelledByUser: {
    label: "Error - Transaction Cancelled by User",
    description: "Transaction was cancelled by user.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Transaction was cancelled by user"
}`
  },
  errorDuplicateTransactionRequest: {
    label: "Error - Duplicate Transaction Request",
    description: "Duplicate transaction request.",
    response: `{
  "status": "error",
  "code": 409,
  "message": "Duplicate transaction request"
}`
  }
};

// Parameters
const transactionIdInstitutionParameters = [
  {
    key: "version",
    label: "version",
    type: "string",
    description:
      'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: "optional",
    length: "10",
    section: "Request Parameters",
  },
  {
    key: "transaction_id",
    label: "transaction_id",
    type: "string",
    description:
      "Using the Institution Encrpyted key, encrypt the unique transaction ID / number used in the POST.",
    requirement: "Mandatory",
    length: "40-60",
    section: "Request Parameters",
  },
  {
    key: "institution_name",
    label: "institution_name",
    type: "string",
    description: "Name of party who requested this api",
    requirement: "Mandatory",
    length: "255",
    section: "Request Parameters",
  },
  {
    key: "status",
    label: "status",
    type: "string",
    description: "Returns the API call status. Enum = {success, error}",
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
      "Message is conditional. Messages will show based on condition applied. Added one example only. Example: Registration request sent",
    requirement: "Mandatory",
    length: "255",
    section: "Response Parameters",
  },
  {
    key: "transaction",
    label: "transaction",
    type: "object",
    description:
      "A JSON object that contains information about the transaction record",
    requirement: "Conditional",
    section: "Response Parameters",
    children: [
      {
        key: "id",
        label: "id",
        type: "string",
        description: "Institution friendly transaction id.",
        requirement: "Mandatory",
        length: "1 - 200",
      },
      {
        key: "type",
        label: "type",
        type: "string",
        description: "Transaction type. Enum = {debit, credit}",
        requirement: "Mandatory",
        length: "6",
      },
      {
        key: "amount",
        label: "amount",
        type: "string",
        description:
          "Total transaction amount in TTD with precision of 2 decimal places. Includes any fees.",
        requirement: "Mandatory",
        length: "8, 2",
      },
      {
        key: "fees",
        label: "fees",
        type: "object",
        description: "JSON object capturing the fees",
        requirement: "Optional",
        length: "7, 2",
        children: [
          {
            key: "total",
            label: "total",
            type: "string",
            description: "Total transaction fees",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "convenience",
            label: "convenience",
            type: "string",
            description: "Institution fee charged",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "sender_pays",
            label: "sender_pays",
            type: "string",
            description: "Fee paid by Sender",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "recipient_pays",
            label: "recipient_pays",
            type: "string",
            description: "Fee paid by Receiver",
            requirement: "Optional",
            length: "7, 2",
          },
        ],
      },
      {
        key: "sender_full_name",
        label: "sender_full_name",
        type: "string",
        description: "Full name of sender",
        requirement: "Mandatory",
        length: "1-255",
      },
      {
        key: "recipient_full_name",
        label: "recipient_full_name",
        type: "string",
        description: "Full name of recipient",
        requirement: "Mandatory",
        length: "1-255",
      },
      {
        key: "cleared_date",
        label: "cleared_date",
        type: "string",
        description: "Date transaction has cleared. Format = 'YYYY-MM-DD'",
        requirement: "Mandatory",
        length: "10",
      },
      {
        key: "posted_date",
        label: "posted_date",
        type: "string",
        description: "Date transaction submitted. Format = 'YYYY-MM-DD'",
        requirement: "Mandatory",
        length: "10",
      },
      {
        key: "description",
        label: "description",
        type: "string",
        description:
          "Transaction description detailing any notes about the transaction",
        requirement: "Mandatory",
        length: "255",
      },
      {
        key: "transaction_status",
        label: "status",
        type: "string",
        description:
          "Transaction status. Enum = {pending, cancelled, completed, failed}",
        requirement: "Mandatory",
        length: "10",
      },
      {
        key: "source",
        label: "source",
        type: "string",
        description:
          "Source of the transaction funds. Enum = {wallet, agent, thirdparty}",
        requirement: "Mandatory",
        length: "10",
      },
      {
        key: "transaction_method",
        label: "transaction_method",
        type: "string",
        description:
          "Transaction method. Enum = {wallet_transfer, card, cash_at_agent, bank_transfer, international_transfer, internal_transfer}",
        requirement: "Mandatory",
        length: "10-30",
      },
      {
        key: "parent_mobile_number",
        label: "parent_mobile_number",
        type: "string",
        description:
          "Full mobile number of account holder of the parent account. Example: +18681234567.",
        requirement: "Optional",
        length: "12",
      },
      {
        key: "metadata",
        label: "metadata",
        type: "string",
        description: "Additional data about the particular transaction",
        requirement: "Optional",
        length: "1-255",
      },
      {
        key: "balance",
        label: "balance",
        type: "string",
        description: "Returns the account balance of the recipient.",
        requirement: "Mandatory",
        length: "10, 2",
      },
      {
        key: "quote_id",
        label: "quote_id",
        type: "string",
        description: "Unique identifier of the quote",
        requirement: "Optional",
        length: "20-40",
      },
    ],
  },
  {
    key: "institution_receipt_id",
    label: "institution_receipt_id",
    type: "string",
    description:
      "The PayWise transaction ID returned once the transaction has been posted.",
    requirement: "Conditional",
    length: "1-40",
    section: "Response Parameters",
  },
];

const Transaction_Id_Institutions = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="transaction_get"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">
          transaction/{`{transaction_id}`}:
        </span>
        <p className="py-5 text-sm">
          The{" "}
          <span className="text-[#6FA43A]">
            transaction/{`{transaction_id}`}{" "}
          </span>{" "}
          endpoint retrieves a confirmation of the transaction’s completion.
          Once a transaction has been posted, this call allows the institution
          to verify its success or failure, providing detailed status updates on
          the specific transaction based on its unique ID. This is critical for
          transparency and transaction reconciliation.
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {transactionIdInstitutionParameters
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
          defaultKey="successTransactionCompleted"
        />
      </div>
    </div>
  );
};

export default Transaction_Id_Institutions;

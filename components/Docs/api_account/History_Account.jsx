"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/account/transaction_history?mobile_number=%2B18681234567&start_date=2024-01-01&end_date=2024-11-25&version=2024-11-25"
-H "PW_subscription_key: eed0d85c530c4b26a91d09b7"
-H "PW_origin_country: TT"
-H "PW_request_date: 2024-11-25 12:00:00"
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'uri'
require 'json'

base_url = "https://api.paywise.co/account/transaction_history"
mobile_number = "+18681234567" # Example mobile number
version = "2023-11-24" # Example version

uri = URI("#{base_url}?mobile_number=#{URI.encode(mobile_number)}&version=#{URI.encode(version)}")

headers = {
    "PW_subscription_key" => "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country" => "TT",
    "PW_request_date" => Time.now.strftime("%Y-%m-%d %H:%M:%S")
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri, headers)
response = http.request(request)

if response.code == "200"
  puts "Response: #{response.body}"
else
  puts "Error: #{response.code} - #{response.message}"
end
    `,
  },
  PHP: {
    description: `
<?php
$base_url = "https://devapi.paywise.co/account/transaction_history";
$mobile_number = "+18681234567"; // Example mobile number
$version = "2023-11-24"; // Example version

$url = $base_url . "?mobile_number=" . urlencode($mobile_number) . "&version=" . urlencode($version);

$headers = [
    "PW_subscription_key: eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country: TT",
    "PW_request_date: " . date("Y-m-d H:i:s")
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo "cURL Error: " . curl_error($ch);
} else {
    echo "Response: " . $response;
}
curl_close($ch);
?>
    `,
  },
  JavaScript: {
    description: `
const axios = require('axios');

const baseURL = "https://api.paywise.co/account/transaction_history";
const mobileNumber = "+18681234567"; // Example mobile number
const version = "2023-11-24"; // Example version

const url = {baseURL}?mobile_number={encodeURIComponent(mobileNumber)}&version={encodeURIComponent(version)};

const headers = {
    "PW_subscription_key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW_origin_country": "TT",
    "PW_request_date": new Date().toISOString().replace('T', ' ').slice(0, 19)
};

axios.get(url, { headers })
    .then(response => {
        console.log("Response:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
    `,
  },
  Python: {
    description: `
import requests

url = "https://devapi.paywise.co/account/transaction_history"
headers = {
    "PW_subscription_key": "eed0d85c530c4b26a91d09b7",
    "PW_origin_country": "TT",
    "PW_request_date": "2024-11-25 12:00:00"
}
params = {
    "mobile_number": "+18681234567",
    "start_date": "2024-01-01",
    "end_date": "2024-11-25",
    "version": "2024-11-25"
}
response = requests.get(url, headers=headers, params=params)
print(response.json())
    `,
  },
};

// Response example
const responseExample = `{
  "status": "success",
  "code": 200,
  "message": "Transaction history retrieved successfully",
  "transactions": [
      {
        "transaction_id": "txn_01GZ74H2XYZ",
        "type": "credit",
        "amount": "150.50",
        "currency": "TTD",
        "date": "2024-05-03 10:45:00",
        "description": "Funds received from John Doe",
        "status": "completed",
        "source": "wallet",
        "transaction_method": "wallet_transfer"
      },
      {
        "transaction_id": "txn_01GZ74H4ABC",
        "type": "debit",
        "amount": "50.00",
        "currency": "TTD",
        "date": "2024-05-02 09:15:00",
        "description": "Bill payment to FLOW",
        "status": "completed",
        "source": "wallet",
        "transaction_method": "bill_payment"
      },
      {
        "transaction_id": "txn_01GZ74H5DEF",
        "type": "credit",
        "amount": "100.00",
        "currency": "TTD",
        "date": "2024-05-01 14:30:00",
        "description": "Cash-in at PayWise Agent",
        "status": "completed",
        "source": "agent",
        "transaction_method": "cash_in"
      }
    ]
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 404,
    "message": " Account not found"
}`;

// Parameters
const historyAccountParameters = [
  {
    key: "version",
    label: "version",
    type: "string",
    description:
      "For version control. Format = YYYY-MM-DD. Defaults to the latest version",
    requirement: "Mandatory",
    length: "10",
    section: "Request Parameters",
  },
  {
    key: "mobile_number",
    label: "mobile_number",
    type: "string",
    description: "Full mobile number of account holder. Example: +18681234567.",
    requirement: "Mandatory",
    length: "12",
    section: "Request Parameters",
  },
  {
    key: "start_date",
    label: "start_date",
    type: "string",
    description:
      "The starting date to capture the account period. Defaults to 7 days prior to end date. If end_date is set and is earlier to start_date, this default will kick in. Format = YYYY-MM-DD",
    requirement: "Conditional",
    length: "10",
    section: "Request Parameters",
  },
  {
    key: "end_date",
    label: "end_date",
    type: "string",
    description:
      "The end date for the capture of the user's account information. Defaults to today. Format = YYYY-MM-DD",
    requirement: "Optional",
    length: "10",
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
      "Message is conditional. Messages will show based on condition applied. Added one example only. Example: Account is in good standing with a balance of [$balance].",
    requirement: "Mandatory",
    length: "255",
    section: "Response Parameters",
  },
  {
    key: "transactions",
    label: "transactions",
    type: "object",
    description: "An array of transaction record objects.",
    requirement: "Mandatory",
    section: "Response Parameters",
    children: [
      {
        key: "transaction",
        label: "transaction",
        type: "object",
        description:
          "A JSON object that contains information about the transaction record",
        requirement: "Mandatory",
        children: [
          {
            key: "id",
            label: "id",
            type: "string",
            description: "The transaction ID",
            requirement: "Mandatory",
            length: "0-60",
          },
          {
            key: "type",
            label: "type",
            type: "string",
            description: "The transaction type. Enum = {credit, debit}",
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
            type: "string",
            description:
              "Total amount (in TTD with precision of 2 decimal places) of fees associated with the transaction.",
            requirement: "Mandatory",
            length: "8, 2",
          },
          {
            key: "cleared_date",
            label: "cleared_date",
            type: "string",
            description: "Date transaction has cleared. Format = YYYY-MM-DD",
            requirement: "Mandatory",
            length: "10",
          },
          {
            key: "posted_date",
            label: "posted_date",
            type: "string",
            description: "Date transaction submitted. Format = YYYY-MM-DD",
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
            description:
              "Returns the account balance after the transaction. (Not available in production.)",
            requirement: "Conditional",
            length: "10, 2",
          },
        ],
      },
    ],
  },
];

const History_Account = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="history_account"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">account_history</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">account_history</span> endpoint
          retrieves the transaction history of a given PayWise account.{" "}
          <span className="font-bold">
            N.B. This endpoint is for development and testing purposes and only
            works on the Developer portal.
          </span>
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {historyAccountParameters
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

export default History_Account;

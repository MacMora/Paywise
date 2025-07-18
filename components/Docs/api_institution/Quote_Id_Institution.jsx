"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";
import { ResponseExampleBox } from "../../ResponseExampleBox";

// Language data
const languageData = {
  Bash: {
    description: `
VERSION="2024-10-01"
QUOTE_ID="2DTVD9WD11CQM2NAGCO9"
INSTITUTION_NAME="Reaby"
API_KEY="acdb459a0f384b7c8fc2205e13c09036"
REQUEST_DATE=$(date +"%Y-%m-%d %H:%M:%S")
ORIGIN_COUNTRY="TT"
IP_ADDRESS="192.0.2.1"

URL="https://devapi.paywise.co/institution/quote?version=$\{VERSION}&quote_id=$\{QUOTE_ID}&institution_name=$\{INSTITUTION_NAME}"

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
  quote_id: "2DTVD9WD11CQM2NAGCO9",
  institution_name: "Reaby"
}

uri = URI("https://devapi.paywise.co/institution/quote")
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
puts "Response:\n#{response.body}"
    `,
  },
  PHP: {
    description: `
<?php

$url = "https://devapi.paywise.co/institution/quote?" . http_build_query([
    "version" => "2024-10-01",
    "quote_id" => "2DTVD9WD11CQM2NAGCO9",
    "institution_name" => "Reaby"
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
  quote_id: "2DTVD9WD11CQM2NAGCO9",
  institution_name: "Reaby"
};

const headers = {
  "Content-Type": "application/json",
  "pw-origin-country": "TT",
  "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date": new Date().toISOString().slice(0, 19).replace("T", " "),
  "pw-ip-address": "192.0.2.1"
};

axios.get("https://devapi.paywise.co/institution/quote", { params, headers })
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
    "quote_id": "2DTVD9WD11CQM2NAGCO9",
    "institution_name": "Reaby"
}

headers = {
    "Content-Type": "application/json",
    "pw-origin-country": "TT",
    "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "pw-ip-address": "192.0.2.1"
}

response = requests.get("https://devapi.paywise.co/institution/quote", params=params, headers=headers)
print("Status:", response.status_code)
print("Response:", response.text)
    `,
  },
};

// Response examples
const responseExamples = {
  success: {
    label: "Success",
    description: "Successful response from the API.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Quote generated successfully",
  "rate": "6.7450",
  "request_date": "2025-02-14",
  "quote_date": "2025-02-14 12:00:00",
  "amount_quoted": "1500.75",
  "expire_date": "2025-02-15 12:30:00"
}`,
  },
  missingSubscriptionKey: {
    label: " Missing pw-subscription-key header",
    description: "Remove the 'pw-subscription-key' header.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-subscription-key"
}`,
  },
  missingRequestDate: {
    label: "Missing pw-request-date header",
    description: "Remove the 'pw-request-date' header.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-request-date"
}`,
  },
  missingOriginCountry: {
    label: "Missing pw-origin-country header",
    description: "Remove the 'pw-origin-country' header.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-origin-country"
}`,
  },
  missingIpAddress: {
    label: "Missing pw-ip-address header",
    description:
      "Remove 'pw-ip-address' header; application logic will reject the request.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-ip-address"
}`,
  },
  invalidRequestDateFormat: {
    label: "Invalid pw-request-date format",
    description: "Use '2024/11/12 12:12:00' instead of 'YYYY-MM-DD HH:MI:SS'.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Invalid format for pw-request-date. Expected format is YYYY-MM-DD HH:MI:SS"
}`,
  },
  invalidOriginCountryLength: {
    label: "Invalid pw-origin-country length",
    description:
      "Use a 3-character value (e.g. 'TTO') for 'pw-origin-country'.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Invalid value for pw-origin-country. ISO Alpha 2 standard: Must be a 2-character country code"
}`,
  },
  invalidSubscriptionKeyLength: {
    label: "Invalid pw-subscription-key length",
    description: "Use a short or long value instead of exactly 32 characters.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "The 'pw-subscription-key' header must be exactly 32 characters long."
}`,
  },
  missingVersionParam: {
    label: "Missing version query parameter",
    description: "Do not include 'version=YYYY-MM-DD' in the query string.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "The query string parameter 'version' is required in the format 'YYYY-MM-DD'."
}`,
  },
  invalidVersionParam: {
    label: "Invalid version query parameter format",
    description: "Use 'v1' instead of 'YYYY-MM-DD'.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "The query string parameter 'version' must be in the format 'YYYY-MM-DD'."
}`,
  },
  nonexistentEndpoint: {
    label: "Nonexistent endpoint",
    description:
      "Use '/institution/quote/badpath' instead of '/institution/quote'.",
    response: `{
  "code": 404,
  "status": "error",
  "message": "Endpoint not found: The requested endpoint does not exist. Please check the URL or refer to our API documentation."
}`,
  },
};

// Parameters
const quoteIdInstitutionParameters = [
  {
    key: "version",
    label: "version",
    type: "string",
    section: "Request Parameters",
    description:
      "For version control. Format = YYYY-MM-DD. Defaults to the latest version",
    requirement: "Mandatory",
    length: "10",
  },
  {
    key: "quote_id",
    label: "quote_id",
    type: "string",
    section: "Request Parameters",
    description: "Unique identifier of the quote",
    requirement: "Mandatory",
    length: "20-40",
  },
  {
    key: "institution_name",
    label: "institution_name",
    type: "string",
    section: "Request Parameters",
    description: "Name of party who requested this api.",
    requirement: "Mandatory",
    length: "255",
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
    description:
      "Message is conditional. Messages will show based on condition applied. Added one example only. Example: Error: Exceeds user limits.",
    requirement: "Mandatory",
    length: "255",
  },
  {
    key: "rate",
    label: "rate",
    type: "string",
    section: "Response Parameters",
    description:
      "The TTD equivalent for 1 dollar of the currency pair. Precision of up to 4 decimal points.",
    requirement: "Conditional",
    length: "8, 4",
  },
  {
    key: "request_date",
    label: "request_date",
    type: "string",
    section: "Response Parameters",
    description:
      "Date of the currency rate from the CBTT source. Format = YYYY-MM-DD",
    requirement: "Conditional",
    length: "10",
  },
  {
    key: "quote_date",
    label: "quote_date",
    type: "string",
    section: "Response Parameters",
    description:
      "Date and time to the quote was created. Format = YYYY-MM-DD HH:mi:ss",
    requirement: "Conditional",
    length: "19",
  },
  {
    key: "amount_quoted",
    label: "amount_quoted",
    type: "string",
    section: "Response Parameters",
    description:
      "Amount quoted for the transaction. Precision of up to 2 decimal points.",
    requirement: "Conditional",
    length: "8, 2",
  },
  {
    key: "expire_date",
    label: "expire_date",
    type: "string",
    section: "Response Parameters",
    description:
      "Date and time when this quote and currency rate is no longer be valid. Format YYYY-MM-DD HH:mi:ss",
    requirement: "Conditional",
    length: "19",
  },
];

const Quote_Id_Institutions = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="quote_get"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">quote/{`{quote_id}`}:</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">quote/{`{quote_id}`} </span>{" "}
          endpoint retrieves the details of a previously generated quote. This
          allows institutions to check the terms of the quote, such as the
          conversion rate and the expiry period, ensuring that they have the
          necessary information before proceeding with the transaction.
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {quoteIdInstitutionParameters
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

export default Quote_Id_Institutions;

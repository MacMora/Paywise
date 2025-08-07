"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";
import { ResponseExampleBox } from "@/components/ResponseExampleBox";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23" 
-H "Content-Type: application/json" 
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-23 12:34:56"
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23")
header = {
  "PW-subscription-key" => "your_subscription_key",
  "PW-origin-country" => "TT",
  "PW-request-date" => "2024-10-23 12:34:56"
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Get.new(uri.request_uri, header)

response = http.request(request)
puts response.body
    `,
  },
  PHP: {
    description: `
<?php
$api_url = "https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23";

$headers = [
    "PW-subscription-key: your_subscription_key",
    "PW-origin-country: TT",
    "PW-request-date: 2024-10-23 12:34:56"
];

$ch = curl_init($api_url);
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
const api_url = "https://devapi.paywise.co/institution/exchange_rate_usd?currency_pair=USD&rate_type=selling&request_date=2024-10-23&version=2023-10-23";

const headers = {
  "PW-subscription-key": "your_subscription_key",
  "PW-origin-country": "TT",
  "PW-request-date": "2024-10-23 12:34:56"
};

fetch(api_url, {
  method: "GET",
  headers: headers
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error('Error:', error));
    `,
  },
  Python: {
    description: `
import requests

url = "https://devapi.paywise.co/institution/exchange_rate_usd"
params = {
    "currency_pair": "USD",
    "rate_type": "selling",
    "request_date": "2024-10-23",
    "version": "2023-10-23"
}
headers = {
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

response = requests.get(url, headers=headers, params=params)

print(response.status_code)
print(response.json())
    `,
  },
};

// Response example
const responseExamples = {
  success: {
    label: "Success",
    description: "Exchange rate retrieved successfully.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "request_date: rate",
  "rate": "6.7450",
  "request_date": "2025-02-14"
}`
  },
  errorCurrencyPairRequired: {
    label: "Error - Currency Pair Required",
    description: "Currency pair is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "currency_pair is required"
}`
  },
  errorRateTypeRequired: {
    label: "Error - Rate Type Required",
    description: "Rate type is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "rate_type is required"
}`
  },
  errorInvalidRateType: {
    label: "Error - Invalid Rate Type",
    description: "Invalid rate type. Must be 'buying' or 'selling'.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Invalid rate_type. Must be 'buying' or 'selling'"
}`
  },
  errorInvalidCurrencyPairFormat: {
    label: "Error - Invalid Currency Pair Format",
    description: "Invalid currency pair format. Use ISO 4217 code.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Invalid currency_pair format. Use ISO 4217 code"
}`
  },
  errorVersionRequired: {
    label: "Error - Version Required",
    description: "Version is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "version is required"
}`
  },
  errorInvalidVersionFormat: {
    label: "Error - Invalid Version Format",
    description: "Invalid version format. Expected YYYY-MM-DD format.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Invalid version format. Expected \"YYYY-MM-DD\""
}`
  },
  errorInvalidRequestDateFormat: {
    label: "Error - Invalid Request Date Format",
    description: "Invalid request date format. Expected YYYY-MM-DD format.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Invalid request_date format. Expected \"YYYY-MM-DD\""
}`
  },
  errorExchangeRateNotAvailable: {
    label: "Error - Exchange Rate Not Available",
    description: "Exchange rate not available for the requested date.",
    response: `{
  "status": "error",
  "code": 404,
  "message": "Exchange rate not available for the requested date",
  "request_date": "2025-02-14"
}`
  },
  errorRateLimitExceeded: {
    label: "Error - Rate Limit Exceeded",
    description: "Rate limit exceeded. Please try again later.",
    response: `{
  "status": "error",
  "code": 429,
  "message": "Rate limit exceeded. Please try again later"
}`
  },
  errorSystemError: {
    label: "Error - System Error",
    description: "System error while retrieving exchange rate.",
    response: `{
  "status": "error",
  "code": 500,
  "message": "System error while retrieving exchange rate"
}`
  }
};

// Parameters
const exchangeInstitutionParameters = [
  {
    key: "currency_pair",
    label: "currency_pair",
    type: "string",
    section: "Request Parameters",
    description: "The trading pair. Trading codes from ISO 4217. Example: USD",
    requirement: "Mandatory",
    length: "3",
  },
  {
    key: "rate_type",
    label: "rate_type",
    type: "string",
    section: "Request Parameters",
    description: "Enum = {buying, selling}. Default to 'selling'",
    requirement: "Mandatory",
    length: "6-8",
  },
  {
    key: "request_date",
    label: "request_date",
    type: "string",
    section: "Request Parameters",
    description: "Date to source the currency rate. Format = YYYY-MM-DD",
    requirement: "Optional",
    length: "10",
  },
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
      "Messages will show based on condition applied. Added one example only. Example: {Date's}: {rate}",
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
    requirement: "Mandatory",
    length: "8, 4",
  },
  {
    key: "response_request_date",
    label: "request_date",
    type: "string",
    section: "Response Parameters",
    description: "Date to source the currency rate. Format = YYYY-MM-DD",
    requirement: "Mandatory",
    length: "19",
  },
];

const Exchange_Institutions = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="exchange_rate_usd"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">exchange_rate_usd:</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">exchange_rate_usd </span>{" "}
          endpoint retrieves the current USD to TTD exchange rate for a
          particular date. Institutions can use this to understand the
          conversion rates being applied when transacting in foreign currencies,
          ensuring accurate pricing for international payments and foreign
          exchange operations.
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {exchangeInstitutionParameters
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

export default Exchange_Institutions;

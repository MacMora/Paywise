"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";
import { ResponseExampleBox } from '../../ResponseExampleBox';

// Language data
const languageData = {
  Bash: {
    description: `
FIRST_NAME="Dino"
LAST_NAME="Lewis"
SENDER_FIRST_NAME="asd"
SENDER_LAST_NAME="das"
MOBILE_NUMBER="18685634000"
INSTITUTION_NAME="Reaby"
API_KEY="acdb459a0f384b7c8fc2205e13c09036"
ORIGIN_COUNTRY="TT"

REQUEST_DATE=$(date +"%Y-%m-%d %H:%M:%S")
VERSION="2024-10-01"
BASE_URL="https://devapi.paywise.co/account/account"

QUERY_STRING="?version=$\{VERSION}&mobile_number=$\{MOBILE_NUMBER}&institution_name=$\{INSTITUTION_NAME}&first_name=$\{FIRST_NAME}&last_name=$\{LAST_NAME}&sender_first_name=$\{SENDER_FIRST_NAME}&sender_last_name=$\{SENDER_LAST_NAME}"

curl -X GET "$\{BASE_URL}$\{QUERY_STRING}" 
  -H "Content-Type: application/json" 
  -H "pw-origin-country: \${ORIGIN_COUNTRY}" 
  -H "pw-subscription-key: \${API_KEY}" 
  -H "pw-request-date: \${REQUEST_DATE}"
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'uri'
require 'time'

first_name = "Dino"
last_name = "Lewis"
sender_first_name = "asd"
sender_last_name = "das"
mobile_number = "18685634000"
institution_name = "Reaby"
version = "2024-10-01"
api_key = "acdb459a0f384b7c8fc2205e13c09036"

request_date = Time.now.strftime("%Y-%m-%d %H:%M:%S")

params = {
  version: version,
  mobile_number: mobile_number,
  institution_name: institution_name,
  first_name: first_name,
  last_name: last_name,
  sender_first_name: sender_first_name,
  sender_last_name: sender_last_name
}

uri = URI("https://devapi.paywise.co/account/account")
uri.query = URI.encode_www_form(params)

req = Net::HTTP::Get.new(uri)
req["Content-Type"] = "application/json"
req["pw-origin-country"] = "TT"
req["pw-subscription-key"] = api_key
req["pw-request-date"] = request_date

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

puts "HTTP Status: #{res.code}"
puts "Response: #{res.body}"
    `,
  },
  PHP: {
    description: `
<?php

$first_name = "Dino";
$last_name = "Lewis";
$sender_first_name = "asd";
$sender_last_name = "das";
$mobile_number = "18685634000";
$institution_name = "Reaby";
$version = "2024-10-01";

$request_date = date("Y-m-d H:i:s");
$api_key = "acdb459a0f384b7c8fc2205e13c09036";

$query = http_build_query([
    "version" => $version,
    "mobile_number" => $mobile_number,
    "institution_name" => $institution_name,
    "first_name" => $first_name,
    "last_name" => $last_name,
    "sender_first_name" => $sender_first_name,
    "sender_last_name" => $sender_last_name
]);

$url = "https://devapi.paywise.co/account/account?" . $query;

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "pw-origin-country: TT",
    "pw-subscription-key: $api_key",
    "pw-request-date: $request_date"
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP Status: $http_code\n";
echo "Response:\n$response\n";
    `,
  },
  JavaScript: {
    description: `
const axios = require('axios');

const params = {
  version: "2024-10-01",
  mobile_number: "18685634000",
  institution_name: "Reaby",
  first_name: "Dino",
  last_name: "Lewis",
  sender_first_name: "asd",
  sender_last_name: "das"
};

const headers = {
  "Content-Type": "application/json",
  "pw-origin-country": "TT",
  "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date": new Date().toISOString().slice(0, 19).replace("T", " ")
};

axios.get("https://devapi.paywise.co/account/account", {
  params,
  headers
})
.then(response => {
  console.log("Status:", response.status);
  console.log("Data:", response.data);
})
.catch(error => {
  console.error("Error:", error.response?.data || error.message);
});
    `,
  },
  Python: {
    description: `
import requests
from datetime import datetime

params = {
    "first_name": "Dino",
    "last_name": "Lewis",
    "sender_first_name": "asd",
    "sender_last_name": "das",
    "mobile_number": "18685634000",
    "institution_name": "Reaby",
    "version": "2024-10-01"
}

headers = {
    "Content-Type": "application/json",
    "pw-origin-country": "TT",
    "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
}

url = "https://devapi.paywise.co/account/account"
response = requests.get(url, params=params, headers=headers)

print("Status:", response.status_code)
print("Response:", response.text)
    `,
  },
};

const responseExamples = {
  success: {
    label: "Success",
    description: "Successful response from the API.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Registration request sent",
  "account_status": "available",
  "session_token": "abcd1234xyz"
}`
  },
  missingSubscriptionKey: {
    label: "Missing pw-subscription-key header",
    description: "Omit the 'pw-subscription-key' header entirely.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-subscription-key"
}`
  },
  missingRequestDate: {
    label: "Missing pw-request-date header",
    description: "Omit the 'pw-request-date' header entirely.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-request-date"
}`
  },
  missingOriginCountry: {
    label: "Missing pw-origin-country header",
    description: "Omit the 'pw-origin-country' header entirely.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Missing required header: pw-origin-country"
}`
  },
  invalidRequestDateFormat: {
    label: "Invalid pw-request-date format",
    description: "Use '2024/11/12 12:12:00' instead of the correct 'YYYY-MM-DD HH:MM:SS'.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Invalid format for pw-request-date. Expected format is YYYY-MM-DD HH:MI:SS"
}`
  },
  invalidOriginCountryLength: {
    label: "Invalid pw-origin-country length",
    description: "Use 'TTO' instead of a 2-character ISO Alpha-2 code.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "Invalid value for pw-origin-country. ISO Alpha 2 standard: Must be a 2-character country code"
}`
  },
  invalidSubscriptionKeyLength: {
    label: "Invalid pw-subscription-key length",
    description: "Use a short or long value instead of a 32-character key.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "The 'pw-subscription-key' header must be exactly 32 characters long."
}`
  },
  missingVersionParam: {
    label: "Missing version query param",
    description: "Omit the 'version' query string parameter.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "The query string parameter 'version' is required in the format 'YYYY-MM-DD'."
}`
  },
  malformedVersionParam: {
    label: "Malformed version param format",
    description: "Use 'v1' or '01-10-2024' instead of 'YYYY-MM-DD'.",
    response: `{
  "code": 400,
  "status": "error",
  "message": "The query string parameter 'version' must be in the format 'YYYY-MM-DD'."
}`
  },
  nonexistentEndpoint: {
    label: "Nonexistent endpoint fallback",
    description: "Make a request to '/account/doesnotexist' to trigger fallback.",
    response: `{
  "code": 404,
  "status": "error",
  "message": "The requested endpoint does not exist or is not formatted as expected. Please check the URL or refer to our API documentation https://docs.paywise.co ."
}`
  }
};

// Parameters
const accountParameters = [
  // Request Parameters
  {
    key: "version",
    label: "version",
    type: "string",
    section: "Request Parameters",
    description:
      'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: "mandatory",
    length: "10",
  },
  {
    key: "mobile_number",
    label: "mobile_number",
    type: "string",
    section: "Request Parameters",
    description:
      'Full mobile number of account holder. Example: "+18681234567"',
    requirement: "mandatory",
    length: "12",
  },
  {
    key: "institution_name",
    label: "institution_name",
    type: "string",
    section: "Request Parameters",
    description: "Name of party who requested this api.",
    requirement: "mandatory",
    length: "255",
  },
  {
    key: "first_name",
    label: "first_name",
    type: "string",
    section: "Request Parameters",
    description:
      "First name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.",
    requirement: "mandatory",
    length: "1 - 50",
  },
  {
    key: "last_name",
    label: "last_name",
    type: "string",
    section: "Request Parameters",
    description:
      "Last name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.",
    requirement: "mandatory",
    length: "1 - 75",
  },
  {
    key: "sender_first_name",
    label: "sender_first_name",
    type: "string",
    section: "Request Parameters",
    description:
      "First name of the sender as registered with the sender partner. This should be the complete name as per the KYC document provided during the registration process.",
    requirement: "optional",
    length: "1 - 50",
  },
  {
    key: "sender_last_name",
    label: "sender_last_name",
    type: "string",
    section: "Request Parameters",
    description:
      "Last name of the sender as registered with the sender partner. This should be the complete name as per the KYC document provided during the registration process.",
    requirement: "optional",
    length: "1 - 75",
  },
  {
    key: "email",
    label: "email",
    type: "string",
    section: "Request Parameters",
    description:
      "Email verification to take place on the email of the PayWise account holder",
    requirement: "optional",
    length: "5 - 200",
  },

  // Response Parameters
  {
    key: "status",
    label: "status",
    type: "string",
    section: "Response Parameters",
    description: 'Returns the API call status. Enum = { "success", "error" }',
    requirement: "mandatory",
    length: "10",
  },
  {
    key: "code",
    label: "code",
    type: "integer",
    section: "Response Parameters",
    description: "HTTP return code.",
    requirement: "mandatory",
    length: "3",
  },
  {
    key: "message",
    label: "message",
    type: "string",
    section: "Response Parameters",
    description:
      'Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"',
    requirement: "mandatory",
    length: "255",
  },
  {
    key: "account_status",
    label: "account_status",
    type: "string",
    section: "Response Parameters",
    description:
      "Returns the status of the user. Enum = {available, unavailable, unknown}",
    requirement: "mandatory",
    length: "8 - 11",
  },
  {
    key: "session_token",
    label: "session_token",
    type: "string",
    section: "Response Parameters",
    description:
      "Unencrypted session_token passed to be encrypted using shared keys with Institution.",
    requirement: "mandatory",
    length: "10 - 20",
  },
];

const Account = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  // Group parameters by section
  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="dev_account"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">account:</span>
        <p className="py-5 text-sm">
          The <span className="text-[#6FA43A]">account</span> endpoint retrieves
          the status of a PayWise account. It checks whether the account is in
          good standing and available for receiving or sending funds. This
          ensures that the account can actively participate in transactions,
          providing peace of mind for both the institution and the user.
        </p>
        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div
              className={`flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2`}
            >
              {accountParameters
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

export default Account;

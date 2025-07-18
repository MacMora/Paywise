"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X POST https://devapi.paywise.co/account/register_account?version=2023-10-23
-H "Content-Type: application/json"
-H "PW-subscription-key: your_subscription_key"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-23 12:34:56"
-d '{
    "mobile_number": "+18681234567",
    "institution_name": "Institution Name",
    "callback_url": "https://yourcallbackurl.com/response",
    "first_name": "John",
    "last_name": "Doe",
    "session_token": "encrypted_session_token",
    "authorisation_token": "unencrypted_authorisation_token"
}'

    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'uri'
require 'json'
    
uri = URI.parse("https://devapi.paywise.co/account/register_account?version=2023-10-23")
header = {
    "Content-Type" => "application/json",
    "PW-subscription-key" => "your_subscription_key",
    "PW-origin-country" => "TT",
    "PW-request-date" => "2024-10-23 12:34:56"
}
body = {
    mobile_number: "+18681234567",
    institution_name: "Institution Name",
    callback_url: "https://yourcallbackurl.com/response",
    first_name: "John",
    last_name: "Doe",
    session_token: "encrypted_session_token",
    authorisation_token: "unencrypted_authorisation_token"
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
$api_url = "https://devapi.paywise.co/account/register_account?version=2023-10-23";
$data = [
    "mobile_number" => "+18681234567",
    "institution_name" => "Institution Name",
    "callback_url" => "https://yourcallbackurl.com/response",
    "first_name" => "John",
    "last_name" => "Doe",
    "session_token" => "encrypted_session_token",
    "authorisation_token" => "unencrypted_authorisation_token"
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
const api_url = "https://devapi.paywise.co/account/register_account?version=2023-10-23";

const headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
};

const data = {
    mobile_number: "+18681234567",
    institution_name: "Institution Name",
    callback_url: "https://yourcallbackurl.com/response",
    first_name: "John",
    last_name: "Doe",
    session_token: "encrypted_session_token",
    authorisation_token: "unencrypted_authorisation_token"
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

url = "https://devapi.paywise.co/account/register_account?version=2023-10-23"

headers = {
    "Content-Type": "application/json",
    "PW-subscription-key": "your_subscription_key",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-23 12:34:56"
}

data = {
    "mobile_number": "+18681234567",
    "institution_name": "Institution Name",
    "callback_url": "https://yourcallbackurl.com/response",
    "first_name": "John",
    "last_name": "Doe",
    "session_token": "encrypted_session_token",
    "authorisation_token": "unencrypted_authorisation_token"
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
  "code": 200,
  "message": "Registration request sent"
}
#if there is an error, the response may look like:
{
  "status": "error",
  "code": 400,
  "message": "Invalid mobile number format"
}`;

// Parameters
const registerAccountParameters = [
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
  // Body Parameters
  {
    key: "mobile_number",
    label: "mobile_number",
    type: "string",
    section: "Body Parameters",
    description:
      'Full mobile number of account holder. Example: "+18681234567"',
    requirement: "mandatory",
    length: "12",
  },
  {
    key: "institution_name",
    label: "institution_name",
    type: "string",
    section: "Body Parameters",
    description: "Name of party who requested this api.",
    requirement: "mandatory",
    length: "255",
  },
  {
    key: "callback_url",
    label: "callback_url",
    type: "string",
    section: "Body Parameters",
    description: "Url to return the response to request",
    requirement: "mandatory",
    length: "200",
  },
  {
    key: "first_name",
    label: "first_name",
    type: "string",
    section: "Body Parameters",
    description:
      "First name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.",
    requirement: "mandatory",
    length: "1 - 50",
  },
  {
    key: "last_name",
    label: "last_name",
    type: "string",
    section: "Body Parameters",
    description:
      "Last name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.",
    requirement: "mandatory",
    length: "1 - 75",
  },
  // Ejemplo de parámetro padre con hijos
  {
    key: "session_token",
    label: "session_token",
    type: "string",
    section: "Body Parameters",
    description:
      "Encrypted session_token. Institution encrypts the session_token sent using shared key.",
    requirement: "mandatory",
    length: "20 - 40",
  },
  {
    key: "authorisation_token",
    label: "authorisation_token",
    type: "string",
    section: "Body Parameters",
    description:
      "Unencrypted token shared by institution for callback POST method. PW will encrypt using shared key.",
    requirement: "mandatory",
    length: "10 - 40",
  },
  // Post Callback URL (como parámetro padre con hijos)
  {
    key: "post_authorisation_token",
    label: "authorisation_token",
    type: "string",
    section: "Header POST Callback URL",
    description: "PW encrypts the Institution authorisation_token.",
    requirement: "mandatory",
    length: "0 - 255",
  },
  {
    key: "pw-signature",
    label: "pw-signature",
    type: "string",
    section: "Header POST Callback URL",
    description: "Digitally signed by PayWise",
    requirement: "mandatory",
    length: "0 - 255",
  },
  {
    key: "mobile_number",
    label: "mobile_number",
    type: "string",
    section: "Body POST Callback URL",
    description:
      'Full mobile number of account holder. Example: "+18681234567"',
    requirement: "mandatory",
    length: "12",
  },
  {
    key: "business_name",
    label: "business_name",
    type: "string",
    section: "Body POST Callback URL",
    description:
      "Wherever applicable, the Business name of the account holder as registered with PayWise.",
    requirement: "optional",
    length: "1 - 75",
  },
  {
    key: "pw_version",
    label: "pw_version",
    type: "string",
    section: "Body POST Callback URL",
    description:
      'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: "optional",
    length: "10",
  },
  {
    key: "request_timestamp",
    label: "request_timestamp",
    type: "string",
    section: "Body POST Callback URL",
    description:
      'Current timestamp from the request. Format: "YYYY-MM-DD HH:mm:ss" Example: 2014-10-08 16:01:31',
    requirement: "mandatory",
    length: "19",
  },
  {
    key: "request_id",
    label: "request_id",
    type: "string",
    section: "Body POST Callback URL",
    description: "The request_id that is traceable from the PW side",
    requirement: "mandatory",
    length: "1 - 200",
  },
  {
    key: "institution_name",
    label: "institution_name",
    type: "string",
    section: "Body POST Callback URL",
    description: "Name of party who requested this api.",
    requirement: "mandatory",
    length: "255",
  },
  {
    key: "request_status",
    label: "request_status",
    type: "string",
    section: "Body POST Callback URL",
    description:
      'Returns the API call status. Enum = { "approved" , "rejected" }',
    requirement: "mandatory",
    length: "10",
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
];

const Register_Account = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Header POST Callback URL",
    "Body POST Callback URL",
    "Response Parameters",
  ];

  return (
    <div>
      {/* ACCOUNT_API */}
      <div id="account_api" className="py-12 border-b-2">
        <h2 className="text-2xl lg:text-3xl font-semibold py-3">Account API</h2>
        <p className="py-5 text-sm">
          The Account Product API provides a comprehensive set of endpoints for
          managing user registrations and creating both business and personal
          accounts within the platform. This API is designed to streamline the
          onboarding process, allowing seamless creation and management of user
          identities. It supports various operations such as registering new
          users, handling account information, and managing business-specific
          attributes. The API is secured with role-based access control and rate
          limiting, ensuring a robust and compliant solution for account
          management.
        </p>
        <div className="bg-[#F5F6F8] overflow-hidden rounded">
          <div className="bg-[#ebeef1] py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base font-bold">
              <p>HTTP</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%] font-bold">
              <p>Sandbox URL</p>
            </div>
            <div className="basis-[50%] md:basis-[20%] font-bold">
              <p>Endpoint</p>
            </div>
            <div className="basis-[50%] font-bold">
              <p>Endpoints Description</p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>POST</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#register_account">/account/register_account</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Calling institution (i.e. caller) and/or PayWise, requests and
                retains the authorization or rejection from the PayWise account
                holder to establish a connection to Calling institution There
                needs to be adequate transparency as data about the user, may be
                shared via this connection.
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>GET</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#dev_account">/account/account</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Retrieves the account status. This checks that the account is in
                good standing and is available to receive or send funds.
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>POST</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#personal_account">/account/personal_account</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Create a personal account for testing on the Developer portal.
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>POST</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#business_account">/account/business_account</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Create a business account for testing on the Developer portal.
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>GET</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#balance_account">/account/balance</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>Retrieves the current balance of the PayWise account.</p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>GET</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#history_account">/account/transaction_history</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Returns a list of all transactions for a PayWise account within
                a specified date range. Defaults to last 7 days
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>POST</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%]">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="md:basis-[20%]">
              <a href="#bless_account">/account/bless_account</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>Adds credit to an account</p>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTER_ACCOUNT */}
      <div
        id="register_account"
        className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
      >
        <div className="lg:w-2/5 w-full">
          <span className="py-5 font-semibold">register_account:</span>
          <p className="py-5 text-sm">
            The <span className="text-[#6FA43A]">register_account</span>{" "}
            endpoint allows the calling institution to request and manage
            authorization or rejection from the PayWise account holder to
            establish a connection with the institution. Adequate transparency
            is provided to the user, ensuring they are aware of the data being
            shared through this connection. This step is crucial in integrating
            the institution with the user's PayWise account, maintaining
            security and consent throughout the process.
          </p>
          {sections.map((section) => (
            <div key={section} className="border-b border-[#6FA43A] py-4">
              <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
              <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
                {registerAccountParameters
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
    </div>
  );
};

export default Register_Account;

"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X POST "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith"
-H "PW-subscription-key: eed0d85c530c4b26a91d09b783d8fab3"
-H "PW-origin-country: TT"
-H "PW-request-date: 2024-10-20 15:30:00" 
-d '{
    "mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "first_name": "John",
    "last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
}'  
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'json'

url = URI("https://devapi.paywise.co/account/account?version=2024-10-20")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

headers = {
  'PW-subscription-key' => 'eed0d85c530c4b26a91d09b783d8fab3',
  'PW-origin-country' => 'TT',
  'PW-request-date' => '2024-10-20 15:30:00',
  'Content-Type' => 'application/json'
}

body = {
  "mobile_number" => "+18681234567",
  "institution_name" => "PayWise Institution",
  "first_name" => "John",
  "last_name" => "Doe",
  "sender_first_name" => "Jane",
  "sender_last_name" => "Smith"
}

request = Net::HTTP::Post.new(url, headers)
request.body = body.to_json

response = http.request(request)
puts response.read_body
    `,
  },
  PHP: {
    description: `
<?php 
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "PW-subscription-key: eed0d85c530c4b26a91d09b783d8fab3",
        "PW-origin-country: TT",
        "PW-request-date: 2024-10-20 15:30:00",
        "Content-Type: application/json"
    ),
    CURLOPT_POSTFIELDS => json_encode(array(
        "mobile_number" => "+18681234567",
        "institution_name" => "PayWise Institution",
        "first_name" => "John",
        "last_name" => "Doe",
        "sender_first_name" => "Jane",
        "sender_last_name" => "Smith"
    )),
));

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
    `,
  },
  JavaScript: {
    description: `
const url = "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith";
const headers = {
    "PW-subscription-key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-20 15:30:00",
    "Content-Type": "application/json"
};

const body = {
    "mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "first_name": "John",
    "last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
};

fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
    `,
  },
  Python: {
    description: `
import requests

url = "https://devapi.paywise.co/account/account?version=2024-10-20&mobile_number=+18681234567&institution_name=PayWise&first_name=John&last_name=Doe&sender_first_name=Jane&sender_last_name=Smith"
headers = {
    "PW-subscription-key": "eed0d85c530c4b26a91d09b783d8fab3",
    "PW-origin-country": "TT",
    "PW-request-date": "2024-10-20 15:30:00"
}

params = {
    "version": "2024-10-20"
}

data = {
    "mobile_number": "+18681234567",
    "institution_name": "PayWise Institution",
    "first_name": "John",
    "last_name": "Doe",
    "sender_first_name": "Jane",
    "sender_last_name": "Smith"
}

response = requests.get(url, headers=headers, params=params, json=data)
print(response.json())
    `,
  },
};

// Response example
const responseExample = `{
  "status": "success",
  "code": 200,
  "message": "Registration request sent",
  "account_status": "available",
  "session_token": "abcd1234xyz"
}
#if there is an error, the response may look like:
{
  "status": "error",
  "code": 400,
  "message": "Invalid mobile number format"
}
`;

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
        <CodeExampleBox
          title="Response example"
          content={responseExample}
          showLanguageSelector={false}
        />
      </div>
    </div>
  );
};

export default Account;

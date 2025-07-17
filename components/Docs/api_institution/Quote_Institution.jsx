"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/quote?version=2024-10-20" 
    `,
  },
  Ruby: {
    description: `
require 'net/http'
    `,
  },
  PHP: {
    description: `
$curl = curl_init();
    `,
  },
  JavaScript: {
    description: `
const url = "https://devapi.paywise.co/quote?version=2024-10-20";
    `,
  },
  Python: {
    description: `
import requests
    `,
  },
};

// Response example
const responseExample = `{
  "status": "success",
  "code": 200,
  "message": "Quote generated successfully",
  "expire_date": "2025-02-15 12:30:00",
  "quote_id": "Q12345678901234567890",
  "rate": "6.7450",
  "quote_date": "2025-02-14 12:00:00",
  "amount_quoted": "1500.75"
}
#if there is an error, the response may look like:
{
  "status": "error",
  "code": 403,
  "message": "Error: Exceeds user limits.",
  "expire_date": "2025-02-15 12:30:00",
  "quote_id": "Q12345678901234567890"
}`;

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
        <CodeExampleBox
          title="Response example"
          content={responseExample}
          showLanguageSelector={false}
        />
      </div>
    </div>
  );
};

export default Quote_Institutions;

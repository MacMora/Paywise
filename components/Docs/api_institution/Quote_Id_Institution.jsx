"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/quote/{quote_id}?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/quote/{quote_id}?version=2024-10-20";
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
  "rate": "6.7450",
  "request_date": "2025-02-14",
  "quote_date": "2025-02-14 12:00:00",
  "amount_quoted": "1500.75",
  "expire_date": "2025-02-15 12:30:00"
}
#if there is an error, the response may look like:
{
  "status": "error",
  "code": 403,
  "message": "Error: Exceeds user limits."
}`;

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
        <CodeExampleBox
          title="Response example"
          content={responseExample}
          showLanguageSelector={false}
        />
      </div>
    </div>
  );
};

export default Quote_Id_Institutions;

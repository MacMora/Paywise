"use client";
import { useState } from "react";
import { useLanguage } from "../../LenguageContext";
import { Copy, Check } from "lucide-react";
import ParameterItem from "@/components/ParameterItem";

const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/payment/cancel?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/payment/cancel?version=2024-10-20";
    `,
  },
  Python: {
    description: `
import requests
    `,
  },
};

const Reques_Example = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [copiedRequest, setCopiedRequest] = useState(false);
  const [copiedResponse, setCopiedResponse] = useState(false);

  const handleCopy = async (text, setCopied) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const responseExample = `{
    "status": "success",
    "code": 200,
    "message": "Payment successful",
    "payment_details": {
        "id": "PW-1234567890",
        "transaction_id": "ORD-987654321",
        "status": "completed",
        "cancellation_time": null
    }
}
#if there is an error, the response may look like:
{
    "status": "error",
    "code": 404,
    "message": "Payment request not found"
}`;

  return (
    <div>
      <div className="bg-[#699EC7] rounded my-8 md:mb-4">
        <div className="bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t">
          <div className="w-2/4 py-2 sm:px-2">
            <h2 className="text-sm text-[#F2F2F2]">Request example:</h2>
          </div>
          <div className="w-2/6 flex justify-center items-center gap-2">
            <select
              className="bg-[#699EC7] rounded text-[#F2F2F2] p-1"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Object.keys(languageData).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <button
              onClick={() =>
                handleCopy(
                  languageData[selectedLanguage]?.description,
                  setCopiedRequest
                )
              }
              className="p-1 hover:bg-[#699EC7] rounded transition-colors duration-200"
            >
              {copiedRequest ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-[#F2F2F2]" />
              )}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]">
          <pre>{languageData[selectedLanguage]?.description}</pre>
        </div>
      </div>
      <div className="bg-[#699EC7] rounded my-8 md:mb-4">
        <div className="bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t">
          <div className="w-2/4 py-2 sm:px-2">
            <h2 className="text-sm text-[#F2F2F2]">Response example:</h2>
          </div>
          <div className="w-2/6 flex justify-center items-center gap-2">
            <select
              className="bg-[#699EC7] rounded text-[#F2F2F2] p-1"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Object.keys(languageData).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleCopy(responseExample, setCopiedResponse)}
              className="p-1 hover:bg-[#699EC7] rounded transition-colors duration-200"
            >
              {copiedResponse ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-[#F2F2F2]" />
              )}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]">
          <pre>{responseExample}</pre>
        </div>
      </div>
    </div>
  );
};

// Parámetros de la API Cancel Merchant
const cancelMerchantParameters = [
  // Request Parameters
  {
    key: "version",
    label: "version",
    type: "string",
    description: "For version control. Format = \"YYYY-MM-DD\". Defaults to the latest version",
    requirement: "mandatory",
    length: "10",
    section: "Request Parameters",
  },
  // Body Parameters
  {
    key: "api_key",
    label: "api_key",
    type: "string",
    description: "Merchant's API key",
    requirement: "Mandatory",
    length: "30",
    section: "Body Parameters",
  },
  {
    key: "payment_details_id",
    label: "payment_details_id",
    type: "string",
    description: "Unique PW transaction receipt.",
    requirement: "Mandatory",
    length: "1 - 50",
    section: "Body Parameters",
  },
  {
    key: "reason",
    label: "reason",
    type: "string",
    description: "Reason for canceling the transaction",
    requirement: "Optional",
    length: "1 - 255",
    section: "Body Parameters",
  },
  // Response Parameters
  {
    key: "status",
    label: "status",
    type: "string",
    description: "Returns the API call status. Enum = { \"success\", \"error\" }",
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
    description: "Message is conditional. Messages will show based on condition applied. Added one example only. Example: \"Payment successful\".",
    requirement: "Mandatory",
    length: "255",
    section: "Response Parameters",
  },
  {
    key: "payment_details",
    label: "payment_details",
    type: "object",
    description: "A JSON object that contains payload about successfully beginning the payment process.",
    requirement: "Conditional",
    section: "Response Parameters",
    children: [
      {
        key: "id",
        label: "id",
        type: "string",
        description: "Unique PW transaction receipt.",
        requirement: "Conditional",
        length: "1 - 255",
      },
      {
        key: "transaction_id",
        label: "transaction_id",
        type: "string",
        description: "Merchant's unique transaction id/ order number",
        requirement: "Conditional",
        length: "1 - 50",
      },
      {
        key: "status_details",
        label: "status",
        type: "string",
        description: "Payment status. Enum = pending, completed, failed, rejected",
        requirement: "Conditional",
        length: "6 - 9",
      },
      {
        key: "cancellation_time",
        label: "cancellation_time",
        type: "string",
        description: "The cancellation time for the payment request. Format = YYYY-MM-DD HH:MI:SS",
        requirement: "Conditional",
        length: "11 - 19",
      },
    ],
  },
];

const Cancel_Merchant = () => {
  // Estado para controlar la visibilidad del div que contiene el <p>
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="cancel_merchant"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">cancel</span>
        <p className="py-5 text-sm">
          Empowers merchants to cancel a pending transaction before it is
          completed. This feature is ideal for scenarios where a customer
          changes their mind, an error occurs in the payment request, or any
          other situation that warrants canceling the payment. Merchants must
          provide their API key and the unique transaction receipt
          (payment_details_id) to execute the cancellation. An optional reason
          parameter can also be included for tracking purposes. Upon successful
          cancellation, the endpoint returns the updated transaction status and
          the timestamp of the cancellation.
        </p>

        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {cancelMerchantParameters
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
        <Reques_Example />
      </div>
    </div>
  );
};

export default Cancel_Merchant;

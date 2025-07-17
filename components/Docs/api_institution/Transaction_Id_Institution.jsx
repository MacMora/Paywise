"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/transaction/{transaction_id}?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/transaction/{transaction_id}?version=2024-10-20";
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
  "message": "Transaction completed successfully",
  "transaction": {
      "id": "TXN-123456789",
      "type": "credit",
      "amount": "1500.00",
      "fees": {
          "total": "50.00",
          "convenience": "10.00",
          "sender_pays": "20.00",
          "recipient_pays": "20.00"
      },
      "sender_full_name": "John Doe",
      "recipient_full_name": "Jane Smith",
      "cleared_date": "2025-02-14",
      "posted_date": "2025-02-13",
      "description": "Payment for services rendered",
      "status": "completed",
      "source": "wallet",
      "transaction_method": "bank_transfer",
      "parent_mobile_number": "+18681234567",
      "metadata": "Urgent transaction",
      "quote_id": "QUOTE-987654321",
      "institution_receipt_id": "PW-6543210987"
  }
}
#if there is an error, the response may look like:
{
  "status": "error",
  "code": 400,
  "message": "Transaction failed due to insufficient funds",
  "transaction": {
      "id": "TXN-987654321",
      "type": "debit",
      "amount": "500.00",
      "sender_full_name": "Alice Johnson",
      "recipient_full_name": "Bob Williams",
      "cleared_date": "2025-02-14",
      "posted_date": "2025-02-14",
      "description": "Subscription payment",
      "status": "failed",
      "source": "wallet",
      "transaction_method": "wallet_transfer"
  }
}`;

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
        <CodeExampleBox
          title="Response example"
          content={responseExample}
          showLanguageSelector={false}
        />
      </div>
    </div>
  );
};

export default Transaction_Id_Institutions;

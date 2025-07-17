"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/payment/status?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/payment/status?version=2024-10-20";
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
  "message": "Payment successful",
  "payment_details": {
      "id": "PW-1234567890",
      "transaction_id": "ORD-987654321",
      "amount": "150.00",
      "tax": "10.00",
      "fees": {
          "total": "5.00",
          "card_processing": "2.00",
          "platform_processing": "1.50",
          "agent_processing": "0.50",
          "payer_pays": "3.00",
          "payee_pays": "2.00"
      },
      "currency": "TTD",
      "payments_status": {
          "paid": "100.00",
          "remaining": "50.00"
      },
      "timestamps": {
          "created_time": "2024-10-23 12:00:00",
          "updated_time": "2024-10-23 12:05:00",
          "expire_time": "2024-10-23 12:30:00"
      },
      "payers": [
          {
              "mobile_number": "1234567890",
              "amount": "100.00",
              "fee": "3.00",
              "tip": "2.00",
              "payment_method": "card",
              "status": "completed"
          }
      ],
      "payees": [
          {
              "mobile_number": "0987654321",
              "amount": "97.00",
              "fee": "2.00",
              "payment_date": "2024-10-23 12:10:00",
              "delay_days": 2,
              "status": "pending",
              "payments_status": {
                  "paid": "50.00",
                  "remaining": "47.00"
              }
          }
      ]
  },
  "fraud_check_status": "passed"
}
#if there is an error, the response may look like:
{
  "status": "error",
  "code": 404,
  "message": "Payment request not found"
}`;

// Parameters
const statusMerchantParameters = [
  // Request Parameters
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
    key: "api_key",
    label: "api_key",
    type: "string",
    description:
      "PayWise business (Merchant) account api key. Found in your profile.",
    requirement: "Mandatory",
    length: "30",
    section: "Request Parameters",
  },
  {
    key: "payment_details_id",
    label: "payment_details_id",
    type: "string",
    description: "Unique PW transaction receipt id.",
    requirement: "Mandatory",
    length: "1 - 50",
    section: "Request Parameters",
  },
  // Response Parameters
  {
    key: "status",
    label: "status",
    type: "string",
    description: 'Returns the API call status. Enum = { "success", "error" }',
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
      'Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Payment successful"',
    requirement: "Mandatory",
    length: "255",
    section: "Response Parameters",
  },
  {
    key: "payment_details",
    label: "payment_details",
    type: "object",
    description:
      "A JSON object that contains payload about successfully beginning the payment process.",
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
        key: "amount",
        label: "amount",
        type: "string",
        description: "Total transaction amount including tax and fees.",
        requirement: "Conditional",
        length: "1 - 255",
      },
      {
        key: "tax",
        label: "tax",
        type: "string",
        description: "Any amount that represents the tax paid",
        requirement: "Optional",
        length: "7, 2",
      },
      {
        key: "fees",
        label: "fees",
        type: "object",
        description:
          "JSON object breakdown of fees (card processing fees, percentage covered by payer/ merchant)",
        requirement: "Conditional",
        section: "Response Parameters",
        children: [
          {
            key: "total_fees",
            label: "total",
            type: "string",
            description: "Total amount of fees for the transaction",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "card_processing_fees",
            label: "card_processing",
            type: "string",
            description: "Fees associated with processing a card",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "platform_processing_fees",
            label: "platform_processing",
            type: "string",
            description:
              "Fees associated with processing, including optional fraud checks on via the PW platform",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "agent_processing_fees",
            label: "agent_processing",
            type: "string",
            description: "Fees associated with processing a transaction",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "payer_pays_fees",
            label: "payer_pays",
            type: "string",
            description: "Total fee covered by the Payers",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "payee_pays_fees",
            label: "payee_pays",
            type: "string",
            description: "Total fee covered by the Payees",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "merchant_pays_fees",
            label: "merchant_pays",
            type: "string",
            description: "Total fee covered by the Merchant",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "convenience_fees",
            label: "convenience",
            type: "string",
            description: "Additional fees charged by the Merchant",
            requirement: "Optional",
            length: "7, 2",
          },
        ],
      },
      {
        key: "currency",
        label: "currency",
        type: "string",
        description: 'Currency in ISO 4217 format. Example "TTD"',
        requirement: "Conditional",
        length: "3",
      },
      {
        key: "payments_status",
        label: "payments_status",
        type: "object",
        description: "JSON object defining any partial payments processed",
        requirement: "Optional",
        section: "Response Parameters",
        children: [
          {
            key: "paid_payment",
            label: "paid",
            type: "string",
            description: "Amount paid so far via PayWise in TTD",
            requirement: "Conditional",
            length: "8, 2",
          },
          {
            key: "remaining_payment",
            label: "remaining",
            type: "string",
            description: "Amount remaining to be paid in TTD",
            requirement: "Conditional",
            length: "8, 2",
          },
          {
            key: "metadata_payment",
            label: "metadata",
            type: "object",
            description:
              "Key-value pairs for additional partial payment information",
            requirement: "Optional",
          },
        ],
      },
      {
        key: "timestamps",
        label: "timestamps",
        type: "string",
        description: "JSON object of all timestamps",
        requirement: "Conditional",
        length: "10 - 19",
        section: "Response Parameters",
        children: [
          {
            key: "created_time_timestamps",
            label: "created_time",
            type: "string",
            description:
              "The creation time for the payment request. Format = YYYY-MM-DD HH:MI:SS",
            requirement: "Conditional",
            length: "11 - 19",
          },
          {
            key: "updated_time_timestamps",
            label: "updated_time",
            type: "string",
            description:
              "The last status update timestamp. Format = YYYY-MM-DD HH:MI:SS",
            requirement: "Conditional",
            length: "11 - 19",
          },
          {
            key: "expire_time_timestamps",
            label: "expire_time",
            type: "string",
            description:
              "The expiration time for the payment request (for QR codes and payment links). This is at the parent transaction level Format = YYYY-MM-DD HH:MI:SS",
            requirement: "Conditional",
            length: "11 - 19",
          },
        ],
      },
      {
        key: "payers",
        label: "payers",
        type: "object",
        description: "JSON array of payers contributing to the transaction.",
        requirement: "Optional",
        section: "Response Parameters",
        children: [
          {
            key: "mobile_number_payers",
            label: "mobile_number",
            type: "string",
            description: "Mobile number of the payer.",
            requirement: "Conditional",
            length: "10 - 18",
          },
          {
            key: "amount_payers",
            label: "amount",
            type: "string",
            description:
              "Total amount contributed by the payer, including tip.",
            requirement: "Conditional",
            length: "8, 2",
          },
          {
            key: "fee_payers",
            label: "fee",
            type: "string",
            description:
              "Wherever applicable, total fee amount paid by the payer.",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "tip_payers",
            label: "tip",
            type: "string",
            description: "Tip amount paid by the payer, if applicable",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "payment_method_payers",
            label: "payment_method",
            type: "string",
            description:
              'Method used by the payer. Enum = { "card", "credit", "debit", "wallet", "qr_code" }.',
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "status_payers",
            label: "status",
            type: "string",
            description:
              "Payment status. Enum = pending, completed, failed, declined, expired",
            requirement: "Conditional",
            length: "6 - 9",
          },
          {
            key: "expire_time_payers",
            label: "expire_time",
            type: "string",
            description:
              "The expiration time for the payment to complete depending on the particular payment method/ channel (for example Wallet, QR codes and payment links) for a particular Payer. Format = YYYY-MM-DD HH:MI:SS",
            requirement: "Conditional",
            length: "11 - 19",
          },
          {
            key: "url_payers",
            label: "url",
            type: "string",
            description: "Hosted URL for the payer to pay",
            requirement: "Conditional",
            length: "1 - 255",
          },
          {
            key: "expire_date_time_payers",
            label: "expire_date_time",
            type: "string",
            description: "Datetime, the link will expire",
            requirement: "Conditional",
            length: "19",
          },
          {
            key: "metadata_payers",
            label: "metadata",
            type: "object",
            description:
              "Key-value pairs for additional payer information (if applicable).",
            requirement: "Optional",
          },
        ],
      },
      {
        key: "payees",
        label: "payees",
        type: "object",
        description: "JSON array of payees receiving the payment.",
        requirement: "Optional",
        section: "Response Parameters",
        children: [
          {
            key: "mobile_number_payees",
            label: "mobile_number",
            type: "string",
            description: "Mobile number of the payee.",
            requirement: "Conditional",
            length: "12",
          },
          {
            key: "amount_payees",
            label: "amount",
            type: "string",
            description: "Total amount allocated to the payee.",
            requirement: "Conditional",
            length: "8, 2",
          },
          {
            key: "fee_payees",
            label: "fee",
            type: "string",
            description:
              "Wherever applicable, total fee amount paid by the payee.",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "payment_date_payees",
            label: "payment_date",
            type: "string",
            description: "Date and time payment made/ will be paid",
            requirement: "Conditional",
            length: "11 - 19",
          },
          {
            key: "delay_days_payees",
            label: "delay_days",
            type: "integer",
            description:
              "Number of days before the payment is disbursed to the payee.",
            requirement: "Optional",
            length: "2",
          },
          {
            key: "status_payees",
            label: "status",
            type: "string",
            description:
              "Payment status. Enum = pending, completed, failed, rejected",
            requirement: "Conditional",
            length: "6 - 9",
          },
          {
            key: "payments_status_payees",
            label: "payments_status",
            type: "object",
            description:
              "JSON object defining any partial payments processed to this Payee",
            requirement: "Optional",
            section: "Response Parameters",
            children: [
              {
                key: "paid_payments_status_payees",
                label: "paid",
                type: "string",
                description:
                  "Amount paid so far via PayWise in TTD to this Payee",
                requirement: "Conditional",
                length: "8, 2",
              },
              {
                key: "remaining_payments_status_payees",
                label: "remaining",
                type: "string",
                description:
                  "Amount remaining to be paid, in TTD to this Payee",
                requirement: "Conditional",
                length: "8, 2",
              },
              {
                key: "metadata_payments_status_payees",
                label: "metadata",
                type: "object",
                description:
                  "Key-value pairs for additional partial payment information to this Payee",
                requirement: "Optional",
              },
            ],
          },
          {
            key: "metadata_payees",
            label: "metadata",
            type: "object",
            description:
              "Key-value pairs for additional payee information (if applicable).",
            requirement: "Optional",
          },
        ],
      },
    ],
  },
  {
    key: "fraud_check_status",
    label: "fraud_check_status",
    type: "string",
    description:
      'Outcome of the fraud detection check. Enum = { "passed", "failed", "skipped" }.',
    requirement: "Conditional",
    length: "6 - 8",
    section: "Response Parameters",
  },
];

const Status_Merchant = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div
      id="status_merchant"
      className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
    >
      <div className="lg:w-2/5 w-full">
        <span className="py-5 font-semibold">status</span>
        <p className="py-5 text-sm">
          Provides real-time updates on the status of a specific transaction
          processed through PayWise. Merchants can use this endpoint to check
          whether a transaction is pending, completed, canceled, or failed. It
          also delivers detailed transaction metadata, including payer and payee
          information, timestamps, fees, and fraud detection outcomes, offering
          full transparency and control over the payment lifecycle.
        </p>
        {sections.map((section) => (
          <div key={section} className="border-b border-[#6FA43A] py-4">
            <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
            <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
              {statusMerchantParameters
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

export default Status_Merchant;

"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";

// Language data
const languageData = {
  Bash: {
    description: `
curl -X GET "https://devapi.paywise.co/payment/request?version=2024-10-20" 
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
const url = "https://devapi.paywise.co/payment/request?version=2024-10-20";
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
  "message": "Payment request successful",
  "payment_details": {
      "id": "PW123456789",
      "transaction_id": "ORD987654321",
      "amount": "500.00",
      "fees": {
          "total": "10.00",
          "card_processing": "5.00",
          "crypto_processing": "0.00",
          "platform_processing": "3.00",
          "agent_processing": "2.00",
          "convenience": "0.00"
      },
      "payers": [
          {
              "mobile_number": "+18681234567",
              "amount": "500.00",
              "fee": "10.00",
              "tip": "5.00",
              "status": "completed",
              "metadata": {
                  "customer_type": "VIP",
                  "payment_method": "credit_card"
              }
          }
      ],
      "payees": [
          {
              "mobile_number": "+18689876543",
              "amount": "490.00",
              "fee": "10.00",
              "delay_days": 1,
              "metadata": {
                  "merchant_id": "M12345"
              },
              "qr_code": {
                  "data": "QR123456789",
                  "url": "https://paywise.co/payment/QR123456789",
                  "expire_time": "2024-10-23 15:30:00"
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
const requestMerchantParameters = [
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
  // Body Parameters
  {
    key: "api_key",
    label: "api_key",
    type: "string",
    description:
      "PayWise business (Merchant) account api key. Found in your profile.",
    requirement: "Mandatory",
    length: "30",
    section: "Body Parameters",
  },
  {
    key: "transaction_request",
    label: "transaction_request",
    type: "object",
    description:
      "A JSON object that contains information about the Merchant's transaction request",
    requirement: "Mandatory",
    section: "Body Parameters",
    children: [
      {
        key: "id",
        label: "id",
        type: "string",
        description: "Merchant's unique transaction id/ order number",
        requirement: "Mandatory",
        length: "1 - 50",
      },
      {
        key: "amount",
        label: "amount",
        type: "string",
        description:
          "Total amount in transaction payable to Merchant in TTD with precision of 2 decimal places.",
        requirement: "Mandatory",
        length: "8, 2",
      },
      {
        key: "partial_payments",
        label: "partial_payments",
        type: "object",
        description:
          "JSON Object defining details about any partial payment. Merchants decide if partial payments are allowed if they set this object. Allows combining on-platform (PayWise) and off-platform (e.g., cash) payments. Supported use cases: I. Customer pays a fixed amount off-platform with an alternative source e.g. cash. AND then uses PayWise to fund the amount to be processed on the platform. II. Customer uses PayWise to fund the amount AND then uses an off-platform source to fund the rest of amount.",
        requirement: "Optional",
        section: "Body Parameters",
        children: [
          {
            key: "amount_partial",
            label: "amount",
            type: "string",
            description:
              "Total amount in transaction payable to Merchant (or Payees) in TTD with precision of 2 decimal places on the PayWise platform. This amount includes fees + taxes + tips + convenience charges.",
            requirement: "Conditional",
            length: "8, 2",
          },
          {
            key: "metadata_partial",
            label: "metadata",
            type: "object",
            description:
              'This object captures metadata about the partial payment as key-value pairs if the information does not fit, example description --> "<some description>" or notes --> "<some notes>"',
            requirement: "Optional",
          },
        ],
      },
      {
        key: "fees_transaction",
        label: "fees",
        type: "object",
        description:
          "This object captures information about the payment fee structure",
        requirement: "Optional",
        section: "Body Parameters",
        children: [
          {
            key: "pays_fees",
            label: "pays_fees",
            type: "integer",
            description:
              'Determines who pays all of the payment fees. Enum = {"1", "2", "3"}. 1 = first object in Payee array {i.e. the Merchant (default)}, 2 = Payers {i.e. Merchant\'s customer(s)}, 3 = both {the Merchant and their customers split the fees}',
            requirement: "Conditional",
            length: "1",
          },
          {
            key: "payer_covers",
            label: "payer_covers",
            type: "integer",
            description:
              'Percent payable by Payer. Example 40 = Each Payer will cover 40% of the fee. Payees will cover the rest (i.e. 60%). This field only applies if "transaction_request.fees.pays_fees = 3" is used, otherwise it is ignored. Payees.fees_covered must respect these ratios. Default is 50%. The merchant will be the first object in the Payee array.',
            requirement: "Conditional",
            length: "3",
          },
        ],
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
        key: "tip",
        label: "tip",
        type: "string",
        description:
          "An amount that represents the total tip paid. Tip must be less than 50% of the amount.",
        requirement: "Optional",
        length: "7, 2",
      },
      {
        key: "convenience",
        label: "convenience",
        type: "string",
        description: "Additional Merchant fee charged to payer(s)",
        requirement: "Optional",
        length: "7, 2",
      },
      {
        key: "currency",
        label: "currency",
        type: "string",
        description: 'Currency in ISO 4217 format. Example "TTD"',
        requirement: "Mandatory",
        length: "3",
      },
      {
        key: "description",
        label: "description",
        type: "string",
        description:
          "This field is used to provide additional context or details about the payment request. It can include a summary of the transaction, such as the goods or services being purchased, to make it clear to both the merchant and payer what the payment is for.",
        requirement: "Mandatory",
        length: "1 - 255",
      },
      {
        key: "metadata",
        label: "metadata",
        type: "object",
        description:
          "This object allows the merchant to pass additional information as key-value pairs if the information does not fit, example product data",
        requirement: "Optional",
      },
      {
        key: "payees",
        label: "payees",
        type: "object",
        description:
          "This supports splitting payments to multiple payees. The first Payee is always the Merchant. JSON object that is an array to define how the payment disburses to different accounts. This is optional. If this object is not set, the disbursement will be tied to the Merchant's account based on the API key. A merchant can explicitly decide which member within the array will cover the fees as well. The sum of the total amount across the array must add up to the transaction_details.partial_payments.amount or transaction_details.amount (which already includes fees, taxes & tips). The merchant account must be one of the members in the array. Supports splitting payments to multiple accounts. Includes options for delayed payouts and per-payee metadata.",
        requirement: "Optional",
        section: "Body Parameters",
        children: [
          {
            key: "mobile_number_payee",
            label: "mobile_number",
            type: "string",
            description:
              'Payee/ destination account. The PW account that the funds will be deposited within. Full mobile number of account holder. Example: "+18681234567".',
            requirement: "Conditional",
            length: "12",
          },
          {
            key: "amount_payee",
            label: "amount",
            type: "string",
            description:
              "Amount sent to Payee/ destination account by the payer in TTD with precision of 2 decimal places - it ignores fees deductable.",
            requirement: "Conditional",
            length: "8, 2",
          },
          {
            key: "fees_covered_payee",
            label: "fees_covered",
            type: "number",
            description:
              'Percent of payment fees payable by a Payee. N.B. This field will only be applicable if the "transaction_request.fees.pays_fees = 3" AND all "payees.fees_covered" values are set and aggregate to 100, otherwise, this field is ignored. Example: If for this API POST request, "transaction_request.fees.fees.pays_fees = 3", "transaction_request.fees.payer_covers = 80" Suppose the total payment fees calculated across all relevant payment methods is $100, and there are two (2) Payees: the first payee has "transaction_request.payees.fees_covered = 40" and the second has "transaction_request.payees.fees_covered = 60". This means that the 2 payees will pay a total of 20$ towards the 100$ fee. The first Payee will cover 40% of the percentage of the fee that and would have 8$ deducted from the funds they receive in their PayWise account, the 2nd Payee will pay 12$',
            requirement: "Conditional",
            length: "3",
          },
          {
            key: "delay_days_payee",
            label: "delay_days",
            type: "number",
            description:
              "Number of days to delay sending the funds. Defaults to 0. Max is 30 days",
            requirement: "Optional",
            length: "2",
          },
          {
            key: "metadata_payee",
            label: "metadata",
            type: "object",
            description:
              'This object captures metadata for a Payee as key-value pairs if the information does not fit, example description --> "<some description>" or notes --> "<some notes>"',
            requirement: "Optional",
          },
        ],
      },
    ],
  },
  {
    key: "url",
    label: "url",
    type: "object",
    description: "A JSON object that contains information about the URLs",
    requirement: "Optional",
    section: "Body Parameters",
    children: [
      {
        key: "success",
        label: "success",
        type: "string",
        description:
          "This is used to redirect to merchant domain after a successful payment is made.",
        requirement: "Optional",
        length: "1 - 255",
      },
      {
        key: "notify",
        label: "notify",
        type: "string",
        description:
          "This is used to notify the merchant about the order status after a payment is made. The Merchant can provide their customized webhook address to receive asynchronous payment status updates from here.",
        requirement: "Optional",
        length: "1 - 255",
      },
      {
        key: "error",
        label: "error",
        type: "string",
        description:
          "This is used to redirect to an error handling page. This could happen due to insufficient funds, declined transactions, or connectivity issues. Best Practice: Ensure that the error URL provides clear instructions or options for the payer, such as retrying the payment, contacting customer support, or checking the transaction status.",
        requirement: "Optional",
        length: "1 - 255",
      },
      {
        key: "callback",
        label: "callback",
        type: "string",
        description:
          "Merchants can use this to receive a synchronous real-time updates on the transaction's status.",
        requirement: "Optional",
        length: "1 - 255",
      },
    ],
  },
  {
    key: "payers",
    label: "payers",
    type: "object",
    description:
      "This supports receiving payments from multiple payers. JSON object to validate up to 20 payers and dynamically calculate amounts based on split payment preferences. A merchant can support spliting the bill, the array will include fees as well. The sum of the total amount across the array must add up to the transaction_details.partial_payments.amount or transaction_details.amount (which already includes fees, taxes & tips)",
    requirement: "Mandatory",
    section: "Body Parameters",
    children: [
      {
        key: "mobile_number_payers",
        label: "mobile_number",
        type: "string",
        description:
          'Full number of the Payer. Example: "+18681234567". Payer may or may not be a PW account holder.',
        requirement: "Mandatory",
        length: "10 - 18",
      },
      {
        key: "first_name",
        label: "first_name",
        type: "string",
        description: "Payer's first name",
        requirement: "Mandatory",
        length: "1 - 50",
      },
      {
        key: "last_name",
        label: "last_name",
        type: "string",
        description: "Payer's last name",
        requirement: "Mandatory",
        length: "1 - 50",
      },
      {
        key: "email",
        label: "email",
        type: "string",
        description: "Email address",
        requirement: "Optional",
        length: "1 - 150",
      },
      {
        key: "payment_channel",
        label: "payment_channel",
        type: "string",
        description:
          "Payer's channel field identifies whether the payment is being made through an agent, a direct QR code scan, or online via a payment link. Enum = agent, direct_qr, payment_link",
        requirement: "Conditional",
        length: "5 - 12",
      },
      {
        key: "payment_method",
        label: "payment_method",
        type: "string",
        description:
          "Payer's method of payment to Merchant. Enum = card, credit, debit, wallet, qr_code, crypto",
        requirement: "Mandatory",
        length: "5 - 20",
      },
      {
        key: "amount_payers",
        label: "amount",
        type: "string",
        description:
          "Amount paid by Payer/ source by the payer in TTD with precision of 2 decimal places - it ignores fees deductable.",
        requirement: "Mandatory",
        length: "8, 2",
      },
      {
        key: "tip_payers",
        label: "tip",
        type: "string",
        description:
          "An amount that represents the tip paid. Tip must be less than 50% of the amount.",
        requirement: "Optional",
        length: "7, 2",
      },
      /*{
        key: "fees_covered_payers",
        label: "fees_covered",
        type: "integer",
        description: "Percent of the payment fees payable by a Payee. Example: \"40\" means that this Payee will cover 40% of the fees component. This field only applies if \"transaction _details.fees.pays_fees = 3\" is used, otherwise it is ignored. If \"pays_fees = 3\" AND this key/ value is not used by all Payees in the array, the merchant will pay the proportion of the fees defined by \"payee_covers\".",
        requirement: "Conditional",
      },*/
      {
        key: "metadata_payers",
        label: "metadata",
        type: "object",
        description:
          'This object captures metadata for a Payer as key-value pairs if the information does not fit, example description --> "<some description>" or notes --> "<some notes>"',
        requirement: "Optional",
      },
      {
        key: "crypto_wallet_payers",
        label: "crypto_wallet",
        type: "String",
        description: "Source address for the crypto payments",
        requirement: "Conditional",
        length: "1 - 150",
      },
      {
        key: "qr_code",
        label: "qr_code",
        type: "object",
        description: "JSON object capturing the QR code data for this payer.",
        requirement: "Optional",
        section: "Body Parameters",
        children: [
          {
            key: "expire_date_qr",
            label: "expire_date",
            type: "string",
            description:
              "Timestamp of when the code will expire. Format = YYYY-MM-DD HH:MI:SS",
            requirement: "Optional",
            length: "11 - 19",
          },
          {
            key: "type_qr",
            label: "type",
            type: "string",
            description: "QR code type. Enum = static, dynamic",
            requirement: "Optional",
            length: "6 - 7",
          },
          {
            key: "format_qr",
            label: "format",
            type: "string",
            description:
              'The format the merchant wants it returned to them. Default is "url". Enum = data, url',
            requirement: "Optional",
            length: "3 - 4",
          },
        ],
      },
    ],
  },
  {
    key: "fraud_check",
    label: "fraud_check",
    type: "boolean",
    description:
      "Indicate if the payment should invoke fraud detection via a third-party system (e.g., MetaMap). Enum = 0, 1 Optional fraud detection adds an additional security layer.",
    requirement: "Optional",
    length: "1",
    section: "Body Parameters",
  },
  // POST Callback URL Parameters
  {
    key: "authorisation_token_callback",
    label: "authorisation_token",
    type: "string",
    description:
      "PW shares this token in the merchant's profile. Merchants are strongly encouraged to verify this header for all incoming POST calls.",
    requirement: "Mandatory",
    length: "20 - 40",
    section: "POST Callback URL",
  },
  // POST Notify URL Parameters
  {
    key: "authorisation_token_notify",
    label: "authorisation_token",
    type: "string",
    description:
      "PW shares this token in the merchant's profile. Merchants are strongly encouraged to verify this header for all incoming POST calls.",
    requirement: "Mandatory",
    length: "20 - 40",
    section: "POST Notify URL",
  },
  // Response Parameters
  {
    key: "status_request",
    label: "status",
    type: "string",
    description: 'Returns the API call status. Enum = { "success", "error" }.',
    requirement: "Mandatory",
    length: "10",
    section: "Response Parameters",
  },
  {
    key: "code_request",
    label: "code",
    type: "integer",
    description: "HTTP return code.",
    requirement: "Mandatory",
    length: "3",
    section: "Response Parameters",
  },
  {
    key: "message_request",
    label: "message",
    type: "string",
    description:
      'Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Payment request successful"',
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
        key: "id_response",
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
        key: "amount_response",
        label: "amount",
        type: "string",
        description:
          "Total amonut of the transaction including fees, tax, and tip",
        requirement: "Conditional",
        length: "8, 2",
      },
      {
        key: "fees_response",
        label: "fees",
        type: "object",
        description:
          "Total amonut of the transaction including fees, tax, and tip",
        requirement: "Conditional",
        section: "Response Parameters",
        children: [
          {
            key: "total_response",
            label: "total",
            type: "string",
            description: "Total amount of for the transaction",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "card_processing_response",
            label: "card_processing",
            type: "string",
            description: "Fees associated with processing cards",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "crypto_processing_response",
            label: "crypto_processing",
            type: "string",
            description: "Fees associated with processing crypto payments",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "platform_processing_response",
            label: "platform_processing",
            type: "string",
            description:
              "Fees associated with processing, including wallet-to-wallet optional fraud checks on via the PW platform",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "agent_processing_response",
            label: "agent_processing",
            type: "string",
            description: "Fees associated with processing a transaction",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "convenience_response",
            label: "convenience",
            type: "string",
            description: "Additional fees charged by the Merchant",
            requirement: "Optional",
            length: "7, 2",
          },
        ],
      },
      {
        key: "payers_response",
        label: "payers",
        type: "object",
        description: "JSON array of payers contributing to the transaction.",
        requirement: "Conditional",
        section: "Response Parameters",
        children: [
          {
            key: "mobile_number_response_payers",
            label: "mobile_number",
            type: "string",
            description: "Payer's mobile number.",
            requirement: "Conditional",
            length: "12",
          },
          {
            key: "amount_response_payers",
            label: "amount",
            type: "string",
            description: "Total amount paid by the payer in TTD.",
            requirement: "Mandatory",
            length: "8, 2",
          },
          {
            key: "fee_response_payers",
            label: "fee",
            type: "string",
            description:
              "Wherever applicable, total fee amount paid by the payer.",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "tip_response_payers",
            label: "tip",
            type: "string",
            description: "Tip amount paid by the payer, if applicable",
            requirement: "Optional",
            length: "7, 2",
          },
          {
            key: "status_response_payers",
            label: "status",
            type: "string",
            description:
              "Payment request status for payer. Enum = pending, completed, failed, rejected",
            requirement: "Conditional",
            length: "6 - 9",
          },
          {
            key: "url_response_payers",
            label: "url",
            type: "string",
            description: "Hosted URL for the payer to pay",
            requirement: "Conditional",
            length: "1-255",
          },
          {
            key: "expire_date_time_response_payers",
            label: "expire_date_time",
            type: "string",
            description: "Datetime, the link will expire",
            requirement: "Conditional",
            length: "19",
          },
          {
            key: "metadata_response_payers",
            label: "metadata",
            type: "object",
            description: "Key-value pairs for additional payer details.",
            requirement: "Optional",
          },
        ],
      },
      {
        key: "payees_response",
        label: "payees",
        type: "object",
        description: "JSON array of payees receiving split payments.",
        requirement: "Conditional",
        section: "Response Parameters",
        children: [
          {
            key: "mobile_number_response_payees",
            label: "mobile_number",
            type: "string",
            description: "Payee's mobile number.",
            requirement: "Mandatory",
            length: "12",
          },
          {
            key: "amount_response_payees",
            label: "amount",
            type: "string",
            description: "Total amount received by the payee.",
            requirement: "Mandatory",
            length: "8, 2",
          },
          {
            key: "fee_response_payees",
            label: "fee",
            type: "string",
            description:
              "Wherever applicable, total fee amount paid by the payee.",
            requirement: "Conditional",
            length: "7, 2",
          },
          {
            key: "delay_days_response_payees",
            label: "delay_days",
            type: "integer",
            description:
              "Number of days before the payment is disbursed to the payee.",
            requirement: "Optional",
            length: "2",
          },
          {
            key: "metadata_response_payees",
            label: "metadata",
            type: "object",
            description: "Key-value pairs for additional payee details.",
            requirement: "Optional",
          },
        ],
      },
      {
        key: "qr_code_response",
        label: "qr_code",
        type: "object",
        description: "JSON object capturing the QR code data for this payer.",
        requirement: "Optional",
        length: "1 - 255",
        section: "Response Parameters",
        children: [
          {
            key: "data_response_qr",
            label: "data",
            type: "string",
            description: "QR code returned as data.",
            requirement: "Optional",
            length: "2 - 255",
          },
          {
            key: "url_response_qr",
            label: "url",
            type: "string",
            description: "Payment URL such as hosted QR codes or payment URL",
            requirement: "Conditional",
            length: "1 - 255",
          },
          {
            key: "expire_time_response_qr",
            label: "expire_time",
            type: "string",
            description:
              "The expiration time for the payment request (for example: Wallet, QR codes and payment links). Format = YYYY-MM-DD HH:MI:SS",
            requirement: "Conditional",
            length: "11 - 19",
          },
        ],
      },
    ],
  },
  {
    key: "fraud_check_status_response",
    label: "fraud_check_status",
    type: "string",
    description:
      'Outcome of the fraud detection check. Enum = { "passed", "failed", "skipped" }.',
    requirement: "Conditional",
    length: "6 - 8",
    section: "Response Parameters",
  },
];

const Request_Merchant = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "POST Callback URL",
    "POST Notify URL",
    "Response Parameters",
  ];

  return (
    <div>
      <div id="merchant_api" className="py-12 border-b-2">
        <h2 className="text-2xl lg:text-3xl font-semibold py-3">
          Merchant API
        </h2>
        <p className="py-5 text-sm">
          The Merchant API provides a set of endpoints designed to empower
          PayWise business account holders to process payments seamlessly. With
          these endpoints, merchants can accept payments via multiple channels,
          including the PayWise wallet, credit cards, or by generating QR codes
          for customers to complete transactions at any authorized PayWise agent
          location. Additionally, this API includes endpoints to check the
          status of transactions, giving merchants real-time insight into
          payment confirmations, processing statuses, and settlement updates.
          <br />
          <br />
          This API is ideal for businesses looking to offer flexible payment
          options to their customers, streamline payment processing, and keep
          track of transaction histories—all within a secure, centralized
          environment.
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
            <div className="md:basis-[43%] xl:basis-[20%] font-bold">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="basis-[50%] md:basis-[20%] font-bold">
              <a href="#request_merchant">/payment/request</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Enable merchants to request and process payments through
                PayWise, supporting multiple payment methods including wallets,
                credit or debit cards, and QR codes. This endpoint facilitates
                robust payment scenarios, such as partial payments, split
                payments, and metadata-rich transactions. With advanced features
                like custom fee management, payer/payee handling, and optional
                fraud detection, merchants can ensure a secure and seamless
                checkout experience for their customers.
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>POST</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%] font-bold">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="basis-[50%] md:basis-[20%] font-bold">
              <a href="#cancel_merchant">/payment/cancel</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Empowers merchants to cancel a pending transaction before it is
                completed. This feature is ideal for scenarios where a customer
                changes their mind, an error occurs in the payment request, or
                any other situation that warrants canceling the payment.
                Merchants must provide their API key and the unique transaction
                receipt (payment_details_id) to execute the cancellation. An
                optional reason parameter can also be included for tracking
                purposes. Upon successful cancellation, the endpoint returns the
                updated transaction status and the timestamp of the
                cancellation.
              </p>
            </div>
          </div>
          <div className="py-4 px-2 border flex flex-row max-xl:flex-wrap max-xl:gap-6 text-sm items-center">
            <div className="basis-[10%] text-base">
              <p>GET</p>
            </div>
            <div className="md:basis-[43%] xl:basis-[20%] font-bold">
              <p className="text-[#1e64a7] font-semibold">
                https://devapi.paywise.co
              </p>
            </div>
            <div className="basis-[50%] md:basis-[20%] font-bold">
              <a href="#status_merchant">/payment/status</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Provides real-time updates on the status of a specific
                transaction processed through PayWise. Merchants can use this
                endpoint to check whether a transaction is pending, completed,
                canceled, or failed. It also delivers detailed transaction
                metadata, including payer and payee information, timestamps,
                fees, and fraud detection outcomes, offering full transparency
                and control over the payment lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="request_merchant"
        className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
      >
        <div className="lg:w-2/5 w-full">
          <span className="py-5 font-semibold">request:</span>
          <p className="py-5 text-sm">
            Enable merchants to request and process payments through PayWise,
            supporting multiple payment methods including wallets, credit or
            debit cards, and QR codes. This endpoint facilitates robust payment
            scenarios, such as partial payments, split payments, and
            metadata-rich transactions. With advanced features like custom fee
            management, payer/payee handling, and optional fraud detection,
            merchants can ensure a secure and seamless checkout experience for
            their customers.
          </p>

          {sections.map((section) => (
            <div key={section} className="border-b border-[#6FA43A] py-4">
              <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
              <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
                {requestMerchantParameters
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

export default Request_Merchant;

"use client";
import { useState } from "react";
import { CodeExampleBox } from "@/components/LenguageContext";
import ParameterItem from "@/components/ParameterItem";
import { ResponseExampleBox } from '../../ResponseExampleBox';

// Language data
const languageData = {
  Bash: {
    description: `
API_KEY="acdb459a0f384b7c8fc2205e13c09036"
REQUEST_DATE=$(date +"%Y-%m-%d %H:%M:%S")
VERSION="2024-10-01"
IP_ADDRESS="192.0.2.1"

curl -X POST "https://devapi.paywise.co/transactions?version=$\{VERSION}" 
  -H "Content-Type: application/json" 
  -H "pw-origin-country: TT" 
  -H "pw-subscription-key: \${API_KEY}" 
  -H "pw-request-date: \${REQUEST_DATE}" 
  -H "pw-ip-address: \${IP_ADDRESS}" 
  -d @transaction_payload.json
    `,
  },
  Ruby: {
    description: `
require 'net/http'
require 'json'
require 'time'

uri = URI("https://devapi.paywise.co/transactions?version=2024-10-01")
headers = {
  "Content-Type" => "application/json",
  "pw-origin-country" => "TT",
  "pw-subscription-key" => "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date" => Time.now.strftime("%Y-%m-%d %H:%M:%S"),
  "pw-ip-address" => "192.0.2.1"
}

body = JSON.parse(File.read("transaction_payload.json"))

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri, headers)
request.body = body.to_json

response = http.request(request)
puts "Status: #{response.code}"
puts "Response: #{response.body}"
    `,
  },
  PHP: {
    description: `
<?php

$url = "https://devapi.paywise.co/transactions?version=2024-10-01";
$headers = [
    "Content-Type: application/json",
    "pw-origin-country: TT",
    "pw-subscription-key: acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date: " . date("Y-m-d H:i:s"),
    "pw-ip-address: 192.0.2.1"
];

$payload = file_get_contents("transaction_payload.json");

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$response = curl_exec($ch);
curl_close($ch);

echo "Response:\n$response\n";
    `,
  },
  JavaScript: {
    description: `
const axios = require('axios');
const fs = require('fs');

const headers = {
  "Content-Type": "application/json",
  "pw-origin-country": "TT",
  "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
  "pw-request-date": new Date().toISOString().slice(0, 19).replace("T", " "),
  "pw-ip-address": "192.0.2.1"
};

const body = JSON.parse(fs.readFileSync("transaction_payload.json", "utf8"));

axios.post("https://devapi.paywise.co/transactions?version=2024-10-01", body, { headers })
  .then(res => console.log("Response:", res.data))
  .catch(err => console.error("Error:", err.response?.data || err.message));
    `,
  },
  Python: {
    description: `
import requests
from datetime import datetime
import json

headers = {
    "Content-Type": "application/json",
    "pw-origin-country": "TT",
    "pw-subscription-key": "acdb459a0f384b7c8fc2205e13c09036",
    "pw-request-date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "pw-ip-address": "192.0.2.1"
}

with open("transaction_payload.json") as f:
    data = json.load(f)

url = "https://devapi.paywise.co/transactions?version=2024-10-01"
response = requests.post(url, json=data, headers=headers)
print("Status:", response.status_code)
print("Response:", response.text)
    `,
  },
};

const responseExamples = {
  successAmountDebited: {
    label: "Success - Amount Debited",
    description: "Successful transaction with amount debited.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Amount Debited",
  "institution_receipt_id": "<generated_receipt_id>"
}`
  },
  successAmountCredited: {
    label: "Success - Amount Credited",
    description: "Successful transaction with amount credited.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Amount Credited",
  "institution_receipt_id": "<generated_receipt_id>"
}`
  },
  successTransactionCompleted: {
    label: "Success - Transaction Completed",
    description: "Transaction completed successfully.",
    response: `{
  "status": "success",
  "code": 200,
  "message": "Transaction completed successfully",
  "institution_receipt_id": "<generated_receipt_id>"
}`
  },
  errorAmountRequired: {
    label: "Error - Amount Required",
    description: "Amount is required and must be a positive number with 2 decimal places.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "amount is required and must be a positive number with 2 decimal places"
}`
  },
  errorAuthorisationTokenRequired: {
    label: "Error - Authorisation Token Required",
    description: "Authorisation token is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "authorisation_token is required"
}`
  },
  errorConflictingFeeConfiguration: {
    label: "Error - Conflicting Fee Configuration",
    description: "Cannot post transaction — conflicting fee configuration or missing fee definition.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Cannot post transaction — conflicting fee configuration or missing fee definition"
}`
  },
  errorCreditPartyCurrencyRequired: {
    label: "Error - Credit Party Currency Required",
    description: "Credit party currency is required and must be ISO 4217.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "credit_party.currency is required and must be ISO 4217"
}`
  },
  errorCreditPartyMobileRequired: {
    label: "Error - Credit Party Mobile Required",
    description: "Credit party mobile number is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "credit_party.mobile_number is required"
}`
  },
  errorCurrencyRequired: {
    label: "Error - Currency Required",
    description: "Currency is required and must follow ISO 4217 format (e.g., \"TTD\", \"USD\").",
    response: `{
  "status": "error",
  "code": 400,
  "message": "currency is required and must follow ISO 4217 format (e.g., \"TTD\", \"USD\")"
}`
  },
  errorDebitPartyCurrencyRequired: {
    label: "Error - Debit Party Currency Required",
    description: "Debit party currency is required and must be ISO 4217.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "debit_party.currency is required and must be ISO 4217"
}`
  },
  errorDebitPartyMobileRequired: {
    label: "Error - Debit Party Mobile Required",
    description: "Debit party mobile number is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "debit_party.mobile_number is required"
}`
  },
  errorFeesTotalMismatch: {
    label: "Error - Fees Total Mismatch",
    description: "Fees total does not match sum of fee components.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "fees.total does not match sum of fee components"
}`
  },
  errorInternationalTransferType: {
    label: "Error - International Transfer Type",
    description: "For international transfers, transaction_type must be inttransfer.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "For international transfers, transaction_type must be inttransfer"
}`
  },
  errorInstitutionNameRequired: {
    label: "Error - Institution Name Required",
    description: "Institution name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`institution_name\` is required"
}`
  },
  errorInvalidJsonStructure: {
    label: "Error - Invalid JSON Structure",
    description: "JSON structure is invalid or malformed.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "JSON structure is invalid or malformed"
}`
  },
  errorInsufficientBalance: {
    label: "Error - Insufficient Balance",
    description: "Sender has insufficient balance.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Sender has insufficient balance"
}`
  },
  errorMobileNumberRequired: {
    label: "Error - Mobile Number Required",
    description: "Mobile number is required and must be in international format (e.g. +18681234567).",
    response: `{
  "status": "error",
  "code": 400,
  "message": "mobile_number is required and must be in international format (e.g. +18681234567)"
}`
  },
  errorQuoteIdExpired: {
    label: "Error - Quote ID Expired",
    description: "Quote ID is expired or already used.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`quote_id\` is expired or already used"
}`
  },
  errorQuoteIdRequired: {
    label: "Error - Quote ID Required",
    description: "Quote ID is required for this institution and missing in request.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "\`quote_id\` is required for this institution and missing in request"
}`
  },
  errorRecipientKycAddressLine1Required: {
    label: "Error - Recipient KYC Address Line 1 Required",
    description: "Recipient KYC address line 1 is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.address.address_line1 is required"
}`
  },
  errorRecipientKycCityRequired: {
    label: "Error - Recipient KYC City Required",
    description: "Recipient KYC city is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.address.city is required"
}`
  },
  errorRecipientKycCountryRequired: {
    label: "Error - Recipient KYC Country Required",
    description: "Recipient KYC country is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.address.country is required"
}`
  },
  errorRecipientKycDateOfBirthRequired: {
    label: "Error - Recipient KYC Date of Birth Required",
    description: "Recipient KYC date of birth is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.date_of_birth is required"
}`
  },
  errorRecipientKycIdDocumentExpireDateRequired: {
    label: "Error - Recipient KYC ID Document Expire Date Required",
    description: "Recipient KYC ID document expire date is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.id_document.expire_date is required"
}`
  },
  errorRecipientKycIdDocumentNumberRequired: {
    label: "Error - Recipient KYC ID Document Number Required",
    description: "Recipient KYC ID document number is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.id_document.number is required"
}`
  },
  errorRecipientKycIdDocumentTypeRequired: {
    label: "Error - Recipient KYC ID Document Type Required",
    description: "Recipient KYC ID document type is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.id_document.type is required"
}`
  },
  errorRecipientKycNationalityRequired: {
    label: "Error - Recipient KYC Nationality Required",
    description: "Recipient KYC nationality is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.nationality is required"
}`
  },
  errorRecipientKycFirstNameRequired: {
    label: "Error - Recipient KYC First Name Required",
    description: "Recipient KYC first name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.subject_name.first_name is required"
}`
  },
  errorRecipientKycLastNameRequired: {
    label: "Error - Recipient KYC Last Name Required",
    description: "Recipient KYC last name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "recipient_kyc.subject_name.last_name is required"
}`
  },
  errorRelationshipSenderRequired: {
    label: "Error - Relationship Sender Required",
    description: "Relationship sender must be one of: family, friend, spouse, etc.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "relationship_sender must be one of: family, friend, spouse, etc."
}`
  },
  errorSenderAmountRequired: {
    label: "Error - Sender Amount Required",
    description: "Sender amount is required and must be numeric.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_amount is required and must be numeric"
}`
  },
  errorSenderCurrencyRequired: {
    label: "Error - Sender Currency Required",
    description: "Sender currency is required and must be ISO 4217.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_currency is required and must be ISO 4217"
}`
  },
  errorSenderKycAddressLine1Required: {
    label: "Error - Sender KYC Address Line 1 Required",
    description: "Sender KYC address line 1 is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.address.address_line1 is required"
}`
  },
  errorSenderKycCityRequired: {
    label: "Error - Sender KYC City Required",
    description: "Sender KYC city is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.address.city is required"
}`
  },
  errorSenderKycCountryRequired: {
    label: "Error - Sender KYC Country Required",
    description: "Sender KYC country is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.address.country is required"
}`
  },
  errorSenderKycDateOfBirthRequired: {
    label: "Error - Sender KYC Date of Birth Required",
    description: "Sender KYC date of birth is required and must be in format YYYY-MM-DD.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.date_of_birth is required and must be in format YYYY-MM-DD"
}`
  },
  errorSenderKycIdDocumentExpireDateRequired: {
    label: "Error - Sender KYC ID Document Expire Date Required",
    description: "Sender KYC ID document expire date is required and must be in format YYYY-MM-DD.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.id_document.expire_date is required and must be in format YYYY-MM-DD"
}`
  },
  errorSenderKycIdDocumentNumberRequired: {
    label: "Error - Sender KYC ID Document Number Required",
    description: "Sender KYC ID document number is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.id_document.number is required"
}`
  },
  errorSenderKycIdDocumentTypeRequired: {
    label: "Error - Sender KYC ID Document Type Required",
    description: "Sender KYC ID document type is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.id_document.type is required"
}`
  },
  errorSenderKycNationalityRequired: {
    label: "Error - Sender KYC Nationality Required",
    description: "Sender KYC nationality is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.nationality is required"
}`
  },
  errorSenderKycFirstNameRequired: {
    label: "Error - Sender KYC First Name Required",
    description: "Sender KYC first name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.subject_name.first_name is required"
}`
  },
  errorSenderKycLastNameRequired: {
    label: "Error - Sender KYC Last Name Required",
    description: "Sender KYC last name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "sender_kyc.subject_name.last_name is required"
}`
  },
  errorSessionTokenInvalid: {
    label: "Error - Session Token Invalid",
    description: "Session token could not be decrypted or is invalid.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "session_token could not be decrypted or is invalid"
}`
  },
  errorSessionTokenRequired: {
    label: "Error - Session Token Required",
    description: "Session token is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "session_token is required"
}`
  },
  errorTransactionDateRequired: {
    label: "Error - Transaction Date Required",
    description: "Transaction date is required and must be in format YYYY-MM-DD HH:mm:ss.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_date is required and must be in format YYYY-MM-DD HH:mm:ss"
}`
  },
  errorTransactionIdRequired: {
    label: "Error - Transaction ID Required",
    description: "Transaction ID is required and must be 40–60 characters long.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_id is required and must be 40–60 characters long"
}`
  },
  errorSameCurrencyIntTransfer: {
    label: "Error - Same Currency International Transfer",
    description: "Transaction type is inttransfer, but both sender and recipient are in the same currency.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_type is inttransfer, but both sender and recipient are in the same currency"
}`
  },
  errorUnknownAccounts: {
    label: "Error - Unknown Accounts",
    description: "Neither sender nor recipient accounts are known or available.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Neither sender nor recipient accounts are known or available"
}`
  },
  errorSameAccounts: {
    label: "Error - Same Accounts",
    description: "Sender and recipient accounts are the same.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Sender and recipient accounts are the same"
}`
  },
  errorInvalidTransactionType: {
    label: "Error - Invalid Transaction Type",
    description: "Transaction type is invalid. Must be one of: p2p, inttransfer.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_type is invalid. Must be one of: p2p, inttransfer"
}`
  },
  errorP2PDifferentCurrencies: {
    label: "Error - P2P Different Currencies",
    description: "Transaction type is p2p, but sender and recipient currencies are different.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_type is p2p, but sender and recipient currencies are different"
}`
  },
  errorP2PDifferentNationalities: {
    label: "Error - P2P Different Nationalities",
    description: "Transaction type is p2p, but sender_kyc.nationality ≠ recipient_kyc.nationality.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_type is p2p, but sender_kyc.nationality ≠ recipient_kyc.nationality"
}`
  },
  errorTransactionTypeRequired: {
    label: "Error - Transaction Type Required",
    description: "Transaction type is required and must be one of: inttransfer, p2p.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_type is required and must be one of: inttransfer, p2p"
}`
  },
  errorUnknownSenderIdDocumentType: {
    label: "Error - Unknown Sender ID Document Type",
    description: "Unknown sender_kyc.id_document.type.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Unknown sender_kyc.id_document.type"
}`
  },
  errorUnknownRecipientIdDocumentType: {
    label: "Error - Unknown Recipient ID Document Type",
    description: "Unknown recipient_kyc.id_document.type.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "Unknown recipient_kyc.id_document.type"
}`
  },
  errorP2PNonLocalReceivingCountry: {
    label: "Error - P2P Non-Local Receiving Country",
    description: "Transaction type is set to p2p, but receiving_country is not local.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transaction_type is set to p2p, but receiving_country is not local"
}`
  },
  errorTransferInformationInstitutionNameRequired: {
    label: "Error - Transfer Information Institution Name Required",
    description: "Transfer information institution name is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transfer_information.institution_name is required"
}`
  },
  errorTransferInformationQuoteIdRequired: {
    label: "Error - Transfer Information Quote ID Required",
    description: "Transfer information quote ID is required when quote enforcement is enabled.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transfer_information.quote_id is required when quote enforcement is enabled"
}`
  },
  errorTransferInformationReceivingCountryRequired: {
    label: "Error - Transfer Information Receiving Country Required",
    description: "Transfer information receiving country is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transfer_information.receiving_country is required"
}`
  },
  errorTransferInformationRelationshipSenderRequired: {
    label: "Error - Transfer Information Relationship Sender Required",
    description: "Transfer information relationship sender is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transfer_information.relationship_sender is required"
}`
  },
  errorTransferInformationRemittancePurposeRequired: {
    label: "Error - Transfer Information Remittance Purpose Required",
    description: "Transfer information remittance purpose is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transfer_information.remittance_purpose is required"
}`
  },
  errorTransferInformationSourceOfFundsRequired: {
    label: "Error - Transfer Information Source of Funds Required",
    description: "Transfer information source of funds is required.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "transfer_information.source_of_funds is required"
}`
  },
  errorVersionRequired: {
    label: "Error - Version Required",
    description: "Version is required and must be in format YYYY-MM-DD.",
    response: `{
  "status": "error",
  "code": 400,
  "message": "version is required and must be in format YYYY-MM-DD"
}`
  },
  errorInstitutionNotAllowedCurrency: {
    label: "Error - Institution Not Allowed Currency",
    description: "Institution is not allowed to transact in currency USD.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "Institution is not allowed to transact in currency USD"
}`
  },
  errorInstitutionNotAuthorizedIntTransfer: {
    label: "Error - Institution Not Authorized International Transfer",
    description: "Institution is not authorized to perform inttransfer transactions.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "Institution is not authorized to perform inttransfer transactions"
}`
  },
  errorKycIncomplete: {
    label: "Error - KYC Incomplete",
    description: "KYC information is incomplete or invalid.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "KYC information is incomplete or invalid"
}`
  },
  errorSessionTokenInvalid403: {
    label: "Error - Session Token Invalid (403)",
    description: "Session token could not be decrypted or is invalid.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "session_token could not be decrypted or is invalid"
}`
  },
  errorTransactionAmountExceedsLimit: {
    label: "Error - Transaction Amount Exceeds Limit",
    description: "Transaction amount exceeds institution limit.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "Transaction amount exceeds institution limit"
}`
  },
  errorFxPairNotSupported: {
    label: "Error - FX Pair Not Supported",
    description: "FX pair or funding method not supported for this institution.",
    response: `{
  "status": "error",
  "code": 403,
  "message": "FX pair or funding method not supported for this institution"
}`
  },
  errorTransactionIdAlreadyProcessed: {
    label: "Error - Transaction ID Already Processed",
    description: "Transaction ID already processed.",
    response: `{
  "status": "error",
  "code": 409,
  "message": "transaction_id already processed",
  "institution_receipt_id": "<existing_id>"
}`
  },
  errorInternalServerError1: {
    label: "Error - Internal Server Error (1)",
    description: "Internal server error while processing transaction.",
    response: `{
  "status": "error",
  "code": 500,
  "message": "Internal server error while processing transaction"
}`
  },
  errorInternalServerError2: {
    label: "Error - Internal Server Error (2)",
    description: "Internal server error while processing transaction.",
    response: `{
  "status": "error",
  "code": 500,
  "message": "Internal server error while processing transaction"
}`
  }
};

// Parameters
const transactionInstitutionParameters = [
  // Request Parameters
  {
    key: "version",
    label: "version",
    type: "string",
    description:
      'For version control. Format = "YYYY-MM-DD". Defaults to the latest version',
    requirement: "Mandatory",
    length: "10",
    section: "Request Parameters",
  },
  // Body Parameters
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
    key: "transaction_id",
    label: "transaction_id",
    type: "string",
    description:
      "Unique transaction id / number generated by Institution to uniquely identify this transaction.",
    requirement: "Mandatory",
    length: "1 - 200",
    section: "Body Parameters",
  },
  {
    key: "transaction_date",
    label: "transaction_date",
    type: "string",
    description:
      "The created date and time of the transaction. Format 'YYYY-MM-DD HH:mm:ss'",
    requirement: "Mandatory",
    length: "19",
    section: "Body Parameters",
  },
  {
    key: "amount",
    label: "amount",
    type: "string",
    description:
      "Amount payable to beneficiary in TTD with precision of 2 decimal places",
    requirement: "Mandatory",
    length: "8, 2",
    section: "Body Parameters",
  },
  {
    key: "fees",
    label: "fees",
    type: "object",
    description: "JSON object capturing the fees",
    requirement: "Optional",
    length: "7, 2",
    section: "Body Parameters",
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
    key: "sender_currency",
    label: "sender_currency",
    type: "string",
    description: "Source currency in ISO 4217 format. Example 'USD'",
    requirement: "Mandatory",
    length: "3",
    section: "Body Parameters",
  },
  {
    key: "sender_amount",
    label: "sender_amount",
    type: "string",
    description:
      "PayWise will record this amount for their own reconciliation. This amount may not be made visible to account holder. Precision of 2 decimal places",
    requirement: "Mandatory",
    length: "8, 2",
    section: "Body Parameters",
  },
  {
    key: "description",
    label: "description",
    type: "string",
    description:
      "Freeform text description of the transaction provided by the client.",
    requirement: "Optional",
    length: "1 - 256",
    section: "Body Parameters",
  },
  {
    key: "transaction_type",
    label: "transaction_type",
    type: "string",
    description: "Enum = {inttransfer, p2p}",
    requirement: "Mandatory",
    length: "3 - 11",
    section: "Body Parameters",
  },
  {
    key: "debit_party",
    label: "debit_party",
    type: "object",
    description:
      "An object that contains information about the debit participant.",
    requirement: "Conditional",
    length: "n/a",
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
          "Full name of the sending organization. Example: 'PayWise'",
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
        description: "Currency in ISO 4217 format. Example 'USD'",
        requirement: "Mandatory",
        length: "3",
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
    length: "n/a",
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
          "Full name of the receiving organization. Example: 'PayWise'",
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
        description: "Currency in ISO 4217 format. Example 'USD'",
        requirement: "Mandatory",
        length: "3",
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
  {
    key: "sender_kyc",
    label: "sender_kyc",
    type: "object",
    description:
      "A JSON object that contains information about the sender's KYC.",
    requirement: "Mandatory",
    length: "n/a",
    section: "Body Parameters",
    children: [
      {
        key: "sender_nationality",
        label: "nationality",
        type: "string",
        description: "Nationality in ISO Alpha-2 format. Example 'TT'.",
        requirement: "Mandatory",
        length: "2",
      },
      {
        key: "sender_date_of_birth",
        label: "date_of_birth",
        type: "string",
        description: "Date of birth in YYYY-MM-DD format.",
        requirement: "Mandatory",
        length: "10",
      },
      {
        key: "sender_country_of_birth",
        label: "country_of_birth",
        type: "string",
        description: "Country of birth in ISO Alpha-2 format. Example: 'TT'.",
        requirement: "Optional",
        length: "10",
      },
      {
        key: "sender_gender",
        label: "gender",
        type: "string",
        description: "Gender. Enum = (M)ale, (F)emale, (U)nspecified.",
        requirement: "Optional",
        length: "1",
      },
      {
        key: "sender_id_document",
        label: "id_document",
        type: "object",
        description:
          "A JSON object that contains KYC document information for the Sender.",
        requirement: "Mandatory",
        length: "n/a",
        children: [
          {
            key: "sender_type",
            label: "type",
            type: "string",
            description:
              "ID document type of account holder used in sign up. Enum = NationalIdCard, Passport, DriversPermit, SSN, SIN, Other. Example: 'Passport'",
            requirement: "Mandatory",
            length: "1 - 20",
          },
          {
            key: "sender_number",
            label: "number",
            type: "string",
            description: "ID document number.",
            requirement: "Mandatory",
            length: "1 - 30",
          },
          {
            key: "sender_issue_date",
            label: "issue_date",
            type: "string",
            description: "ID document issue date in YYYY-MM-DD format.",
            requirement: "Optional",
            length: "10",
          },
          {
            key: "sender_expire_date",
            label: "expire_date",
            type: "string",
            description: "ID document expiry date in YYYY-MM-DD format.",
            requirement: "Mandatory",
            length: "10",
          },
          {
            key: "sender_issued_country",
            label: "issued_country",
            type: "string",
            description:
              "Country where the ID document was issued in ISO Alpha-2 format.",
            requirement: "Optional",
            length: "2",
          },
        ],
      },
      {
        key: "sender_address",
        label: "address",
        type: "object",
        description:
          "JSON object that contains address information for the person associated with the business",
        requirement: "Mandatory",
        children: [
          {
            key: "sender_address_line1",
            label: "address_line1",
            type: "string",
            description: "First line of the address",
            requirement: "Mandatory",
            length: "1-255",
          },
          {
            key: "sender_address_line2",
            label: "address_line2",
            type: "string",
            description: "Second line of the address",
            requirement: "Optional",
            length: "1-255",
          },
          {
            key: "sender_address_line3",
            label: "address_line3",
            type: "string",
            description: "Third line of the address",
            requirement: "Optional",
            length: "1-255",
          },
          {
            key: "sender_city",
            label: "city",
            type: "string",
            description: "City/Town of address",
            requirement: "Mandatory",
            length: "4-20",
          },
          {
            key: "sender_state_province",
            label: "state_province",
            type: "string",
            description: "State of address",
            requirement: "Optional",
            length: "4-40",
          },
          {
            key: "sender_postal_code",
            label: "postal_code",
            type: "string",
            description: "Postal Code of address",
            requirement: "Optional",
            length: "10",
          },
          {
            key: "sender_country",
            label: "country",
            type: "string",
            description: "Country in ISO Alpha-2 format",
            requirement: "Mandatory",
            length: "2",
          },
        ],
      },
      {
        key: "sender_subject_name",
        label: "subject_name",
        type: "object",
        description:
          "A JSON object that contains KYC name information for the Sender.",
        requirement: "Mandatory",
        length: "n/a",
        children: [
          {
            key: "sender_title",
            label: "title",
            type: "string",
            description: "Title.",
            requirement: "Optional",
            length: "0 - 6",
          },
          {
            key: "sender_first_name",
            label: "first_name",
            type: "string",
            description: "First name.",
            requirement: "Mandatory",
            length: "1 - 50",
          },
          {
            key: "sender_middle_name",
            label: "middle_name",
            type: "string",
            description: "Middle name.",
            requirement: "Optional",
            length: "0 - 20",
          },
          {
            key: "sender_last_name",
            label: "last_name",
            type: "string",
            description: "Last name.",
            requirement: "Mandatory",
            length: "1 - 50",
          },
          {
            key: "sender_full_name",
            label: "full_name",
            type: "string",
            description: "Full name.",
            requirement: "Optional",
            length: "255",
          },
        ],
      },
    ],
  },
  {
    key: "recipient_kyc",
    label: "recipient_kyc",
    type: "object",
    description:
      "A JSON object that contains information about the Recipient's kyc",
    requirement: "Mandatory",
    length: "n/a",
    section: "Body Parameters",
    children: [
      {
        key: "recipient_nationality",
        label: "nationality",
        type: "string",
        description: "Nationality in ISO Alpha-2 format. Example 'TT'.",
        requirement: "Mandatory",
        length: "2",
      },
      {
        key: "recipient_date_of_birth",
        label: "date_of_birth",
        type: "string",
        description: "Date of birth in YYYY-MM-DD format.",
        requirement: "Mandatory",
        length: "10",
      },
      {
        key: "recipient_country_of_birth",
        label: "country_of_birth",
        type: "string",
        description: "Country of birth in ISO Alpha-2 format. Example: 'TT'.",
        requirement: "Optional",
        length: "10",
      },
      {
        key: "recipient_gender",
        label: "gender",
        type: "string",
        description: "Gender. Enum = (M)ale, (F)emale, (U)nspecified.",
        requirement: "Optional",
        length: "1",
      },
      {
        key: "recipient_id_document",
        label: "id_document",
        type: "object",
        description:
          "A JSON object that contains KYC document information for the Recipient.",
        requirement: "Mandatory",
        length: "n/a",
        children: [
          {
            key: "recipient_type",
            label: "type",
            type: "string",
            description:
              "ID document type of account holder used in sign up. Enum = NationalIdCard, Passport, DriversPermit, Other.",
            requirement: "Mandatory",
            length: "1 - 20",
          },
          {
            key: "recipient_number",
            label: "number",
            type: "string",
            description: "ID document number.",
            requirement: "Mandatory",
            length: "1 - 30",
          },
          {
            key: "recipient_issue_date",
            label: "issue_date",
            type: "string",
            description: "ID document issue date in YYYY-MM-DD format.",
            requirement: "Optional",
            length: "10",
          },
          {
            key: "recipient_expire_date",
            label: "expire_date",
            type: "string",
            description: "ID document expiry date in YYYY-MM-DD format.",
            requirement: "Mandatory",
            length: "10",
          },
          {
            key: "recipient_issued_country",
            label: "issued_country",
            type: "string",
            description:
              "Country where the ID document was issued in ISO Alpha-2 format.",
            requirement: "Optional",
            length: "2",
          },
        ],
      },
      {
        key: "recipient_address",
        label: "address",
        type: "object",
        description:
          "JSON object that contains address information for the person associated with the business",
        requirement: "Mandatory",
        children: [
          {
            key: "recipient_address_line1",
            label: "address_line1",
            type: "string",
            description: "First line of the address",
            requirement: "Mandatory",
            length: "1-255",
          },
          {
            key: "recipient_address_line2",
            label: "address_line2",
            type: "string",
            description: "Second line of the address",
            requirement: "Optional",
            length: "1-255",
          },
          {
            key: "recipient_address_line3",
            label: "address_line3",
            type: "string",
            description: "Third line of the address",
            requirement: "Optional",
            length: "1-255",
          },
          {
            key: "recipient_city",
            label: "city",
            type: "string",
            description: "City/Town of address",
            requirement: "Mandatory",
            length: "4-20",
          },
          {
            key: "recipient_state_province",
            label: "state_province",
            type: "string",
            description: "State of address",
            requirement: "Optional",
            length: "4-40",
          },
          {
            key: "recipient_postal_code",
            label: "postal_code",
            type: "string",
            description: "Postal Code of address",
            requirement: "Optional",
            length: "10",
          },
          {
            key: "recipient_country",
            label: "country",
            type: "string",
            description: "Country in ISO Alpha-2 format",
            requirement: "Mandatory",
            length: "2",
          },
        ],
      },
      {
        key: "recipient_subject_name",
        label: "subject_name",
        type: "object",
        description:
          "A JSON object that contains KYC name information for the Recipient.",
        requirement: "Mandatory",
        length: "n/a",
        children: [
          {
            key: "recipient_title",
            label: "title",
            type: "string",
            description: "Title.",
            requirement: "Optional",
            length: "0 - 6",
          },
          {
            key: "recipient_first_name",
            label: "first_name",
            type: "string",
            description: "First name.",
            requirement: "Mandatory",
            length: "1 - 50",
          },
          {
            key: "recipient_middle_name",
            label: "middle_name",
            type: "string",
            description: "Middle name.",
            requirement: "Optional",
            length: "0 - 20",
          },
          {
            key: "recipient_last_name",
            label: "last_name",
            type: "string",
            description: "Last name.",
            requirement: "Mandatory",
            length: "1 - 50",
          },
          {
            key: "recipient_full_name",
            label: "full_name",
            type: "string",
            description: "Full name.",
            requirement: "Optional",
            length: "255",
          },
        ],
      },
    ],
  },
  {
    key: "transfer_information",
    label: "transfer_information",
    type: "object",
    description:
      "A JSON object that contains associated data to the transaction that provides auxiliary information and additional security information.",
    requirement: "Mandatory",
    length: "N/A",
    section: "Body Parameters",
    children: [
      {
        key: "quote_id",
        label: "quote_id",
        type: "string",
        description:
          "The specific quoteId to be used for the transaction. This quoteId is generated when a quotation is created and it is returned on the quotation response.",
        requirement: "Conditional",
        length: "16-20",
      },
      {
        key: "institution_name",
        label: "institution_name",
        type: "string",
        description: "Name of party who requested this api.",
        requirement: "Mandatory",
        length: "255",
      },
      {
        key: "receiving_country",
        label: "receiving_country",
        type: "string",
        description:
          "Destination country where the payout is to be made. To be specified in ISO Alpha 2 format. Example 'TT'.",
        requirement: "Mandatory",
        length: "2",
      },
      {
        key: "remittance_purpose",
        label: "remittance_purpose",
        type: "string",
        description: "Reason for the transfer. Enum = {values}.",
        requirement: "Mandatory",
        length: "50",
      },
      {
        key: "source_of_funds",
        label: "source_of_funds",
        type: "string",
        description:
          "Source of funds. Please click here for accepted values. Enum = {values}.",
        requirement: "Mandatory",
        length: "4 - 17",
      },
      {
        key: "relationship_recipient",
        label: "relationship_recipient",
        type: "string",
        description:
          "The relation between the Recipient and the beneficiary. Enum = {values}.",
        requirement: "Mandatory",
        length: "3 - 11",
      },
    ],
  },
  // Response Parameters
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
    key: "institution_receipt_id",
    label: "institution_receipt_id",
    type: "string",
    description:
      "The unique PayWise ID returned once the transaction has been posted.",
    requirement: "Conditional",
    length: "10-40",
    section: "Response Parameters",
  },
];

const Transaction_Institutions = () => {
  const [openSections, setOpenSections] = useState({});
  const [rotations, setRotations] = useState({});

  const sections = [
    "Request Parameters",
    "Body Parameters",
    "Response Parameters",
  ];

  return (
    <div>
      {/* INSTITUTION_API */}

      <div id="institution_api" className="py-12 border-b-2">
        <h2 className="text-2xl lg:text-3xl font-semibold py-3">
          Institution API
        </h2>
        <p className="py-5 text-sm">
          The Institution API allows third-party entities (e.g., financial
          institutions, remittance services, or payment processors) to integrate
          with the PayWise system to facilitate transactions on behalf of their
          customers. These entities do not need to hold a PayWise account to
          interact with PayWise accounts and can still perform operations like
          crediting or debiting PayWise customer accounts, enabling seamless
          cross-platform payments.
          <br />
          This API is specifically designed to provide integrations for external
          platforms, enabling them to:
        </p>
        <ol className="text-sm p-4">
          <li>
            I. Perform transactions such as sending or receiving money into a
            PayWise account.
          </li>
          <li>
            II. Retrieve real-time foreign exchange rate data for conversions.
          </li>
          <li>III. Generate quotes for currency exchanges.</li>
        </ol>
        <p className="py-5 text-sm">
          By using the Institution API, third-party platforms can integrate
          secure financial services to support remittances, bill payments, and
          money transfers while maintaining compliance with regulations such as
          Know Your Customer (KYC) and Anti-Money Laundering (AML).
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
              <a href="#institution_transaction">/transaction</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>Post a creditt or debit transaction</p>
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
              <a href="#transaction_get">/transaction/{`{transaction_id}`}</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>Retrieve a transaction completion confirmation</p>
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
              <a href="#exchange_rate_usd">/exchange_rate_usd</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Gets the exchange rate price on a particular date. Defaults to
                TTD for 1 USD.
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
              <a href="#quote_post">/quote</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>
                Post a quote to understand what the TTD amount will be and the
                period of time to keep it valid
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
              <a href="#balance_account">/quote/{`{quote_id}`}</a>
            </div>
            <div className="full xl:basis-[50%]">
              <p>Retrieves the quoted payload</p>
            </div>
          </div>
        </div>
      </div>

      {/* TRANSACTION_INSTITUTION */}
      <div
        id="institution_transaction"
        className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
      >
        <div className="lg:w-2/5 w-full">
          <span className="py-5 font-semibold">transaction:</span>
          <p className="py-5 text-sm">
            This endpoint is used to post a transaction, either crediting or
            debiting a PayWise account. It allows third-party institutions to
            initiate transactions within the PayWise ecosystem, whether for
            remittances, payments, or other financial interactions. The{" "}
            <span className="text-[#6FA43A]">transaction </span> endpoint
            ensures that funds are securely moved between accounts with detailed
            tracking of the transaction.
          </p>

          {sections.map((section) => (
            <div key={section} className="border-b border-[#6FA43A] py-4">
              <h3 className="text-[#1E64A7] font-semibold py-3">{section}:</h3>
              <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
                {transactionInstitutionParameters
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
            defaultKey="successAmountDebited"
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction_Institutions;

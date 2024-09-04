"use client"; // This is a client component
import React, { useState } from 'react';
import valueData from '@/public/data/data.json'; // Asegúrate de que la ruta sea correcta
import { Code } from "@nextui-org/code"; 

const Codes = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const selectedItem = valueData.find(item => item.value === selectedValue);

    const renderSection = (title, content) => (
        <div className="bg-[#3e444f] rounded-xl my-8 md:mb-4">
            <div className='bg-[#505865] flex flex-row justify-around sm:justify-between items-center rounded-t-xl'>
                <div className='w-2/4 py-2 sm:px-3'>
                    <h2 className='text-lg text-[#F2F2F2]'>{title}</h2>
                </div>
                <div className='w-2/6 flex justify-center'>
                    <select className='bg-[#2b3039] rounded-md text-[#F2F2F2] p-1' name="select" onChange={handleChange} value={selectedValue}>
                        <option value="">Select a value</option>
                        {valueData.map(item => (
                            <option key={item.value} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='px-3 py-2 text-sm text-[#F2F2F2]'>
                {content && (Array.isArray(content) ? content.map((item, index) => (
                    <div key={index}>
                        {Object.entries(item).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}:</strong> <Code>{value}</Code>
                            </div>
                        ))}
                    </div>
                )) : <Code>{content}</Code>)}
            </div>
        </div>
    );

    return (
        <div className='absolute top-8 left-0 lg:left-80 right-0 bottom-0 py-8 lg:py-20 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            {/* Paywise API Section */}
            <div id="use_cases" className='flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-5/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold pb-5'>Key Features and Use Cases of the API</h2>
                    <p className='pt-0 pb-5 text-base'>
                    The Paywise API empowers businesses and developers to seamlessly integrate financial services into their applications. With robust features such as account setup, transaction processing, and real-time money transfers, our API enables a wide range of use cases—from managing digital bank accounts to executing secure payments with third-party institutions. Whether you're looking to automate financial operations or enhance your payment processing capabilities, the Paywise API offers the tools you need to build efficient and reliable solutions.
                    </p>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>1. Account Setup</h2>
                    <ul>
                        <li>Member setup information</li>
                        <li>Account setup request</li>
                        <li>Member account information</li>
                        <li>Account confirmation</li>
                    </ul>
                    <h2 className='text-2xl lg:text-3xl font-semibold pt-5'>2. Credit Transactions</h2>
                    <ul>
                        <li>Handle and manage credit transactions within the Paywise ecosystem.</li>
                    </ul>
                    
                    <h2 className='text-2xl lg:text-3xl font-semibold pt-5'>3. Debit Transactions</h2>
                    <ul>
                        <li>Facilitate debit transactions for Paywise account holders.</li>
                    </ul>
                    
                    <h2 className='text-2xl lg:text-3xl font-semibold pt-5'>Paywise offers two main APIs:</h2>
                    <ul>
                        <li>Merchant API</li>
                        <li>Financial Connection Product API: Enables communication with other financial institutions to move money from one account to another.</li>
                    </ul>
                    
                </div>
                {/* <div className='lg:w-2/4 w-full sticky top-0'>
                    <h3 className='text-xl font-semibold'>Just getting started?</h3>
                    <p className='py-5 text-base'>Check out our development quickstart guide.</p>
                    <h4 className='text-xl font-semibold'>Not a developer?</h4>
                    <p className='py-5 text-base'>Use Paywise&apos;s no-code options or apps from our partners to get started with Paywise and to do more with your Paywise account—no code required.</p>
                    {renderSection('Global Section', selectedItem?.global)}
                </div> */}
            </div>

            {/* Errors Section */}
            <div id="errors" className='flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Errors</h2>
                    <p className='py-5 text-base'>
                    Paywise uses conventional HTTP response codes to indicate the success or failure of an API request. In general: 
                    Codes in the <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>2xx</Code> range indicate success. Codes in the <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>4xx</Code> 
                    range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a 
                    charge failed, etc.). Codes in the <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>5xx</Code> range indicate an error with Paywise&apos;s servers (these are rare).
                    </p>
                    <p className='py-5 text-base'>
                    Some <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>4xx</Code> 
                    errors that could be handled programmatically (e.g., a card is declined) include an error code that briefly 
                    explains the error reported.
                    </p>
                    <div className=''>
                        <h3 className='py-3 text-base font-semibold border-solid border-b-2'>Attributes</h3>
                        <div className='text-sm pt-6'>
                            <h4 className='font-semibold py-1'>Type</h4>
                            <p className='py-1 leading-relaxed'>
                            The type of error returned. One of <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>api_error</Code>, 
                            <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>card_error</Code>, 
                            <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>idempotency_error</Code>, 
                            or <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>invalid_request_error</Code>
                            </p>
                            <div className='py-5'>
                                <div className='rounded-md shadow-sm border-solid border border-[#d8dee4]'>
                                    <h3 className='px-3 py-2 font-semibold'>Possible enum values</h3>
                                    <div className='flex flex-col border-solid border-t border-[#d8dee4] text-xs'>
                                        <div className="border-b py-3 px-3 ">
                                            <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>api_error</Code>
                                        </div>
                                        <div className='border-b py-3 px-3 '>
                                            <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>card_error</Code>
                                        </div>
                                        <div className='border-b py-3 px-3 '>
                                            <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>idempotency_error</Code>
                                        </div>
                                        <div className='border-b py-3 px-3 '>
                                            <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>invalid_request_error</Code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-4 border-y'>
                                <h4 className='font-semibold py-1'>Code</h4>
                                <p>
                                    For some errors that could be handled programmatically, a short string indicating the error code reported.
                                </p>
                            </div>
                            <div className='py-4 border-b'>
                                <h4 className='font-semibold py-1'>decline_code</h4>
                                <p>
                                For card errors resulting from a card issuer decline, a short string indicating the card issuer&apos;s reason for the decline if they provide one.
                                </p>
                            </div>
                            <div className='py-4 border-b'>
                                <h4 className='font-semibold py-1'>message</h4>
                                <p>
                                A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
                                </p>
                            </div>
                            <div className='py-4 border-b'>
                                <h4 className='font-semibold py-1'>param</h4>
                                <p>
                                If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
                                </p>
                            </div>
                            <div className='py-4 border-b'>
                                <h4 className='font-semibold py-1'>payment_intent</h4>
                                <p>
                                The PaymentIntent object for errors returned on a request involving a PaymentIntent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    <div className='py-5'>
                        <div className='bg-[#ebeef1] rounded-md shadow-sm border-solid border border-[#d8dee4] text-sm'>
                            <h3 className='px-3 py-2 font-semibold'>HTTP STATUS CODE SUMMARY</h3>
                            <div className='bg-[#f5f6f8] flex flex-col border-solid border-t border-[#d8dee4]'>
                                <div className="flex flex-row justify-start border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>200</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>OK</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p>Everything worked as expected.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>400</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Bad Request</p>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>The request was unacceptable, often due to missing a required parameter.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>401</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Unauthorized</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p>No valid API key provided.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>402</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Request Failed</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p>The parameters were valid but the request failed.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>403</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Forbidden</p>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>The API key doesn&apos;t have permissions to perform the request.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>404</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Not Found</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p>The requested resource doesn&apos;t exist.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>409</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Conflict</p>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>The request conflicts with another request (perhaps due to using the same idempotent key).</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>429</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Too Many<br/>Requests</p>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-24 flex items-center'>
                                        <h4 className='font-semibold'>500, 502,<br/>503, 504</h4>
                                    </div>
                                    <div className='basis-32 flex items-center'>
                                        <p className=''>Server Errors</p>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>Something went wrong on Paywise&apos;s end. (These are rare.)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className='bg-[#ebeef1] rounded-md shadow-sm border-solid border border-[#d8dee4] text-sm'>
                            <h3 className='px-3 py-2 font-semibold'>ERROR TYPES</h3>
                            <div className='bg-[#f5f6f8] flex flex-col border-solid border-t border-[#d8dee4]'>
                                <div className="flex flex-row justify-start border-b py-3 px-3 ">
                                    <div className='basis-1/3 flex items-center'>
                                        <Code className='text-xs rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>api_error</Code>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>API errors cover any other type of problem (e.g., a temporary problem with Paywise&apos;s servers), and are extremely uncommon.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start border-b py-3 px-3 ">
                                    <div className='basis-1/3 flex items-center'>
                                        <Code className='text-xs rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>card_error</Code>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>Card errors are the most common type of error you should expect to handle. They result when the user enters a card that can&apos;t be charged for some reason.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-1/3 flex items-center'>
                                        <Code className='text-xs rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>idempotency_error</Code>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>Idempotency errors occur when an <Code className='text-xs rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>idempotency_error</Code> is re-used on a request that does not match the first request&apos;s API endpoint and parameters.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start content-center border-b py-3 px-3 ">
                                    <div className='basis-1/3 flex items-center'>
                                        <Code className='text-xs rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>invalid_request_error</Code>
                                    </div>
                                    <div className='basis-80 flex items-center'>
                                        <p>Invalid request errors arise when your request has invalid parameters.</p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Documentation() {
    return (
        <div className='h-screen overflow-hidden'>
            <Codes/>
        </div>
    );
}

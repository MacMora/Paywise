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
        <div className='absolute top-12 left-0 lg:left-80 right-0 bottom-0 py-8 lg:py-20 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            {/* Paywise API Section */}
            <h1 className='text-3xl lg:text-6xl py-5 font-bold'>Paywise API</h1>
            <div id="api_reference" className='flex flex-col lg:flex-row justify-around items-start lg:items-center py-12 border-y-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>API Reference</h2>
                    <p className='py-5 text-base'>
                        The Paywise API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
                        <br/><br/>You can use the Paywise API in test mode, which doesn&apos;t affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.
                        <br/><br/>The Paywise API doesn&apos;t support bulk updates. You can work on only one object per request.
                        <br/><br/>The Paywise API differs for every account as we release new versions and tailor functionality. Log in to see docs with your test key and data.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full'>
                    <h3 className='text-xl font-semibold'>Just getting started?</h3>
                    <p className='py-5 text-base'>Check out our development quickstart guide.</p>
                    <h4 className='text-xl font-semibold'>Not a developer?</h4>
                    <p className='py-5 text-base'>Use Paywise&apos;s no-code options or apps from our partners to get started with Paywise and to do more with your Paywise account—no code required.</p>
                    {renderSection('Global Section', selectedItem?.global)}
                </div>
            </div>
            {/* Authentication Section */}
            <div id="authentication" className='flex flex-col lg:flex-row justify-around items-start lg:items-center py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Authentication</h2>
                    <p className='py-5 text-base'>
                        The Paywise API uses API keys to authenticate requests. You can view and manage your API keys in the Paywise Dashboard.
                        <br/><br/>Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix sk_live_. Alternatively, you can use restricted API keys for granular permissions.
                        <br/><br/>Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
                        <br/><br/>All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full'>
                    {renderSection('Request Section', selectedItem?.request)}
                    <div className='py-5'>
                        <div className='bg-[#ebeef1] rounded-md shadow-sm border-solid border border-[#d8dee4]'>
                            <h3 className='px-3 py-2 font-semibold'>YOUR API KEY</h3>
                            <div className='border-solid border-t border-[#d8dee4] bg-[#f5f6f8] px-3 py-2 text-sm'>
                                <p>A sample test API key is included in all the examples here, so you can test any example right away. Do not submit any personally identifiable information in requests made with this key.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Connected Accounts Section */}
            <div id="connected_accounts" className='flex flex-col lg:flex-row justify-around items-start lg:items-center py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Connected Accounts</h2>
                    <p className='py-5 text-base'>
                        To act as connected accounts, clients can issue requests using the Paywise-Account special header. Make sure that this header contains a Paywise account ID, which usually starts with the acct_ prefix.
                        <br/><br/>The value is set per-request as shown in the adjacent code sample. Methods on the returned object reuse the same account ID.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full'>
                    {renderSection('Key Section', selectedItem?.key)}
                </div>
            </div>
            {/* Errors Section */}
            <div id="errors" className='flex flex-col lg:flex-row justify-around items-start lg:items-center py-12 border-b-2'>
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
                <div className='lg:w-2/4 w-full'>
                    {renderSection('Global Section', selectedItem?.global)}
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

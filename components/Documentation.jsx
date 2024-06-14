"use client"; // This is a client component
import React, { useState } from 'react';
import valueData from '@/public/data/data.json'; // Asegúrate de que la ruta sea correcta
import { Code } from "@nextui-org/code"; 

const Codes = () => {
    // Define el estado para guardar el valor seleccionado
    const [selectedValue, setSelectedValue] = useState('');

    // Maneja el cambio en el select
    const handleChange = (event) => {
        // Actualiza el estado con el valor seleccionado
        setSelectedValue(event.target.value);
    };

    // Encuentra el objeto seleccionado basado en el valor
    const selectedItem = valueData.find(item => item.value === selectedValue);

    // Renderiza el select y el contenido de una sección
    const renderSection = (title, content) => (
        <div className="bg-[#8C8C8C] rounded-xl">
            <div className='bg-[#A6A6A6] flex flex-row justify-between items-center py-4 rounded-t-xl'>
                <div className='w-2/4'>
                    <h2 className='text-lg text-[#F2F2F2] px-3'>{title}</h2>
                </div>
                <div className='w-2/6 flex justify-center'>
                    <select className='bg-[#BFBFBF] rounded-md text-[#F2F2F2] p-1' name="select" onChange={handleChange} value={selectedValue}>
                        <option value="">Select a value</option>
                        {/* Itera sobre valueData para crear las opciones del select */}
                        {valueData.map(item => (
                            <option key={item.value} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='px-3 py-5'>
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
        <div className='w-auto absolute top-0 left-80 py-20 pl-8 h-screen overflow-y-auto'>
            <h1 className='text-6xl py-5 font-bold'>Paywise API</h1>
            <div className='flex flex-row justify-around items-center py-12 border-y-2'>
                <div className='w-2/5'>
                    <h2 className='text-3xl font-semibold'>API Reference</h2>
                    <p className='py-5 text-base'>The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
                        <br/><br/>You can use the Stripe API in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.
                        <br/><br/>The Stripe API doesn't support bulk updates. You can work on only one object per request.
                        <br/><br/>The Stripe API differs for every account as we release new versions and tailor functionality. Log in to see docs with your test key and data.
                    </p>
                </div>
                <div className='w-2/4'>
                    {renderSection('Global Section', selectedItem?.global)}
                </div>
            </div>
            <div className='flex flex-row justify-around items-center py-12 border-b-2'>
                <div className='w-2/5'>
                    <h2 className='text-3xl font-semibold'>Authentication</h2>
                    <p className='py-5 text-base'>The Stripe API uses API keys to authenticate requests. You can view and manage your API keys in the Stripe Dashboard.
                        <br/><br/>Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix sk_live_. Alternatively, you can use restricted API keys for granular permissions.
                        <br/><br/>Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
                        <br/><br/>All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
                    </p>
                </div>
                <div className='w-2/4'>
                    {renderSection('Request Section', selectedItem?.request)}
                </div>
            </div>
            <div className='flex flex-row justify-around items-center py-12 border-b-2'>
                <div className='w-2/5'>
                    <h2 className='text-3xl font-semibold'>Connected Accounts</h2>
                    <p className='py-5 text-base'>To act as connected accounts, clients can issue requests using the Stripe-Account special header. Make sure that this header contains a Stripe account ID, which usually starts with the acct_ prefix.
                    <br/><br/>The value is set per-request as shown in the adjacent code sample. Methods on the returned object reuse the same account ID.
                    </p>
                </div>
                <div className='w-2/4'>
                    {renderSection('Key Section', selectedItem?.key)}
                </div>
            </div>
        </div>
    );
};

export default function Documentation() {
    return (
        <div>
            <Codes/>
        </div>
    );
}

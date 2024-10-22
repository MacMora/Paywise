"use client"; // This is a client component
import React, { useState } from 'react';
import valueData from '@/public/data/data.json'; // Asegúrate de que la ruta sea correcta
import { Code } from "@nextui-org/code"; 
import Image from 'next/image'

const Codes = () => {
    const [selectedValue, setSelectedValue] = useState('application/json');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const selectedItem = valueData.find(item => item.value === selectedValue);


    const renderSection = (title, content="") => {
        
        console.log(typeof content)

        const formattedJson = JSON.stringify(content, null, 4)
        .replace(/</g, '&lt;')  // Escapa los caracteres especiales
        .replace(/>/g, '&gt;')
        .replace(/\"/g, "");;
        
        return(
        
        <>
            <div className="bg-[#699EC7] rounded my-8 md:mb-4">
            <div className='bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t'>
                <div className='w-2/4 py-2 sm:px-2'>
                    <h2 className='text-base text-[#F2F2F2]'>{title}</h2>
                </div>
                <div className='w-2/6 flex justify-center'>
                    <select className='bg-[#699EC7] rounded text-[#F2F2F2] p-1' name="select" onChange={handleChange} value={selectedValue}>
                        {/*<option value="">Select a value</option>*/}
                        {valueData.map(item => (
                            <option key={item.value} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='px-2 py-2 flex text-sm text-[#F2F2F2]'>
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                    <code>
                        {formattedJson}
                    </code>
                </pre>
            </div>
        </div>
        </>
        );
    };    
    

    return (
        <div className='main-content absolute top-12 left-0 lg:left-80 right-0 bottom-0 py-8 lg:py-20 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            <Image id='api_reference' src='/images/paywise_banner.png' alt="PayWise Banner" width={1275}  height={354}/>
            {/* Paywise API Section */}
            <div id="api_reference" className='doc-section flex flex-col lg:flex-row justify-around items-start pb-12 border-b-2'>
                <div className='lg:w-5/5 w-full'>
                    <h1 className='text-3xl lg:text-6xl py-5 font-bold'>About PayWise&rsquo;s API</h1>
                    <p className='pt-0 pb-5 text-base'>
                    PayWise is a leading fintech platform empowering users and businesses to manage their finances effortlessly. With PayWise, you can create digital accounts to send, receive, save, and withdraw money, or handle bill payments—all within a seamless digital experience. Our APIs provide easy integration through straightforward HTTP requests and JSON responses, ensuring you can securely embed these functionalities into your applications. Dive in to discover how PayWise APIs can enhance your financial operations and user experience.
                    </p>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Quick Start</h2>
                    <p className='py-5 text-base'>
                    Getting started with PayWise is simple. First, you&rsquo;ll need to authenticate your application using our API keys. Upon creating a PayWise account, you&rsquo;ll receive two sets of unique API keys: the first, for the Developer environment, which allows you to experiment without using real transactions, will be available immediately. The second, for the Live environment, for processing actual payments will be available on-demand. In addition to API integration, we offer plugins for popular platforms like WooCommerce, with more coming soon. You can also access our media resources directly from this site.
                    </p>

                    <div className='flex flex-col lg:flex-row justify-start items-start gap-14 py-8'>
                        <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                            <h4 className="mb-2 text-[#1E64A7] font-semibold">Developer Environment</h4>
                            <p className='mb-2'>
                                <small>URL: <a href="https://devapi.paywise.co/" target="_blank" rel="noopener noreferrer">https://devapi.paywise.co/</a></small>
                            </p>
                            <p>
                                <small>The Developer environment is designed for developers to test their integrations with PayWise&rsquo;s services without the risk of processing real money. Here, you can simulate transactions and verify that your code works as expected in a controlled setting.</small>
                            </p>
                        </div>
                        <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                            <h4 className="mb-2 text-[#1E64A7] font-semibold">Live Environment</h4>
                            <p className='mb-2'>
                                <small>URL: <a href='https://api.paywise.co/' target='_blank' rel="noopener noreferrer">https://api.paywise.co/</a></small>
                            </p>
                            <p>
                                <small>The Live environment is where real transactions take place. After thoroughly testing your integration, you can switch to this environment to start processing actual payments and managing live customer transactions.</small>
                            </p>
                        </div>
                    </div>

                    <h2 className='text-2xl lg:text-3xl font-semibold'>Step 1. Register for free to access the portal APIs </h2>
                    <p className='py-5 text-base'>
                    Start by creating a free testing account with PayWise. This account gives you access to our Developer environment, where you can explore and test the features of our API safely.
                    </p>
                    <div className="alert alert-info flex items-center gap-4">
                        <img src="/images/Info.svg" alt="info" />
                        <small>If you want to create a testing account, please sign up for free at: <a className='font-bold' href='https://devportal.paywise.co/signup' target='_blank'>https://devportal.paywise.co/signup</a></small>
                    </div>

                    <h2 className='text-2xl lg:text-3xl font-semibold'>Step 2. Try the Developer Environment</h2>
                    <p className='py-5 text-base'>
                    Once your testing account is set up, it's time to test your integration. Here's how you can create a payment request as an example:
                    </p>
                    <div className='bg-[#ebeef1] rounded-md shadow-sm border-solid border border-[#d8dee4] mb-5 overflow-x-auto'>
                        <div className='bg-[#f5f6f8] px-3 py-2 text-sm'>
                            <pre className='whitespace-pre-wrap break-words'>
                                <code className='block'>
                                    curl -X GET \ <br />
                                    https://sandbox.paywise.co/api/v1/me \ <br />
                                    -H <span className='text-[#5CA032]'>'Authorization: Bearer &lt;API_KEY&gt;:&lt;SECRET_KEY&gt;'\</span> <br />
                                    -H <span className='text-[#5CA032]'>'Content-Type: application/json' </span>\<br />
                                    -d <span className='text-[#5CA032]'>'{"{}"}' </span><br />
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <a href="https://docs.paywise.co/apk/sandbox_app-release.apk" target="_blank" rel="noopener">
                                <button className="text-xs text-white font-semibold px-3.5 py-2 flex flex-row items-center gap-2 rounded-lg bg-[#1E64A7]">
                                    <img className="w-3" src="/images/download.svg"/> Try it out
                                </button>
                        </a>
                    </div>
                    <div className="mb-5">
                        <h3 className='font-semibold'>Testing Card:</h3>
                        <p>To simulate a payment, use the following test card details:</p>
                        <ul>
                            <li>Number: 4111 1111 1111 1111</li>
                            <li>Expiration Date: Any future date</li>
                            <li>CVV: Any three-digit number</li>
                        </ul>
                    </div>

                    
                    <div className="mb-5">
                        <h3 className='font-semibold'>Declined Payment Testing Card:</h3>
                        <p>To test a declined payment scenario, use the following card details:</p>
                        <ul>
                            <li>Number: 5555 5555 5555 4444</li>
                            <li>Expiration Date: Any future date</li>
                            <li>CVV: Any three-digit number</li>
                        </ul>
                    </div>

                    <h2 className='text-2xl lg:text-3xl font-semibold'>Step 3. Create a Live Account</h2>
                    <p className='py-5 text-base'>
                    When you're ready to go live, create a Paywise live account. This will give you access to the Live environment where you can start processing real transactions.
                    </p>
                    <div className="alert alert-info flex items-center gap-4">
                        <img src="/images/Info.svg" alt="info" />
                        <small>If you want to Create your live account, please go to this link: <a className='font-bold' href='https://devportal.paywise.co/signup' target='_blank'>https://devportal.paywise.co/signup</a></small>
                    </div>

                    <h2 className='text-2xl lg:text-3xl font-semibold'>Step 4. Get Ready to Accept Live Payments</h2>
                    <p className='py-5 text-base'>
                    To begin accepting payments with your live account, you'll need to configure your settings. Please note that settings from your test account do not carry over, so you'll need to set up your payment methods and preferences in your live account dashboard.
                    </p>
                    <div className="alert alert-warning flex items-center gap-4">
                        <img src="/images/Bulb.svg" alt="bulb" />
                        <small>Settings from your test account do not automatically transfer to your live account.</small>
                    </div>
                    <div className="alert alert-info flex items-center gap-4">
                        <img src="/images/Info.svg" alt="info" />
                        <small>Ensure you configure your accepted payment methods on your live account dashboard, as default settings will apply until they are updated.</small>
                    </div>
                </div>
            </div>
            {/* Paywise API Section */}
            <div id="use_cases" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-5/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold pb-5'>Key Features and Use Cases of the API</h2>
                    <p className='pt-0 pb-5 text-base'>
                    The PayWise API empowers businesses and developers to seamlessly integrate financial services into their applications. With robust features such as account setup, transaction processing, and real-time money transfers, our API enables a wide range of use cases—from managing digital wallet accounts to executing secure payments with third-party institutions. Whether you're looking to automate financial operations or enhance your payment processing capabilities, the PayWise API offers the tools you need to build efficient and reliable solutions.
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
                        <li>Handle and manage credit transactions within the PayWise ecosystem.</li>
                    </ul>
                    
                    <h2 className='text-2xl lg:text-3xl font-semibold pt-5'>3. Debit Transactions</h2>
                    <ul>
                        <li>Facilitate debit transactions for PayWise account holders.</li>
                    </ul>
                    
                    <h2 className='text-2xl lg:text-3xl font-semibold pt-5'>PayWise offers three main APIs:</h2>
                    <ul>
                        <li>Merchant API</li>
                        <li>Institution API</li>
                        <li>Financial Connection Product API: Enables communication with other financial institutions to move money from one account to another.</li>
                    </ul>
                    
                </div>
            </div>
            {/* Authentication Section */}
            <div id="authentication" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Authentication</h2>
                    <p className='py-5 text-base'>
                    To access and interact with the Paywise API, developers must authenticate their requests. Paywise uses Azure API Management (APIM) for developer authentication and subscription management. This process ensures secure access to Paywise's services and allows us to manage API usage effectively.
                    </p>

                    <h3 className='text-2xl font-semibold'>Subscription Keys</h3>
                    <p className='py-5 text-base'>Upon signing up as a Paywise developer, you'll need to enroll for a subscription via our developer portal. Once you complete the enrollment process, you'll be assigned a subscription key. This subscription key is required for authenticating API requests and must be included in the headers of every call made to the Paywise API.</p>

                    <h3 className='text-2xl font-semibold'>Additional Token Authentication</h3>
                    <p className='py-5 text-base'>Some APIs may require additional security tokens to be passed along with the subscription key. In such cases, you will need to include an OAuth 2.0 Bearer Token in the request headers, which provides an additional layer of authentication and ensures that sensitive operations like payments are protected.</p>

                    <h3 className='text-2xl font-semibold'>Handling Authentication Errors</h3>
                    <p className='py-5 text-base'>If your API request lacks the proper subscription key or bearer token (where applicable), Paywise will return an authentication error. Make sure both the Ocp-Apim-Subscription-Key and the Authorization token are included correctly in the header when required.</p>

                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Required Header for Subscription Key:', selectedItem?.header_subscription)}
                    <small>This key identifies your application and tracks the usage of our APIs. Requests that do not include the correct subscription key will be rejected with an authentication error.</small>
                    {renderSection('Required Header for Bearer Token', selectedItem?.header_token)}
                    {renderSection('Example of an API Request with Both Headers', selectedItem?.example_request)}
                    <div className='bg-[#ebeef1] rounded-md shadow-sm border-solid border border-[#d8dee4] text-sm'>
                        <h3 className='px-3 py-2 font-semibold'>Common Error Codes</h3>
                        <div className='bg-[#f5f6f8] flex flex-col border-solid border-t border-[#d8dee4]'>
                            <div className="flex flex-row justify-start border-b py-3 px-3 ">
                                <div className='basis-24 flex items-center'>
                                    <h4 className='font-semibold'>401</h4>
                                </div>
                                <div className='basis-32 flex items-center'>
                                    <p className=''>Unauthorized</p>
                                </div>
                                <div className='flex items-center'>
                                    <p>Invalid our missing subscription key or bearer token.</p>
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
                                    <p>The request is authenticated but lacks the necessary permissions for the operation.</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            {/* Personal Section */}
            <div id="personal" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Personal</h2>
                    <p className='my-5 text-base'>
                    Set up a personal account for individual users. This endpoint allows you to create and manage personal accounts on the PayWise platform.
                    </p>
                    <p className='my-5 text-base'>
                    The personal setup process allows individual users to create their own PayWise accounts, providing access to a range of financial services directly from the platform. 
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint is designed to facilitate a seamless onboarding experience by collecting essential user information such as name, email, and phone number, ensuring a secure and user-friendly registration process. By creating a personal account, users can manage their transactions, track payments, and monitor their balance, all within the PayWise ecosystem. This setup is ideal for users who want to harness the power of PayWise for their personal financial management needs.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.personal_example)}
                    {renderSection('Response:', selectedItem?.personal_response)}
                </div>
            </div>
            {/* Business Section */}
            <div id="business" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Business</h2>
                    <p className='my-5 text-base'>
                    Set up a business account to allow organizations to manage their financial transactions through PayWise.
                    </p>
                    <p className='my-5 text-base'>
                    Setting up a business account with PayWise is crucial for organizations that require robust financial management tools tailored to their operational needs. 
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint enables businesses to register on the PayWise platform, allowing them to manage payments, invoicing, and transactions at a larger scale. By providing key details such as the business name, contact information, and address, businesses can unlock features like bulk payment processing, multi-user access, and enhanced security protocols. This setup is particularly beneficial for companies that handle high volumes of transactions and require a reliable, scalable financial solution.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.business_example)}
                    {renderSection('Response:', selectedItem?.business_response)}
                </div>
            </div>
            {/* Institutions Section */}
            <div id="institutions" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Institutions</h2>
                    <p className='my-5 text-base'>
                    Establish an institutional account for financial institutions looking to connect with PayWise&rsquo;s API for broader financial operations.
                    </p>
                    <p className='my-5 text-base'>
                    Institutional accounts on the PayWise platform are designed for large-scale financial entities, such as banks, credit unions, or government bodies, that need to integrate with PayWise&rsquo;s API for extensive financial operations. 
                    </p>
                    <p className='my-5 text-base'>
                    This setup process involves registering the institution&rsquo;s details, enabling it to interact with PayWise&rsquo;s ecosystem to manage funds, conduct transactions, and access a wide range of financial services. By creating an institutional account, these entities can streamline their operations, ensuring efficient and secure handling of large-scale financial activities. This setup is ideal for institutions looking to expand their service offerings through PayWise&rsquo;s robust and secure API infrastructure.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.institutions_example)}
                    {renderSection('Response:', selectedItem?.institutions_response)}
                </div>
            </div>
            {/* General Payments Section */}
            <div id="general_payments" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>General Payments</h2>
                    <p className='my-5 text-base'>
                    General inquiries related to payments, such as retrieving transaction details or account balance.
                    </p>
                    <p className='my-5 text-base'>
                    The general payment inquiry endpoint is your go-to resource for retrieving comprehensive information about any transaction processed through the PayWise platform. 
                    </p>
                    <p className='my-5 text-base'>
                    Whether you need to check the status of a payment, review the details of a completed transaction, or verify account balances, this endpoint offers a flexible solution for all your inquiry needs. By utilizing this API, users can ensure transparency and accuracy in their financial records, making it an essential tool for both personal and business account holders who need to stay on top of their financial activities.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.general_payments_example)}
                    {renderSection('Response:', selectedItem?.general_payments_response)}
                </div>
            </div>
            {/* Payment Authorization Section */}
            <div id="payment_authorization" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Payment Authorization</h2>
                    <p className='my-5 text-base'>
                    Authorize a payment before processing it. This is used to reserve funds for a future transaction.
                    </p>
                    <p className='my-5 text-base'>
                    Payment authorization is a critical step in the transaction process, ensuring that funds are available and reserved for a specific payment before it is fully processed.  
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint allows you to authorize payments by validating and holding the necessary amount on the customer&rsquo;s account, providing an added layer of security and trust for both the merchant and the customer. By using payment authorization, businesses can minimize the risk of declined transactions and ensure that the funds are ready to be captured when the final payment is due. This process is particularly useful for businesses that operate on pre-orders, subscriptions, or any scenario where payment needs to be secured in advance.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.payment_authorization_example)}
                    {renderSection('Response:', selectedItem?.payment_authorization_response)}
                </div>
            </div>
            {/* Payment Status Section */}
            <div id="payment_status" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Payment Status</h2>
                    <p className='my-5 text-base'>
                    Check the status of a previously initiated payment to see if it has been completed, pending, or failed.
                    </p>
                    <p className='my-5 text-base'>
                    Tracking the status of a payment is vital for maintaining transparency and ensuring that transactions are completed as expected. The payment status endpoint provides real-time updates on the state of a payment, whether it&rsquo;s pending, completed, or failed.  
                    </p>
                    <p className='my-5 text-base'>
                    This functionality is essential for both merchants and customers, as it allows them to monitor the progress of a transaction and address any issues that may arise promptly. By integrating this API into your system, you can offer your users a reliable way to check on their payments, thereby improving user experience and trust in your financial operations.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.payment_status_example)}
                    {renderSection('Response:', selectedItem?.payment_status_response)}
                </div>
            </div>
            {/* Balance Inquiry Section */}
            <div id="balance_inquiry" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Balance Inquiry</h2>
                    <p className='my-5 text-base'>
                    Retrieve the current balance of an account to verify available funds before initiating a transaction.
                    </p>
                    <p className='my-5 text-base'>
                    Balance inquiry is a fundamental feature for users who need to monitor their available funds within the PayWise ecosystem. This API endpoint allows users to quickly retrieve their current account balance, ensuring they have sufficient funds before initiating any transactions.   
                    </p>
                    <p className='my-5 text-base'>
                    Regular balance checks help users manage their finances more effectively, preventing overdrafts and ensuring that payments can be processed without issues. Whether you&rsquo;re an individual user or a business, the balance inquiry endpoint is an indispensable tool for maintaining financial control and making informed decisions about your spending.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.balance_inquiry_example)}
                    {renderSection('Response:', selectedItem?.balance_inquiry_response)}
                </div>
            </div>
            {/* Agent Transactions Section */}
            <div id="agent_transactions" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Agent Transactions</h2>
                    <p className='my-5 text-base'>
                    Facilitate transactions through PayWise agents, such as cash deposits or withdrawals.
                    </p>
                    <p className='my-5 text-base'>
                    Agent transactions are designed for users who need to interact with PayWise agents to conduct cash-based operations, such as deposits and withdrawals.  
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint allows you to facilitate these transactions by providing the necessary details like agent ID, transaction type, and amount. By leveraging agent transactions, users can convert physical cash into digital currency within the PayWise system or vice versa, making it easier to manage their funds in both the digital and physical realms. This feature is particularly useful in regions where digital banking is still developing, providing a bridge between traditional and modern financial services.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.agent_transactions_example)}
                    {renderSection('Response:', selectedItem?.agent_transactions_response)}
                </div>
            </div>
            {/* Third Party Transactions Section */}
            <div id="third_party_transactions" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Third Party Transactions</h2>
                    <p className='my-5 text-base'>
                    Execute transactions with third-party financial institutions, including payments and transfers.
                    </p>
                    <p className='my-5 text-base'>
                    Third-party transactions enable seamless financial interactions between PayWise and external financial institutions, such as banks and other payment processors.   
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint allows users to initiate payments or transfers to accounts outside the PayWise platform, expanding the reach and utility of PayWise&rsquo;s services. 
                    </p>
                    <p className='my-5 text-base'>
                    Whether you&rsquo;re sending money to a bank account, paying a bill, or transferring funds to another service provider, third-party transactions provide the flexibility needed to manage your finances across multiple platforms. This feature is ideal for businesses and individuals who need to conduct transactions beyond the PayWise ecosystem, ensuring that they can handle all their financial needs from a single, integrated interface. 
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.third_party_example)}
                    {renderSection('Response:', selectedItem?.third_party_response)}
                </div>
            </div>
            {/* Request for Payment Section */}
            <div id="request_payment" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Request for Payment</h2>
                    <p className='my-5 text-base'>
                    Request a payment from a customer by generating a payment request link or QR code.
                    </p>
                    <p className='my-5 text-base'>
                    The request for payment feature allows merchants to initiate payment requests directly to their customers, simplifying the process of collecting payments for goods or services.    
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint generates a payment request link or QR code that can be sent to customers via email, SMS, or any digital platform. By using this service, merchants can provide their customers with a convenient and secure way to complete transactions online or in-store.  
                    </p>
                    <p className='my-5 text-base'>
                    This feature is particularly beneficial for small businesses, service providers, or any merchant looking to streamline the payment collection process while enhancing the customer experience.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.request_payment_example)}
                    {renderSection('Response:', selectedItem?.request_payment_response)}
                </div>
            </div>
            {/* Generate Credit Card Payment URL Section */}
            <div id="generate_cc_payment_url" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Generate Credit Card Payment URL</h2>
                    <p className='my-5 text-base'>
                    Generate a URL for customers to complete a payment using a credit card.
                    </p>
                    <p className='my-5 text-base'>
                    Generating a credit card payment URL is a powerful tool for merchants who want to offer their customers a quick and secure method to pay online using their credit cards.  
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint allows you to create a unique payment link that directs customers to a secure payment page where they can enter their credit card details and complete the transaction.  
                    </p>
                    <p className='my-5 text-base'>
                    This feature is especially useful for e-commerce sites, subscription services, or any business model where remote payments are common. By providing an easy and reliable payment option, merchants can increase their sales conversion rates and ensure that their customers have a smooth checkout experience.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.credit_card_example)}
                    {renderSection('Response:', selectedItem?.credit_card_response)}
                </div>
            </div>
            {/* Check Credit Card Transaction Section */}
            <div id="check_cc_transaction" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Check Credit Card Transaction</h2>
                    <p className='my-5 text-base'>
                    Verify the status of a credit card transaction to ensure payment has been processed.
                    </p>
                    <p className='my-5 text-base'>
                    The credit card transaction check is an essential feature for merchants who need to verify the status of payments processed through credit cards. 
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint allows you to confirm whether a transaction has been completed, is pending, or has failed, giving you the confidence to proceed with order fulfillment or take necessary actions if issues arise. By regularly checking the status of credit card transactions, merchants can reduce the risk of chargebacks, ensure timely delivery of goods or services, and maintain accurate financial records.  
                    </p>
                    <p className='my-5 text-base'>
                    This functionality is crucial for maintaining operational efficiency and customer satisfaction in any business that accepts credit card payments.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.credit_card_transaction_example)}
                    {renderSection('Response:', selectedItem?.credit_card_transaction_response)}
                </div>
            </div>
            {/* QR Codes Section */}
            <div id="qr_codes" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>QR Codes</h2>
                    <p className='my-5 text-base'>
                    Generate QR codes that customers can scan to make payments at participating merchants or agents.
                    </p>
                    <p className='my-5 text-base'>
                    QR codes are a versatile and increasingly popular method for facilitating contactless payments.  
                    </p>
                    <p className='my-5 text-base'>
                    This API endpoint allows merchants to generate QR codes that customers can scan with their mobile devices to make payments directly from their PayWise accounts. QR codes simplify the payment process, especially in physical retail environments, by eliminating the need for cash or cards at the point of sale.
                    </p>
                    <p className='my-5 text-base'>
                    This feature is particularly useful for businesses looking to enhance their checkout experience with fast, secure, and convenient payment options. By incorporating QR codes into your payment strategy, you can cater to a growing number of customers who prefer mobile and contactless payment methods.
                    </p>
                </div>
                <div className='lg:w-2/4 w-full sticky top-0'>
                    {renderSection('Example Request:', selectedItem?.QR_codes_example)}
                </div>
            </div>

            {/* Errors Section */}
            <div id="errors" className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
                <div className='lg:w-2/5 w-full'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Errors</h2>
                    <p className='py-5 text-base'>
                    PayWise uses conventional HTTP response codes to indicate the success or failure of an API request. In general: 
                    Codes in the <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>2xx</Code> range indicate success. Codes in the <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>4xx</Code> 
                    range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a 
                    charge failed, etc.). Codes in the <Code className='rounded-md shadow-sm border-solid border-t border-[#d8dee4] bg-[#f5f6f8] p-1'>5xx</Code> range indicate an error with PayWise&apos;s servers (these are rare).
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
                                        <p>Something went wrong on PayWise&apos;s end. (These are rare.)</p>
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
                                        <p>API errors cover any other type of problem (e.g., a temporary problem with PayWise&apos;s servers), and are extremely uncommon.</p>
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

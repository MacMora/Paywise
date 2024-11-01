"use client"; // This is a client component
import React, { useState } from 'react';
import App from '@/components/App';



const Codes = ({ showWooCommerce }) => {
    
    // Estado para controlar la visibilidad del div que contiene el <p>
    const [openSections, setOpenSections] = useState({});
    const [rotations, setRotations] = useState({});

    // Función para alternar la visibilidad de una sección específica
    const toggleVisibility = (id) => {
        setOpenSections((prev) => ({
          ...prev,
          [id]: !prev[id], // Alterna el estado de la sección específica
        }));
    };
    
    const toggleRotation = (key) => {
        setRotations(prevState => ({
        ...prevState,
        [key]: prevState[key] ? '' : 'rotate-90'
        }));
    };

    const handleClick = (key) => {
        toggleRotation(key);
        toggleVisibility(key);
    };

    return (
        <div className='main-content absolute top-12 left-0 lg:left-80 right-0 bottom-0 py-8 lg:py-20 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            <div id='paywise_api' className='py-4'>
                <div className='bg-[#F6F9FC] my-8 rounded-3xl overflow-hidden flex flex-col lg:flex-row justify-between items-center'>
                    <div className='lg:relative flex flex-row max-lg:flex-wrap w-full items-center lg:min-h-[350px]'>
                        <div className="lg:relative flex flex-col gap-8 lg:z-10 p-5 lg:p-10 lg:w-[600px]">
                            <h1 className='text-2xl lg:text-[42px] leading-[48px] font-bold'>Welcome to the PayWise API documentation</h1>
                            <p className='text-[#495059] text-sm'>Getting Started {"->"}</p>
                        </div>
                        <img className='object-cover lg:absolute end-0 z-0' src="/images/woocommerce/3d-shapes.png" />
                    </div>
                </div>
            </div>
            

            {/* Paywise API Section */}
            <div className='doc-section flex flex-col lg:flex-row justify-around items-start pb-12 border-b-2'>
                <div className='lg:w-5/5 w-full'>
                    <h2 className='text-3xl py-5 font-bold'>About</h2>
                    <p className='pt-0 pb-5 text-sm'>
                    PayWise is a leading fintech platform empowering users and businesses to manage their finances effortlessly. With PayWise, you can create digital accounts to send, receive, save, and withdraw money, or handle bill payments—all within a seamless digital experience. Our APIs provide easy integration through straightforward HTTP requests and JSON responses, ensuring you can securely embed these functionalities into your applications. Dive in to discover how PayWise APIs can enhance your financial operations and user experience.
                    </p>

                    <div>
                        <h3 className='text-2xl font-semibold'>What you can do</h3>
                        <div className='flex flex-row gap-6 py-5 gap-2'>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/exit.svg" />
                                <p className='text-xs'>Send Money</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/enter.svg" />
                                <p className='text-xs'>Receive Money</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/wallet.svg" />
                                <p className='text-xs'>Save Money</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/download-2.svg" />
                                <p className='text-xs'>Withdraw</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/receipt.svg" />
                                <p className='text-xs'>Pay Bills</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold'>Payment Methods</h3>
                        <div className='flex flex-row gap-6 py-5 gap-2'>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/card.svg" />
                                <p className='text-xs'>Card Payments</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/phone.svg" />
                                <p className='text-xs'>App Payments</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]'>
                                <img src="/images/cash.svg" />
                                <p className='text-xs'>Cash by Agents</p>
                            </div>
                        </div>
                    </div>

                    <div id='quick_start' className='py-8'>
                        <h3 className='text-2xl font-semibold'>Quick Start</h3>
                        <p className='text-sm py-3'>No time to waste, here&rsquo;s where to go:</p>
                        <ol className='text-sm'>
                            <li>1. <a href='#'>Register</a> on the developer portal to get your API key automatically sent to you.</li>
                            <li>2. Are you representing an institution and you are not a PayWise account holder, but you want to enable transactions for your customers to and from PayWise? Then go <a href='#'>here.</a></li>
                            <li>3. If you want to create PayWise accounts to simulate transactions, then go <a href='#'>here.</a></li>
                        </ol>
                    </div>
                        
                    <div id='environments' className='py-8'>
                        <h2 className='text-3xl py-5 font-bold'>Environments</h2>
                        <div className='flex flex-col lg:flex-row justify-start items-start gap-14'>
                            <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                                <h4 className="mb-2 font-semibold"><a href='#'>Developers Portal</a></h4>
                                <p className='mb-2'>
                                    <small>where developers can register, explore API documentation, generate API keys, create test personal and business accounts, top up (bless) those test accounts, and test their integrations</small>
                                </p>
                                <span className='text-[#1E64A7] text-sm font-semibold'>Read more</span>
                            </div>
                            <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                                <h4 className="mb-2 font-semibold"><a href='#'>Production Portal</a></h4>
                                <p className='mb-2'>
                                    <small>where live transactions occur. Once you've completed integration and testing in the Developers&rsquo; environment, you can transition to production.</small>
                                </p>
                                <span className='text-[#1E64A7] text-sm font-semibold'>Read more</span>
                            </div>
                        </div>
                    </div>

                    <div id='integrations' className='py-8'>
                        <h2 className='text-5xl py-5 font-bold'>Integrations</h2>
                        <p>Offer all payment methods in your online store. Use one of our integrations</p>
                        <div className='py-4'>
                            <div onClick={showWooCommerce} className='cursor-pointer flex flex-col justify-center items-center rounded-xl shadow-lg w-[125px] h-[125px]'>
                                <img src="/images/woo-logo.png" />
                                <p className='text-xs'>Woocommerce</p>
                            </div>
                        </div>
                    </div>

                    <div id='developers_portal' className='py-8'>
                        <h2 className='text-5xl py-5 font-bold'>Developers Portal</h2>
                        <p className='text-sm'><a href='#'>The Developers&rsquo; Portal</a> is where developers can register, explore API documentation, generate API keys, create test personal and business accounts, top up (bless) those test accounts, and test their integrations. It provides full access to sandbox environments and detailed logs of API activity. Our intuitive design ensures that developers of all experience levels can get started quickly.</p>
                        <div className='py-4'>
                            <div className="alert alert-warning flex items-center gap-4">
                                <img src="/images/Bulb.svg" alt="bulb" />
                                <small>Use the following links to try our <a href='#' className='font-semibold underline'>Android app</a> and our <a href='#' className='font-semibold underline'>WebApp</a> in the Developers&rsquo; environment. <span className='font-semibold'>You will need to create a <a href='#' className='underline'>personal</a> or <a href='#' className='underline'>business</a> PayWise account to log into those apps.</span></small>
                            </div>
                        </div>
                    </div>
                
                    <div id='installation' className='py-8'>
                        <h2 className='text-2xl lg:text-3xl font-bold'>Use Our Sandbox APK</h2>
                        <div className="alert alert-info flex items-center gap-4 my-5">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.88889 2.33333C4.31844 2.33333 4.66667 1.98511 4.66667 1.55556C4.66667 1.126 4.31844 0.777778 3.88889 0.777778V2.33333ZM10.1111 0.777778C9.68154 0.777778 9.33333 1.126 9.33333 1.55556C9.33333 1.98511 9.68154 2.33333 10.1111 2.33333V0.777778ZM7.77778 0.777778C7.77778 0.348223 7.42956 0 7 0C6.57045 0 6.22222 0.348223 6.22222 0.777778H7.77778ZM7 7L6.45003 7.54997C6.75377 7.85369 7.24623 7.85369 7.54997 7.54997L7 7ZM9.8833 5.21664C10.187 4.91289 10.187 4.42044 9.8833 4.11669C9.57958 3.81296 9.08709 3.81296 8.78337 4.11669L9.8833 5.21664ZM5.21664 4.11669C4.91289 3.81296 4.42044 3.81296 4.11669 4.11669C3.81296 4.42044 3.81296 4.91289 4.11669 5.21664L5.21664 4.11669ZM0.777778 7.77778C0.348223 7.77778 0 8.12599 0 8.55556C0 8.98512 0.348223 9.33333 0.777778 9.33333V7.77778ZM13.2222 9.33333C13.6518 9.33333 14 8.98512 14 8.55556C14 8.12599 13.6518 7.77778 13.2222 7.77778V9.33333ZM12.4444 3.11111V12.4444H14V3.11111H12.4444ZM11.6667 13.2222H2.33333V14.7778H11.6667V13.2222ZM1.55556 12.4444V3.11111H0V12.4444H1.55556ZM2.33333 2.33333H3.88889V0.777778H2.33333V2.33333ZM10.1111 2.33333H11.6667V0.777778H10.1111V2.33333ZM2.33333 13.2222C1.90378 13.2222 1.55556 12.874 1.55556 12.4444H0C0 13.7331 1.04467 14.7778 2.33333 14.7778V13.2222ZM12.4444 12.4444C12.4444 12.874 12.0962 13.2222 11.6667 13.2222V14.7778C12.9554 14.7778 14 13.7331 14 12.4444H12.4444ZM14 3.11111C14 1.82245 12.9554 0.777778 11.6667 0.777778V2.33333C12.0962 2.33333 12.4444 2.68156 12.4444 3.11111H14ZM1.55556 3.11111C1.55556 2.68156 1.90378 2.33333 2.33333 2.33333V0.777778C1.04467 0.777778 0 1.82245 0 3.11111H1.55556ZM6.22222 0.777778V7H7.77778V0.777778H6.22222ZM8.78337 4.11669L6.45003 6.45003L7.54997 7.54997L9.8833 5.21664L8.78337 4.11669ZM7.54997 6.45003L5.21664 4.11669L4.11669 5.21664L6.45003 7.54997L7.54997 6.45003ZM0.777778 9.33333H2.78895V7.77778H0.777778V9.33333ZM2.78895 9.33333L4.66667 11.211L5.76661 10.1111L3.88889 8.2334L2.78895 9.33333ZM5.76661 11.6667H8.2334V10.1111H5.76661V11.6667ZM9.33333 11.211L11.211 9.33333L10.1111 8.2334L8.2334 10.1111L9.33333 11.211ZM11.211 9.33333H13.2222V7.77778H11.211V9.33333ZM11.211 9.33333V7.77778C10.7985 7.77778 10.4029 7.94166 10.1111 8.2334L11.211 9.33333ZM8.2334 11.6667C8.64593 11.6667 9.04159 11.5028 9.33333 11.211L8.2334 10.1111V11.6667ZM4.66667 11.211C4.95839 11.5028 5.35405 11.6667 5.76661 11.6667V10.1111L4.66667 11.211ZM2.78895 9.33333L3.88889 8.2334C3.59717 7.94166 3.20151 7.77778 2.78895 7.77778V9.33333Z" fill="#136AB7"/>
                            </svg>
                            <small className='font-semibold'>You can download our APK by <a href='https://docs.paywise.co/apk/sandbox_app-release.apk' target="_blank" className='font-bold underline'>clicking here</a>. (build date 2024-09-01)</small>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-2xl font-semibold'>Installing the APK from the Developer&rsquo;s Portal:</h2>
                        <p className='text-sm py-5'>
                            To get started with the PayWise Developer Portal APK, you&rsquo;ll need to install the APK directly on your Android device. This process requires you to allow installation from unknown sources, as the APK is not distributed via the Google Play Store. Please note that you are proceeding with this installation at your own risk. PayWise assumes no responsibility for any issues that arise from enabling installations from unknown sources. Once the APK is installed, it is strongly recommended that you disable this feature to maintain the security of your device.
                            <br/><br/>Follow these steps to install the APK on your device
                        </p>
                        <div className='pb-5'>
                            <h3 className='text-xl font-semibold'>1. Download the APK</h3>
                            <ul className='text-sm'>
                                <li>Go to the PayWise Developer Portal from your Android device&rsquo;s web browser.</li>
                                <li>Navigate to the APK Download section and click on the link to download the APK file.</li>
                            </ul>
                        </div>
                        <div className='pb-5'>
                            <h3 className='text-xl font-semibold'>2. Enable Installation from Unknown Sources</h3>
                            <div className='py-5'>
                                <p className='text-sm'>Since the APK is not installed from the Google Play Store, you need to adjust your security settings to allow installations from unknown sources. The steps may vary depending on your Android version:</p>
                                <p className='text-sm font-semibold py-4'>For Android 8.0 (Oreo) and later:</p>
                                <ol className='text-sm px-4'>
                                    <li className='py-1'>1. Open your device&rsquo;s Settings</li>
                                    <li className='py-1'>2. Go to “Apps & notifications” (or “Apps” in some versions).</li>
                                    <li className='py-1'>3. Select your browser (the one used to download the APK).</li>
                                    <li className='py-1'>4. Scroll down and tap on Install unknown apps.</li>
                                    <li className='py-1'>5. Toggle Allow from this source to enable APK installation.</li>
                                </ol>
                                <p className='text-sm font-semibold py-4'>For Android 7.0 (Nougat) and earlier:</p>
                                <ol className='text-sm px-4'>
                                    <li className='py-1'>1. Open your device&rsquo;s Settings</li>
                                    <li className='py-1'>2. Go to Security or Lock screen and security.</li>
                                    <li className='py-1'>3. Scroll down to the Unknown sources setting.</li>
                                    <li className='py-1'>4. Toggle the switch to enable installation from unknown sources.</li>
                                    <li className='py-1'>5. You may see a warning about the risks associated with unknown sources. Confirm to proceed.</li>
                                </ol>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <h3 className='text-xl font-semibold'>3. Install the APK</h3>
                                <ul className='text-sm'>
                                    <li className='py-1'>Once the APK file is downloaded, open your File Manager and locate the APK file (usually in the Downloads folder).</li>
                                    <li className='py-1'>Tap on the APK file and follow the on-screen prompts to install the application.</li>
                                    <li className='py-1'>If prompted for confirmation, allow the installation process to complete.</li>
                                </ul>
                        </div>
                        <div className='pb-5'>
                            <h3 className='text-xl font-semibold'>4. Verify Installation</h3>
                            <p className='text-sm pt-4'>After installation is complete, you can open the PayWise Developer Portal app directly from the notification or find it in your app drawer.</p>
                            <ul className='text-sm'>
                                <li>Log in to the portal with your credentials to access the full set of developer features and begin testing your integrations.</li>
                            </ul>
                        </div>
                        <div className='pb-5'>
                            <h3 className='text-xl font-semibold'>5. Revoke Unknown Sources Permissions</h3>
                            <p className='text-sm pt-4'>For added security, it&rsquo;s recommended to disable the “Install unknown apps” or “Unknown sources” setting after you have installed the APK:</p>
                            <ul className='text-sm'>
                                <li className='py-1'><span className='font-semibold'>For Android 8.0 and above,</span> return to your browser app settings and disable the “Allow from this source” option.</li>
                                <li className='py-1'><span className='font-semibold'>For Android 7.0 and earlier,</span> go back to <span className='font-semibold'>Settings &gt; Security,</span> and toggle off the “Unknown sources” option.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='pb-10 border-b border-[#E4E4E4]'>
                        <h2 className='text-2xl lg:text-3xl font-semibold'>WebApp URL:</h2>
                        <div className="alert alert-info flex items-center gap-4 my-5">
                            <img src="/images/Info.svg" alt="info" />
                            <small>Once you have a <a href='#' className='font-semibold underline'>personal</a> or <a href='#' className='font-semibold underline'>business</a> PayWise account, you can log into their environment to view transactions <a className='font-bold' href='https://sandbox.paywise.co/user/login' target='_blank'>https://sandbox.paywise.co/user/login</a>
                            <br/>The OTP used in this environment is <span className='font-code'>123456</span></small>
                        </div>
                    </div>

                    <div id='registration' className='py-10 border-b border-[#E4E4E4]'>
                        <h2 className='text-2xl lg:text-3xl font-semibold'>Registration</h2>
                        <div className='text-sm py-5'>
                            <p>To access the Developers&rsquo; Portal, you will need to:</p>
                            <ol className='p-4'>
                                <li className='py-1'>1. Sign up for a portal account.</li>
                                <li className='py-1'>2. Once signed in, navigate to the API keys section to generate test keys.</li>
                                <li className='py-1'>3. Ensure your account is approved before proceeding with any integrations.</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div id='api_product' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                        <div className='lg:w-2/5 w-full'>
                            <h2 className='text-2xl lg:text-3xl font-semibold py-3'>API Product</h2>
                            <h3 className='text-2xl font-semibold'>Developers&rsquo; URL</h3>
                            <p className='py-5 text-base'>
                            The Developers&rsquo; URL is used for all testing and integration efforts in the developer environment. It allows developers to simulate PayWise's services and workflows before going live. Be sure to use your Developer subscription key and include the required headers and parameters for each API request. This environment mirrors production functionality, but with test data to ensure safe development and debugging.
                            </p>
                        </div>
                        <div className='lg:w-2/4 w-full sticky top-0'>
                            <p className='py-4'>
                                The developer endpoints are hosted at the following base URL:
                            </p>
                            <div className='bg-[#2E3F51] rounded py-6 px-4'>
                                <a className='text-[#6FA43A]' href='https://devapi.paywise.co/' target="_blank">https://devapi.paywise.co/</a>
                            </div>
                        </div>
                    </div>

                    {/* Headers */}
                    <div id="headers" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                        <div className='lg:w-2/5 w-full'>
                            <div className='py-4'>
                                <h3 className='text-2xl font-semibold'>Headers</h3>
                                <p className='py-5 text-base'>
                                All requests to the PayWise API require certain mandatory headers for authentication, logging, and ensuring compliance. These headers help to secure and trace API calls, ensuring that only authorized systems access PayWise resources. It is crucial that each header is provided in every API request to avoid unauthorized or malformed transactions.
                                </p>
                                <span className='text-[#495059] font-semibold'>Attributes:</span>
                            </div>

                            <div className='border-b py-4'>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => handleClick("pw-subscription-key")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                        <svg className={`transition-transform duration-150 ${rotations["pw-subscription-key"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>PW-subscription-key</span> string</p>
                                    </div>
                                    {openSections["pw-subscription-key"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic'>Description:</span> This key is provided upon registration in the Developers’ Portal. It is used to authenticate the caller and ensure they have access to the API. A production key will be shared after the necessary verification and approval process.</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 32</p>
                                    </div>
                                    )}
                                </div>
                            </div>

                            <div className='border-b py-4'>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => handleClick("pw-origin-country")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                        <svg className={`transition-transform duration-150 ${rotations["pw-origin-country"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>PW-origin-country</span> string</p>
                                    </div>
                                    {openSections["pw-origin-country"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic'>Description:</span> This is a two-character ISO Alpha-2 country code that indicates the country in which the transaction originated. It is important for compliance and auditing purposes.</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 2</p>
                                    </div>
                                    )}
                                </div>
                            </div>

                            <div className='pt-4'>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => handleClick("pw-request-date")} className='flex flex-row gap-2 items-center cursor-pointer'>
                                        <svg className={`transition-transform duration-150 ${rotations["pw-request-date"]}`} width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>PW-request-date</span> string</p>
                                    </div>
                                    {openSections["pw-request-date"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic'>Description:</span> This timestamp represents the exact time the API request is made. It helps maintain time-sensitive processes and ensure that requests are processed within the required timeframes.
                                        <br/><br/>Current timestamp of the request. Format: "YYYY-MM-DD HH:mm:ss
                                        </p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 19</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                            
                        </div>
                        <div className='lg:w-2/4 w-full sticky top-0'>
                            <div className='bg-[#F5F6F8] overflow-hidden font-code rounded'>
                                <div className='bg-[#EBEEF1] p-4 flex flex-row border'>
                                    <div className='basis-2/5'>
                                        <p className='font-bold text-xs'>Key</p>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className='font-bold text-xs'>Example</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border'>
                                    <div className='basis-2/5'>
                                        <p className='text-xs'>PW-subscription-key</p>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className='text-xs'>eed0d85c530c4b26a91d09b783d8fab3</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border'>
                                    <div className='basis-2/5'>
                                        <p className='text-xs'>PW-origin-country</p>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className='text-xs'>TT</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border'>
                                    <div className='basis-2/5'>
                                        <p className='text-xs'>PW-request-date</p>
                                    </div>
                                    <div className='basis-3/5'>
                                        <p className='text-xs'>2014-10-08 16:01:31</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Error */}
                    <div id="errors" className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                        <div className='lg:w-2/5 w-full'>
                            <div className='py-4'>
                                <h3 className='text-2xl font-semibold'>Errors</h3>
                                <p className='py-5 text-base'>
                                Below is a list of possible error codes and their meanings that might be returned in the code field of the API response:
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-2/4 w-full sticky top-0'>
                            <div className='bg-[#F5F6F8] overflow-hidden font-code rounded'>
                                <div className='bg-[#EBEEF1] p-4 flex flex-row border'>
                                    <div className='basis-1/6'>
                                        <p className='font-bold text-sm'>Key</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='font-bold text-sm'>Description</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>200</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Success</span> - The request was successful.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>202</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Accepted</span> - The request has been accepted for asynchronous processing.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>400</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Bad Request</span> - The request was invalid with specific error messages explaining the issue.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>401</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Unauthorized</span> - Authentication failed.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>403</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Forbidden</span> - You do not have permission.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>404</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Not Found</span> - The requested resource was not found.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>410</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>TTL Gone</span> - The session tokens have expired.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>429</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Too Many Requests</span> - Rate limiting error.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>500</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Internal Server Error</span> - An unexpected error occurred with proper logging.</p>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-row border items-center'>
                                    <div className='basis-1/6'>
                                        <p className='text-xs'>503</p>
                                    </div>
                                    <div className='basis-5/6'>
                                        <p className='text-xs'><span className='text-sm'>Service Unavailable</span> - The service is temporarily unavailable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account_API - Institutions API */}
                    <App/>
                </div>
            </div>
        </div>
    );
};

export default function Documentation({showWooCommerce}) {
    return (
        <div className='h-screen overflow-hidden'>
            <Codes showWooCommerce={showWooCommerce}/>
        </div>
    );
}
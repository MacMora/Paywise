"use client"; // This is a client component
import React, { useState } from 'react';
import valueData from '@/public/data/data.json'; // Asegúrate de que la ruta sea correcta
import { Code } from "@nextui-org/code"; 
import Image from 'next/image';


const Codes = () => {
    const [selectedValue, setSelectedValue] = useState('bash');

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
    
      // Estado para controlar la visibilidad del div que contiene el <p>
      const [openSections, setOpenSections] = useState({});

      // Función para alternar la visibilidad de una sección específica
      const toggleVisibility = (id) => {
        setOpenSections((prev) => ({
          ...prev,
          [id]: !prev[id], // Alterna el estado de la sección específica
        }));
      };
    

    return (
        <div className='main-content absolute top-12 left-0 lg:left-80 right-0 bottom-0 py-8 lg:py-20 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            
            <div id='quick_start' className='bg-[#F6F9FC] my-8 rounded-3xl overflow-hidden flex flex-col lg:flex-row justify-between items-center'>
                <div className='lg:relative flex flex-row max-lg:flex-wrap w-full items-center lg:min-h-[350px]'>
                    <div className="lg:relative flex flex-col gap-8 lg:z-10 p-5 lg:p-10 lg:w-[600px]">
                        <h1 className='text-2xl lg:text-[42px] leading-[48px] font-bold'>Welcome to the PayWise API documentation</h1>
                        <p className='text-[#495059] text-sm'>Getting Started {"->"}</p>
                    </div>
                    <img className='object-cover lg:absolute end-0 z-0' src="/images/woocommerce/3d-shapes.png" />
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

                    <div>
                        <h3 className='text-2xl font-semibold'>Quick Start</h3>
                        <p className='text-sm py-3'>No time to waste, here&rsquo;s where to go:</p>
                        <ol className='text-sm'>
                            <li>1. Register on the developer portal</li>
                            <li>2. Are you representing an institution and you are not a PayWise account holder, but you want to enable transactions for your customers to and from PayWise, then go here.</li>
                            <li>3. If you want to create PayWise accounts to simulate transactions, then go here.</li>
                        </ol>
                    </div>
                        
                    <div id='environments' className='py-8'>
                        <h2 className='text-3xl py-5 font-bold'>Environments</h2>
                        <div className='flex flex-col lg:flex-row justify-start items-start gap-14'>
                            <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                                <h4 className="mb-2 font-semibold">Developers Portal</h4>
                                <p className='mb-2'>
                                    <small>where developers can register, explore API documentation, generate API keys, create test personal and business accounts, top up (bless) those test accounts, and test their integrations</small>
                                </p>
                                <span className='text-[#1E64A7] text-sm font-semibold'>Read more</span>
                            </div>
                            <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                                <h4 className="mb-2 font-semibold">Production Portal</h4>
                                <p className='mb-2'>
                                    <small>where live transactions occur. Once you've completed integration and testing in the Developers&rsquo; environment, you can transition to production.</small>
                                </p>
                                <span className='text-[#1E64A7] text-sm font-semibold'>Read more</span>
                            </div>
                        </div>
                    </div>

                    <div id='integrations'>
                        <h2 className='text-5xl py-5 font-bold'>Integrations</h2>
                        <p>Offer all payment methods in your online store. Use one of our integrations</p>
                        <div className='py-4'>
                            <div className='flex flex-col justify-center items-center rounded-xl shadow-lg w-[125px] h-[125px]'>
                                <img src="/images/woo-logo.png" />
                                <p className='text-xs'>Woocommerce</p>
                            </div>
                        </div>
                    </div>

                    <div id='developers_portal'>
                        <h2 className='text-5xl py-5 font-bold'>Developers Portal</h2>
                        <p className='text-sm'>The Developers&rsquo; Portal is where developers can register, explore API documentation, generate API keys, create test personal and business accounts, top up (bless) those test accounts, and test their integrations. It provides full access to sandbox environments and detailed logs of API activity. Our intuitive design ensures that developers of all experience levels can get started quickly.</p>
                        <div className='py-4'>
                            <div className="alert alert-warning flex items-center gap-4">
                                <img src="/images/Bulb.svg" alt="bulb" />
                                <small>Use the following links to try our <span className='font-semibold underline'>Android app</span> and our <span className='font-semibold underline'>WebApp</span> in the Developers&rsquo; environment. <span className='font-semibold'>You will need to create a <span className='underline'>personal</span> or <span className='underline'>business</span> account to log into those apps.</span></small>
                            </div>
                        </div>
                    </div>
                
                    <div id='installation'>
                        <h2 className='text-2xl lg:text-3xl font-bold'>Use Our Sandbox APK</h2>
                        <div className="alert alert-info flex items-center gap-4 my-5">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.88889 2.33333C4.31844 2.33333 4.66667 1.98511 4.66667 1.55556C4.66667 1.126 4.31844 0.777778 3.88889 0.777778V2.33333ZM10.1111 0.777778C9.68154 0.777778 9.33333 1.126 9.33333 1.55556C9.33333 1.98511 9.68154 2.33333 10.1111 2.33333V0.777778ZM7.77778 0.777778C7.77778 0.348223 7.42956 0 7 0C6.57045 0 6.22222 0.348223 6.22222 0.777778H7.77778ZM7 7L6.45003 7.54997C6.75377 7.85369 7.24623 7.85369 7.54997 7.54997L7 7ZM9.8833 5.21664C10.187 4.91289 10.187 4.42044 9.8833 4.11669C9.57958 3.81296 9.08709 3.81296 8.78337 4.11669L9.8833 5.21664ZM5.21664 4.11669C4.91289 3.81296 4.42044 3.81296 4.11669 4.11669C3.81296 4.42044 3.81296 4.91289 4.11669 5.21664L5.21664 4.11669ZM0.777778 7.77778C0.348223 7.77778 0 8.12599 0 8.55556C0 8.98512 0.348223 9.33333 0.777778 9.33333V7.77778ZM13.2222 9.33333C13.6518 9.33333 14 8.98512 14 8.55556C14 8.12599 13.6518 7.77778 13.2222 7.77778V9.33333ZM12.4444 3.11111V12.4444H14V3.11111H12.4444ZM11.6667 13.2222H2.33333V14.7778H11.6667V13.2222ZM1.55556 12.4444V3.11111H0V12.4444H1.55556ZM2.33333 2.33333H3.88889V0.777778H2.33333V2.33333ZM10.1111 2.33333H11.6667V0.777778H10.1111V2.33333ZM2.33333 13.2222C1.90378 13.2222 1.55556 12.874 1.55556 12.4444H0C0 13.7331 1.04467 14.7778 2.33333 14.7778V13.2222ZM12.4444 12.4444C12.4444 12.874 12.0962 13.2222 11.6667 13.2222V14.7778C12.9554 14.7778 14 13.7331 14 12.4444H12.4444ZM14 3.11111C14 1.82245 12.9554 0.777778 11.6667 0.777778V2.33333C12.0962 2.33333 12.4444 2.68156 12.4444 3.11111H14ZM1.55556 3.11111C1.55556 2.68156 1.90378 2.33333 2.33333 2.33333V0.777778C1.04467 0.777778 0 1.82245 0 3.11111H1.55556ZM6.22222 0.777778V7H7.77778V0.777778H6.22222ZM8.78337 4.11669L6.45003 6.45003L7.54997 7.54997L9.8833 5.21664L8.78337 4.11669ZM7.54997 6.45003L5.21664 4.11669L4.11669 5.21664L6.45003 7.54997L7.54997 6.45003ZM0.777778 9.33333H2.78895V7.77778H0.777778V9.33333ZM2.78895 9.33333L4.66667 11.211L5.76661 10.1111L3.88889 8.2334L2.78895 9.33333ZM5.76661 11.6667H8.2334V10.1111H5.76661V11.6667ZM9.33333 11.211L11.211 9.33333L10.1111 8.2334L8.2334 10.1111L9.33333 11.211ZM11.211 9.33333H13.2222V7.77778H11.211V9.33333ZM11.211 9.33333V7.77778C10.7985 7.77778 10.4029 7.94166 10.1111 8.2334L11.211 9.33333ZM8.2334 11.6667C8.64593 11.6667 9.04159 11.5028 9.33333 11.211L8.2334 10.1111V11.6667ZM4.66667 11.211C4.95839 11.5028 5.35405 11.6667 5.76661 11.6667V10.1111L4.66667 11.211ZM2.78895 9.33333L3.88889 8.2334C3.59717 7.94166 3.20151 7.77778 2.78895 7.77778V9.33333Z" fill="#136AB7"/>
                            </svg>
                            <small className='font-semibold'>You can download our APK by <span className='font-bold underline'>clicking here</span>. (build date 2024-09-01)</small>
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
                        <h2 className='text-2xl lg:text-3xl font-semibold'>Portal URL:</h2>
                        <div className="alert alert-info flex items-center gap-4 my-5">
                            <img src="/images/Info.svg" alt="info" />
                            <small>If you want to create your developer account, please go to this link: <a className='font-bold' href='https://sandbox.paywise.co/user/login' target='_blank'>https://sandbox.paywise.co/user/login</a></small>
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

                    <div id='account_api' className='flex flex-col lg:flex-row justify-between items-start py-12 border-b-2'>
                        <div className='lg:w-2/5 w-full'>
                            <h2 className='text-2xl lg:text-3xl font-semibold py-3'>Account API</h2>
                            <p className='py-5 text-base'>
                            Manage user accounts, register personal and business accounts, and top-up (bless) accounts.
                            </p>
                            <span className='py-5 text-base font-semibold'>register_account:</span>
                            <p className='py-5 text-base'>
                            The <span className='text-[#6FA43A]'>register_account</span> endpoint allows the calling institution to request and manage authorization or rejection from the PayWise account holder to establish a connection with the institution. Adequate transparency is provided to the user, ensuring they are aware of the data being shared through this connection. This step is crucial in integrating the institution with the user's PayWise account, maintaining security and consent throughout the process.
                            </p>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Request Parameters:</h3>
                                <div className='font-code text-sm italic text-[#495059] py-2'>
                                    <div onClick={() => toggleVisibility("version")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                        <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p><span className='font-semibold'>version</span> string</p>
                                    </div>
                                    {openSections["version"] && (
                                    <div className='py-3'>
                                        <p className='py-2'><span className='font-semibold not-italic'>Description:</span> For version control. Format = "YYYY-MM-DD". Defaults to the latest version</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                        <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                    </div>
                                    )}
                                </div>
                            </div>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Body Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("mobile_number")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>mobile_number</span> string</p>
                                        </div>
                                        {openSections["mobile_number"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Full mobile number of account holder. Example: "+18681234567"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 12</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("institution_name")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>institution_name</span> string</p>
                                        </div>
                                        {openSections["institution_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Name of party who request this api.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("callback_url")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>callback_url</span> string</p>
                                        </div>
                                        {openSections["callback_url"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Url to return the respone to request</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 200</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("first_name")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>first_name</span> string</p>
                                        </div>
                                        {openSections["first_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> First name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 1 - 50</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("last_name")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>last_name</span> string</p>
                                        </div>
                                        {openSections["last_name"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Last name of the account holder as registered with PayWise. This should be the complete name as per the KYC document provided during the registration process.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Optional</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 1 - 75</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("session_token")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>session_token</span> string</p>
                                        </div>
                                        {openSections["session_token"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Encrypted session_token. Institution encrypts the session_token sent using shared key.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 20 - 40</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "pt-4">
                                        <div onClick={() => toggleVisibility("authorisation_token")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>authorisation_token</span> string</p>
                                        </div>
                                        {openSections["authorisation_token"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Unencrypted token shared by institution for callback POST method. PW will encrypt using shared key.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10 - 20</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='border-b border-[#6FA43A] py-4'>
                                <h3 className='text-[#1E64A7] text-xl lg:text-2xl font-semibold py-3'>Response Parameters:</h3>
                                <div className='flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2'>
                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("status")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>status</span> string</p>
                                        </div>
                                        {openSections["status"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Returns the API call status. Enum = {`{ "success", "error" }`}</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 10</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "border-b-2 py-4">
                                        <div onClick={() => toggleVisibility("code")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>code</span> integer</p>
                                        </div>
                                        {openSections["code"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> HTTP return code.</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 3</p>
                                        </div>
                                        )}
                                    </div>

                                    <div className= "pt-4">
                                        <div onClick={() => toggleVisibility("message")} className='flex flex-row gap-0.5 items-center cursor-pointer'>
                                            <svg width="14" height="14" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 24L168 168L24 312" stroke="#536374" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p><span className='font-semibold'>message</span> string</p>
                                        </div>
                                        {openSections["message"] && (
                                        <div className='py-3'>
                                            <p className='py-2'><span className='font-semibold not-italic'>Description:</span> Message is conditional. Messages will show based on condition applied. Added one example only. Example: "Registration request sent"</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Requirement:</span> Mandatory</p>
                                            <p className='py-2'><span className='font-semibold not-italic'>Field Length:</span> 255</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-2/4 w-full sticky top-0'>
                            {renderSection('Request example:', selectedItem?.request_example)}
                            {renderSection('Response example:', selectedItem?.response_example)}
                        </div>
                    </div>
                    
                </div>
            </div>


            {/* Authentication Section */}
            <div className='doc-section flex flex-col lg:flex-row justify-around items-start py-12 border-b-2'>
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

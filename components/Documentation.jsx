"use client"; // This is a client component
import React, { useState } from "react";
import App from "@/components/App";
import ParameterItem from "@/components/ParameterItem";

//Header Parameters
const headerParameters = [
  {
    key: "PW-subscription-key",
    label: "PW-subscription-key",
    type: "string",
    description:
      "Developer key will be available upon registration on the portal. Production key will be shared upon request.",
    requirement: "Mandatory",
    length: "32",
  },
  {
    key: "PW-origin-country",
    label: "PW-origin-country",
    type: "string",
    description:
      "Country Code in which the transaction is created. ISO Alpha 2 standard",
    requirement: "Mandatory",
    length: "2",
  },
  {
    key: "PW-request-date",
    label: "PW-request-date",
    type: "string",
    description:
      "Current timestamp of the request. Format: 'YYYY-MM-DD HH:mm:ss'",
    requirement: "Mandatory",
    length: "19",
  },
  {
    key: "PW-ip-address",
    label: "PW-ip-address",
    type: "string",
    description:
      "Fixed IP for Institution, used in the 'PW-Institution' & 'PW-Account' products",
    requirement: "Conditional",
    length: "8-16",
  },
  {
    key: "User-Agent",
    label: "User-Agent",
    type: "string",
    description:
      "In a programmable environment, this avoids running into Cloudflare issues",
    requirement: "Mandatory",
    length: "255",
  },
];

const Codes = () => {
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
    setRotations((prevState) => ({
      ...prevState,
      [key]: prevState[key] ? "" : "rotate-90",
    }));
  };

  const handleClick = (key) => {
    toggleRotation(key);
    toggleVisibility(key);
  };

  return (
    <div className="main-content absolute top-12 left-0 lg:left-60 xl:left-80 right-0 bottom-0 py-8 lg:py-4 px-4 lg:px-8 overflow-auto custom-scrollbar">
      <div id="paywise_api" className="py-4">
        <div className="bg-[#F6F9FC] my-8 rounded-3xl overflow-hidden flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:relative flex flex-row max-lg:flex-wrap w-full items-center lg:min-h-[350px]">
            <div className="lg:relative flex flex-col gap-8 lg:z-10 p-5 lg:p-10 lg:w-[600px]">
              <h1 className="text-2xl lg:text-[42px] leading-[48px] font-bold">
                Welcome to the PayWise API documentation
              </h1>
            </div>
            <img
              className="object-cover lg:absolute end-0 z-0"
              src="/images/3d-shapes.png"
            />
          </div>
        </div>
      </div>

      {/* Paywise API Section */}
      <div className="doc-section flex flex-col lg:flex-row justify-around items-start pb-12 border-b-2">
        <div className="lg:w-5/5 w-full">
          <h2 className="text-3xl py-5 font-bold">About</h2>
          <p className="pt-0 pb-5 text-sm">
            PayWise is a leading fintech platform empowering users and
            businesses to manage their finances effortlessly. With PayWise, you
            can create digital accounts to send, receive, save, and withdraw
            money, or handle bill payments—all within a seamless digital
            experience. Our APIs provide easy integration through
            straightforward HTTP requests and JSON responses, ensuring you can
            securely embed these functionalities into your applications. Dive in
            to discover how PayWise APIs can enhance your financial operations
            and user experience.
          </p>

          <div>
            <h3 className="text-2xl font-semibold">What you can do</h3>
            <div className="flex flex-row flex-wrap gap-6 py-5 gap-2">
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/exit.svg" />
                <p className="text-xs text-[#536374]">Send Money</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/enter.svg" />
                <p className="text-xs text-[#536374]">Receive Money</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/wallet.svg" />
                <p className="text-xs text-[#536374]">Save Money</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/download-2.svg" />
                <p className="text-xs text-[#536374]">Withdraw</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/receipt.svg" />
                <p className="text-xs text-[#536374]">Pay Bills</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Payment Methods</h3>
            <div className="flex flex-row gap-6 py-5 gap-2">
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/card.svg" />
                <p className="text-xs text-[#536374]">Card Payments</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/phone.svg" />
                <p className="text-xs text-[#536374]">App Payments</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-xl shadow-lg w-[113px] h-[113px]">
                <img src="/images/cash.svg" />
                <p className="text-xs text-[#536374]">Cash by Agents</p>
              </div>
            </div>
          </div>

          <div id="quick_start" className="py-8">
            <h2 className="text-3xl py-5 font-bold">Quick Start</h2>
            <p className="text-sm py-3">
              No time to waste, here&rsquo;s where to go:
            </p>
            <ol className="text-sm">
              <li>
                1. To call our endpoints, you need to have a valid subscription.
                Follow these steps to activate your subscription:
                <ol className="p-4">
                  <li>
                    I.{" "}
                    <a
                      href="https://devportal.paywise.co/signup"
                      target="_blank"
                    >
                      Sign up
                    </a>{" "}
                    on the{" "}
                    <a href="https://devportal.paywise.co" target="_blank">
                      Developer Portal
                    </a>{" "}
                    and verify your email.
                  </li>
                  <li>
                    II. Once verified, sign in and create a subscription in your{" "}
                    <a
                      href="https://devportal.paywise.co/profile"
                      target="_blank"
                    >
                      Profile page.
                    </a>{" "}
                    You can copy your subscription key (`pw-subscription-key`)
                    from your Profile. This subscription is automatically active
                    in this environment.
                  </li>
                </ol>
              </li>
              <li>
                2. Are you representing an institution and you are not a PayWise
                account holder, but you want to enable transactions for your
                customers to and from PayWise? Then go{" "}
                <a href="#institution_api">here.</a>
              </li>
              <li>
                3. If you want to create PayWise accounts to simulate
                transactions, then go <a href="#account_api">here.</a>
              </li>
            </ol>
          </div>

          <div id="environments" className="py-8">
            <h2 className="text-3xl py-5 font-bold">Environments</h2>
            <div className="flex flex-col lg:flex-row justify-start items-start gap-14">
              <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                <h4 className="mb-2 font-semibold">
                  <a href="#developers_portal">Developers Portal</a>
                </h4>
                <p className="mb-2">
                  <small>
                    where developers can register, explore API documentation,
                    generate API keys, create test personal and business
                    accounts, top up (bless) those test accounts, and test their
                    integrations
                  </small>
                </p>
                <a
                  href="#developers_portal"
                  className="text-[#1E64A7] text-sm font-semibold"
                >
                  Read more
                </a>
              </div>
              <div className="lg:w-3/6 basis-2/5 p-8 bg-[#F9F9F9]">
                <h4 className="mb-2 font-semibold">
                  <a href="#production_portal">Production Portal</a>
                </h4>
                <p className="mb-2">
                  <small>
                    where live transactions occur. Once you've completed
                    integration and testing in the Developers&rsquo;
                    environment, you can transition to production.
                  </small>
                </p>
                <a
                  href="#production_portal"
                  className="text-[#1E64A7] text-sm font-semibold"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div id="integrations" className="py-8">
            <h2 className="text-3xl py-5 font-bold">Integrations</h2>
            <p>
              Offer all payment methods in your online store. Use one of our
              integrations
            </p>
            <a href="https://docs.paywise.co/plugins">
              <div className="py-4">
                <div className="cursor-pointer flex flex-col justify-center items-center rounded-xl shadow-lg w-[125px] h-[125px]">
                  <img src="/images/woo-logo.svg" width="76px" height="76px" />
                  <p className="text-xs">Woocommerce</p>
                </div>
              </div>
            </a>
          </div>

          <div id="developers_portal" className="py-8">
            <h2 className="text-5xl py-5 font-bold">Developers Portal</h2>
            <p className="text-sm">
              The Developers&rsquo; Portal is where developers can register,
              explore API documentation, generate API keys, create test personal
              and business accounts, top up (bless) those test accounts, and
              test their integrations. It provides full access to sandbox
              environments and detailed logs of API activity. Our intuitive
              design ensures that developers of all experience levels can get
              started quickly.
            </p>
            <div className="py-4">
              <div className="alert alert-warning flex items-center gap-4">
                <img src="/images/Bulb.svg" alt="bulb" />
                <small>
                  Use the following links to try our{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.paywiseapp"
                    target="_blank"
                    className="font-semibold underline"
                  >
                    Android app
                  </a>{" "}
                  and our{" "}
                  <a
                    href="https://sandbox.paywise.co/user/login"
                    target="_blank"
                    className="font-semibold underline"
                  >
                    WebApp
                  </a>{" "}
                  in the Developers&rsquo; environment.{" "}
                  <span className="font-semibold">
                    You will need to create a{" "}
                    <a href="#personal_account" className="underline">
                      personal
                    </a>{" "}
                    or{" "}
                    <a href="#business_account" className="underline">
                      business
                    </a>{" "}
                    PayWise account to log into those apps.
                  </span>
                </small>
              </div>
            </div>
          </div>

          <div id="installation" className="py-8">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Use Our Sandbox APK
            </h2>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Installing the APK from the Developer&rsquo;s Portal:
            </h2>
            <p className="text-sm py-5">
              To get started with the PayWise Developer Portal APK, you&rsquo;ll
              need to install the APK directly on your Android device. This
              process requires you to allow installation from unknown sources,
              as the APK is not distributed via the Google Play Store. Please
              note that you are proceeding with this installation at your own
              risk. PayWise assumes no responsibility for any issues that arise
              from enabling installations from unknown sources. Once the APK is
              installed, it is strongly recommended that you disable this
              feature to maintain the security of your device.
              <br />
              <br />
              Follow these steps to install the APK on your device
            </p>
            <div>
              <h3 className="text-xl font-semibold">1. Download the APK</h3>
              <ul className="text-sm">
                <li>
                  Go to the PayWise Developer Portal from your Android
                  device&rsquo;s web browser.
                </li>
                <li>
                  Navigate to the APK Download section and click on the link to
                  download the APK file.
                </li>
              </ul>
            </div>
            <div className="alert alert-info flex items-center gap-4 my-5">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.88889 2.33333C4.31844 2.33333 4.66667 1.98511 4.66667 1.55556C4.66667 1.126 4.31844 0.777778 3.88889 0.777778V2.33333ZM10.1111 0.777778C9.68154 0.777778 9.33333 1.126 9.33333 1.55556C9.33333 1.98511 9.68154 2.33333 10.1111 2.33333V0.777778ZM7.77778 0.777778C7.77778 0.348223 7.42956 0 7 0C6.57045 0 6.22222 0.348223 6.22222 0.777778H7.77778ZM7 7L6.45003 7.54997C6.75377 7.85369 7.24623 7.85369 7.54997 7.54997L7 7ZM9.8833 5.21664C10.187 4.91289 10.187 4.42044 9.8833 4.11669C9.57958 3.81296 9.08709 3.81296 8.78337 4.11669L9.8833 5.21664ZM5.21664 4.11669C4.91289 3.81296 4.42044 3.81296 4.11669 4.11669C3.81296 4.42044 3.81296 4.91289 4.11669 5.21664L5.21664 4.11669ZM0.777778 7.77778C0.348223 7.77778 0 8.12599 0 8.55556C0 8.98512 0.348223 9.33333 0.777778 9.33333V7.77778ZM13.2222 9.33333C13.6518 9.33333 14 8.98512 14 8.55556C14 8.12599 13.6518 7.77778 13.2222 7.77778V9.33333ZM12.4444 3.11111V12.4444H14V3.11111H12.4444ZM11.6667 13.2222H2.33333V14.7778H11.6667V13.2222ZM1.55556 12.4444V3.11111H0V12.4444H1.55556ZM2.33333 2.33333H3.88889V0.777778H2.33333V2.33333ZM10.1111 2.33333H11.6667V0.777778H10.1111V2.33333ZM2.33333 13.2222C1.90378 13.2222 1.55556 12.874 1.55556 12.4444H0C0 13.7331 1.04467 14.7778 2.33333 14.7778V13.2222ZM12.4444 12.4444C12.4444 12.874 12.0962 13.2222 11.6667 13.2222V14.7778C12.9554 14.7778 14 13.7331 14 12.4444H12.4444ZM14 3.11111C14 1.82245 12.9554 0.777778 11.6667 0.777778V2.33333C12.0962 2.33333 12.4444 2.68156 12.4444 3.11111H14ZM1.55556 3.11111C1.55556 2.68156 1.90378 2.33333 2.33333 2.33333V0.777778C1.04467 0.777778 0 1.82245 0 3.11111H1.55556ZM6.22222 0.777778V7H7.77778V0.777778H6.22222ZM8.78337 4.11669L6.45003 6.45003L7.54997 7.54997L9.8833 5.21664L8.78337 4.11669ZM7.54997 6.45003L5.21664 4.11669L4.11669 5.21664L6.45003 7.54997L7.54997 6.45003ZM0.777778 9.33333H2.78895V7.77778H0.777778V9.33333ZM2.78895 9.33333L4.66667 11.211L5.76661 10.1111L3.88889 8.2334L2.78895 9.33333ZM5.76661 11.6667H8.2334V10.1111H5.76661V11.6667ZM9.33333 11.211L11.211 9.33333L10.1111 8.2334L8.2334 10.1111L9.33333 11.211ZM11.211 9.33333H13.2222V7.77778H11.211V9.33333ZM11.211 9.33333V7.77778C10.7985 7.77778 10.4029 7.94166 10.1111 8.2334L11.211 9.33333ZM8.2334 11.6667C8.64593 11.6667 9.04159 11.5028 9.33333 11.211L8.2334 10.1111V11.6667ZM4.66667 11.211C4.95839 11.5028 5.35405 11.6667 5.76661 11.6667V10.1111L4.66667 11.211ZM2.78895 9.33333L3.88889 8.2334C3.59717 7.94166 3.20151 7.77778 2.78895 7.77778V9.33333Z"
                  fill="#136AB7"
                />
              </svg>
              <small className="font-semibold">
                You can download our APK by{" "}
                <a
                  href="https://docs.paywise.co/apk/sandbox_app-release.apk"
                  target="_blank"
                  className="font-bold underline"
                >
                  clicking here
                </a>
                . (build date 2024-09-01)
              </small>
            </div>
            <div className="pb-5">
              <h3 className="text-xl font-semibold">
                2. Enable Installation from Unknown Sources
              </h3>
              <div className="pt-5">
                <p className="text-sm">
                  Since the APK is not installed from the Google Play Store, you
                  need to adjust your security settings to allow installations
                  from unknown sources. The steps may vary depending on your
                  Android version:
                </p>

                <div
                  onClick={() => handleClick("android_8_oreo")}
                  className="flex flex-row gap-2 items-center cursor-pointer"
                >
                  <svg
                    className={`cursor-pointer transition-transform duration-150 ${rotations["android_8_oreo"]}`}
                    width="14"
                    height="14"
                    viewBox="0 0 192 336"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 24L168 168L24 312"
                      stroke="#536374"
                      strokeWidth="48"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-sm font-semibold py-4">
                    For Android 8.0 (Oreo) and later:
                  </p>
                </div>
                {openSections["android_8_oreo"] && (
                  <ol className="text-sm px-4">
                    <li className="py-1">
                      1. Open your device&rsquo;s Settings
                    </li>
                    <li className="py-1">
                      2. Go to “Apps & notifications” (or “Apps” in some
                      versions).
                    </li>
                    <li className="py-1">
                      3. Select your browser (the one used to download the APK).
                    </li>
                    <li className="py-1">
                      4. Scroll down and tap on Install unknown apps.
                    </li>
                    <li className="py-1">
                      5. Toggle Allow from this source to enable APK
                      installation.
                    </li>
                  </ol>
                )}

                <div
                  onClick={() => handleClick("android_7_earlier")}
                  className="flex flex-row gap-2 items-center cursor-pointer"
                >
                  <svg
                    className={`cursor-pointer transition-transform duration-150 ${rotations["android_7_earlier"]}`}
                    width="14"
                    height="14"
                    viewBox="0 0 192 336"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 24L168 168L24 312"
                      stroke="#536374"
                      strokeWidth="48"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-sm font-semibold py-4">
                    For Android 7.0 (Nougat) and earlier:
                  </p>
                </div>
                {openSections["android_7_earlier"] && (
                  <ol className="text-sm px-4">
                    <li className="py-1">
                      1. Open your device&rsquo;s Settings
                    </li>
                    <li className="py-1">
                      2. Go to Security or Lock screen and security.
                    </li>
                    <li className="py-1">
                      3. Scroll down to the Unknown sources setting.
                    </li>
                    <li className="py-1">
                      4. Toggle the switch to enable installation from unknown
                      sources.
                    </li>
                    <li className="py-1">
                      5. You may see a warning about the risks associated with
                      unknown sources. Confirm to proceed.
                    </li>
                  </ol>
                )}
              </div>
            </div>
            <div className="pb-5">
              <h3 className="text-xl font-semibold">3. Install the APK</h3>
              <ul className="text-sm">
                <li className="py-1">
                  Once the APK file is downloaded, open your File Manager and
                  locate the APK file (usually in the Downloads folder).
                </li>
                <li className="py-1">
                  Tap on the APK file and follow the on-screen prompts to
                  install the application.
                </li>
                <li className="py-1">
                  If prompted for confirmation, allow the installation process
                  to complete.
                </li>
              </ul>
            </div>
            <div className="pb-5">
              <h3 className="text-xl font-semibold">4. Verify Installation</h3>
              <p className="text-sm pt-4">
                After installation is complete, you can open the PayWise
                Developer Portal app directly from the notification or find it
                in your app drawer.
              </p>
              <ul className="text-sm">
                <li>
                  Log in to the portal with your credentials to access the full
                  set of developer features and begin testing your integrations.
                </li>
              </ul>
            </div>
            <div className="pb-5">
              <h3 className="text-xl font-semibold">
                5. Revoke Unknown Sources Permissions
              </h3>
              <p className="text-sm pt-4">
                For added security, it&rsquo;s recommended to disable the
                “Install unknown apps” or “Unknown sources” setting after you
                have installed the APK:
              </p>
              <ul className="text-sm">
                <li className="py-1">
                  <span className="font-semibold">
                    For Android 8.0 and above,
                  </span>{" "}
                  return to your browser app settings and disable the “Allow
                  from this source” option.
                </li>
                <li className="py-1">
                  <span className="font-semibold">
                    For Android 7.0 and earlier,
                  </span>{" "}
                  go back to{" "}
                  <span className="font-semibold">Settings &gt; Security,</span>{" "}
                  and toggle off the “Unknown sources” option.
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-10 border-b border-[#E4E4E4]">
            <h2 className="text-2xl lg:text-3xl font-semibold">WebApp URL:</h2>
            <div className="alert alert-info flex items-center gap-4 my-5">
              <img src="/images/Info.svg" alt="info" />
              <small>
                In addition to using the mobile app, once you&rsquo;ve created a{" "}
                <a href="#personal_account" className="font-semibold underline">
                  personal
                </a>{" "}
                or{" "}
                <a href="#business_account" className="font-semibold underline">
                  business
                </a>{" "}
                <b>PayWise</b> account (which differs from a developer account),
                you can log in{" "}
                <a
                  className="font-bold"
                  href="https://sandbox.paywise.co/user/login"
                  target="_blank"
                >
                  here
                </a>{" "}
                to access and review transactions associated with these accounts
                within this environment.
              </small>
            </div>
            <div className="alert alert-info flex items-center gap-4 my-5">
              <img src="/images/Info.svg" alt="info" />
              <small>
                The OTP used in this environment is{" "}
                <b className="font-code">123456</b>
              </small>
            </div>
          </div>

          <div id="registration" className="py-10 border-b border-[#E4E4E4]">
            <h2 className="text-2xl lg:text-3xl font-semibold">Registration</h2>
            <div className="text-sm py-5">
              <p>To access the Developers&rsquo; Portal, you will need to:</p>
              <ol className="p-4">
                <li className="py-1">1. Sign up for a portal account.</li>
                <li className="py-1">
                  2. Once signed in, navigate to the API keys section to
                  generate test keys.
                </li>
                <li className="py-1">
                  3. Ensure your account is approved before proceeding with any
                  integrations.
                </li>
              </ol>
            </div>
          </div>

          <div id="token_encryption_guide" className="py-10 border-b border-[#E4E4E4]">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Token Encryption Guide
            </h2>
            <p className="mb-6 text-base text-[#444]">
              Some PayWise endpoints (such as <code className="bg-[#f5f6f8] px-1 rounded">/account</code>, <code className="bg-[#f5f6f8] px-1 rounded">/quote</code>, and <code className="bg-[#f5f6f8] px-1 rounded">/transaction</code>) require a valid <b>session_token</b> or <b>authorization_token</b>. These tokens must be <b>AES-encrypted</b> using a pre-shared encryption key provided by PayWise.
            </p>
            <hr className="my-6 border-none" />
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
               Requirements
            </h3>
            <ul className="list-disc ml-6 mb-6 text-base">
              <li>Receive a secure <b>encryption key</b> from PayWise</li>
              <li>Use a <b>registered IP address</b> and <b>Azure APIM subscription key</b></li>
              <li>Encrypt <code>session_token</code> / <code>authorization_token</code> using <b>AES-256-CBC with EVP_BytesToKey key derivation</b></li>
            </ul>
            <hr className="my-6 border-none" />
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Sample Implementations
            </h3>
            <p className="mb-2 text-base">We currently offer encryption/decryption examples in the following languages:</p>
            <ul className="list-disc ml-6 mb-4 text-base">
              <li><a href="https://docs.paywise.co/secure/PWphp.zip" className="text-[#1e64a7] underline" target="_blank" rel="noopener noreferrer">✅ PHP Sample</a></li>
              <li><a href="https://docs.paywise.co/secure/PWjava.zip" className="text-[#1e64a7] underline" target="_blank" rel="noopener noreferrer">✅ Java Sample</a></li>
              <li><a href="https://docs.paywise.co/secure/PWts.zip" className="text-[#1e64a7] underline" target="_blank" rel="noopener noreferrer">✅ TypeScript Sample</a></li>
            </ul>
            <div className="mb-6 p-4 bg-[#f5f6f8] rounded text-[#444]">
             <b>Need another language?</b><br />
              Contact us at <a href="mailto:support@paywise.co" className="text-[#1e64a7] underline">support@paywise.co</a> and we'll generate a compatible sample in your preferred language.
            </div>
            <hr className="my-6 border-none" />
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Security Notice
            </h3>
            <ul className="list-disc ml-6 mb-6 text-base">
              <li>All tokens must be encrypted <i>just before the API request</i>.</li>
              <li>The encryption algorithm must be <b>bit-for-bit compatible</b> with PayWise's backend.</li>
              <li>Token structure is <code>{'{ ct, iv, s }'}</code>, Base64-wrapped JSON.</li>
            </ul>
            <hr className="my-6 border-none" />
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Download & Integrate
            </h3>
            <ul className="list-disc ml-6 text-base">
              <li>Always keep your encryption key secret</li>
              <li>Never expose it client-side (e.g. frontend JavaScript)</li>
              <li>Decryption only happens server-side by PayWise</li>
            </ul>
          </div>

          <div
            id="api_product"
            className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
          >
            <div className="lg:w-2/5 w-full">
              <h2 className="text-2xl lg:text-3xl font-semibold py-3">
                API Product
              </h2>
              <h3 className="text-2xl font-semibold">Developers&rsquo; URL</h3>
              <p className="py-5 text-sm">
                The Developers&rsquo; URL is used for all testing and
                integration efforts in the developer environment. It allows
                developers to simulate PayWise's services and workflows before
                going live. Be sure to use your{" "}
                <b>Developer subscription key</b> and include the required{" "}
                <a href="#headers">headers</a> and parameters for each API
                request. This environment mirrors production functionality, but
                with test data to ensure safe development and debugging.
              </p>
            </div>
            <div className="lg:w-2/4 w-full sticky top-0">
              <p className="py-4">
                The developer endpoints are hosted at the following base URL:
              </p>
              <div className="bg-[#2E3F51] rounded py-6 px-4">
                <a
                  className="green-link"
                  href="https://devapi.paywise.co/"
                  target="_blank"
                >
                  https://devapi.paywise.co/
                </a>
              </div>
            </div>
          </div>

          {/* Headers */}
          <div
            id="headers"
            className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
          >
            <div className="lg:w-2/5 w-full max-lg:py-6">
              <div className="py-4">
                <h3 className="text-2xl font-semibold">Headers</h3>
                <p className="py-5 text-sm">
                  All requests to the PayWise API require certain mandatory
                  headers for authentication, logging, and ensuring compliance.
                  These headers help to secure and trace API calls, ensuring
                  that only authorized systems access PayWise resources. It is
                  crucial that each header is provided in every API request to
                  avoid unauthorized or malformed transactions.
                </p>
                <span className="text-[#495059] font-semibold">
                  Attributes:
                </span>
              </div>

              {/* Map PW-subscription-key */}
              <div className="flex flex-col gap-2 font-code text-sm italic text-[#495059] py-2">
                {headerParameters.map((param, idx, arr) => (
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
            {/* Example */}
            <div className="lg:w-2/4 w-full sticky top-0">
              <div className="bg-[#F5F6F8] overflow-hidden font-code rounded">
                <div className="bg-[#EBEEF1] p-4 flex flex-col max-md:gap-4 md:flex-row border md:items-center">
                  <div className="md:basis-2/5">
                    <p className="font-bold text-xs">Key</p>
                  </div>
                  <div className="md:basis-3/5">
                    <p className="font-bold text-xs">Example</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col max-md:gap-4 md:flex-row border md:items-center">
                  <div className="md:basis-2/5">
                    <p className="text-xs">PW-subscription-key</p>
                  </div>
                  <div className="md:basis-3/5">
                    <p className="text-xs">eed0d85c530c4b26a91d09b783d8fab3</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col max-md:gap-4 md:flex-row border md:items-center">
                  <div className="md:basis-2/5">
                    <p className="text-xs">PW-origin-country</p>
                  </div>
                  <div className="md:basis-3/5">
                    <p className="text-xs">TT</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col max-md:gap-4 md:flex-row border md:items-center">
                  <div className="md:basis-2/5">
                    <p className="text-xs">PW-request-date</p>
                  </div>
                  <div className="md:basis-3/5">
                    <p className="text-xs">2014-10-08 16:01:31</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col max-md:gap-4 md:flex-row border md:items-center">
                  <div className="md:basis-2/5">
                    <p className="text-xs">PW-ip-address</p>
                  </div>
                  <div className="md:basis-3/5">
                    <p className="text-xs">255.255.255.255</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col max-md:gap-4 md:flex-row border md:items-center">
                  <div className="md:basis-2/5">
                    <p className="text-xs">User-Agent</p>
                  </div>
                  <div className="md:basis-3/5">
                    <p className="text-xs">
                      Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error */}
          <div
            id="errors"
            className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
          >
            <div className="lg:w-2/5 w-full">
              <div className="py-4">
                <h3 className="text-2xl font-semibold">Errors</h3>
                <p className="py-5 text-sm">
                  Below is a list of possible error codes and their meanings
                  that might be returned in the code field of the API response:
                </p>
              </div>
            </div>
            <div className="lg:w-2/4 w-full sticky top-0">
              <div className="bg-[#F5F6F8] overflow-hidden font-code rounded">
                <div className="bg-[#EBEEF1] p-4 flex flex-row border">
                  <div className="basis-1/6">
                    <p className="font-bold text-sm">Key</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="font-bold text-sm">Description</p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">200</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Success</span> - The request was
                      successful.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">202</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Accepted</span> - The request
                      has been accepted for asynchronous processing.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">400</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Bad Request</span> - The request
                      was invalid with specific error messages explaining the
                      issue.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">401</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Unauthorized</span> -
                      Authentication failed.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">403</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Forbidden</span> - You do not
                      have permission.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">404</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Not Found</span> - The requested
                      resource was not found.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">410</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">TTL Gone</span> - The session
                      tokens have expired.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">429</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Too Many Requests</span> - Rate
                      limiting error.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">500</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Internal Server Error</span> -
                      An unexpected error occurred with proper logging.
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-row border items-center">
                  <div className="basis-1/6">
                    <p className="text-xs">503</p>
                  </div>
                  <div className="basis-5/6">
                    <p className="text-xs">
                      <span className="text-sm">Service Unavailable</span> - The
                      service is temporarily unavailable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account_API - Institutions API */}
          <App />

          <div id="production_portal" className="py-8">
            <h2 className="text-5xl py-5 font-bold">Production Portal</h2>
            <p className="text-sm">
              The Production Portal is where live transactions occur. Once
              you've completed integration and testing in the Developers&rsquo;
              environment, you can transition to production. The Production
              Portal offers access to real-time transaction data, logs, and API
              usage for your live environment.
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-5">
                Downlaod the PayWise App
              </h3>
              <div className="flex flex-row gap-6 py-5 gap-2">
                <a
                  href="app-store-badge.pnghttps://play.google.com/store/apps/details?id=com.paywiseapp"
                  target="_blank"
                  className="flex flex-col justify-center items-center gap-1.5"
                >
                  <img src="/images/google-play-store.webp" width={202} />
                </a>
                <a
                  href="https://apps.apple.com/us/app/paywise-mobile-wallet-app/id6444257738"
                  target="_blank"
                  className="flex flex-col justify-center items-center gap-1.5"
                >
                  <img src="/images/app-store-badge.png" width={202} />
                </a>
              </div>
            </div>

            <div className="py-4">
              <div className="alert alert-warning flex items-center gap-4">
                <img src="/images/Bulb.svg" alt="bulb" />
                <small>
                  You can also use the following links to try our{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.paywiseapp"
                    target="_blank"
                    className="font-semibold underline"
                  >
                    Android app
                  </a>
                  ,{" "}
                  <a
                    href="https://apps.apple.com/us/app/paywise-mobile-wallet-app/id6444257738"
                    target="_blank"
                    className="font-semibold underline"
                  >
                    IOS app
                  </a>{" "}
                  and our{" "}
                  <a
                    href="https://pwapp.co/user/login"
                    target="_blank"
                    className="font-semibold underline"
                  >
                    WebApp
                  </a>{" "}
                  in the Production environment.
                </small>
              </div>
            </div>
          </div>

          <div
            id="production_registration"
            className="py-10 border-b border-[#E4E4E4]"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Registration Request
            </h2>
            <div className="text-sm py-5">
              <p>
                Before you can go live with the{" "}
                <a href="#production_portal">Production Portal</a>, you need to
                request access to production API keys:
              </p>
              <ol className="p-4">
                <li className="py-1">
                  1. Navigate to the{" "}
                  <a href="#production_portal">Production Portal</a> and
                  register.
                </li>
                <li className="py-1">
                  2. Once the necessary trusted KYB details and agreements have
                  happened with PayWise and your company, our team will manually
                  review your request and provide you with the necessary API
                  keys for live transactions.
                </li>
              </ol>
            </div>
          </div>

          <div
            id="production_api_products"
            className="flex flex-col lg:flex-row justify-between items-start py-12 "
          >
            <div className=" w-full">
              <h2 className="text-2xl lg:text-3xl font-semibold py-3">
                API Product
              </h2>
              <p className="py-5 text-sm">
                All <b>API Products</b> available in the{" "}
                <a href="#developers_portal">Developer Portal</a> will also be
                available in the{" "}
                <a href="#production_portal">Production Portal</a>. These
                include:
              </p>
            </div>
          </div>
          <div
            id="production_url"
            className="flex flex-col lg:flex-row justify-between items-start py-12 border-b-2"
          >
            <div className="lg:w-2/5 w-full">
              <h2 className="text-2xl lg:text-3xl font-semibold py-3">
                Production URL
              </h2>
              <p className="py-5 text-sm">
                This is the primary URL for all API interactions in the live
                environment. Once your application is approved and fully
                registered, you can use this URL to interact with PayWise
                services in production. Be sure to use your{" "}
                <b>production subscription key</b> follow the same structure as
                in the <a href="#developers_portal">Developer Portal</a>,
                ensuring all mandatory headers and parameters are properly
                included. Make sure to test thoroughly in that environment
                before transitioning your integration to production.
              </p>
            </div>
            <div className="lg:w-2/4 w-full sticky top-0">
              <p className="py-4">
                The production endpoints are hosted at the following base URL:
              </p>
              <div className="bg-[#2E3F51] rounded py-6 px-4">
                <a
                  className="green-link"
                  href="https://api.paywise.co/"
                  target="_blank"
                >
                  https://api.paywise.co/
                </a>
              </div>
            </div>
          </div>

          <div
            id="production_account_api"
            className="flex flex-col lg:flex-row justify-between items-center py-8 border-b-2"
          >
            <div className="lg:w-2/5 w-full max-lg:py-6">
              <h2 className="text-2xl lg:text-3xl font-semibold py-3">
                Account API
              </h2>
              <p className="py-5 text-sm">
                The Account API handles user registration and performs fraud
                checks on your customer&rsquo;s account status in the live
                environment. For testing these endpoints, along with detailed
                parameter explanations, example codes, and usage scenarios,
                please refer to the Developer Portal. There, you can experiment
                with all Account API functionalities before moving to
                production.
              </p>
              <a
                href="https://devportal.paywise.co/product#product=account"
                target="_blank"
                className="btn btn-primary"
              >
                Test Account API
              </a>
              <div className="py-4">
                <div className="alert alert-warning flex items-center gap-4">
                  <img src="/images/Bulb.svg" alt="bulb" />
                  <small>
                    You will not be able to use these APIs to create or top up
                    accounts in this environment.
                  </small>
                </div>
              </div>
            </div>
            <div className="lg:w-2/4 w-full">
              <img src="/images/account-api.jpg" alt="" />
            </div>
          </div>

          <div
            id="production_institution_api"
            className="border-b-2 flex flex-col lg:flex-row justify-between items-center py-8 "
          >
            <div className="lg:w-2/5 w-full max-lg:py-6">
              <h2 className="text-2xl lg:text-3xl font-semibold py-3">
                Institution API
              </h2>
              <p className="py-5 text-sm">
                The Institution API facilitates remittances, currency exchange
                rate inquiries, and allows you to generate and reserve exchange
                rate quotations, as well as post credit and debit transactions
                to your customers through PayWise. To explore endpoint details,
                test functionalities, and see code examples, visit the Developer
                Portal, where you can fully test and prepare for production
                deployment.
              </p>
              <a
                href="https://devportal.paywise.co/product#product=institution"
                target="_blank"
                className="btn btn-primary"
              >
                Test Institution API
              </a>
            </div>
            <div className="lg:w-2/4 w-full">
              <img src="/images/paywise-institution.jpg" alt="" />
            </div>
          </div>

          <div id="look-up" className="w-full flex flex-col gap-8 py-8">
            <h2 className="text-2xl lg:text-3xl font-semibold py-3">Look Up</h2>
            <div className="bg-[#F5F6F8] overflow-hidden font-code rounded">
              <div className="bg-[#EBEEF1] p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="font-bold text-xs">Remittance Purpose</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="font-bold text-xs">Description</p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">family_support</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances sent to support family members financially.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">education</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers made to cover education-related expenses
                    (e.g., school fees, tuition).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">medical_expenses</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances sent to cover healthcare or medical-related
                    expenses.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">living_expenses</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers intended to cover basic living costs like
                    rent, groceries, utilities, etc.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">business_investment</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances used to fund or invest in a business or
                    commercial activity.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">salary_payment:</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For payments related to salaries, wages, or freelance work.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">loan_repayment</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers meant to repay a personal or business loan.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">charitable_donation</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances sent as donations to charities or nonprofit
                    organizations.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">gift</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers made as a gift for special occasions,
                    celebrations, or holidays.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">real_estate</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances sent for property-related purposes (e.g.,
                    down payments, rent, or mortgage).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">savings</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers into a savings account, whether personal or
                    for investment purposes.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">travel_expenses</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances sent to cover travel costs, vacations, or
                    business trips.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">utilities</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For payments made to cover utility bills such as
                    electricity, water, gas, or telecommunications.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">tax_payment</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers made for tax payments to local or foreign
                    governments.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">subscription_services</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For recurring or one-time payments for digital services
                    (e.g., streaming, software subscriptions).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">investment</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For transfers intended to be used for investments in
                    financial markets, stocks, bonds, or mutual funds.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">insurance_premium</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For remittances made to pay insurance premiums (e.g.,
                    health, life, or property insurance).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">membership_fee</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    For payments related to memberships (e.g., clubs,
                    professional organizations, etc.).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6F8] my-8 overflow-hidden font-code rounded">
              <div className="bg-[#EBEEF1] p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="font-bold text-xs">source_of_funds</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="font-bold text-xs">Description</p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">salary_income</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds originate from the sender's salary or wage earnings.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">business_income</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds come from the sender's business profits or activities.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">savings</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds come from the sender's personal savings.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">investment_income</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds are derived from the sender's investments (e.g.,
                    dividends, stocks).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">loan_proceeds</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds originate from a personal or business loan.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">gift</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender received the funds as a gift from another person.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">sale_of_property</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds come from the sale of property or real estate.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">inheritance</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds are inherited from a deceased relative or estate.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">pension</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds come from pension payments or retirement income.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">rental_income</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds are from rental properties or leasing activities.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">scholarship_grant</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds come from an academic scholarship or grant.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">trust_fund</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">Funds originate from a trust fund.</p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">dividend_income</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds come from dividends earned from investments.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">insurance_claim</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds are derived from an insurance claim payout.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">cryptocurrency</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds are derived from cryptocurrency transactions.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">government_benefit</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    Funds are from government assistance programs (e.g.,
                    unemployment, welfare).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6F8] overflow-hidden font-code rounded">
              <div className="bg-[#EBEEF1] p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="font-bold text-xs">relationship_sender</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="font-bold text-xs">Description</p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">self</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender and recipient are the same person.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">parent</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is the parent of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">sibling</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a sibling (brother or sister) of the
                    recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">spouse</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is the spouse (husband or wife) of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">child</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is the child (son or daughter) of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">friend</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a friend of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">employer</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is the employer of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">business_partner</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender has a business relationship with the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">colleague</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a colleague or co-worker of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">extended_family</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is an extended family member (e.g., cousin, aunt,
                    etc.).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">other_relative</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a relative, but not immediate family (e.g.,
                    in-laws).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">service_provider</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is providing a service to the recipient (e.g.,
                    contractor).
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">landlord</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is the landlord of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">tenant</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is the tenant of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">customer</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a customer or client of the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">vendor</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a vendor or supplier to the recipient.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">charity_organization</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a charitable organization sending funds.
                  </p>
                </div>
              </div>
              <div className="p-4 max-md:gap-4 flex flex-col md:flex-row border md:items-center">
                <div className="md:basis-1/4">
                  <p className="text-xs">government</p>
                </div>
                <div className="md:basis-3/4">
                  <p className="text-xs">
                    The sender is a government entity providing funds to the
                    recipient.
                  </p>
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
    <div className="h-screen overflow-hidden">
      <Codes />
    </div>
  );
}

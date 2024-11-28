"use client";

export default function WooCommerce() {
    return (
        <div className='main-content absolute top-12 left-0 lg:left-80 right-0 bottom-0 py-8 lg:py-8 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            <div id="install_plugin" className='flex flex-col lg:flex-row justify-start items-center py-8'>
                <div className='w-full'>
                    <h2 className="text-3xl font-semibold">Install and Setup the PayWise WordPress Plugin</h2>
                    <p className="my-2">The Paywise API empowers businesses and developers to seamlessly integrate financial services into their applications. With robust features such as account setup, transaction processing, and real-time money transfers, our API enables a wide range of use cases—from managing digital bank accounts to executing secure payments with third-party institutions. Whether you're looking to automate financial operations or enhance your payment processing capabilities, the Paywise API offers the tools you need to build efficient and reliable solutions.</p>
                    <h3 className="text-2xl font-semibold my-3 pt-10">Install the PayWise Plugin</h3>
                    <ul>
                        <li><a href="https://docs.paywise.co/downloads/PayWise_WP_Plugin.zip" target="_blank" rel="noopener">1. Download the zipped <span className="font-semibold">plugin file.</span></a></li>
                        <li>2. Login to your Wordpress website. and Navigate to <span className="font-semibold">Plugins &gt; Add New Plugin</span></li>
                        <img className="py-8" src="/images/woocommerce/install_plugin.png" alt="install plugin" />
                        <li>3. Click on <span className="font-semibold">Upload Plugin</span> and Upload the zipped plugin file to WordPress</li>
                        <img className="py-8" src="/images/woocommerce/upload_plugin.png" alt="upload plugin" />
                        <li>4. Activate the plugin</li>
                        <img className="py-8" src="/images/woocommerce/activate_plugin.png" alt="activate plugin" />
                    </ul>
                    <h3 id="configure_plugin" className="text-2xl font-semibold my-3 pt-10">Configure the PayWise Plugin</h3>
                    <ul>
                        <li>1. Inside of your Wordpress Dashboard, navigate to <span className="font-semibold">Woocommerce &gt; Settings</span></li>
                        <img className="py-8" src="/images/woocommerce/configure_plugin.png" alt="configure payment" />
                        <li>2. Click on the <span className="font-semibold">Payments</span> tab and then click on <span className="font-semibold">PayWise Wallet Gateway.</span></li>
                        <img className="py-8" src="/images/woocommerce/wallet_plugin.png" alt="configure wallet woocommerce" />
                        <li>3. <span className="font-semibold">Enable</span> the PayWise Wallet Gateway</li>
                        <li>4. Enter Payment Options such as the <span className="font-semibold">Title</span> and <span className="font-semibold">Description</span> that the user sees during checkout</li>
                        <li>5. <span className="font-semibold">Paste your PayWise API Key</span> into the PayWise API Key field* (See <span className="font-semibold">Get Your PayWise API Key</span>)</li>
                        <li>6. Enable or Disable <span className="font-semibold">Order Note</span></li>
                        <li>7. Select <span className="font-semibold">Payment Method:</span> Cash, Card or Cash and Card (cash payments made at PayWise agents)</li>
                        <img className="py-8" src="/images/woocommerce/payment_plugin.png" alt="configure payment method paywise" />
                        <li>8. Lastly, Send your website URL to <a href="mailto:ian.alleyne@paywise.co">ian.alleyne@paywise.co</a></li>
                    </ul>
                    <h3 id="get_api_key" className="text-2xl font-semibold my-3 pt-10">Get Your PayWise API Key</h3>
                    <ul>
                        <li>1. <span className="font-semibold">Log in</span> to your PayWise account from the mobile app or at <a href="https://pwapp.co/home" target="_blank">www.paywise.co</a>.</li>
                        <li>2. Navigate to <span className="font-semibold">Settings</span> and select <span className="font-semibold">View API Key.</span></li>
                        <li>3. Copy the API Key and paste it into the settings of your WordPress PayWise plugin.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
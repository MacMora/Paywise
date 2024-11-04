"use client";

export default function Plugin_Docs({ showWooCommerce }){
    return(
        <div className='main-content absolute top-12 left-0 lg:left-80 right-0 bottom-0 py-8 px-4 lg:px-8 overflow-y-auto custom-scrollbar'>
            <div className='bg-[#F6F9FC] my-8 rounded-3xl overflow-hidden flex flex-col lg:flex-row justify-between items-center'>
                <div className='lg:relative flex flex-row max-lg:flex-wrap w-full items-center lg:min-h-[350px]'>
                    <div className="lg:relative lg:z-10 p-5 lg:p-10 lg:w-[600px]">
                        <h2 className='text-2xl lg:text-5xl font-bold'>Plugins & Platforms</h2>
                        <p className='my-5 text-sm'>
                        Install our checkout on your website and customize the payment experience your way. You can also accept payments with PayWise using our ready-to-use e-commerce solutions for various platforms, including WordPress.
                        </p>
                    </div>
                    <img className='object-cover lg:absolute end-0 z-0' src="/images/woocommerce/3d-shapes.png" />
                </div>
            </div>
            <div id="woocommerce" className='flex flex-col my-8 lg:flex-row justify-around items-center max-lg:p-5 py-8 shadow-lg'>
                <div className='lg:w-1/2 w-full lg:p-10'>
                    <span className="text-sm font-semibold">WOOCOMMERCE</span>
                    <p className="text-xl font-bold my-2">Offer all payment methods in your online store. Download the WooCommerce plugin and follow the installation guide to get started.</p>
                    <div className="flex flex-row flex-wrap gap-8 pt-6">
                        <a href="https://docs.paywise.co/downloads/PayWise_WP_Plugin.zip" target="_blank" rel="noopener">
                            <button className="text-xs text-white font-semibold px-3.5 py-2 flex flex-row items-center gap-2 rounded-lg bg-[#1E64A7]">
                                <img className="w-3" src="/images/download.svg"/> Download Plugin
                            </button>
                        </a>
                        <button onClick={showWooCommerce} className="text-xs text-[#1E64A7] font-semibold px-3.5 py-1.5  flex flex-row gap-2 items-center rounded-lg border-2 border-[#1E64A7]">
                            <img className="w-4" src="/images/Info.svg"/> Read Installation Guide
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full top-0 flex lg:justify-end justify-center max-lg:py-8 max-sm:px-2.5'>
                    <img src="/images/woocommerce/woocommerce.png" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-start items-center py-8 my-8 lg:p-10 px-5'>
                <div className='lg:w-[450px] w-full'>
                    <h2 className="text-3xl font-semibold">Download PayWise Stickers</h2>
                    <p className="my-2">Add PayWise logos and accepted payment icons to your website. Perfect for your footer or product pages to show your customers how they can pay.</p>
                    <a href="https://docs.paywise.co/downloads/stickers.zip" target="_blank" rel="noopener">
                        <button className="text-xs text-white font-semibold my-5 px-3.5 py-2 flex flex-row items-center gap-2 rounded-lg bg-[#1E64A7]">
                            <img className="w-3" src="/images/download.svg"/> Download Stickers
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
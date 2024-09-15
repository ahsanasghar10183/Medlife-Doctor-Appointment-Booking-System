import React from "react";
const PartnersAbout = () => {
    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>
                <h2 className="text-3xl text-primarycolor font-bold leading-normal pb-8">Our Partnered Brands</h2>
                <div className="grid grid-cols-12 md:grid-flow-col gap-4">
                    <div className="col-span-6 sm:col-span-4 md:col-span-2">
                        <img src="/src/assets/jazzcash.png" className="w-1/2  mx-auto"  alt="" />
                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-2">
                        <img src="/src/assets/easypaisa.png" className="w-1/2 mx-auto" alt="" />

                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-2">
                        <img src="/src/assets/alliedbank.png" className="w-1/2 mx-auto" alt="" />

                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-2">
                        <img src="/src/assets/meezanbank.png" className="w-1/2 mx-auto" alt="" />

                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-2">
                        <img src="/src/assets/mastercard.png" className="w-1/2 mx-auto" alt="" />

                    </div>
                    <div className="col-span-6 sm:col-span-4 md:col-span-2">
                        <img src="/src/assets/visacard.png" className="w-1/2 mx-auto" alt="" />

                    </div>
                </div>
            </section>
        </>
    )
}
 export default PartnersAbout;
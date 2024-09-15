import React from "react";
import { FaQuoteRight } from "react-icons/fa";
const Mission = () => {

    return (
        <>
            <section className="py-12 px-12 lg:py-24 lg:px-36 box-border">
                <div className="flex  justify-center">
                    <div className=" w-full md:w-1/2">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="my-auto">
                                <FaQuoteRight className="text-5xl text-darkprimary"/>
                            </div>
                            <div >
                                <h2 className="text-primarycolor text-2xl md:text-3xl font-bold leading-relaxed">Our Mission</h2>
                                <p className="text-xl font-normal italic">Our mission is to empower patients to take control of their health, while also providing healthcare providers with the tools they need to provide exceptional care. we're dedicated to making a positive impact on the lives of our patients.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )

}
export default Mission;
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LocationAbout = () => {
    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>
                <h2 className="text-3xl text-primarycolor font-bold leading-normal pb-8">Where to meet us?</h2>
                <div className="grid grid-cols-12 md:grid-flow-col gap-4 md:gap-24">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                        <h2 className='leading-normal text-lg  font-bold'>Lahore Office</h2>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaLocationPin className='text-black' /></span> <span className="text-gray-500">Gulberg Town, Block AC, Imtiaz Tower, Office #12</span></p>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-black' /></span> <span className="text-gray-500">+92 300 1234567</span></p>
                            <Link href="#" className="underline text-white text-sm">See On Map</Link>
                        </div>

                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                        <h2 className='leading-normal text-lg  font-bold'>Lahore Office</h2>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaLocationPin className='text-black' /></span> <span className="text-gray-500">Gulberg Town, Block AC, Imtiaz Tower, Office #12</span></p>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-black' /></span> <span className="text-gray-500">+92 300 1234567</span></p>
                            <Link href="#" className="underline text-white text-sm">See On Map</Link>

                        </div>

                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                        <h2 className='leading-normal text-lg  font-bold'>Lahore Office</h2>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaLocationPin className='text-black' /></span> <span className="text-gray-500">Gulberg Town, Block AC, Imtiaz Tower, Office #12</span></p>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-black' /></span> <span className="text-gray-500">+92 300 1234567</span></p>
                            <Link href="#" className="underline text-white text-sm">See On Map</Link>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default LocationAbout;
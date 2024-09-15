import React from 'react'

import { FaLocationPin, FaMessage, FaStar, FaVideo } from 'react-icons/fa6'
import IconButton from './IconButton'
import { FaTimesCircle } from 'react-icons/fa'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { RiCalendarScheduleFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
const DoctorListing = ({ Doctors_data, appliedFilters }) => {


    return (
        <>
            <section >
                <h1 className='pb-5 text-lg text-black font-normal'> {Doctors_data.length}+ results found for "Medicine Specialists in faisalabad"</h1>

                {
                    Doctors_data.map((Doctor) => {
                    console.log(appliedFilters);

                        return (
                            <>


                                <div className='grid grid-cols-12 grid-flow-row shadow-lg p-6 rounded-2xl bg-white mb-4'>
                                    <div className='col-span-7'>
                                        <div className='grid grid-cols-12 py-4'>
                                            <div className="col-span-6" >
                                                <div className='flex flex-row items-center gap-4'>
                                                    <img className='w-32 h-32 rounded-full' src={Doctor.dr_image} alt="" />
                                                    <div className='flex flex-col '>
                                                        <div>
                                                            <h1 className='text-xl font-semibold'>{Doctor.dr_name}</h1>
                                                            <p className='text-lg font-medium text-gray-400'>Medicine Scpecialist</p>
                                                        </div>
                                                        <div className='flex flex-row'>
                                                            <span className='text-sm font-semibold text-primarycolor bg-lightprimary rounded-xl p-2'>Medicine</span><span className='text-sm font-semibold p-2 text-primarycolor'><RiVerifiedBadgeFill className='inline-block' /> PMC Verified</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* writing code for ratings */}
                                            <div className="col-span-6 flex  items-center">
                                                <div className='flex fex-row gap-2 '>
                                                    <div className='rounded-xl p-4 bg-lightgreyshade'>
                                                        <p className='text-sm font-semibold text-center'>Experience</p>
                                                        <p className='text-lg font-semibold text-black'>12 years</p>
                                                    </div>
                                                    <div className='rounded-xl p-4 bg-lightgreyshade'>
                                                        <p className='text-sm font-semibold text-center'>Rating</p>
                                                        <p><div className='flex flex-row justify-center items-center '><FaStar className='text-yellow-400' /><span className='font-semibold text-black'>4.9 (56)</span></div></p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* writing code for doctor clinic and Availability info */}
                                        <div className='grid grid-cols-12 grid-flow-row gap-4'>
                                            <div className='col-span-6 border border-gray-400 rounded-2xl p-4'>
                                                <div className='flex flex-row pb-2 gap-2 items-center'>
                                                    <span ><FaLocationPin className='text-red-500 text-xl gap-2' /></span><span className='text-xl font-semibold text-black'>Clinic Information</span>
                                                </div>

                                                <div className='flex flex-row justify-between pb-2'>
                                                    <div className='flex flex-row items-center gap-2'><span><FaTimesCircle className='text-primarycolor' /></span><span className='text-sm font-medium text-gray-400'>Mon-Friday</span></div>
                                                    <div className='flex flex-row items-center gap-2'><span><FaTimesCircle className='text-primarycolor' /></span><span className='text-sm font-medium text-gray-400'>Mon-Friday</span></div>
                                                </div>
                                                <div className='w-1/3 flex justify-center' >
                                                    <p className='rounded-xl text-sm text-black font-semibold p-2 bg-lightgreyshade '> Fee - 1500</p>

                                                </div>
                                            </div>
                                            <div className='col-span-6 border border-gray-400 rounded-2xl p-4'>
                                                <div className='flex flex-row pb-2 gap-2 items-center'>
                                                    <span><FaLocationPin className='text-red-500 text-xl' /></span><span className='text-xl font-semibold text-black'>Online Consultation</span>
                                                </div>

                                                <div className='flex flex-row justify-between pb-2'>
                                                    <div className='flex flex-row items-center gap-2'><span><FaTimesCircle className='text-primarycolor' /></span><span className='text-sm font-medium text-gray-400'>Mon-Friday</span></div>
                                                    <div className='flex flex-row items-center gap-2'><span><FaTimesCircle className='text-primarycolor' /></span><span className='text-sm font-medium text-gray-400'>Mon-Friday</span></div>
                                                </div>
                                                <div className='w-1/3 flex justify-center' >
                                                    <p className='rounded-xl text-sm text-black font-semibold p-2 bg-lightgreyshade '> Fee - 1500</p>

                                                </div>
                                            </div>
                                        </div>
                                        {/* adding treatments speiality display */}
                                        <div className='flex flex-row gap-4 items-center pt-4'>
                                            <p className='text-sm font-semibold text-black'>Treatments : </p>
                                            <p >{Doctor.Treatments.disease_speciality.map((disease)=>{
                                                return(
                                                    <>
                                                    <span className=' mx-2 text-xs bg-lightprimary p-2 text-black rounded-lg'>{disease}</span>
                                                    </>
                                                )
                                            })}</p>
                                        </div>

                                    </div>
                                    <div className='col-span-5'>
                                        <div className='flex flex-row gap-3 items-center justify-end'>
                                            <IconButton
                                                type={"primary"}
                                                style={'px-4 py-3 text-sm'}
                                                text={"Book Appointment"}
                                                icon={<RiCalendarScheduleFill />} />
                                            <IconButton
                                                type={"secondary"}
                                                style={'px-4 py-3 text-sm'}
                                                text={"Book Consultation"}
                                                icon={<FaVideo />} />
                                            <div className='rounded-full border-2 border-primarycolor p-2 hover:bg-primarycolor cursor-pointer'>
                                                <TiMessages className=' text-2xl text-primarycolor hover:text-white' />

                                            </div>


                                        </div>

                                    </div>

                                </div>
                            </>

                        )
                    })
                }

            </section>
        </>
    )
}

export default DoctorListing
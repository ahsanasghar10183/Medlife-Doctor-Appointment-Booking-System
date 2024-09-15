import React from 'react'
import { MdPayments } from 'react-icons/md';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
function ServiceQualitybanner() {

    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>
                <div className='grid grid-flow-row grid-cols-12 gap-4 sm:flex sm:flex-row lg:flex sm:justify-between '>
                   <div className='col-span-6'>
                     <p className='flex flex-row items-center gap-2 font-medium text-primarycolor'><span className='text-2xl md:text-3xl'><RiVerifiedBadgeFill /></span> <span className='text-sm md:text-lg'>PMC Verified Doctors</span></p>
                   </div>
                   <div className=' col-span-6'>
                     <p className='flex flex-row items-center gap-2 font-medium text-primarycolor'><span className='text-2xl md:text-3xl'><Ri24HoursLine /></span> <span className='text-sm md:text-lg' >24/7 Availability</span></p>
                   </div>
                   <div className='col-span-6'>
                     <p className='flex flex-row items-center gap-2 font-medium text-primarycolor'><span className='text-2xl md:text-3xl'><MdPayments/></span> <span className='text-sm md:text-lg'>Flexible Payment Terms & Policies</span></p>
                   </div>
                   <div className='col-span-6'>
                     <p className='flex flex-row items-center gap-2 font-medium text-primarycolor'><span className='text-2xl md:text-3xl'><RiSecurePaymentFill /></span> <span className='text-sm md:text-lg'>Secure Online Payment </span></p>
                   </div>

                </div>



            </section>
        </>
    )
}

export default ServiceQualitybanner
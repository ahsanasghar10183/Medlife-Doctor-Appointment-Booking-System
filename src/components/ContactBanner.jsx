import React from 'react'
import Button from './Button';
import { FaMessage, FaPhone } from 'react-icons/fa6';
function ContactBanner() {
    const test_button = () => {
        alert("Hellow Readmore testing");
      }
    return (
        <>
            <section className='py-12 px-12 lg:py-12 lg:px-36 box-border bg-lightprimary'>

                <div className="flex flex-row justify-between gap-4 ">
                    <div>
                        <h2 className='leading-normal text-primarycolor text-3xl font-bold'>Contact Us</h2>
                        <p className='text-sm text-black'>Don't hesitate to reach out, We're here to help with you.</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='py-2 text-right'>
                            <Button text={"Contact Us"} type={"primary"} style={"px-4 py-2 sm:px-8 sm:py-2 text-sm text-white"} />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-primarycolor'/></span> <span className='text-xs sm:text-sm'>+92 300 1234567</span></p>
                            <p className='flex flex-row items-center gap-2 font-medium'><span><FaMessage className='text-primarycolor' /></span> <span className='text-xs sm:text-sm'>test@test.com</span></p>


                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactBanner
import React from 'react'
import Button from './Button'
function BookVisitcards() {
    const test_button = () => {
        alert("Hellow Readmore testing");
      }
    return (
        <>
            {/* 3rd Section Homepage */}
            <section className='py-12 px-12 lg:py-36 lg:px-36 box-border'>
                <div className="grid grid-cols-12 gap-6 md:gap-4 ">
                    <div className="col-span-12 mb-12 lg:mb-0 md:col-span-12 lg:col-span-4 flex flex-col justify-center ">
                        <p className='text-sm text-black'>Want to book in-person Appointment or Consultation?</p>
                        <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl font-bold'>Book Your Next Visit Now</h2>
                    </div>
                    <div className="col-span-12 mb-12 md:mb-0 md:col-span-6 lg:col-span-4 shadow-lg p-4 rounded-3xl relative w-full h-44">
                        <div className="flex flex-row">
                            <div>
                                <h2 className='text-sm '>Book In-Person Appointment</h2>
                                <p className='text-sm'>200 + Doctors Available</p>
                            </div>
                            <div>
                                <img src="./src/assets/smiling-doctor-with-strethoscope-isolated-grey.png" className='-z-10 absolute bottom-12 right-4 md:-z-10 md:absolute md:right-4 md:bottom-8 lg:-z-10 lg:absolute lg:bottom-12 ' alt="" />
                            </div>
                        </div>
                        <br />
                        <br />
                        <Button text={"Book Appointment"} type={"primary"} onclick_fun={test_button} style={"mt-4 w-full px-4 py-2 text-sm"} />


                    </div>
                    <div className="col-span-12 mb-12 lg:mb-0 md:col-span-6 lg:col-span-4 shadow-lg p-4 rounded-3xl relative w-full h-44">
                        <div className="flex flex-row">
                            <div>
                                <h2 className='text-sm'>Book In-Person Appointment</h2>
                                <p className='text-sm'>200 + Doctors Available</p>
                            </div>
                            <div>
                                <img src="./src/assets/smiling-doctor-with-strethoscope-isolated-grey.png" className='-z-10 absolute bottom-12 right-4  md:-z-10 md:absolute md:right-4 md:bottom-8 lg:-z-10 lg:absolute lg:bottom-12 ' alt="" />
                            </div>
                        </div>
                        <br />
                        <br />
                        <Button text={"Book Appointment"} type={"primary"} onclick_fun={test_button} style={"mt-4 w-full px-4 py-2 text-sm"} />


                    </div>
                </div>
            </section>

        </>
    )
}

export default BookVisitcards
import React from 'react'
import Button from './Button';
function Speciality_Cards() {
    const test_button = () => {
        alert("Hellow Readmore testing");
      }
    return (
       
        <>
            {/* 4rt Section Homepage */}
            <section className='py-12 px-12 lg:py-12 lg:px-36 box-border'>

                <div className="pb-24">
                    <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl font-bold'>We have Experts for 80+ Health Issues</h2>
                    <p className='text-sm text-black'>Choose Speciality and find doctors near you</p>
                </div>
                <div className="grid grid-cols-12 gap-x-2 gap-y-4">
                    <div className="col-span-12 md:col-span-12 lg:col-span-4 mb-4 md:mb-0 flex flex-col justify-center ">
                        <div className="grid grid-cols-12 p-4 shadow-lg rounded-xl">
                            <div className="col-span-4">
                                <img src="./src/assets/ph_heart-bold.png" alt="" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl font-medium'>Cardiologist</h1>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second Card */}

                    <div className="col-span-12 md:col-span-12 lg:col-span-4  mb-4 md:mb-0 flex flex-col justify-center ">
                        <div className="grid grid-cols-12 p-4 shadow-lg rounded-xl">
                            <div className="col-span-4">
                                <img src="./src/assets/ph_brain-fill.png" alt="" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl font-medium'>Neurologist</h1>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Third card */}

                    <div className="col-span-12 md:col-span-12 lg:col-span-4  mb-4 md:mb-0 flex flex-col justify-center ">
                        <div className="grid grid-cols-12 p-4 shadow-lg rounded-xl">
                            <div className="col-span-4">
                                <img src="./src/assets/game-icons_stomach.png" alt="" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl font-medium'>Gastritis</h1>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fourth Card */}

                    <div className="col-span-12 md:col-span-12 lg:col-span-4  mb-4 md:mb-0 flex flex-col justify-center ">
                        <div className="grid grid-cols-12 p-4 shadow-lg rounded-xl">
                            <div className="col-span-4">
                                <img src="./src/assets/ion_glasses-outline.png" alt="" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl font-medium'>Typhoid Fever</h1>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 5th Card */}

                    <div className="col-span-12 md:col-span-12 lg:col-span-4  mb-4 md:mb-0 flex flex-col justify-center ">
                        <div className="grid grid-cols-12 p-4 shadow-lg rounded-xl">
                            <div className="col-span-4">
                                <img src="./src/assets/lungs-icon-isolated-on-white-background-vector.jpg" className='w-1/2' alt="" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl font-medium'>Lungs Issues</h1>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6th card */}

                    <div className="col-span-12 md:col-span-12 lg:col-span-4  mb-4 md:mb-0 flex flex-col justify-center ">
                        <div className="grid grid-cols-12 p-4 shadow-lg rounded-xl">
                            <div className="col-span-4">
                                <img src="./src/assets/mdi_snowflake-thermometer.png" alt="" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl font-medium'>Heat Issues</h1>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center py-12'>
                    <Button text={"Explore All"} type={"primary"} style={"px-8 py-2 text-sm text-white"} />

                </div>

            </section>
        </>
    )
}

export default Speciality_Cards
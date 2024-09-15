import React from 'react'
import Button from './Button'

function AboutSection() {
    const test_button = () => {
        alert("Hellow Readmore testing");
      }
    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 bg-lightprimary'>
                <div className="grid grid-cols-12">
                    <div className="flex flex-col col-span-12 md:col-span-6 gap-6 justify-center">
                        <h1 className='leading-normal font-bold text-2xl md:text-3xl text-primarycolor'>
                            About Us
                        </h1>
                        <h2 className='leading-normal font-medium text:2xl md:text-3xl text-black font-sans'>
                            We Provide the best & seamless platform for Health Experts & Patients to connect!
                        </h2>
                        <p className='text-gray-400 text-xs md:text-sm' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. Phasellus tincidunt ligula rutrum egestas sollicitudi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. Phasellus tincidunt ligula rutrum egestas sollicitudin.
                        </p>
                        <Button text={"Learn More"} type={"primary"} onclick_fun={test_button} style={" w-1/2 md:w-1/4 px-4 py-2  md:px-8 md:py-3 text-sm"} />

                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-center">
                        <img src="./src/assets/About_image.png" className='my-4' alt="" />

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection
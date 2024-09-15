import React from 'react'
import Button from './Button';
import { CiTimer } from "react-icons/ci";
import { RiUserLocationLine } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";
import Mission from './Mission';
import ServicesAboutpage from './ServicesAboutpage';
import Team from './Team';
import PartnersAbout from './PartnersAbout';
import LocationAbout from './LocationAbout';
import ContactBanner from './ContactBanner';
import ServiceQualitybanner from './ServiceQualitybanner';
function About() {
  const test_button = () => {
    alert("Hello Readmore testing");
  }
  return (
    <>
      <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-6'>
            <h2 className='text-2xl md:text-3xl font-bold text-black'><span className='text-primarycolor'>MedLife</span> Pakistan’s One of the Top Digital Healthcare Platform</h2>
            <p className='text-sm md:text-lg text-gray-400'>Providing Efficient Solution for Healthcare industry in Pakistan!</p>
          </div>
          <div className='col-span-12 md:col-span-6'>
            <div className='col-span-12 md:col-span-6 py-4 md:px-4 lg:px-12'>
              <div className='flex flex-row w-full justify-around'>
                <div className='flex flex-col items-center gap-4'>
                  <h5 className='text-primarycolor text-2xl md:text-3xl  font-semibold'>2000 <span className='text-gray-500'>+</span></h5>
                  <p className='text-xs md:text-sm font-medium text-black text-center'>Doctors Available</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <h5 className='text-primarycolor text-2xl md:text-3xl font-semibold'>80 <span className='text-gray-500'>+</span></h5>

                  <p className='text-xs md:text-sm font-medium text-black text-center'>health Specialities</p>
                </div>
                <div className='flex flex-col items-center gap-4 '>
                  <h5 className='text-primarycolor text-2xl md:text-3xl  font-semibold'>6000 <span className='text-gray-500'>+</span></h5>

                  <p className='text-xs md:text-sm font-medium text-black text-center '>Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Startingabout section  */}
      <section className='py-12 px-12 lg:py-24 lg:px-36 box-border bg-lightprimary'>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <img src="./src/assets/About_image.png" className='my-4' alt="" />

          </div>

          <div className="flex flex-col col-span-12 md:col-span-6 gap-0 md:gap-6 justify-center">
            <h1 className='leading-tight md:leading-normal font-bold text-2xl md:text-3xl text-primarycolor'>
              What We Do?
            </h1>
            <h2 className=' leading-tight md:leading-normal font-medium  text-2xl md:text-3xl text-black font-sans'>
              We Provide the best & seamless platform for Health Experts & Patients to connect!
            </h2>
            <p className='text-gray-400  text-xs md:text-sm' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. Phasellus tincidunt ligula rutrum egestas sollicitudi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. Phasellus tincidunt ligula rutrum egestas sollicitudin.
            </p>
            <div className='col-span-12 md:col-span-6 py-4 '>
              <div className="flex flex-row col-span-12 justify-around gap-4 ">
                <div className='flex flex-col items-center gap-4 '>
                  <RiUserLocationLine className='text-primarycolor text-2xl md:text-3xl' />
                  <p className='text-xs md:text-sm font-medium text-gray-400 text-center'>Seamless Booking System</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <CiTimer className='text-primarycolor text-2xl md:text-3xl' />

                  <p className='text-xs md:text-sm font-medium text-gray-400 text-center'>Professional Health Experts</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <MdOutlineEventAvailable className='text-primarycolor text-2xl md:text-3xl' />
                  <p className='text-xs md:text-sm font-medium text-gray-400 text-center'>24/7 Availability</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>


      <Mission />
      <ServicesAboutpage
        style={'flex-col md:flex-row'}
        serviceheading={'Patients'}
        h1={'Search Through Thousands of Doctors'}
        h2={'Get Consultations Online'}
        h3={'Book visits in 3 easy steps'}
        p1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. .'}
        p2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. .'}
        p3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. .'}
      />
      <ServicesAboutpage
        style={'flex-col md:flex-row-reverse'}
        serviceheading={'Health Experts'}
        h1={'Reach Millions of Patients'}
        h2={'Enhanced Patient Management'}
        h3={'Manage Your Schedule'}
        p1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. .'}
        p2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. .'}
        p3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc elementum, fringilla leo et, facilisis nisi. .'}
      />

      <Team/>
      <PartnersAbout/>
      <LocationAbout/>
      <ContactBanner/>
      <ServiceQualitybanner/>
    </>
  )
}

export default About;
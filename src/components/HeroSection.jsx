import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { CiTimer } from "react-icons/ci";
import { RiUserLocationLine } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";
function Herosection() {
  const test_button = () => {
    alert("Hellow Readmore testing");
  }
  return (
    <>
      <section className='py-12 px-12 lg:py-24 lg:px-24 '>
        <div className=' grid grid-cols-12 gap-4 bg-secondarycolor '>
          <div className='col-span-12 flex md:col-span-6 md:px-4 lg:px-12'>
            <div className='flex flex-col justify-center align-middle w-full gap-4'>
              <h1 className='leading-tight md:leading-normal font-bold text-3xl md:text-4xl lg:text-5xl text-black font-sans'>
                Say Hello to Streamlined <br /><span className='text-primarycolor'>Healthcare</span>
              </h1>
              <p className='text-gray-400 text-sm md:text-xl' >
                Revolutionize the way you schedule healthcare with our <br /> innovative doctor appointment system.
              </p>
              <div className='grid grid-cols-12 gap-4'>
                <input type="text" placeholder='Enter City' className='col-span-4 bg-gray-200 p-3 text-xs px-6 rounded-3xl' />
                <input type="text" placeholder='Enter Disease name or Doctor Speciality' className='col-span-8 bg-gray-200 p-3 px-6 text-xs rounded-3xl' />
                <Button text={"Find Doctor"} type={"primary"} onclick_fun={test_button} style={"col-span-12 px-4 py-2 text-sm"} />
                <p className='col-span-12'>Are you a Doctor? <Link><span className='text-primarycolor'>Get Started</span></Link></p>

              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 flex md:px-4 lg:px-12' >
            <div className='flex flex-col justify-center w-full'>
              <img src="./src/assets/Hero_main-image_medlife.png" className='my-4' alt="" />
            </div>
          </div>
        </div>


        <div className='grid md:grid-cols-12 bg-secondarycolor'>
          <div className='col-span-12 md:col-span-6 py-4 md:px-4 lg:px-12'>
            <div className="flex flex-row col-span-12 justify-around">
              <div className='flex flex-col items-center gap-4'>
                <RiUserLocationLine className='text-primarycolor text-xl md:text-3xl' />
                <p className='text-xs md:text-sm font-medium text-gray-400 text-center'>Seamless <br /> Booking System</p>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <CiTimer className='text-primarycolor text-xl md:text-3xl' />

                <p className='text-xs md:text-sm font-medium text-gray-400 text-center'>Professional <br /> Health Experts</p>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <MdOutlineEventAvailable className='text-primarycolor text-xl md:text-3xl' />
                <p className='text-xs md:text-sm font-medium text-gray-400 text-center'>24/7 Availability</p>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 py-4 md:px-4 lg:px-12'>
            <div className='flex flex-row w-full justify-around'>
              <div className='flex flex-col items-center gap-4'>
                <h5 className='text-primarycolor text-xl  md:text-3xl  font-semibold'>2000 <span className='text-gray-500'>+</span></h5>
                <p className='text-xs md:text-sm font-medium text-black text-center'>Doctors Available</p>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <h5 className='text-primarycolor text-xl md:text-3xl font-semibold'>80 <span className='text-gray-500'>+</span></h5>

                <p className='text-xs md:text-sm font-medium text-black text-center'>health Specialities</p>
              </div>
              <div className='flex flex-col items-center gap-4 '>
                <h5 className='text-primarycolor text-xl md:text-3xl  font-semibold'>6000 <span className='text-gray-500'>+</span></h5>

                <p className='text-xs md:text-sm font-medium text-black text-center '>Happy Patients</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
    
      
   


    </>
  )
}

export default Herosection;
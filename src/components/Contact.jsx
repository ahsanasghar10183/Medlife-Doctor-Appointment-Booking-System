import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaLocationPin, FaMessage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import FAQSection from './FAQSection';
import ServiceQualitybanner from './ServiceQualitybanner';
function Contact() {
  return (
    <>
       <section className='py-12 px-12 lg:py-36 lg:px-36 box-border'>
        <div className='grid grid-cols-12 gap-0 md:gap-24'>
          <div className='col-span-12 md:col-span-7'>
              <div>
                  <h2 className='leading-normal text-black text-2xl md:text-3xl font-bold'>Contact</h2>
                  <p className='text-sm text-black'>ExpNeed any help or have something to say? We would love to help you &<br/> hear your thoughts or see the FAQ’s</p>
              </div>
              <div className="w-full">
                <form className="bg-white rounded pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded-3xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Name"/>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded-3xl w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="Enter Your Email"/>
                   
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="contact">
                      Contact
                    </label>
                    <input className="shadow appearance-none border rounded-3xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="phone" placeholder="+92"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                      Your Message / Query 
                    </label>
                    <input className="shadow appearance-none border rounded-3xl w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="textarea" placeholder="Your Message"/>
                  </div>
                  <div >
                    <button className="bg-primarycolor hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline" type="button">
                       Submit
                    </button>
                  
                  </div>
                </form>
               
              </div>
          </div>
          <div className='col-span-12 md:col-span-5 '>
                <div className='pb-12'>
                  <h2 className='leading-normal text-lg  font-bold'>Call our main helpline or Email us</h2>
                  <div className='flex flex-row justify-between pt-4'>
                      <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-white'/></span> <span>+92 300 1234567</span></p>
                      <p className='flex flex-row items-center gap-2 font-medium'><span><FaMessage className='text-white' /></span> <span>info.medlife@gmail.com</span></p>
                   </div>
              </div>
              <div className='flex flex-col bg-primarycolor p-6 px-12 rounded-3xl text-white'>
                <div className='py-4'>
                    <h2 className='leading-normal text-lg  font-bold'>Lahore Office</h2>
                    <div className='flex flex-col'>
                        <p className='flex flex-row items-center gap-2 font-medium'><span><FaLocationPin className='text-white'/></span> <span>Gulberg Town, Block AC, Imtiaz Tower, Office #12</span></p>
                        <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-white' /></span> <span>+92 300 1234567</span></p>
                        <Link href="#" className="underline text-white text-sm">See On Map</Link>
                    </div>
                </div>
                <div className='py-4'>
                    <h2 className='leading-normal text-lg  font-bold'>Islamabad Office</h2>
                    <div className='flex flex-col'>
                        <p className='flex flex-row items-center gap-2 font-medium'><span><FaLocationPin className='text-white'/></span> <span>Gulberg Town, Block AC, Imtiaz Tower, Office #12</span></p>
                        <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-white' /></span> <span>+92 300 1234567</span></p>
                        <Link href="#" className="underline text-white text-sm">See On Map</Link>
                    </div>
                </div>
                <div className='py-4'>
                    <h2 className='leading-normal text-lg  font-bold'>Karachi Office</h2>
                    <div className='flex flex-col'>
                        <p className='flex flex-row items-center gap-2 font-medium'><span><FaLocationPin className='text-white'/></span> <span>Gulberg Town, Block AC, Imtiaz Tower, Office #12</span></p>
                        <p className='flex flex-row items-center gap-2 font-medium'><span><FaPhone className='text-white' /></span> <span>+92 300 1234567</span></p>
                        <Link href="#" className="underline text-white text-sm">See On Map</Link>
                    </div>
                </div>

              </div>
          </div>

        </div>
    </section>
    <FAQSection/>
    <ServiceQualitybanner/>
    </>
  )
}







export default Contact
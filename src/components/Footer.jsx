import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from './IconButton'
import { MdPayments } from 'react-icons/md'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Footerlinks from '/src/data/Links';
function Footer() {
  return (
    <>
      <section className='py-12 px-12 lg:py-24 lg:px-36 bg-primarycolor'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-9 '>
            <div className='grid grid-cols-12 gap-4 '>
              <div className='col-span-6 lg:col-span-3 '>
                <ul>
                  <li className='text-xl text-white font-bold leading-normal md:leading-loose'>Top Specilities</li>
                  {Footerlinks.TopSpecialities.map((Links, index) => {
                    return (
                      <li className=' text-white font-medium leading-relaxed text-xs md:text-sm' key={index}><Link to={Links.Linkurl}>{Links.Linktext}</Link></li>
                    )
                  })}
                </ul>
              </div>

              <div className='col-span-6 lg:col-span-3'>
                <ul>
                <li className='text-xl text-white font-bold leading-normal md:leading-loose'>Top Health Issues</li>
                {Footerlinks.TopHealthIssues.map((Links, index) => {
                    return (
                      <li className=' text-white font-medium leading-relaxed text-xs md:text-sm' key={index}><Link to={Links.Linkurl}>{Links.Linktext}</Link></li>
                    )
                  })}
                </ul>
              </div>
              <div className='col-span-6 lg:col-span-3'>
                <ul>
                <li className='text-xl text-white font-bold leading-normal md:leading-loose'>Company</li>

                {Footerlinks.Company.map((Links, index) => {
                    return (
                      <li className=' text-white font-medium leading-relaxed text-xs md:text-sm' key={index}><Link to={Links.Linkurl}>{Links.Linktext}</Link></li>
                    )
                  })}
                </ul>
              </div>
              <div className='col-span-6 lg:col-span-3'>
                <ul>
                <li className='text-xl text-white font-bold leading-normal md:leading-loose'>Quick Links</li>
                {Footerlinks.QuickLinks.map((Links, index) => {
                    return (
                      <li className=' text-white font-medium leading-relaxed text-xs md:text-sm' key={index}><Link to={Links.Linkurl}>{Links.Linktext}</Link></li>
                    )
                  })}
                </ul>
              </div>

            </div>
          </div>
          <div className='col-span-12 lg:col-span-3 pt-8 pb-4 md:pb-0 md:pt-0'>
            <h1 className='text-lg font-medium text-white leading-loose'>Download MedLife App</h1>
            <div className='flex flex-col gap-4'>
              <IconButton
               type={'secondary'}
                style={'text-white bg-gray-500 bg-opacity-35 hover:bg-gray-600 hover:bg-opacity-35 rounded-xl px-4 py-2 text-lg font-medium'}
                text={"Download from App Store"}
                icon={<FaApple />}
              />
              <IconButton
                type={'secondary'}
                style={'text-white bg-gray-500 bg-opacity-35 hover:bg-gray-600 hover:bg-opacity-35 rounded-xl px-4 py-2 text-lg font-medium'}
                text={"Download from Play Store"}
                icon={<IoLogoGooglePlaystore />}
              />
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Footer
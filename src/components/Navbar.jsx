import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from "react-icons/ri";
import { MdAccountCircle } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

const test_button = () => {
  alert("Hellow Readmore testing");
}
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>

      <nav className="w-full bg-white text-gray-900 md:flex justify-between px-4 md:px-24 lg:px-36 py-4 items-center  border-b-2 shadow-sm">
        <div className='logo-nav md:flex items-center'>
          <div>
            <Link href="#">
              <img src="../src/assets/medlife-high-resolution-logo.png" className='pl-8 lg:p-0 py-4 w-1/3 md:w-1/2' alt="" />
            </Link>
          </div>
          <span href="" className='md:hidden absolute right-8 top-8 sm:top-8' onClick={() => {
            setToggle((prev) => {
              setToggle(!prev);
            })
          }}>
            {toggle ? <RiCloseLine /> : <FaBars />}
          </span>
          <ul className={`list-none cursor-pointer text-gray-900 block md:flex m-0 transition-opacity ease-out duration-500 delay-100 ${toggle ? 'block px-8 mt-8 mb-8' : 'hidden'}`} >
            <li className=' mr-8'><NavLink to="/" className=' pb-0 lg:pb-2 border-b-2 border-primarycolor'>Home</NavLink></li>
            <li className=' mr-8'><NavLink to="/about" className='pb-2' >About</NavLink></li>
            <li className=' mr-8'><NavLink to="/blog" className='pb-2'>Blog</NavLink></li>
            <li className=' mr-8'><NavLink to="/contact" className='pb-2'>Contact</NavLink></li>



          </ul>

        </div>

        <div className={`gap-2 text-gray-900 block md:flex m-0 transition-opacity ease-out duration-500 delay-100 ${toggle ? ' block px-8 mt-8 mb-8' : 'hidden'}`}>
          <Button text={"Account"} type={"secondary"} style={"px-4 py-2 text-sm text-primarycolor"} />
          <button className='px-4 py-2 ml-4 md:ml-0 text-sm text-primarycolor bg-lightprimary rounded-3xl shadow-sm'>Get Started</button>
        </div>

      </nav>


    </>

  )
}

export default Navbar;
import React from 'react'
import { FaRegSave, FaSave } from 'react-icons/fa';
import { FaBookBookmark, FaBookmark, FaShare } from 'react-icons/fa6';

function BlogPost({postdate, catagory, img, title, desc}) {
  return (
    <>
      <div className='flex flex-col shadow p-2 rounded-2xl'>
        <div >
          <img src={img} alt="blog-image" />
        </div>
        <div className='p-4'>
          <div className='flex flex-row items-center justify-between'>
            <div >
              <h1 className='text-sm bg-lightprimary p-2 rounded-lg'>{catagory}</h1>
            </div>
            <div>
              <p className='text-sm text-gray-400 font-medium'>{postdate}</p>
            </div>
          </div>
          <h1 className='text-black font-semibold text-xl leading-normal py-2'>{title}</h1>
          <p className='font-normal text-gray-500'>{desc}</p>
          <div className='flex flex-row items-center justify-between  pt-4'>
            <div >
              <button className='text-primarycolor font-semibold'>Learn More</button>
            </div>
            <div>
             <div className='flex flex-row gap-4'>
                <FaBookmark className='text-primarycolor'/>
                <FaShare  className='text-primarycolor'/>
             </div>
             
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default BlogPost;
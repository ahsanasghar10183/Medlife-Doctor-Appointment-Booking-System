import React from 'react'
import Button from './Button';
import BlogFilters from './BlogFilters';
import BlogsCatagorySections from './BlogsCatagorySections';
import ServiceQualitybanner from './ServiceQualitybanner';
function Blog() {
  const test_button = () => {
    alert("Hellow Readmore testing");
  }
  return (
    <> 
      <section className='py-12 px-12 lg:px-36'>
          <div className=" w-1/2">
            <div className='flex flex-row gap-2'>
              <h1 className=' font-bold text-2xl md:text-3xl pr-2 md:pr-4'>Blog</h1>
              <input type="text" placeholder='Enter Your Keyword to Search i.e Medicine' className='w-48 md:w-full py-2 px-4 bg-lightgreyshade rounded-3xl' />
              <Button text={"Search"} type={"primary"} onclick_fun={test_button} style={" px-4 text-sm"} />


            </div>
          </div>
       </section>
       <BlogFilters/>
      <BlogsCatagorySections/>
       <ServiceQualitybanner/>
    </>
  )
}

export default Blog;
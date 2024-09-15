import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import IconButton from './IconButton';
import { FaArrowPointer } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const BlogsCatagorySections = ()=>{
    const [blogposts, setBlogposts] = useState([]);
    const blogs_url = "http://localhost:8000/blogs";
    useEffect(()=>{
        const fetch_blogs = async () => {
            const res = await fetch (blogs_url);
            const blogs_data = await res.json();
            setBlogposts(blogs_data);

        }
        fetch_blogs();
    },[])
    return(
        <>
        <section className='px-12 lg:px-36 pb-12'>

                <div className="flex flex-row justify-between pb-6 w-full ">
                    <div>
                        <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl font-bold'>Latest</h2>
                        <p className='text-sm text-black'>Explore expert advise and Tips for every health niche</p>
                    </div>
                    <div>
                         <IoIosArrowDroprightCircle className=" text-primarycolor text-3xl md:text-5xl"/>
                         
                    </div>
                    
                </div>
                <div className="grid grid-cols-12 gap-4">
                    {blogposts.map((currval) => {
                        return (
                            
                                <div key={currval.id} className="col-span-12 md:col-span-12 lg:col-span-4  flex flex-col justify-center ">

                                    <BlogPost
                                        
                                        postdate={currval.post_date}
                                        catagory={currval.blog_catagory}
                                        img={currval.blog_image}
                                        title={currval.blog_title}
                                        desc={currval.blog_description}
                                    />
                                </div>
                            
                        )

                    })}


                </div>


             </section>
             <section className='px-12 pb-6 lg:px-36 lg:pb-12'>

             <div className="flex flex-row justify-between pb-6 w-full ">
                    <div>
                        <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl font-bold'>Healthy LifeStyle</h2>
                        <p className='text-sm text-black'>Explore expert advise and Tips for every health niche</p>
                    </div>
                    <div>
                         <IoIosArrowDroprightCircle className=" text-primarycolor text-3xl md:text-5xl"/>
                         
                    </div>
                    
                </div>
                <div className="grid grid-cols-12 gap-4">
                    {blogposts.map((currval) => {
                        return (
                            
                                <div key={currval.id} className="col-span-12 md:col-span-12 lg:col-span-4  flex flex-col justify-center ">

                                    <BlogPost
                                        
                                        postdate={currval.post_date}
                                        catagory={currval.blog_catagory}
                                        img={currval.blog_image}
                                        title={currval.blog_title}
                                        desc={currval.blog_description}
                                    />
                                </div>
                            
                        )

                    })}


                </div>


             </section>
             <section className='px-12 pb-6 lg:px-36 lg:pb-12'>

             <div className="flex flex-row justify-between pb-6 w-full ">
                    <div>
                        <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl font-bold'>Men Health</h2>
                        <p className='text-sm text-black'>Explore expert advise and Tips for every health niche</p>
                    </div>
                    <div>
                         <IoIosArrowDroprightCircle className=" text-primarycolor text-3xl md:text-5xl"/>
                         
                    </div>
                    
                </div>
                <div className="grid grid-cols-12 gap-4">
                    {blogposts.map((currval) => {
                        return (
                            
                                <div key={currval.id} className="col-span-12 md:col-span-12 lg:col-span-4  flex flex-col justify-center ">

                                    <BlogPost
                                        
                                        postdate={currval.post_date}
                                        catagory={currval.blog_catagory}
                                        img={currval.blog_image}
                                        title={currval.blog_title}
                                        desc={currval.blog_description}
                                    />
                                </div>
                            
                        )

                    })}


                </div>


             </section>

             <section className='px-12 pb-6 lg:px-36 lg:pb-12'>
             <div className="flex flex-row justify-between pb-6 w-full ">
                    <div>
                        <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl font-bold'>Women Health</h2>
                        <p className='text-sm text-black'>Explore expert advise and Tips for every health niche</p>
                    </div>
                    <div>
                         <IoIosArrowDroprightCircle className=" text-primarycolor text-3xl md:text-5xl"/>
                         
                    </div>
                    
                </div>
                    <div className="grid grid-cols-12 gap-4">
                        {blogposts.map((currval) => {
                            return (
                                
                                    <div key={currval.id} className="col-span-12 md:col-span-12 lg:col-span-4  flex flex-col justify-center ">

                                        <BlogPost
                                            
                                            postdate={currval.post_date}
                                            catagory={currval.blog_catagory}
                                            img={currval.blog_image}
                                            title={currval.blog_title}
                                            desc={currval.blog_description}
                                        />
                                    </div>
                                
                            )

                        })}


                    </div>


                </section>



       
        </>
    )
}
export default BlogsCatagorySections;
import React from 'react'
import BlogPost from './BlogPost'
import Button from './Button'
import { useState, useEffect } from 'react';
function BlogSection() {
    const test_button = () => {
        alert("Hellow Readmore testing");
    }
    const [blogpostdata, setBlogpostdata] = useState([]);

    useEffect(() => {
        const fetchblogs = async () => {
            const res = await fetch("http://localhost:8000/blogs");
            const data = await res.json();
            setBlogpostdata(data);
        }

        fetchblogs();
    }, [])

    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>

                <div className="pb-24">
                    <h2 className='leading-normal text-primarycolor text-2xl md:text-3xl  font-bold'>We have Experts for 80+ Health Issues</h2>
                    <p className='text-sm text-black'>Choose Speciality and find doctors near you</p>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    {blogpostdata.map((currval) => {
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
                <div className='flex justify-center py-12'>
                    <Button text={"Explore All"} type={"primary"} style={"px-8 py-2 text-sm text-white"} />

                </div>

            </section>
        </>
    )
}

export default BlogSection
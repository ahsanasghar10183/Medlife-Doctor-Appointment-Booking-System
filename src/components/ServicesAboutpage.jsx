import React from 'react';
const ServicesAboutpage = ({style, serviceheading, h1, h2, h3, p1, p2, p3}) => {
    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>
                <div className={`flex ${style} gap-0 md:gap-12`}>
                    <div className=''>
                        <h4 className='text-xl font-medium'>Our Services</h4>
                        <h2 className='text-2xl md:text-3xl text-primarycolor font-bold leading-normal pb-8'>For {serviceheading}</h2>
                        <h3 className='text-black text-lg md:text-2xl font-semibold pt-4 leading-normal'>{h1}</h3>
                        <p className='text-xs md:text-sm'>{p1}</p>
                        <h3  className='text-black text-lg md:text-2xl font-semibold  pt-4 leading-normal'>{h2}</h3>
                        <p className='text-xs md:text-sm'>{p2}</p>
                        <h3  className='text-black text-lg md:text-2xl font-semibold  pt-4 leading-normal'>{h3}</h3>
                        <p className='text-xs md:text-sm'>{p3}</p>

                    </div>
                    <div className=''>
                        <img src="./src/assets/Hero_main-image_medlife.png" className='my-4' alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}
export default ServicesAboutpage;
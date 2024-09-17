import React from 'react'
import Button from './Button'
function CalltoAction() {
    const test_button = () => {
        alert("Hellow Readmore testing");
      }
    return (
        <>
            <section className='py-12 px-12 lg:py-24 lg:px-36 bg-lightprimary'>
                <div className="grid grid-cols-12 gap-4 md:gap-12">
                    <div className="col-span-12 lg:col-span-6 flex justify-center">
                        <img src="./src/assets/Medlife_Mobile_mockup.png" className=' my-4' alt="" />

                    </div>
                    <div className="flex flex-col col-span-12 lg:col-span-6 gap-8 justify-center">
                        <div>
                            <p className='text-black text-sm' >
                                Are You a Certified Doctor?
                            </p>
                            <h1 className='leading-normal font-bold text-2xl md:text-3xl  text-primarycolor'>
                                Join Us Today!
                            </h1>
                        </div>
                        <div className="flex flex-col gap-6 box-border w-full">
                            <div>
                                <h1 className='text-lg text-black font-semibold'>Reach Millions of Patients</h1>
                                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit animi in nemo alias? Porro repudiandae dolor aliquid nihil, dolore temporibus quam sint nam</p>
                            </div>
                            <div>
                                <h1 className='text-lg text-black  font-semibold'>Reach Millions of Patients</h1>
                                <p  className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit animi in nemo alias? Porro repudiandae dolor aliquid nihil, dolore temporibus quam sint nam</p>
                            </div>
                            <div>
                                <h1 className='text-lg text-black  font-semibold'>Reach Millions of Patients</h1>
                                <p  className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit animi in nemo alias? Porro repudiandae dolor aliquid nihil, dolore temporibus quam sint nam</p>
                            </div>

                        </div>
                       <div>
                         <Button text={"Learn More"} type={"primary"} onclick_fun={test_button} style={" w-1/2 md:w-1/4 px-4 py-2 md:px-4 md:py-2 text-sm"} />

                       </div>
                       

                    </div>

                </div>
            </section>
        </>
    )
}

export default CalltoAction
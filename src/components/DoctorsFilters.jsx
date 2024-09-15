import React, { useEffect, useState } from 'react'

const DoctorsFilters = ({pass_filters}) => {
 
    let docfilter= ["city", "speciality", "Disease", "Under-1000", "Available"];
    const[ selectedDocfilters, setSelectedDocFilters] = useState([]);

        const handlefilterButtonclick = (activeFilter)=>{
            setSelectedDocFilters((prevSelectedfiltersval)=>{
                if(prevSelectedfiltersval.includes(activeFilter)){
                    return prevSelectedfiltersval.filter((filterval)=>filterval!==activeFilter)
                }
                else{
                    return [...selectedDocfilters, activeFilter];
                }
            })
        }
        useEffect(()=>{
            pass_filters(selectedDocfilters);
        }),[selectedDocfilters, pass_filters]



    
      
 
    return (
        <>
            <section className='py-8 px-12 lg:py-8 lg:px-36'>
                <div className='grid grid-cols-12 gap-4 grid-flow-row'>
                    <div className='col-span-4 '>
                        <div className='flex flex-row gap-2'>
                            <input type="text" placeholder='city' className='w-3/4 col-span-4 bg-lightgreyshade p-3 text-xs px-6 rounded-3xl' />
                            <input type="text" placeholder='speciality' className='w-full col-span-7 bg-lightgreyshade p-3 text-xs px-6 rounded-3xl' />
                        </div>
                    </div>
                    <div className='col-span-8  flex justify-end'>
                        <ul className='list-none flex flex-row gap-2'>
                            {
                                docfilter.map((docfilterval, index)=>{
                                    return(
                                        
                                        <li key={index}><button onClick={()=>handlefilterButtonclick(docfilterval)} className={`${selectedDocfilters.includes(docfilterval)? "text-white bg-primarycolor": "text-black bg-lightprimary"} text-sm rounded-3xl px-6 py-2 text-black bg-lightprimary border-none}`}>{docfilterval}</button></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            </section>

        </>
    )
}

export default DoctorsFilters;
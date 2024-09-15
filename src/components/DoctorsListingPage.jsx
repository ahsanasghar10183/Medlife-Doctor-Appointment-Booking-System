import React, { useEffect, useState } from 'react'
import DoctorsFilters from './DoctorsFilters'
import DoctorListing from './DoctorListing'
const DoctorsListingPage = () => {
  const [doctorsData, setDoctorsdata ] = useState([]);
  const [activefilters, setActiveFilter] = useState([]);
  const docurl = "http://localhost:8000/Doctors_Info";
    
  useEffect(()=>{
   const fetchDoctors = async ()=>{
       const res = await fetch(docurl);
       const docData = await res.json();
       setDoctorsdata(docData);

   }
   fetchDoctors();
   
  },[])
  return (
    <>
    <DoctorsFilters pass_filters = {setActiveFilter}/>
    <section className='py-12 px-12 lg:py-18 lg:px-36 bg-lightgreyshade'>
       <DoctorListing Doctors_data = {doctorsData} appliedFilters={activefilters}/>

    </section>
    </>
    
  )
}

export default DoctorsListingPage



import React from 'react'
import Herosection from './HeroSection'
import AboutSection from './AboutSection'
import BookVisitcards from './BookVisitcards'
import Speciality_Cards from './Speciality_Cards'
import CalltoAction from './CalltoAction'
import BlogSection from './BlogSection'
import ContactBanner from './ContactBanner'
import ServiceQualitybanner from './ServiceQualitybanner'

function Homepage() {
  return (
    <>
    <Herosection/>
    <AboutSection/>
    <BookVisitcards/>
    <Speciality_Cards/>
    <CalltoAction/>
    <BlogSection/>
    <ContactBanner/>
    <ServiceQualitybanner/>

    </>
  )
}

export default Homepage
import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <>
           <section className='py-12 px-12 lg:py-24 lg:px-36 box-border'>
                <h2 className="text-2xl md:text-3xl text-primarycolor font-bold leading-normal pb-8">Meet the Team Behind Medlife</h2>
                <TeamCard />
            </section>
        </>
    )
}
export default Team;
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const TeamCard = () => {
    const teamarr = [
        {
            MemberImage: "/src/assets/doc-1.jpg",
            Membername: "Sajjad Anwar",
            Memberdesignation: "CEO & Co Founder",
            MemberLinkedin: "abc",
            MemberFacebook: "abc",
            Memberinstagram: "abc"
        },
        {
            MemberImage: "/src/assets/doc_2.png",
            Membername: "Miroillic",
            Memberdesignation: "CTO & Co Founder",
            MemberLinkedin: "abc",
            MemberFacebook: "abc",
            Memberinstagram: "abc"
        },
        {
            MemberImage: "/src/assets/doc-3.jpg",
            Membername: "Steven Bugeja",
            Memberdesignation: "Product Manager",
            MemberLinkedin: "abc",
            MemberFacebook: "abc",
            Memberinstagram: "abc"
        },
        {
            MemberImage: "/src/assets/doc-4.png",
            Membername: "Sarah",
            Memberdesignation: "Business Development",
            MemberLinkedin: "abc",
            MemberFacebook: "abc",
            Memberinstagram: "abc"
        },
        {
            MemberImage: "/src/assets/doc-5.png",
            Membername: "Gareni",
            Memberdesignation: "Operations Head",
            MemberLinkedin: "abc",
            MemberFacebook: "abc",
            Memberinstagram: "abc"
        },
        {
            MemberImage: "/src/assets/doc-6.png",
            Membername: "Uzair",
            Memberdesignation: "Marketing Head",
            MemberLinkedin: "abc",
            MemberFacebook: "abc",
            Memberinstagram: "abc"
        }
    ]
    return (
        <>

            <div className='grid grid-cols-12 gap-8'>
                {

                    teamarr.map((currentval) => {
                        return (
                            <>

                                <div className='col-span-12 sm:col-span-6 md:col-span-4'>
                                    <div className='flex flex-row gap-6'>

                                        <div className=''>
                                            <img src={currentval.MemberImage} alt="" className='w-32 h-32 rounded' />
                                        </div>

                                        <div className='flex flex-col justify-between'>
                                            <div className=''>
                                                <h2 className='text-xl font-bold text-black'>{currentval.Membername}</h2>
                                                <h4 className='text-sm text-black'>{currentval.Memberdesignation}</h4>
                                            </div>
                                            <div className='flex flex-row gap-2'>
                                                <p className='bg-lightgreyshade rounded p-2'><FaFacebook /></p>
                                                <p className='bg-lightgreyshade rounded p-2'><FaInstagram /></p>
                                                <p className='bg-lightgreyshade rounded p-2'> <FaLinkedin /></p>                                            </div>




                                        </div>

                                    </div>
                                </div>


                            </>
                        )


                    })

                }
            </div>



        </>
    )

}
export default TeamCard;
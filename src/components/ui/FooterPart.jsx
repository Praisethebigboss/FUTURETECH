import React from 'react'
import icon from '../../assets/Logo.png'
import FooterCard from './FooterCard'
const FooterPart = () => {
  return (
      <section className='bg-[#1e1e1e] capitalize h-fit p-4 w-full place-items-center'>
    <div className=' text-white font-inter sm:items-center flex xs:gap-3 sm:gap-8 xs:w-[100%] sm:w-[80%] mx-auto py-6 mb-3'>
        <img src={icon} 
         className='xs:h-[3rem] sm:h-[4rem] md:h-[5rem] lg:h-[7rem]'
        alt="" />
        <aside className='w-fit'>
             <button className="bg-[#333333] capitalize w-fit p-1 mb-2 xs:text-xs sm:text-sm lg:text-md ">
             learn,connect and innovate
        </button> 

             <h2 className=' w-fit xs:text-lg sm:text-xl md:text-2xl lg:text-4xl py-3 font-semibold mb-2'>
                be part of the future tech revolution
             </h2>
              <p className='text-gray-500 xs:text-ss sm:text-xs lg:text-sm xs:w-[100%] md:w-[70%]'>
                Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry.
                 Join a dynamic community of forward-thinkers.
              </p>
        </aside>
    </div>
         <section className='bg-[#141414] gap-3 h-fit p-3.5 w-fit rounded-lg flex xs:flex-col md:flex-row'>
             <FooterCard
              title="resources"
              text="Visitors can access a wide range of resources, 
              including ebooks, whitepapers, reports."
             />
             <FooterCard
              title="community forum"
                text="Join our active community forum to discuss industry trends,
                 share insights, and collaborate with peers."
             />
             <FooterCard
               title="tech events"
                text="Stay updated on upcoming tech events, webinars
                , and conferences to enhance your knowledge."
             />
         </section>
        
    </section>
  )
}

export default FooterPart
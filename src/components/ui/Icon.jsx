import React from 'react'
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const Icon = ({icon=1}) => {
  return (
    <div className='bg-[#1e1e1e] flex justify-center gap-1 items-center xs:h-[1.3rem] sm:h-[1.4rem] md:h-[1.7rem] lg:h-[1.9rem] xs:w-[3.6rem] sm:w-[3.8rem]  px-1.5'>
         {
             icon === 1 &&
          <FaTwitter
       className='xs:h-[0.9rem] sm:h-[0.9rem] w-[1rem] md:h-[1rem] '
             />
         }{
            icon === 2 &&
             <FaLinkedin className='xs:h-[0.9rem] sm:h-[0.9rem] w-[1rem] md:h-[1rem]' />
         }{
            icon === 3 &&
             <FaFacebookSquare className='w-[1rem] md:h-[1rem]'/>
         }
             </div>
  )
}

export default Icon
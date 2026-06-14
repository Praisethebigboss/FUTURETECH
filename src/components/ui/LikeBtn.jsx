import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const LikeBtn = ({Like=true,likeCount,handleClick}) => {
  return (
    <button className='bg-[#1e1e1e] flex justify-center gap-1 cursor-pointer items-center xs:h-[1.2rem] sm:h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] xs:w-[3.6rem] sm:w-[3.8rem]  px-1.5 rounded-2xl transition-all ease duration-100 active:opacity-50' onClick={handleClick} type="button">
       {
         Like ?
        <FaHeart
         className='xs:h-[0.7rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem]  text-orange-400'
        />:
        <FaRegHeart className='xs:h-[0.7rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem] ' />
       }
        <p className=' xs:text-ss md:text-xs  text-gray-400'> 
          {likeCount}
        </p>
        
    </button>
  )
}

export default LikeBtn
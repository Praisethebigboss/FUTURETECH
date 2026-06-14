import React from 'react'
import { FaRegComment } from 'react-icons/fa';
const CommentBtn = ({commentCount}) => {
  return (
     <div className='bg-[#1e1e1e] flex justify-center gap-1 items-center xs:h-[1.2rem] sm:h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] xs:w-[3.6rem] sm:w-[4rem]  px-3 rounded-2xl transition-all ease duration-100 active:opacity-50'>
            <FaRegComment
             className='xs:h-[0.7rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem] '
            />
            <p className=' xs:text-ss md:text-xs  text-gray-400'> 
              {commentCount}
            </p>
            
        </div>
  )
}

export default CommentBtn
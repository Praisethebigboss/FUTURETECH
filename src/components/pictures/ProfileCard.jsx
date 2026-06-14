import React from 'react'
const ProfileCard = ({author,categoryText,author_image}) => {
  return (
     <section className=' capitalize flex items-center gap-2 w-[fit] xs:mb-3 md:mb-0 text-white font-inter'>
         <img src={author_image}
          className='xs:h-[2rem] md:h-[2.5rem] lg:h-[3rem]  xs:w-[2rem] md:w-[2.5rem] lg:w-[3rem] object-cover rounded-[100%]'
         alt="" />
            <aside>
                <p className=' xs:text-sm md:text-md py-2'>{author}</p>
                <p className='text-gray-400 xs:text-ss md:text-xs'>{categoryText}</p>
            </aside>
      </section>
  )
}

export default ProfileCard
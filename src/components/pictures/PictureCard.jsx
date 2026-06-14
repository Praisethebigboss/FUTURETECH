import React from 'react'
import ProfileCard from './ProfileCard'
import ProfilePic from './ProfilePic'
const PictureCard = () => {
  return (
    <div className='py-2 mt-4 flex capitalize w-fit bg-[#1e1e1e] p-2 rounded-xl'>
         <aside>
            <p className='text-gray-500 xs:text-xs sm:text-sm py-2 '>download by</p>
            <p className='xs:text-sm sm:text-md'>10K + users</p>
         </aside>
           <ProfilePic/>
    </div>
  )
}

export default PictureCard
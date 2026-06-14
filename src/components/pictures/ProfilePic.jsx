import React from 'react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
const ProfilePic = () => {
  return (
    <div className='p-2 w-fit  rounded-2xl ml-7 flex items-center bg-[#1E1E1E]'>
        <img src={avatar2}
        className=' xs:h-[1.5rem]  md:h-[2rem] mt-1'
        alt="" />
        <img src={avatar1} 
         className='xs:h-[1.5rem] md:h-[2rem] -ml-2 z-3'
        alt="" />
        <img src={avatar3}
         className='xs:h-[1.5rem] md:h-[2rem] -ml-2 z-5'
         alt="" />
        <img src={avatar4}
        className='xs:h-[1.5rem] md:h-[2rem] -ml-2 z-7'
         alt="" />
    </div>
  )
}

export default ProfilePic
import React from 'react'
const ProfileComp = ({image}) => {
  return (
    <div className=' sm:w-[37rem] md:w-[25rem] lg:w-[50rem] p-3 '>
        <img src={image}
         className='rounded-xl'
        alt="" />
    </div>
  )
}

export default ProfileComp
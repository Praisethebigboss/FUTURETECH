import React from 'react'

const LongBtn = ({title,text}) => {
  return (
    <div className='capitalize py-2 px-4 xs:h-[fit] lg:h-[5rem] w-fit bg-[#1e1e1e] rounded-xl'>
        <p className='text-gray-500  xs:text-xs lg:text-sm py-2'>{title}</p>
        <p className='xs:text-sm lg:text-md text-white text-wrap'>{text}</p>
    </div>
  )
}

export default LongBtn
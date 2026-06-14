import React from 'react'

const HeaderCard = ({headText,text}) => {
  return (
    <div className='xs:w-[7rem] sm:w-[8rem] md:w-[10rem] lg:w-[20rem] p-2 md:h-[6rem] lg:h-[10rem] flex justify-center items-center border-1 border-[#1E1E1E] '>
         <aside className='w-fit'>
            <h2 className='xs:text-md sm:text-md md:text-xl lg:text-3xl font-semibold xs:py-1 md:py-2 lg:py-3'>{headText}<span className='text-yellow-500 ml-1 font-semibold'>+</span></h2>
            <p className='capitalize font-light xs:text-xs  lg:text-sm text-gray-400 '>{text}</p>
         </aside>
    </div>
  )
}

export default HeaderCard
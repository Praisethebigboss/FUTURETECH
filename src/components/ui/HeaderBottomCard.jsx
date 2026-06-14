import React from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import experticon from '../../assets/experticon.png'
import latesticon from '../../assets/latesticon.png'
import globalicon from '../../assets/globalicon.png'
const HeaderBottomCard = ({headtext,text,title,subtext,expert=false,latest=false,global=false}) => {
  return (
    <div className='text-white capitalize font-inter flex p-3 justify-evenly  items-center xs:w-[22.5rem] sm:w-[95%] md:w-[24rem] lg:w-[30rem]   border-1 border-[#1E1E1E]'>
       <aside>
   { 
     latest &&
    <img src={latesticon} 
     className='p-2  xs:h-[2.2rem] sm:h-[2.5rem] md:h-[3rem]'
    alt="" />
    }
     { 
     expert &&
    <img src={experticon} 
     className='p-2  xs:h-[2.2rem] sm:h-[2.5rem] md:h-[3rem]'
    alt="" />
    }
     { 
     global &&
    <img src={globalicon} 
     className='p-2  xs:h-[2.2rem] sm:h-[2.5rem] md:h-[3rem]'
    alt="" />
    }
        <h2 className='font-semibold xs:text-sm sm:text-lg md:text-md lg:text-2xl py-2'>{headtext}</h2>
        <p className='text-gray-500 font-light xs:text-xs sm:text-sm md:text-xs lg:text-sm'>{title}</p>
        <p className='text-gray-500 font-light xs:text-xs sm:text-sm md:text-xs lg:text-sm'>{text}</p>
        <p className='text-gray-500 font-light xs:text-xs sm:text-sm md:text-xs lg:text-sm mt-5'>{subtext}</p>
       </aside> 
       <BsArrowUpRightCircleFill
        className='xs:text-[1.5rem] sm:text-[2rem]  lg:text-[2.7rem] text-yellow-400'
       />
    </div>
  )
}

export default HeaderBottomCard
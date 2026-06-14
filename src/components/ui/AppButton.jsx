import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
const AppButton = ({TabText=false,width=false,iconArrow=false,iconEye=false,showColor=false,BtnFunction,BtnText,wide=false}) => {
 
  return (
    <button className= {` capitalize ${width ? "xs:w-[15rem]":"xs:w-[7.5rem]"} sm:w-[8rem] 
    h-fit ${wide ? "md:w-[8.5rem] lg:w-[14rem]" : " md:w-[7.5rem] lg:w-[8.5rem]"} flex justify-center cursor-pointer items-center
     text-center p-3  border-0  ${ TabText ? "transition-all ease-in-out bg-zinc-800 " : ""}
     rounded-md font-semibold  ${showColor ? "bg-[#FFD11A] text-black" : "border-1 border-[#1e1e1e] bg-[#141414] active:bg-zinc-800"}
        transition-all ease-in-out  duration-300 hover:opacity-60 active:scale-95 `} 
        onClick={BtnFunction} type="button">

       <p className='xs:text-ss md:text-xs lg:text-sm'>{BtnText}</p> 
        {
          iconArrow ?
          <BsArrowUpRight
         className={`ml-2  text-yellow-400 ${wide ? "text-[1.2rem]":"text-[1.3rem]"}`}
        /> : ""
        }

        {
          iconEye ?
          <BsEye
         className={`ml-2  text-yellow-400 ${wide ? "text-[1.2rem]":"text-[1.3rem]"} `}
        /> : ""
        }
       
      </button>
  )
}

export default AppButton
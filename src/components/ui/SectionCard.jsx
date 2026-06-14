import React from 'react'

const SectionCard = ({sub_title,sub_text,TextInvert=true}) => {
  return (
     <div>
      {  
       TextInvert ?
        (<aside className="bg-[#1e1e1e] p-2 xs:h-[7.5rem] sm:h-[8rem]  lg:h-[10rem] rounded-lg sm:w-[95%] md:w-[20rem] lg:w-[25rem]">
            <h2 className="xs:text-md sm:text-lg lg:text-2xl font-semibold py-2 mt-3">{sub_title}</h2>
            <p className="xs:text-ss sm:text-xs lg:text-sm text-gray-500 mt-2">
              {sub_text}
            </p>
          </aside>)
          :
          (
             <aside className={`bg-[#1e1e1e] p-2 xs:h-[5rem] sm:h-[6rem]  lg:h-[7rem] rounded-lg  sm:w-[12.3rem] md:w-[9.5rem] lg:w-[20rem]`}>
            <h2 className="xs:text-ss sm:text-xs lg:text-sm font-semibold py-1.5 lg:mt-3 text-gray-500">{sub_title}</h2>
            <p className="xs:text-xs sm:text-sm lg:text-lg text-white mt-1">
              {sub_text}
            </p>
          </aside>
          )

      }
    </div>
  )
}

export default SectionCard
import React from 'react'
import futureicon from "../../assets/quantumicon.png";
import researchicon from "../../assets/spaceicon.png";

const FirstSectionCard = ({title,text,photoicon=true}) => {
  return (
     <aside className="md:w-[70%] lg:w-[50%] text-white h-fit">
                <img
                  src={photoicon ? futureicon : researchicon}
                  className=" xs:h-[2.4rem] xs:w-[2.4rem] md:h-[2rem] lg:h-[3rem] md:w-[2rem] lg:w-[3rem] xs:mb-6 sm:mb-8 md:mb-10 xs:mt-2 md:mt-0"
                  alt=""
                />
                <p className="font-semibold xs:text-md sm:text-lg  lg:text-2xl p-2 w-fit ">
                  {title}
                </p>
                <p className="xs:text-ss sm:text-xs lg:text-sm text-gray-500 sm:w-[85%] mt-3 xs:pb-5 sm:pb-2 md:pb-0">
                  {text}
                </p>
              </aside>
  )
}

export default FirstSectionCard
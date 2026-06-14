import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const FooterCard = ({ title, text }) => {
  const [value, setValue] = useState(false);
  return (
    <div
      className={`font-inter capitalize text-white sm:h-[9rem] md:h-[9.5rem] lg:h-[10rem] p-4 sm:w-[22rem] md:w-[16rem] lg:w-[30rem] bg-[#1e1e1e] rounded-xl mt-4 ${
        value ? " duration-600 ease-in-out -translate-y-4" : "translate-0"
      }`}
      onMouseOver={() => setValue(true)}
      onMouseOut={() => setValue(false)}
    >
      <aside className="py-3 justify-between items-center flex  md:w-[70%] lg:w-[95%]">
        <p className="md:text-md lg:text-xl font-semibold">{title}</p>
        <BsArrowUpRightCircleFill className=" xs:text-[1.7rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.4rem] text-yellow-400" />
      </aside>
      <p className="xs:text-xs lg:text-sm text-gray-500 w-[90%]  lg:leading-7">
        {text}
      </p>
    </div>
  );
};

export default FooterCard;

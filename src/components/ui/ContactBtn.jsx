import React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView } from "../../config/ObserverContext";
const ContactBtn = ({ minus = true, text, title }) => {
  useEffect(() => {
    Aos.init({ duration: "1500" });
  }, []);
  const { ref, visible } = useInView();
  return (
    <section
      className="bg-[#1e1e1e] text-white font-inter p-2 xs:w-[95%] sm:w-[90%] lg:w-[80%] rounded-md"
      ref={ref}
      data-aos={visible ? "fade-up" : "fade-down"}
      data-aos-easing="ease-in-out"
    >
      <div className="flex justify-between p-2">
        <p className="xs:text-sm sm:text-md md:text-lg font-semibold py-1.5">
          {title}
        </p>
        {minus ? (
          <FaMinus className="md:text-md" />
        ) : (
          <FaPlus className="md:text-md text-yellow-500" />
        )}
      </div>
      <p className="text-slate-300 xs:text-xs sm:text-sm  p-2 sm:w-[90%]">
        {text}
      </p>
    </section>
  );
};

export default ContactBtn;

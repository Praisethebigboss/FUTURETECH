import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView } from "../../config/ObserverContext";
import AppButton from "./AppButton";
const PhotoCard = ({ delay,details_title, details_text, details_image }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { ref, visible } = useInView();
  return (
    <div
      className="text-white capitalize font-inter py-3 px-2 sm:px-3 xs:w-[100%] sm:w-[100%]  lg:w-[100%]  border-1 border-[#1e1e1e] bg-[#141414]"
      ref={ref}
      data-aos={visible ? "fade-up":"fade-down"}
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay={delay}
    >
      <img
        src={details_image}
        className="xs:h-[10rem]  md:h-[12rem] object-cover object-top w-full"
        alt=""
      />
      <h2 className="xs:text-xs sm:text-sm lg:text-lg font-semibold py-2 px-1">
        {details_title}
      </h2>
      <p className="xs:text-ss sm:text-xs lg:text-sm  px-1 text-gray-500 font-light">
        {details_text}
      </p>
      <aside className="gap-4 flex items-center">
        <AppButton BtnText="view details" wide={true} width={true} />
        <AppButton BtnText="download PDF now" wide={true} width={true} />
      </aside>
    </div>
  );
};

export default PhotoCard;

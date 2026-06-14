import React from "react";
import conversation from "../../assets/conversationicon.png";
import revolution from "../../assets/revolutionicon.png";
import Rating from "../ui/Rating";
import AppButton from "./AppButton";
import { useEffect } from "react";
import { useInView } from "../../config/ObserverContext";
import Aos from "aos";
import "aos/dist/aos.css";

const PodCastCard = ({ title, host, icon = true }) => {
  const { ref, visible } = useInView();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="md:w-[50%] lg:w-[40%] flex flex-col items-center justify-center border-1 border-[#1e1e1e]"
      ref={ref}
      data-aos-easing="ease-in-out"
      data-aos={visible ? "fade-left" : "fade-right"}
      data-aos-duration="1500"
    >
      <img
        src={icon ? revolution : conversation}
        className="xs:h-[2.5rem] sm:h-[3rem] lg:h-[4rem] my-3 ml-3 "
        alt=""
      />
      <section className="flex p-3 items-center gap-10">
        <p className="text-sm sm:text-md md:text-lg lg:text-xl p-3 capitalize font-semibold">
          {title}
        </p>
        <Rating />
      </section>
      {/* for the gray button */}
      <aside className="bg-[#1e1e1e] p-3 rounded-md w-fit flex items-center gap-12">
        <p className="text-sm flex flex-col capitalize text-gray-400 py-2">
          host<span className="text-white text-md">{host}</span>
        </p>
        <AppButton iconArrow={true} BtnText={"listen podcast"} />
      </aside>
    </div>
  );
};

export default PodCastCard;

import React from "react";
import { useEffect,useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AppButton from "./AppButton";
import { useInView } from "../../config/ObserverContext";
import Icon from "./Icon";

const ContactDiv = ({icon=false, delay,address,firstBtnText,secondBtnText,title }) => {
  const { ref, visible } = useInView();
  useEffect(() => {
    Aos.init({duration:"1500"});
    
  }, []);
   
  return (
    <div
      className="text-white font-inter capitalize bg-[#141414] border-1 border-[#1e1e1e] md:h-[17rem] p-3"
      data-aos={visible ? "fade-up" : "fade-down"}
       ref={ref}
      data-aos-easing="ease-in-out"
      data-aos-delay={delay}
    >
         {
             !icon ?
         <>
      <p className="font-semibold my-4 text-center  sm:text-md lg:text-lg p-3">
        {title}
      </p>
      <p className="text-slate-300 md:w-[75%] lg:w-[50%] p-1 sm:text-xs md:text-sm my-3">
        {address}
      </p>
      <span className="text-slate-300 flex flex-col gap-2">
        <AppButton
         width={true}
          wide={true}
          iconArrow={true}
          BtnText={firstBtnText}
        />
        <AppButton wide={true} width={true} iconArrow={!address} BtnText={secondBtnText} />
      </span>
        </>
        :<>
        <p className="font-semibold my-4 text-center sm:text-md lg:text-lg p-3">
        {title}
      </p>
      <div className="flex gap-2 justify-center p-2">
           <Icon
            icon={1}
           />
                     <Icon
            icon={2}
           /> 
                      <Icon
            icon={3}
           />
      </div>
        
          </>
          }
    </div>
  );
};

export default ContactDiv;

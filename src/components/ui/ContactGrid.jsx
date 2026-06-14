import React from "react";
import podcast from "../../assets/contactaipodcast.png";
import contactQuestion from "../../assets/contactaskedquestion.png";
import AppButton from "./AppButton";
const ContactGrid = ({ firstGrid = true }) => {
  return (
    <div className={`text-white  p-3 font-inter  bg-[#141414] capitalize w-full`}>
      {
         firstGrid?
        <>
           <img src={podcast} className="xs:h-[2.5rem] sm:h-[3rem] lg:h-[4rem] my-3 ml-3 " alt="" />
          <p className="font-semibold xs:text-2xl sm:text-3xl lg:text-5xl md:my-4 lg:my-6 w-[70%] leading-7 sm:leading-13 ml-3">
            get in touch with AI podcasts
          </p>
           </>
          : 
           <>
          <img src={contactQuestion} className="xs:h-[2.5rem] sm:h-[3rem] lg:h-[4rem] my-3 ml-3 " alt="" />
          <h2 className="font-semibold xs:text-2xl sm:text-3xl lg:text-4xl md:my-4 lg:my-6 ml-3">asked question</h2>
          <p className="text-slate-300 xs:text-xs sm:text-sm lg:text-md my-3 ml-3 ">
            If the question is not available on our FAQ section, Feel free to
            contact us personally, we will resolve your respective doubts.
          </p>
            <AppButton BtnText={"ask question"} iconArrow={true} width={true}/>
          </>
    
      }
    </div>
  );
};

export default ContactGrid;

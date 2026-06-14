import React from "react";
import AppButton from "./AppButton";

const MainSectionComp = ({
  btnText,
  showBtn = false,
  BtnGroup=false,
  width = false,
  top_text,
  body_text,
  handleNavigate,
}) => {
  return (
    <div className={`text-white capitalize justify-around flex   xs:items-start sm:items-center font-inter  sm:h-[8rem] md:h-[9rem] lg:h-[10rem] ${BtnGroup ? "w-[100%] xs:h-fit":"w-[95%] xs:h-[7.6rem]"}  xs:flex-col sm:flex-row xs:pl-2 sm:pl-0 xs:mb-8 sm:mb-0`}>
      <figure>
        <button className="bg-[#333333] p-1 mb-2 xs:text-xs sm:text-sm lg:text-md ">
          {top_text}
        </button>
        <p className="xs:text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-2">
          {body_text}
        </p>
      </figure>
      <figure >
        {showBtn ? (
          <AppButton BtnText={btnText} iconArrow={true} width={width}BtnFunction={handleNavigate}  />
        ) : (
          ""
        )}
        {
           BtnGroup && 
         <aside className="flex flex-col sm:flex-row p-2 bg-[#141414] gap-1.5 ">
          <AppButton
            BtnText="whitepapers"
          />
           <AppButton
            BtnText="ebooks"
           />
            <AppButton
             BtnText="reports"
            />
         </aside>
        }
      </figure>
    </div>
  );
};

export default MainSectionComp;

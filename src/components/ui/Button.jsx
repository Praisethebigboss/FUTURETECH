import React, { useState } from "react";
import Google from "../../assets/devicon_google.png";
import { useAuth } from "../../config/AuthContext";
const Button = ({ BtnText, showBlue=true,handleSubmit,disable, googleShow = false, display }) => {
  const{handleGoogle}=useAuth()
    return (
    <>
      {googleShow ? (
        <button
          className={`mx-auto 
            ${disable ? "pointer-events-none opacity-70" : ""}
    xs:w-[45%]     
    sm:w-[50%] 
    md:w-[55%]
    mt-5
     xs:text-xs
      sm:text-sm
       md:text-md
   capitalize
    text-center 
    flex 
    items-center 
    font-semibold
    rounded-sm 
    justify-center
     border-0
     ${showBlue?" bg-blue-700!" :"bg-[#1e1e1e] border-1 border-slate-500"}
    
    h-10 
    duration-200
 transition-all 
 ease-in-out 
 active:scale-95 `}
          onClick={handleSubmit}
          type="button"
        >
          {BtnText}
        </button>
      ) : (
        <button
          className={` ${
            display ? "hidden" : ""
          } 
          mx-auto 
          w-[55%] 
          cursor-pointer
          capitalize 
          text-center 
          flex 
          items-center 
          font-semibold
           rounded-sm 
           justify-center 
           p-2 
           border-0  
           h-11
            bg-[#121212]! 
            transition-all 
            ease-in-out 
            active:scale-95
             xs:text-xs
             sm:text-sm
             md:text-md
            `}
          onClick={handleGoogle}
          type="button"
        >
          <img src={Google} alt="Google" className="mr-3  " />
          continue with google
        </button>
      )}
    </>
  );
};

export default Button;

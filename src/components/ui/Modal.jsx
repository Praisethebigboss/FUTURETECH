import React from "react";
import AppButton from "./AppButton";

const Modal = ({
  modalText,
  classname,
  exitFunction,
  handleClick,
  cancelFunction,
}) => {
  return (
    <div className={`${classname} font-inter`}>
      <div className="w-[12rem] sm:w-[13rem] md:w-[15rem] lg:w-[20rem] h-fit bg-[#1e1e1e] rounded-xl flex flex-col items-center justify-center gap-5 p-3 sm:p-4 md:p-6 lg:p-8 relative shadow-[20px_20px_30px_rgba(0,0,0,0.068)]">
        <div className="w-full h-fit flex flex-col gap-1">
          <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] font-bold text-white">are you sure</p>
          <p className="font-medium text-white text-ss sm:text-xs  lg:text-sm">{modalText}</p>
        </div>
        <div className="w-full flex items-center justify-center gap-2.5">
          <AppButton BtnText={"cancel"} BtnFunction={cancelFunction} />
          <AppButton BtnText={"delete"} BtnFunction={handleClick} />
        </div>
        <button
          className="group flex items-center justify-center bg-transparent border-0 absolute top-0.5 sm:top-2 md:top-3 lg:top-5  xs:right-4 md:right-5 cursor-pointer"
          onClick={exitFunction}
        >
          <svg
            className="fill-[rgb(175,175,175)] transition-all ease duration-200 group-hover:fill-black"
            height="20px"
            viewBox="0 0 384 512"
            onClick={exitFunction}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};


export default Modal;

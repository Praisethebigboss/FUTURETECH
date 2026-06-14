import React from "react";
import SectionCard from "./SectionCard";
import { useRef, useState } from "react";
import AppButton from "./AppButton";
import { FaPlayCircle } from 'react-icons/fa';
import { FaStopCircle } from 'react-icons/fa';
const ResourceCard = ({ showBtn = true,ShowMedia=true,content_image,content_video,content_title,content_text,image_classname }) => {
      const VideoRef=useRef(null)

    const[show,SetShow]=useState("play")
    
      const handlePlay=()=>{
        VideoRef.current?.play()
        SetShow("pause")
      }
      const handlePause=()=>{
        VideoRef.current?.pause()
        VideoRef.current.currentTime=0
        SetShow("play")
      }
  return (
    <section className="text-white bg-[#141414] p-3 h-[fit]   capitalize font-inter">
      {/* for content image and video */}
        <figure className= "xs:h-[10rem] sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full  relative">
             {
                ShowMedia ?
                <img src={content_image}
                 className={`object-cover h-full ${image_classname} `}
                alt="" />
                :
                 <>
                <video className="w-full object-cover h-full" ref={VideoRef}>
                    <source src={content_video} type="video/mp4"/>
                </video>
                 <FaPlayCircle className={`absolute xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2.2rem] bottom-3 left-2 ${show === "play" ? "":"hidden"} `} onClick={handlePlay} />
                 <FaStopCircle className={`absolute xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2.2rem] bottom-3 right-2 ${show === "pause" ? " ":"hidden"}`} onClick={handlePause} />
                  </>

             }
        </figure>
      <div className="flex flex-col sm:flex-row items-center my-3">
        <aside>
          <h2 className="font-semibold  xs:text-sm sm:text-md lg:text-lg py-2 px-1">
           {content_title}
          </h2>
          <p className="text-gray-500 xs:text-ss sm:text-xs lg:text-sm sm:w-[95%] md:w-[90%] lg:w-[80%] p-2">
            {content_text}
          </p>
        </aside>
        {showBtn ? (
          <AppButton
            BtnText="download PDF now"
            wide={true}
            width={true}
            iconArrow={true}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ResourceCard;

import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import { FaStopCircle } from 'react-icons/fa';
import { useRef,useState } from 'react';
const Video = ({video_item}) => {
  const[show,SetShow]=useState("play")
 const  VideoPlayRef=useRef(null)

  const handlePlay=()=>{
    VideoPlayRef.current?.play()
    SetShow("pause")
  }
  const handlePause=()=>{
    VideoPlayRef.current?.pause()
    VideoPlayRef.current.currentTime=0
    SetShow("play")
  }
  return (
    <div  className='relative xs:h-[10rem] sm:h-[13rem] sm: md:h-[14rem] lg:h-[18rem] w-full '>
        <video className='h-full w-full  object-cover rounded-lg'  muted ref={VideoPlayRef}>
            <source src={video_item} type="video/mp4"/>
        </video> 
      <FaPlayCircle className={`absolute xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2.2rem] bottom-3 left-2 ${show === "play" ? "":"hidden"} `} onClick={handlePlay} />
       <FaStopCircle className={`absolute xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[2.2rem] bottom-3 right-2 ${show === "pause" ? " ":"hidden"}`} onClick={handlePause} />
    </div>
  )
}

export default Video
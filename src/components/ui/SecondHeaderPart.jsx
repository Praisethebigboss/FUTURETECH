import React ,{useEffect} from 'react'
import abstractdesign from '../../assets/abstractdesign.png'
import AppButton from './AppButton'
import Aos from "aos";
import "aos/dist/aos.css"
import ProfilePic from '../pictures/ProfilePic'
import { useInView } from '../../config/ObserverContext'
const SecondHeaderPart = () => {
   useEffect(()=>{
        Aos.init()
   },[])
    const { ref, visible } = useInView();
  return (
    <div className='text-white  capitalize  w-full border-l-1 border-[#1E1E1E] xs:mx-auto md:mx-0' ref={ref} data-aos={visible ? "zoom-in" : "zoom-out"} data-aos-delay="800" data-aos-duration="1000">
        <img src={abstractdesign}
         className='opacity-30 xs:h-[15rem] sm:h-[20rem] md:h-[17rem] lg:h-[25rem] '
        alt="" />
        <aside className='xs:ml-7 sm:ml-8 md:ml-9 lg:ml-12 xs:-mt-[13%] sm:-mt-[12%] md:-mt-[10%] w-[fit-content]'>
            {/* for the stacked pic */}
            <ProfilePic/>
            <h2 className='xs:text-sm sm:text-md lg:text-lg py-2'>Explore 1000+ resources</h2>
            <p className='font-sans font-light text-gray-400 py-2 xs:text-ss sm:text-xs  lg:text-sm'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
            <AppButton
             BtnText={"explore resources"}
             iconArrow={true}
             width={true}
            />
        </aside>
    </div>
  )
}

export default SecondHeaderPart
import React,{useEffect} from 'react'
import Form from "../components/form/Form";
import Aos from 'aos';
import "aos/dist/aos.css";
import formimg from '../assets/formimage.png'
import LoaderComp from '../components/ui/LoaderComp'
import { useAuth } from "../config/AuthContext";

const Signup = () => {
    const {loads,user,handleChange,handleSignup,disable}=useAuth()
      useEffect(()=>{
         Aos.init()
      },[])
    return (
     <>
     {/* for loading */}
          { loads ? <LoaderComp/> :""}
    
             {/*for the sign up container  */}
             <section className="flex flex-col ">
    
              {/* first wrapper */}
               <div className=" h-fit  " 
                 data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
               >
                  <img src={formimg}
                   className=" mx-auto xs:w-[97%] sm:w-[95%] md:w-[96%] lg:w-[95%] mt-2 xs:h-[8rem] sm:h-[14rem] md:h-[17rem] lg:h-[21rem] "
                  alt="" />
               </div>
                {/* form wrapper */}
              <div className="flex justify-center mt-3" 
                 data-aos="zoom-in"
                 data-aos-delay="900"
                 data-aos-easing="ease-in-out"
                 data-aos-duration="1500"
              >
          <Form
            ShowText={"signup"}
            blogEditor={false}
            LoginLink={true}
            disable={disable}
            display={false}
            User={user}
            handleChange={handleChange}
            btnSubmit={handleSignup}
            Text="sign up"
          />
           </div>
         </section>
        </>
  )
}

export default Signup
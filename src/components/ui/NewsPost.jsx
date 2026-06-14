import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../config/ObserverContext";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";
import pic from '../../assets/newsimg.png'
import AppButton from "./AppButton";
const NewsPost = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { ref, visible } = useInView();
  const navigate = useNavigate()
  return (
    <div
      ref={ref}
      className="text-white font-semibold font-inter capitalize h-fit md:h-[20rem] p-2 bg-[#141414] border-b-1 border-[#1e1e1e] flex justify-center items-center flex-col  md:flex-row"
      data-aos={visible ? "zoom-in" : "zoom-out"}
      data-aos-duration="1000"
      data-aos-delay="800"
      data-aos-easing="ease-out"
    >
      <img
        src={pic}
        className="sm:h-[11rem] md:h-[12rem] lg:h-[15rem] sm:w-[95%] md:w-[40%] lg:w-[25%] object-cover  rounded-lg"
        alt=""
      />
      <section className="md:ml-5 xs:p-3 md:p-2">
        <h2 className="xs:text-md sm:text-lg lg:text-xl">
          global climate summit addresses urgent climate action
        </h2>
        <p className="text-gray-500 font-light xs:text-ss sm:text-xs lg:text-sm p-2 lg:leading-6 sm:w-[90%] md:w-[85%] lg:w-[80%]">
          World leaders gathered at the Global Climate Summit to discuss urgent
          climate action, emissions reductions, and renewable energy targets.
        </p>
        <aside className="flex  xs:w-[18rem] sm:w-[21rem]  md:w-[19rem] lg:w-[22rem] p-2 mt-3 justify-between items-center">
          <p className="text-gray-500 font-light flex flex-col gap-2 xs:text-ss  sm:text-xs lg:text-sm">
            category<span className="text-white font-medium">environment</span>
          </p>
          <p className="text-gray-500 font-light flex flex-col gap-2 xs:text-ss sm:text-xs lg:text-sm">
            publication date
            <span className="text-white font-medium">october 10,2023</span>
          </p>
          <p className="text-gray-500 font-light flex flex-col gap-2 xs:text-ss sm:text-xs lg:text-sm">
            author<span className="text-white font-medium">jane smith</span>
          </p>
        </aside>
        {/* for the read more */}
        <div className="flex w-full justify-between">
          <figure className="w-[9rem] mt-4 flex justify-between items-center">
            <LikeBtn likeCount={14 + "k"} Like={false} />
            <ShareBtn shareCount={202} />
          </figure>
          <AppButton BtnText="read more" BtnFunction={()=>navigate('/')} />
        </div>
      </section>
    </div>
  );
};

export default NewsPost;

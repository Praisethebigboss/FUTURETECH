import React from "react";
import Video from "./Video";
import mars from "../../assets/marsvideo.mp4";
import invest from "../../assets/investment.mp4";
import { useInView } from "../../config/ObserverContext";
import mental from "../../assets/mental.mp4";
import blockchain from "../../assets/blockchain.mp4";
const VideoComp = () => {
  const { ref, visible } = useInView();
  return (
    <>
      <section
        className="flex flex-col xs:p-2 sm:p-0  md:ml-0 xs:w-[23rem] sm:w-[30rem] md:w-[85%] lg:w-[80%] capitalize "
        ref={ref}
        data-aos={visible ? "fade-up" : "fade-down"}
          data-aos-easing="ease-in-out"
        data-aos-duration="2000"
      >
        <Video video_item={mars} />
        <div className="">
          <h2 className="xs:text-sm sm:text-md lg:text-xl font-semibold text-white py-2 w-fit">
            mars exploration:unveiling alien landscapes
          </h2>
          <p className="text-gray-500 xs:text-ss md:text-xs lg:text-sm font-light sm:leading-5 lg:leading-7 ">
            Embark on a journey through the Red Planet's breathtaking landscapes
            and uncover the mysteries of Mars.
          </p>
        </div>
      </section>
      {/* second grid */}
      <section
        className="flex flex-col xs:p-2 sm:p-0  md:ml-0 xs:w-[23rem] sm:w-[30rem] md:w-[85%] lg:w-[80%] capitalize "
        ref={ref}
        data-aos={visible ? "fade-up" : "fade-down"}
        data-aos-duration="2000"
         data-aos-easing="ease-in-out"
        data-aos-delay="800"
      >
        <Video video_item={blockchain} />
        <div className="">
          <h2 className="xs:text-sm sm:text-md lg:text-xl font-semibold text-white py-2 w-fit">
            blockchain explained: a revolution in france
          </h2>
          <p className="text-gray-500 xs:text-ss md:text-xs lg:text-sm font-light sm:leading-5 lg:leading-7 ">
            Delve into the world of blockchain technology and its transformative
            impact on the financial industry.
          </p>
        </div>
      </section>
      {/* third column */}
      <section
        className="flex flex-col xs:p-2 sm:p-0  md:ml-0 xs:w-[23rem] sm:w-[30rem] md:w-[85%] lg:w-[80%] capitalize "
        ref={ref}
        data-aos={visible ? "fade-up" : "fade-down"}
        data-aos-duration="2000"
         data-aos-easing="ease-in-out"
        data-aos-delay="1300"
      >
        <Video video_item={mental} />
        <div className="">
          <h2 className="xs:text-sm sm:text-md lg:text-xl font-semibold text-white py-2 w-fit">
            breaking the silence: mental health awareness
          </h2>
          <p className="text-gray-500 xs:text-ss md:text-xs lg:text-sm font-light sm:leading-5 lg:leading-7 ">
            An exploration of the importance of mental health awareness and the
            initiatives reshaping workplaces for employee well-being.
          </p>
        </div>
      </section>
      {/* fourth column */}
      <section
        className="flex flex-col xs:p-2 sm:p-0  md:ml-0 xs:w-[23rem] sm:w-[30rem] md:w-[85%] lg:w-[80%] capitalize "
        ref={ref}
        data-aos={visible ? "fade-up" : "fade-down"}
        data-aos-duration="2000"
         data-aos-easing="ease-in-out"
        data-aos-delay="1800"
      >
        <Video video_item={invest} />
        <div className="">
          <h2 className="xs:text-sm sm:text-md lg:text-xl font-semibold text-white py-2 w-fit">
            revolutionizing investment strategies
          </h2>
          <p className="text-gray-500 xs:text-ss md:text-xs lg:text-sm font-light sm:leading-5 lg:leading-7 ">
            An in-depth look at global efforts to conserve biodiversity and
            safeguard endangered species from extinction.
          </p>
        </div>
      </section>
    </>
  );
};

export default VideoComp;

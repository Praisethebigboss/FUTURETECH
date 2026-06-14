import React from "react";
import futureicon from "../../assets/futureicon.png";
import researchicon from "../../assets/researchicon.png";
import SectionCard from "./SectionCard";
import { useInView } from "../../config/ObserverContext";
const Main_Firstsection = ({
  first_card = true,
  photoicon = true,
  title,
  text,
}) => {
  const { ref, visible } = useInView();
  return (
    <>
      <section
        className="bg-[#141414] font-inter capitalize text-white border-1 border-[#1E1E1E] flex justify-around h-[fit] xs:flex-col md:flex-row "
        ref={ref}
        data-aos={visible ? "fade-up" : "fade-down"}
        data-aos-duration="2000"
      >
        <div className=" border-[#1e1e1e] md:w-[45%] lg:w-[50%] flex flex-col justify-center items-center xs:pl-3 md:pl-0 xs:border-b-1 md:border-r-1 ">
          <aside className="w-fit">
            <img
              src={photoicon ? futureicon : researchicon}
              className=" xs:h-[2.4rem] xs:w-[2.4rem] md:h-[2rem] lg:h-[3rem] md:w-[2rem] lg:w-[3rem] xs:mb-6 sm:mb-8 md:mb-10 xs:mt-2 md:mt-0"
              alt=""
            />
            <p className="font-semibold xs:text-md sm:text-lg  lg:text-2xl p-2 w-fit ">
              {title}
            </p>
            <p className="xs:text-ss sm:text-xs lg:text-sm text-gray-500 w-[80%] mt-3 xs:pb-5 sm:pb-2 md:pb-0">
              {text}
            </p>
          </aside>
        </div>
        {first_card ? (
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 p-3 gap-6 ">
            <SectionCard
              sub_title={"quantity"}
              sub_text="Over 1,000 articles on emerging tech trends and breakthroughs."
            />
            <SectionCard
              sub_title={"variety"}
              sub_text="Articles cover fields like AI, robotics, biotechnology, and more."
            />
            <SectionCard
              sub_title={"frequency"}
              sub_text="Fresh content added daily to keep you up to date."
            />
            <SectionCard
              sub_title={"authoritative"}
              sub_text="Written by our team of tech experts and industry professionals."
            />
          </div>
        ) : (
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 p-3 gap-6 ">
            <SectionCard
              sub_title="depth"
              sub_text="500+ research articles for in-depth understanding."
            />
            <SectionCard
              sub_title="graphics"
              sub_text="Visual aids and infographics to enhance comprehension."
            />
            <SectionCard
              sub_title="trends"
              sub_text="Explore emerging trends in future technology research."
            />
            <SectionCard
              sub_title="contributors"
              sub_text="Contributions from tech researchers and academics."
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Main_Firstsection;

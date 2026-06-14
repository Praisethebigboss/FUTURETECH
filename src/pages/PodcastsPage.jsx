import React from "react";
import NavBar from "../components/layouts/NavBar";
import TextHeader from "../components/ui/TextHeader";
import { useMediaQuery } from "react-responsive";
import ResourceCard from "../components/ui/ResourceCard";
import MainSectionComp from "../components/ui/MainSectionComp";
import SectionCard from "../components/ui/SectionCard";
import PodCastCard from "../components/ui/PodCastCard";
import cyberAI from "../assets/cyberAI.mp4";
import visualAI from "../assets/visualAI.mp4";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import { useInView } from "../config/ObserverContext";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Video from "../components/ui/Video";
import AppButton from "../components/ui/AppButton";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
const PodcastsPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { ref, visible } = useInView();
  const isMobile = useMediaQuery({ query: "(max-width:910px)" });
  // mapping video
  const videoArray = [
    {
      video: video1,
      videoheadtext: "AI in entertainment",
      videodelay: "700",
      videotext:
        "david smith as they explore the influence of AI in the entertainment industry",
    },
    {
      video: video4,
      videoheadtext: "AI in healthcare",
      videodelay: "1200",
      videotext:
        "Dr.lisa adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care",
    },
    {
      video: video2,
      videoheadtext: "AI Ethics",
      videodelay: "1600",
      videotext:
        "explore the ethical dilemmas and considerations surrounding AI with gust speaker Dr.Micheal turner",
    },
    {
      video: video3,
      videoheadtext: "machine learning explained",
      videodelay: "1800",
      videotext:
        "dive into the intricacies of machine learning with AI expert Sarah davis,in this episode",
    },
    {
      video: video5,
      videoheadtext: "AI and the future of work",
      videodelay: "2000",
      videotext:
        "Dr.olivia white joins john parker to discuss the evolving role of AI in the workplace",
    },
    {
      video: video6,
      videoheadtext: "AI in education",
      videodelay: "2200",
      videotext:
        "explore the role of AI in education as emily turner discusses how AI is transforming he learning experience",
    },
  ];
  return (
    <>
      <NavBar />
      <section className=" text-white font-inter bg-[#1e1e1e] font-semibold xs:mt-26 sm:mt-32 lg:mt-37">
        <TextHeader
          margin={true}
          news_header="unlock the world of artificial intelligence through podcasts"
          news_text={
            "Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
          }
        />
        {/* for the first video body  */}
        <div className="bg-[#141414] capitalize flex mt-3 flex-col md:flex-row">
          <PodCastCard title="AI revolution" host="dr sarah mitchell" />
          <aside
            ref={ref}
            data-aos-easing="ease-in-out"
            data-aos={visible ? "fade-in" : "fade-out"}
            data-aos-delay="900"
            data-aos-duration="1500"
            className="md:w-[50%] lg:w-[60%] flex flex-col items-center justify-center border-1 border-[#1e1e1e] p-5 gap-5 "
          >
            <ResourceCard
              ShowMedia={false}
              content_video={cyberAI}
              showBtn={false}
              image_classname="xs:h-[10rem]  sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full "
              content_title="Delves into the transformative impact of AI"
              content_text="Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more."
            />
            <figure className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 ">
              <SectionCard
                TextInvert={false}
                sub_title="total episodes"
                sub_text="50"
              />
              <SectionCard
                TextInvert={false}
                sub_title="average episodes length"
                sub_text="30 mins"
              />
              <SectionCard
                TextInvert={false}
                sub_title="release frequency"
                sub_text="weekly"
              />
            </figure>
          </aside>
        </div>
        {/* second video body */}
        <div className="bg-[#141414] capitalize flex mt-3 flex-col md:flex-row">
          <PodCastCard
            icon={false}
            title="AI conversation"
            host="Mark anderson"
          />
          <aside
            ref={ref}
            data-aos-easing="ease-in-out"
            data-aos={visible ? "fade-in" : "fade-out"}
            data-aos-delay="900"
            data-aos-duration="1500"
            className="md:w-[50%] lg:w-[60%] flex flex-col items-center justify-center border-1 border-[#1e1e1e] p-5 gap-5 "
          >
            <ResourceCard
              ShowMedia={false}
              content_video={visualAI}
              showBtn={false}
              image_classname="xs:h-[10rem]  sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full "
              content_title="Engage in thought-provoking conversations with leading experts."
              content_text="Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts."
            />
            <figure className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 ">
              <SectionCard
                TextInvert={false}
                sub_title="total episodes"
                sub_text="40"
              />
              <SectionCard
                TextInvert={false}
                sub_title="average episodes length"
                sub_text="40 mins"
              />
              <SectionCard
                TextInvert={false}
                sub_title="release frequency"
                sub_text="monthly"
              />
            </figure>
          </aside>
        </div>
        {/* main divide section */}
        <MainSectionComp
          top_text={"stay informed with fresh content"}
          body_text={"latest podcast episodes"}
        />
        {/* for the multiple videos */}
        <div
          className={`bg-[#141414] grid grid-cols-1 sm:grid-cols-2 ${
            isMobile ? " place-items-center md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"
          }  `}
        >
          {videoArray.map((item, index) => (
            <aside
              key={index}
              className=" p-3 sm:w-[20rem] md:w-[18rem] lg:w-[90%] h-fit"
              ref={ref}
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              data-aos-delay={item.videodelay}
              data-aos={visible ? "fade-left" : "fade-right"}
            >
              <Video video_item={item.video} />
              <h2 className="text-white font-semibold  text-smsm:text-md lg:text-lg my-3 p-3">
                {item.videoheadtext}
              </h2>
              <p className="text-slate-400 font-medium  text-ss sm:text-xs lg:text-sm my-4 p-3">
                {item.videotext}
              </p>
              <AppButton
                wide={true}
                BtnText={"listen podcast"}
                iconArrow={true}
                BtnFunction={() => window.open("#", "_blank")}
              />
            </aside>
          ))}
        </div>
        {/* footer partt  */}
         <FooterPart/>
         <Footer/>
      </section>
    </>
  );
};

export default PodcastsPage;

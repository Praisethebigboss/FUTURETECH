import React, { useEffect } from "react";
import NavBar from "../components/layouts/NavBar";
import { useInView } from "../config/ObserverContext";
import Aos from "aos";
import "aos/dist/aos.css";
import paper from "../assets/quantumpapers.png";
import techpic from "../assets/techtrends.png";
import spacebook from "../assets/spacebooks.png";
import AI from "../assets/space.jpg";
import computing from "../assets/aiintelligence.jpg";
import SectionCard from "../components/ui/SectionCard";
import TextHeader from "../components/ui/TextHeader";
import HeaderCard from "../components/ui/HeaderCard";
import MainSectionComp from "../components/ui/MainSectionComp";
import ResourceCard from "../components/ui/ResourceCard";
import FirstSectionCard from "../components/ui/FirstSectionCard";
import PhotoCard from "../components/ui/PhotoCard";
import FooterPart from '../components/ui/FooterPart'
import Footer from '../components/layouts/Footer'
const ResourcesPage = () => {
  const { ref, visible } = useInView();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        <TextHeader
          news_header="unlock a world of knowledge"
          margin={true}
          news_text="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
        />
        <div
          className="grid grid-cols-2 sm:grid-cols-4 bg-[#141414] text-white font-inter place-items-center"
          data-aos={visible ? "fade-left" : "fade-right"}
          data-aos-duration="1500"
          data-aos-delay="800"
          data-aos-easing="ease-in-out"
          ref={ref}
        >
          <HeaderCard headText="300" text="resources available" />
          <HeaderCard headText="12k" text="total downloads" />
          <HeaderCard headText="10k" text="active users" />
          <HeaderCard headText="100" text="countries access our content" />
        </div>
        <MainSectionComp
          BtnGroup={true}
          top_text="dive into the details"
          body_text="in-Depth Reports and Analysis"
        />
        {/* grid layout */}
        <section className=" p-3 h-[fit] bg-[#141414] font-inter capitalize text-white ">
          <div
            className="flex flex-col md:flex-row  justify-center items-center "
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <FirstSectionCard
              photoicon={false}
              title="quantum computing whitepapers"
              text="An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing."
            />
            <aside>
              <ResourceCard
                content_image={computing}
                image_classname="xs:h-[10rem]  sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full "
                content_title="quantum computing whitepaper"
                content_text="An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining."
              />
              <figure className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
                <SectionCard
                  TextInvert={false}
                  sub_title="publication date"
                  sub_text="july 2023"
                />
                <SectionCard
                  TextInvert={false}
                  sub_title="category"
                  sub_text="quantum computing"
                />
                <SectionCard
                  TextInvert={false}
                  sub_title="author"
                  sub_text="dr.quantum"
                />
              </figure>
            </aside>
          </div>
          {/* second row */}
          <div
            className="flex flex-col md:flex-row justify-center items-center"
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <FirstSectionCard
              title="space exploration whitepaper"
              text="Explores Mars colonization, asteroid resource potential, and space tourism."
            />
            <aside>
              <ResourceCard
                content_image={AI}
                image_classname="xs:h-[10rem]  sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full "
                content_title="space exploration whitepapers"
                content_text="An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining."
              />
              <figure className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
                <SectionCard
                  TextInvert={false}
                  sub_title="publication date"
                  sub_text="september 2023"
                />
                <SectionCard
                  TextInvert={false}
                  sub_title="category"
                  sub_text="space exploration"
                />
                <SectionCard
                  TextInvert={false}
                  sub_title="author"
                  sub_text="futuretech DMsion"
                />
              </figure>
            </aside>
          </div>
        </section>
        {/* for the photo card */}
        <figure className="lg:px-3 w-full bg-[#141414] grid place-items-center grid-cols-1 sm:grid-cols-3 ">
          <PhotoCard
            details_text=" An ebook that predicts upcoming technology trends for the next year,
        including AI developments"
            details_title="futuretech trends 2024"
            details_image={techpic}
          />
          <PhotoCard
            details_title="space exploration ebook"
            details_text="An ebook that predicts upcoming technology trends for the next year, including AI developments"
            details_image={spacebook}
            delay={"900"}
          />
          <PhotoCard
           details_image={paper}
            delay={"1300"}
            details_title="quantum computing whitepapers"
            details_text="An in-depth whitepaper exploring the principles, applications and uses of the processes from it"
          />
        </figure>
        {/* footer section */}
        <FooterPart/>
         <Footer/>
      </section>
    </>
  );
};

export default ResourcesPage;

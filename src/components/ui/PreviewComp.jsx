import React from "react";
import AppButton from "./AppButton";
import PictureCard from "../pictures/PictureCard";
import LongBtn from "./LongBtn";
import ProfileComp from "../pictures/ProfileComp";
import picture from "../../assets/picture.png";
import picture2 from "../../assets/picture2.png";
import ebookicon from "../../assets/ebookicon.png";
import { useInView } from "../../config/ObserverContext";
import papericon from "../../assets/newspapericon.png";

const PreviewComp = ({ itemShow = true }) => {
  const { ref, visible } = useInView();
  return (
    <div
      className="font-inter flex text-white capitalize bg-[#141414] w-full h-fit xs:flex-col md:flex-row"
      ref={ref}
      data-aos={visible ? "fade-down" : "fade-up"}
    >
      {itemShow ? (
        <>
          <section className="xs:w-[95%] md:w-[45%] flex flex-col justify-center pl-5 py-4">
            <img
              src={ebookicon}
              alt=""
              className=" xs:h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[4rem] xs:w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[4rem] mb-3"
            />
            <h2 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl font-semibold py-3">
              ebooks
            </h2>
            <p className="w-[75%] xs:text-ss sm:text-xs md:text-sm text-gray-500 py-2 mb-4">
              Explore our collection of ebooks covering a wide spectrum of
              future technology topics.
            </p>
            <AppButton
              wide={true}
              iconArrow={true}
              BtnText={"download ebooks now"}
            />
            <PictureCard />
          </section>
          <section className="p-4 xs:w-full sm:w-[95%] md:w-[55%] sm:mx-auto md:mx-0">
            <aside className="flex xs:items-start sm:items-center  xs:flex-col sm:flex-row">
              <p className=" text-center  sm:text-sm  lg:text-md px-2">
                variety of topics
              </p>
              <p className="text-gray-500 xs:text-ss md:text-xs lg:text-sm">
                Topics include AI in education (25%), renewable energy (20%),
                healthcare (15%), space exploration (25%), and biotechnology
                (15%).
              </p>
            </aside>
            <ProfileComp image={picture} />
            {/* next row */}
            <section className="flex w-fit gap-7  mb-4 lg:items-center xs:flex-col lg:flex-row">
              <LongBtn title={"total ebooks"} text={"over 100 ebooks"} />
              <figure className="flex xs:w-[21.5rem] sm:w-[35rem] md:w-[25rem] lg:w-[40rem]  p-3 rounded-xl bg-[#1e1e1e] items-center  justify-between ">
                <LongBtn
                  title={"download formats"}
                  text={"PDF format for access"}
                />
                <AppButton BtnText={"preview"} iconEye={true} />
              </figure>
            </section>

            <LongBtn
              title="average author expertise"
              text="Ebooks are authored by renowned experts with an average of 15 years of experience"
            />
          </section>
        </>
      ) : (
        <>
          <section
            className="xs:w-[95%] md:w-[45%] flex flex-col justify-center pl-5 py-4"
            ref={ref}
            data-aos={visible ? "fade-down" : "fade-up"}
            data-aos-duration={800}
          >
            <img
              src={papericon}
              alt=""
              className=" xs:h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[4rem] xs:w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[4rem] mb-3"
            />
            <h2 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl font-semibold py-3">
              whitepapers
            </h2>
            <p className="w-[75%] xs:text-ss sm:text-xs md:text-sm text-gray-500 py-2 mb-4">
              Dive into comprehensive reports and analyses with our collection
              of whitepapers.
            </p>
            <AppButton
              wide={true}
              iconArrow={true}
              BtnText={"download whitepapers now"}
            />
            <PictureCard />
          </section>
          <section className="p-4 xs:w-full sm:w-[95%] md:w-[55%] sm:mx-auto md:mx-0">
            <aside className="flex xs:items-start sm:items-center  xs:flex-col sm:flex-row">
              <p className=" text-center  sm:text-sm  lg:text-md px-2">
                topics coverage
              </p>
              <p className="text-gray-500 xs:text-ss md:text-xs lg:text-sm">
                Whitepapers cover quantum computing (20%), AI ethics (15%),
                space mining prospects (20%), AI in healthcare (15%), and
                renewable energy strategies (30%).
              </p>
            </aside>
            <ProfileComp image={picture2} />
            {/* next row */}
            <section className="flex w-fit gap-7  mb-4 lg:items-center xs:flex-col lg:flex-row">
              <LongBtn
                title={"total whitepapers"}
                text={"over 50 whitepapers"}
              />
              <figure className="flex xs:w-[21.5rem] sm:w-[35rem] md:w-[25rem] lg:w-[40rem]  p-3 rounded-xl bg-[#1e1e1e] items-center  justify-between ">
                <LongBtn
                  title={"download formats"}
                  text={"PDF format for access"}
                />
                <AppButton BtnText={"preview"} iconEye={true} />
              </figure>
            </section>

            <LongBtn
              title="average author expertise"
              text="Whitepapers are authored by subject matter experts
           with an average of 20 years of experience."
            />
          </section>
        </>
      )}
    </div>
  );
};

export default PreviewComp;

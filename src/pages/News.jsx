import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/Firebase";
import { getDoc, doc } from "firebase/firestore";
import NavBar from "../components/layouts/NavBar";
import { useInView } from "../config/ObserverContext";
import Aos from "aos";
import "aos/dist/aos.css";
import AppButton from "../components/ui/AppButton";
import LikeBtn from "../components/ui/LikeBtn";
import CommentBtn from "../components/ui/CommentBtn";
import ShareBtn from "../components/ui/ShareBtn";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
import LoaderComp from "../components/ui/LoaderComp";
// for the images
import AI from "../assets/aiintelligence.jpg";
import environment from "../assets/environment.jpg";
import biotech from "../assets/biotech.jpg";
import health from "../assets/newscol3.png";
import politics from "../assets/newcol1.png";
import space from "../assets/space.jpg";
import sports from "../assets/spacebooks.png";
import tech from "../assets/newscol2.png";
import quantum from "../assets/quantumpapers.png";
import energy from "../assets/energy.jpg";


const News = () => {
  const { id } = useParams();
  useEffect(() => {
    Aos.init();
  }, []);
  const { ref, visible } = useInView();
  const [readmore, setReadmore] = useState(false);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  // to get the  news post data
  useEffect(() => {
    const fetchData = async ()=> {
      try {
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNews(docSnap.data());
        } else {
          console.log("No such document!");
          setNews(null);
        }
        setLoading(false);
      } catch (error) {
        console.log("error fetching news post:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? <LoaderComp /> : ""}
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37 font-inter text-white capitalize">
        {/* for the heading */}
        <p className="mx-auto font-semibold text-lg sm:text-2xl md:text-4xl w-fit p-2 my-2.5">
          news article
        </p>
        {/* for the category image */}
        <div className="h-fit relative my-4">
          <img
            className="xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover"
            src={
              news?.category === "politics"
                ? politics
                : news?.category === "technology"
                ? tech
                : news?.category === "health"
                ? health
                : news?.category === "sports"
                ? sports
                : news?.category === "environment"
                ? environment
                : news?.category === "biotech"
                ? biotech
                : news?.category === "space"
                ? space
                : news?.category === "energy"
                ? energy
                : news?.category === "quantum computing"
                ? quantum
                : AI
            }
          />
          {/* for the blog post introduction */}
          <p className="font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl absolute xs:bottom-0 sm:bottom-2 md:bottom-3 lg:bottom-5 flex justify-self-center xs:p-1 md:p-2 w-fit text-center ">
            {news?.title}
          </p>
        </div>
        <section className="flex xs:flex-col sm:flex-row  h-fit w-full p-5  bg-[#141414]">
          {/* for the blogpost reading articles */}
          <figure className=" xs:w-[100%] sm:w-[50%] h-fit border-r-1 border-[#1e1e1e]">
            <div
              className="h-[fit] p-3 border-1 border-[#1e1e1e] relative  "
              ref={ref}
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-down" : "fade-up"}
              data-aos-duration="2000"
            >
              <h2 className=" xs:text-sm md:text-md lg:text-lg py-1.5 sm:py-3 ">
                {news?.category}
              </h2>
              <p
                className="xs:text-ss sm:text-xs lg:text-sm font-light text-gray-400 sm:w-[90%] md:leading-5 lg:leading-6 "
                dangerouslySetInnerHTML={{
                  __html: readmore
                    ? news?.content
                    : news?.content.slice(0, 150) + "...",
                }}
              ></p>

              <button className="w-fit flex justify-self-center absolute sm:-bottom-8 ">
                <AppButton
                  BtnText={`${readmore ? "see less " : "read full blog"}`}
                  wide={true}
                  BtnFunction={() => setReadmore(!readmore)}
                />
              </button>
            </div>
          </figure>
          {/* for the likes and publication of date */}
          <figure
            className="flex flex-col mt-7.5 sm:mt-0 sm:w-[50%]"
            ref={ref}
            data-aos-delay="1200"
            data-aos={visible ? "fade-down" : "fade-up"}
            data-aos-duration="2000"
          >
            <div className="flex justify-around xs:w-[19rem] sm:w-[15rem] lg:w-[17rem] h-[4rem] items-center mx-auto p-2 mt-4">
              <LikeBtn likeCount={news?.likes} Like={false} />
              <CommentBtn commentCount={news?.comment} />
              <ShareBtn shareCount={news?.shares} />
            </div>
            <div className="flex flex-row xs:w-[20rem] sm:w-[70%] md:w-[50%] lg:w-[50%] justify-between mx-auto ">
              <figure className="">
                <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                  publication date
                </p>
                <p className="py-2 xs:text-sm lg:text-md">{news?.createdAt?.toDate?.().toLocaleDateString() || news?.createdAt}</p>
              </figure>
              <figure>
                <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                  category
                </p>
                <p className="py-2 xs:text-sm lg:text-md">{news?.category}</p>

                <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                  author name
                </p>
                <p className="py-2 xs:text-sm lg:text-md">
                  <span className="py-2 xs:text-sm lg:text-md">
                    {news?.author}
                  </span>
                </p>
              </figure>
            </div>
          </figure>
        </section>
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default News;

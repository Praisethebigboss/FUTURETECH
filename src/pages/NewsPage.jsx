import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layouts/NavBar";
import TabCard from "../components/ui/TabCard";
import TabLayout from "../components/ui/TabLayout";
// for the category images
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
// the end of the images
import { db } from "../config/Firebase";
import { getDocs, collection } from "firebase/firestore";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
import { useTab } from "../config/TabContext";
import TextHeader from "../components/ui/TextHeader";
import { useInView } from "../config/ObserverContext";
import NewsPost from "../components/ui/NewsPost";
import NewsCard from "../components/ui/NewsCard";
import Aos from "aos";
import "aos/dist/aos.css";

const LazySection = lazy(() => import("../components/ui/VideoComp"));
import MainSectionComp from "../components/ui/MainSectionComp";
const NewsPage = () => {
  const { ref, visible } = useInView();
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const { posts } = useTab();
  const ButtonTabs = [
    "all",
    "technology",
    "politics",
    "health",
    "environment",
    "sports",
  ];
  // for the swiper js
  // for the news categories
  const [newpost, setNewpost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const document = collection(db, "news");
        const dataSnapshot = await getDocs(document);
        const postList = dataSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setNewpost(postList);
      } catch (error) {
        console.log("error fetching post:", error);
      }
    };
    fetchPost();
  }, []);
  return (
    <>
      <Navbar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37 font-inter">
        {/* revisit page to fix the appropriate picture and the text for the news page */}
        <TextHeader
          news_header="todays headline: stay informed"
          news_text="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories.
             Discover the world through our news coverage."
        />
        <NewsPost />
        <section
          className={`${
            newpost.length > 0
              ? "grid xs:grid-cols-1 sm:grid-cols-3 place-items-center sm:p-2 md:p-4 lg:p-6 md:gap-3 lg:gap-0 h-fit "
              : "h-[7rem] flex mt-5 justify-center items-center"
          }  bg-[#141414]  w-full`}
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          {newpost.length > 0 ? (
            newpost.map((post) => (
              <NewsCard
                key={post.id}
                news_image={ 
                   post.category === "technology"
                    ? tech
                    : post.category === "politics"
                    ? politics
                    : post.category === "health"
                    ? health
                    : post.category === "environment"
                    ? environment
                    : post.category === "sports"
                    ? sports
                    : post.category === "space exploration"
                    ? space
                    : post.category === "biotechnology"
                    ? biotech
                    : post.category === "renewable energy"
                    ? energy
                    : post.category === "quantom computing"
                    ? quantum
                    : post.category === "aiintelligence" 
                    ? AI : null

                }
                news_title={post.title}
                category={post.category}
                BtnFunction={() => navigate(`/newspost/${post.id}`)} 
                
              />
            ))
          ) : (
            <p className="font-semibold text-slate-300 p-2 italic text-sm md:text-lg capitalize">
              no news post
            </p>
          )}
            
        </section>
        <MainSectionComp
          top_text="welcome to our news hub"
          body_text="discover the world of headlines"
          showBtn={true}
          btnText="view all news"
          width={true}
          handleNavigate={() => navigate("/news")}
        />
        <div
          className="p-2 h-fit font-inter  text-white bg-[#141414] w-[100%] "
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
        >
          <TabCard TabsItems={ButtonTabs} />
          <TabLayout blog={posts} />
        </div>
        <MainSectionComp
          top_text="featured videos"
          body_text="visual insights for the modern viewer"
          showBtn={true}
          btnText="view all "
          width={true}
          handleNavigate={() => navigate("/news")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 sm:p-2 md:p-4 lg:p-6 bg-[#141414] text-white font-inter h-fit  xs:place-items-center ">
          <Suspense
            fallback={
              <div className="flex w-full justify-center items-center text-white font-medium">
                <p>loading...</p>
              </div>
            }
          >
            <LazySection />
          </Suspense>
        </div>
        {/* for the footer part */}
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default NewsPage;

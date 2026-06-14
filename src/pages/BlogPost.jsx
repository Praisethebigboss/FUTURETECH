import React, { lazy, useEffect, useState } from "react";
import NavBar from "../components/layouts/NavBar";
import { useMediaQuery } from "react-responsive";
// for the category images
import AI from "../assets/aiintelligence.jpg";
import environment from "../assets/environment.jpg";
import biotech from "../assets/biotech.jpg";
import health from "../assets/health.jpg";
import politics from "../assets/poliitics.jpg";
import space from "../assets/space.jpg";
import sports from "../assets/spacebooks.png";
import tech from "../assets/technology.jpg";
import quantum from "../assets/quantumpapers.png";
import energy from "../assets/energy.jpg";
// the end of the images
import NewsCard from "../components/ui/NewsCard";
import { useInView } from "../config/ObserverContext";
import Aos from "aos";
import { db } from "../config/Firebase";
import { useAuth } from "../config/AuthContext";
import { useProfile } from "../config/ProfileContext";
import {
  getDoc,
  doc,
  collection,
  onSnapshot,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
import LikeBtn from "../components/ui/LikeBtn";
import CommentBtn from "../components/ui/CommentBtn";
import ShareBtn from "../components/ui/ShareBtn";
import AppButton from "../components/ui/AppButton";
import LoaderComp from "../components/ui/LoaderComp";
const BlogPost = () => {
  // to open a sliced text
  const [readmore, setReadmore] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);
  const { author } = useAuth();
  const { handleLike } = useProfile();
  const { ref, visible } = useInView();
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  // unique id for each blog post
  const navigate = useNavigate();
  const { id } = useParams();
  // a loading state
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  // to fetch the blog post
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const document = doc(db, "blogs", id);
        const snapshot = await getDoc(document);

        if (snapshot.exists()) {
          const blogData = snapshot.data();
          setBlog(blogData);
        } else {
          console.log("Blog document does not exist");
          setBlog(null);
        }
      } catch (error) {
        console.log(error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);
  // to get the liked data
  const [liked, setLiked] = useState(false);
  const [likedcount, setLikedcount] = useState(0);
  useEffect(() => {
    if (!author) return;

    const likeRef = doc(db, "blogs", id, "likes", author.uid);
    const unsub = onSnapshot(likeRef, (snap) => {
      setLiked(snap.exists());
    });

    return () => unsub();
  }, [id, author, blog]);

  // to get the total likes count from the blog document
  useEffect(() => {
    const blogRef = doc(db, "blogs", id);
    const unsub = onSnapshot(blogRef, (snap) => {
      setLikedcount(snap.data()?.likes || 0);
    });
    return () => unsub();
  }, [id]);

  // to get similar news post
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      if (!blog) return;
      try {
        const document = collection(db, "news");
        const q = query(document, where("category", "==", blog?.category));
        const newsSnapshot = await getDocs(q);
        const search = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(search);
        setNews(search);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [blog]);

  return (
    <>
      {loading ? <LoaderComp /> : ""}
      <NavBar />
      <section className="xs:mt-29 sm:mt-33 lg:mt-38">
        <div className="bg-[#141414] capitalize font-inter text-white border-b-1 border-[#1e1e1e] mb-3">
          <section className="h-fit relative">
            {/* for category images */}
            <img
              src={
                blog?.category === "environment"
                    ? environment
                      : blog?.category === "aiintelligence"
                        ? AI
                        : blog?.category === "biotechnology"
                          ? biotech
                          : blog?.category === "health"
                            ? health
                            : blog?.category === "politics"
                              ? politics
                              : blog?.category === "space exploration"
                                ? space
                                : blog?.category === "sports"
                                  ? sports
                                  : blog?.category === "technology"
                                    ? tech
                                    : blog?.category === "quantom computing"
                                      ? quantum
                                      : blog?.category === "renewable energy"
                                        ? energy
                                        : null
              }
              loading={lazy}
              alt=""
              ref={ref}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={
                "xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover "
              }
            />

            <p className="font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl absolute xs:bottom-0 sm:bottom-2 md:bottom-3 lg:bottom-5 flex justify-self-center xs:p-1 md:p-2 w-fit text-center ">
              {blog?.title}
            </p>
          </section>
          <section className="flex xs:flex-col sm:flex-row  h-fit w-fit p-6">
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
                  {blog?.category}
                </h2>
                <p
                  className="xs:text-ss sm:text-xs lg:text-sm font-light text-gray-400 sm:w-[90%] md:leading-5 lg:leading-6 "
                  dangerouslySetInnerHTML={{
                    __html: readmore
                      ? blog?.content
                      : blog?.content.slice(0, 150) + "...",
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
              <div className="flex justify-around xs:w-[19rem] sm:w-[15rem] lg:w-[17rem] h-[4rem] items-center mx-auto p-2  mt-4">
                <LikeBtn
                  likeCount={likedcount}
                  Like={liked}
                  handleClick={() => handleLike(id)}
                />
                <CommentBtn commentCount={blog?.comment} />
                <ShareBtn shareCount={""} />
              </div>
              <div className="flex flex-row xs:w-[20rem] sm:w-[70%] md:w-[50%] lg:w-[50%] justify-between mx-auto ">
                <figure className="">
                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    publication date
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">
                    {blog?.createdAt?.toDate?.().toLocaleDateString() || blog?.createdAt}
                  </p>
                </figure>
                <figure>
                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    category
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">{blog?.category}</p>

                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    author name
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">
                    <span className="py-2 xs:text-sm lg:text-md">
                      {blog?.author}
                    </span>
                  </p>
                </figure>
              </div>
            </figure>
          </section>
        </div>

        {/* section for blogs */}
        <p className="bg-[#141414] text-white font-semibold font-inter md:text-md lg:text-lg  px-3 capitalize">
          similar news
        </p>
        <section
          className={`${
            news.length > 0
              ? "grid xs:grid-cols-1 sm:grid-cols-3 place-items-center sm:p-2 md:p-4 lg:p-6 md:gap-3 lg:gap-0 h-fit "
              : "h-[7rem] flex mt-5 justify-center items-center"
          }  bg-[#141414]  w-full font-inter`}
          ref={ref}
          data-aos-easing="ease-in-out"
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
        >
          {news.length > 0 ? (
            news.map((post) => (
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
                                      ? AI
                                      : null
                }
                news_title={post.title}
                category={post.category}
                BtnFunction={() => navigate(`/newspost/${post.id}`)}
              />
            ))
          ) : (
            <p className="font-semibold text-slate-300 p-2 italic text-sm md:text-lg capitalize">
              no similar news post
            </p>
          )}
        </section>
        {/* for the footer section */}
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default BlogPost;

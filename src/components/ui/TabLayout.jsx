import React from "react";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";
import CommentBtn from "./CommentBtn";
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import AppButton from "./AppButton";
import ProfileCard from "../pictures/ProfileCard";
const TabLayout = ({ blog }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width:629px)" });
  // to the like button

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        spaceBetween={10}
        speed={1000}
        className="h-[20rem]"
      >
        <div className="border-b-1  pt-2 justify-self-center border-[#1e1e1e] p-2 flex justify-around xs:flex-col md:flex-row capitalize xs:w-[90%] md:w-full">
          {blog.length >= 1 ? (
            blog.map((item) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: !isMobile ? "center" : "",
                  justifyContent: !isMobile ? "space-around" : "",
                  flexDirection: isMobile ? "column" : "row",
                  marginBottom: 10,
                }}
                key={item.id}
              >
                <ProfileCard
                  author_image={item.photo || '/avatarpic.webp'}
                  author={item.author}
                  categoryText={item.category}
                />
                <section className="flex xs:h-[14rem] sm:h-[14rem] sm:w-[80%] md:w-[60%] lg:w-[45%] justify-between items-center sm:gap-2 xs:flex-col sm:flex-row capitalize">
                  <aside>
                    <p className="text-gray-400 font-light xs:text-ss sm:text-xs md:text-sm py-1.5 ">
                      {item.createdAt?.toDate?.().toLocaleDateString() || item.createdAt}
                    </p>
                    <h2 className="py-2 sm:text-md lg:text-lg">{item.title}</h2>
                    <p
                      className="xs:text-ss md:text-xs text-gray-400 font-light py-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          item.content.length > 90
                            ? item.content.slice(0, 90) + "..."
                            : item.content,
                      }}
                    ></p>
                    <div className="flex items-center gap-3 py-3">
                      <LikeBtn likeCount={item.likes}                   Like={false} />
                      <CommentBtn commentCount={item.comment} />
                      <ShareBtn shareCount={item.shares} />
                    </div>
                  </aside>
                  <AppButton
                    width={true}
                    BtnFunction={() => navigate(`/blogpost/${item.id}`)}
                    BtnText="view blog"
                    iconArrow={true}
                  />
                </section>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: !isMobile ? "center" : "",
                justifyContent: !isMobile ? "space-around" : "",
                flexDirection: isMobile ? "column" : "row",
                marginBottom: 10,
              }}
            >
              <section className="flex xs:h-[14rem] sm:h-[14rem] sm:w-[80%] md:w-[60%] lg:w-[45%] justify-center items-center sm:gap-2 xs:flex-col sm:flex-row capitalize">
                <aside>
                  <p className="xs:text-sm md:text-md text-gray-400 font-light py-3">
                    no blog post yet
                  </p>
                </aside>
              </section>
            </SwiperSlide>
          )}
        </div>
      </Swiper>
    </>
  );
};

export default TabLayout;

import React from "react";
import women from "../../assets/picture.png";
import raj from "../../assets/rajpic.png";
import emily from "../../assets/emilypic.png";
import alan from "../../assets/alanpic.png";
import jessica from "../../assets/jessicapic.png";
import diogo from "../../assets/diogopic.png";
import { useMediaQuery } from "react-responsive";
import Testimonial from "./Testimonial";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
const TestimonialComp = () => {
  const navigate = useNavigate();
  const Mobile = useMediaQuery({ query: "(max-width:630px)" });
  return (
    <>
      <section
        className={`bg-[#141414] ${
          !Mobile ? "grid sm:grid-cols-2 md:grid-cols-3 place-items-center" : ""
        }  py-5   `}
      >
        {!Mobile ? (
          <>
            <Testimonial
              author_image={women}
              author={"sarah thompson"}
              text={"san francisco,USA"}
              testimonial={
                "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
              }
            />
            <Testimonial
              author_image={raj}
              author={"raj patel"}
              text={"mumbai, india"}
              testimonial={
                "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions. "
              }
            />
            <Testimonial
              author_image={emily}
              author={"emily adams"}
              text={"london,uk"}
              testimonial={
                "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
              }
            />
            <Testimonial
              author_image={alan}
              author={"alan jackson"}
              text={"houston,USA"}
              testimonial={
                "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth."
              }
            />
            <Testimonial
              author_image={jessica}
              author={"jessica miller"}
              text={"boston,USA"}
              testimonial={
                "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
              }
            />
            <Testimonial
              author_image={diogo}
              author={"diogo lopez"}
              text={"barcaelona,spain"}
              testimonial={
                "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
              }
            />
          </>
        ) : (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay
              navigation
              pagination={{ clickable: false }}
              speed={1500}
              slidesPerView={1}
              spaceBetween={10}
              className="h-[16rem]"
            >
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Testimonial
                  author_image={women}
                  author={"sarah thompson"}
                  text={"san francisco,USA"}
                  testimonial={
                    "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
                  }
                />
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Testimonial
                  author_image={raj}
                  author={"raj patel"}
                  text={"mumbai, india"}
                  testimonial={
                    "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions. "
                  }
                />
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Testimonial
                  author_image={emily}
                  author={"emily adams"}
                  text={"london,uk"}
                  testimonial={
                    "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
                  }
                />
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Testimonial
                  author_image={alan}
                  author={"alan jackson"}
                  text={"houston,USA"}
                  testimonial={
                    "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth."
                  }
                />
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Testimonial
                  author_image={jessica}
                  author={"jessica miller"}
                  text={"boston,USA"}
                  testimonial={
                    "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
                  }
                />
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Testimonial
                  author_image={diogo}
                  author={"diogo lopez"}
                  text={"barcaelona,spain"}
                  testimonial={
                    "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
                  }
                />
              </SwiperSlide>
            </Swiper>
          </>
        )}
      </section>
    </>
  );
};

export default TestimonialComp;

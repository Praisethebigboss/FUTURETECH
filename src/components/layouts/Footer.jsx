import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";
import { useInView } from "../../config/ObserverContext";
import AppButton from "../ui/AppButton";
const Footer = () => {
  const { ref, visible } = useInView();
  const { handleLogout, author } = useAuth();
  const home = [
    {
      link: "*",
      name: "features",
    },
    {
      link: "/blog",
      name: "blogs",
    },
    {
      link: "/resources",
      name: "resources",
    },
    {
      link: "/contact",
      name: "contact us",
    },
    {
      link: "/news",
      name: "newsletter",
    },
    {
      link: "/login",
      name: author ? "sign out" : "sign in",
    },
  ];
  const News = [
    "trending stories",
    "featured videos",
    "technology",
    "health",
    "politics",
    "environment",
  ];
  const Blogs = [
    "quantum computing",
    "AI ethics",
    "space exploration",
    "bio teachnology",
    "renewable energy",
    "biohacking",
  ];
  const podcasts = [
    "AI revolution",
    "AI revolution ",
    "techTalk AI",
    "AI conversations",
  ];
  const buttons = ["whitepapers", "ebooks", "reports", "research papers"];
  return (
    <div className="capitalize text-white font-inter w-[100%] bg-[#141414] h-[fit] p-6 md:mx-auto lg:mx-0">
      <footer className="grid  place-items-center xs:gap-4 sm:gap-0 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-b-1  border-[#1e1e1e] p-5 w-[100%] mb-2">
        <div
          className="h-fit w-fit"
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
        >
          <h2 className="xs:text-sm md:text-md lg:text-lg font-semibold mb-4">
            home
          </h2>
          {home.map((item, index) => (
            <ul key={index}>
              <Link
                to={item.link}
                className="cursor-pointer xs:text-ss sm:text-xs lg:text-sm text-gray-500 "
                onClick={
                  item.link === "/login" ? () => handleLogout() : undefined
                }
              >
                <li className="py-1.5">{item.name}</li>
              </Link>
            </ul>
          ))}
        </div>
        <div
          className="w-fit"
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
        >
          <h2 className="xs:text-sm md:text-md lg:text-lg mb-4 font-semibold">
            News
          </h2>
          {News.map((item, index) => (
            <ul key={index}>
              <li className="cursor-pointer py-1.5 xs:text-ss sm:text-xs lg:text-sm text-gray-500 ">
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div
          className="w-fit"
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="1200"
        >
          <h2 className="xs:text-sm md:text-md lg:text-lg mb-4 font-semibold">
            Blogs
          </h2>
          {Blogs.map((item, index) => (
            <ul key={index}>
              <li className="cursor-pointer py-1.5 xs:text-ss sm:text-xs lg:text-sm text-gray-500 ">
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div
          className="w-fit"
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="1800"
        >
          <h2 className="xs:text-sm md:text-md lg:text-lg mb-4 font-semibold">
            podcasts
          </h2>
          {podcasts.map((item, index) => (
            <ul key={index}>
              <li className="cursor-pointer py-1.5 xs:text-ss sm:text-xs lg:text-sm text-gray-500 ">
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div
          className="sm:w-full md:w-fit  flex flex-col gap-3"
          ref={ref}
          data-aos={visible ? "fade-down" : "fade-up"}
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="2400"
        >
          <h2 className="xs:text-sm md:text-md lg:text-lg xs:mt-4 md:mt-0 xs:mb-2 md:mb-4 font-semibold">
            resources
          </h2>
          {buttons.map((item, index) => (
            <AppButton key={index} BtnText={item} iconArrow={true} />
          ))}
        </div>
      </footer>
      {/* for the bottom text */}
      <aside className="flex w-full justify-around sm:items-center xs:flex-col sm:flex-row">
        <div className="flex justify-between sm:w-[55%] md:w-[50%] lg:w-[40%] sm:items-center xs:flex-col-reverse sm:flex-row">
          <p className="text-gray-600  xs:py-2 sm:py-0 xs:text-xs lg:text-sm">
            terms & conditions
            <span className="ml-2 border-l-1 border-gray-500 pl-2">
              privacy policy
            </span>
          </p>
          {/* for the icon */}
          <figure className="flex xs:w-[3.8rem] sm:w-[4rem] md:w-[6rem] justify-between">
            <FaTwitter className="xs:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem]" />
            <FaLinkedin className="xs:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem]" />
          </figure>
        </div>
        <p className="text-gray-500 xs:text-xs lg:text-sm ">
          @2026 futuretech.all rights reserved
        </p>
      </aside>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from "react";
import AppButton from "../ui/AppButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight } from "react-icons/bi";
import { useAuth } from "../../config/AuthContext";
import { FaX } from "react-icons/fa6";
import { useInView } from "../../config/ObserverContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import logoimg from "../../assets/desktoplogo.png";
const NavBar = () => {
  const navigate = useNavigate();
  const { author,handleLogout } = useAuth();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  const isMobile = useMediaQuery({ query: "(max-width:760px)" });
  const navs = [
    { name: "home", link: "/" },
    { name: "news", link: "/news" },
    { name: "podcasts", link: "/podcasts" },
    { name: "resources", link: "/resources" },
    { name: "profile", link: "/profile" },
    { name: "settings", link: "/settings" },
    { name: author ? "sign out" : "sign in", link: "/login" },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
  const { ref, visible } = useInView();
  return (
    <nav className="flex z-40 text-white flex-col w-full font-inter capitalize fixed top-0">
      {/* for marquee container */}
      <div className="py-4 mt-1 bg-[#141414]">
        <Marquee pauseOnClick pauseOnHover className="opacity-70" speed={40}>
          <p className="xs:mx-8 sm:mx-auto items-center flex w-fit xs:text-ss sm:text-xs md:text-sm lg:text-md">
            subscribe to our newsletter for new & latest blogs and resources
            <span>
              <BsArrowUpRight className="ml-2 font-bold  text-yellow-400 sm:h-[2rem] md:h-[1.5rem] lg:h-[2rem] sm:w-[40%] md:w-[45%] " />
            </span>
          </p>
        </Marquee>
      </div>
      {/* for the navigation bar */}
      <div
        className={`flex border-b-1 border-[#1a1a1a] ${
          isMobile ? "justify-between p-2" : "justify-around"
        } sm:py-0 md:py-4 items-center bg-[#1E1E1E]`}
      >
        {/* the logo image */}
        <img
          src={logoimg}
          className="xs:h-[2.7rem] sm:h-[2.7rem] md:h-[2rem] lg:h-[2.7rem] xs:ml-4 md:ml-0 p-1.5"
          alt=""
        />
        {/* for the navigation bar */}
        {!isMobile ? (
          <ul className="flex justify-around  md:w-[30rem] lg:w-[40rem] py-1  md:text-xs lg:text-sm">
            {/*home  */}
            <Link to={"/"}>
              <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
                home
              </li>
            </Link>
            {/* news */}
            <Link to={"/news"}>
              <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
                news
              </li>
            </Link>
            {/* podcasts */}
            <Link to={"/podcasts"}>
              <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
                podcasts
              </li>
            </Link>
            {/* resources */}
            <Link to={"/resources"}>
              <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
                resources
              </li>
            </Link>
            {/* profile */}
            <Link to={"/profile"}>
              <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
                profile
              </li>
            </Link>
            {/* settings */}
            <Link to={"/settings"}>
              <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
                settings
              </li>
            </Link>
          </ul>
        ) : (
          ""
        )}
        {/* for the contact button */}
        {!isMobile ? (
          <AppButton
            BtnText="contact us"
            showColor={true}
            BtnFunction={() => navigate("/contact")}
          />
        ) : (
          ""
        )}
        {/* for the mobile breakpoint */}
        {isMobile ? (
          <div className="">
            <BiMenuAltRight
              className={` xs:text-[2.4rem] mr-3 relative`}
              onClick={() => setShow(true)}
            />
            <ul
              className={` bg-black/70  backdrop-blur-sm h-[100vh] absolute inset-0 w-full transition-all ease-in-out ${
                show ? "translate-y-0" : "-translate-y-300"
              } duration-500 flex justify-center items-center flex-col`}
            >
              <FaX
                className="absolute top-4 right-4  xs:text-[1.6rem] sm:text-[1.6rem]"
                onClick={() => setShow(false)}
              />
              {navs.map((item, index) => (
                <Link key={index} to={item.link}>
                  <li className="mt-3  capitalize xs:text-lg sm:text-lg font-semibold text-center  duration-200 transition-all ease active:text-yellow-400 p-2 rounded-lg " onClick={item.link === "sign out" || item.link === "sign in" ? ()=> handleLogout() : null}> 
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default NavBar;

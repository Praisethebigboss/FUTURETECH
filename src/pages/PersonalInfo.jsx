import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import Footer from "../components/layouts/Footer";
import FooterPart from "../components/ui/FooterPart";
import Form from "../components/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../config/ProfileContext";
import LoaderComp from "../components/ui/LoaderComp";
const PersonalInfo = () => {
  const { profile, handleProfileChange, loading, profileSubmit } = useProfile();
  const navigate = useNavigate();
  return (
    <>
      {loading ? <LoaderComp /> : ""}
      <aside className="h-fit flex items-center m-2">
        <FaArrowCircleLeft
          className="xs:text-lg sm:text-2xl lg:text-3xl m-2 text-white duration-200 transition-all ease active:text-yellow-600"
          onClick={() => navigate("/profile")}
        />
        <Link
          to={"/profile"}
          className="text-white font-inter p-2 text-xs sm:text-sm md:text-md "
        >
          back to profile
        </Link>
      </aside>
      <section className="mt-0 text-white capitalize font-inter">
        {/* for the profile update*/}
        <div className="flex w-full justify-center bg-[#141414] ">
          <Form
            InputField={false}
            blogEditor={false}
            border_show={false}
            User={profile}
            personalShow={true}
            btnSubmit={profileSubmit}
            message={false}
            handleChange={handleProfileChange}
            ShowText={"personal"}
            display={true}
            showBlue={false}
            Text={"update profile"}
          />
        </div>
        <FooterPart />
      </section>
    </>
  );
};

export default PersonalInfo;

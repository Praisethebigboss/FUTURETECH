import React from "react";
import { Link } from "react-router-dom";
import { useMemo, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import JoditEditor from "jodit-react";
import FormheadText from "./FormheadText";
import Button from "../ui/Button";
import PersonalInfoField from "./PersonalInfoField";
import BlogField from "./BlogField";
const Form = ({
  ShowText,
  message,
  showPassword = true,
  User,
  InputField = true,
  forgotten = false,
  passwordLinks = false,
  SignupLink = false,
  LoginLink = false,
  content,
  showBlue,
  blogEditor = true,
  Text,
  disable,
  placeholder,
  handleBlur,
  handleChange,
  border_show = true,
  blog,
  display,
  personalShow = false,
  btnSubmit,
  formref
}) => {

  const config = useMemo(
    () => ({
      height: 400,
      theme: "dark",
      style: {
        backgroundColor: "#1e1e1e",
        color: "#f0f0f0",
      },
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start writing your next article....",
    }),
    [placeholder]
  );

  return (
    <div className={`text-white font-inter  w-fit  ml-2`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className={` xs:w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem] h-fit px-3  py-4 ${
          border_show ? "border-1 border-gray-700/20 rounded-lg" : ""
        }`}
      >
        {/* form head text */}
        <FormheadText textShow={ShowText} />
        {/* for the head title */}

        {/* for the blog wirting */}
        <div className="mb-5 h-fit  ">
          {blogEditor ? (
            <>
              <BlogField data={blog} handleRead={handleChange} />
              <JoditEditor
                ref={formref}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={handleBlur} // preferred to use only this option to update the content for performance reasons
              />
            </>
          ) : (
            ""
          )}
        </div>
        {/* for the personal information field */}

        {personalShow ? (
          <PersonalInfoField
            info={User}
            handleRead={handleChange}
            message={message}
          />
        ) : (
          ""
        )}
        {InputField ? (
          <>
            {/* for the email */}
            <label
              className=" xs:ml-1 sm:ml-3 md:ml-4 lg:ml-7 block capitalize my-2 xs:text-sm  lg:text-md"
              htmlFor=""
            >
              email
            </label>
            <div className="w-[full] h-fit relative xs:ml-1 sm:ml-3 md:ml-4 lg:ml-7">
              {/* for the email icon */}
              <AiOutlineMail className="absolute xs:bottom-2 sm:bottom-1 xs:left-1 sm:left-1 xs:text-2xl sm:text-3xl md:h-[60%]" />
              <input
                type="text"
                onChange={handleChange}
                value={User.email}
                name="email"
                placeholder="enter your email"
                className=" pl-10 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%]  border-1 border-gray-700/20  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
              />
            </div>
            {/* for the password */}

            {showPassword ? (
              <>
                <label
                  className="xs:ml-1 sm:ml-3 md:ml-4 lg:ml-7 block capitalize mt-4 mb-2 xs:text-sm  lg:text-md"
                  htmlFor=""
                >
                  password
                </label>
                <div className="xs:ml-1 sm:ml-3 md:ml-4 lg:ml-7 w-[full] h-fit relative">
                  {/* for the password icon */}
                  <RiLockPasswordFill className="absolute xs:bottom-2 sm:bottom-1 xs:left-1 sm:left-1 xs:text-2xl sm:text-3xl md:h-[60%]" />
                  <input
                    type="text"
                    placeholder="enter your password"
                    onChange={handleChange}
                    name="password"
                    value={User.password}
                    className="pl-10 pr-3 py-2 mt-2 h-10  xs:w-[100%] sm:w-[95%] md:w-[90%] border-1 border-gray-700/20  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
                  />
                </div>
              </>
            ) : (
              ""
            )}

            {/* for the forgotten password */}
            {passwordLinks ? (
              <Link
                to={"/forgottenpassword"}
                className="mt-4  xs:ml-1 sm:ml-3 md:ml-4 lg:ml-7 text-left text-blue-600 font-semibold xs:text-ss sm:text-xs lg:text-sm capitalize  w-[70%]"
              >
                forgotten password
              </Link>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {/* for the forgotten password/email  */}
        {forgotten ? (
          <>
            <label
              className="block capitalize mt-4 mb-2 xs:text-sm  lg:text-md"
              htmlFor=""
            >
              email
            </label>
            <div className="w-[full] h-fit relative">
              {/* for the password icon */}
              <AiOutlineMail className="absolute xs:bottom-2 sm:bottom-1 xs:left-1 sm:left-1 xs:text-2xl sm:text-3xl md:h-[60%]" />
              <input
                type="text"
                placeholder="enter your email"
                className="pl-10 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-500  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
              />
            </div>
          </>
        ) : (
          ""
        )}

        {/* link to the sign up page and login page */}
        {SignupLink ? (
          <p className="my-4 block text-center mx-auto  font-semibold xs:text-ss sm:text-xs lg:text-sm capitalize  w-[85%]">
            if you dont have an account{" "}
            <Link to={"/signup"} className="text-blue-700 ml-1">
              create an account
            </Link>
          </p>
        ) : (
          ""
        )}
        {LoginLink ? (
          <p className="my-4 block text-center mx-auto font-semibold xs:text-ss sm:text-xs lg:text-sm capitalize  w-[75%]">
            if you have an account already
            <Link to={"/login"} className="text-blue-700 ml-1">
              login
            </Link>
          </p>
        ) : (
          ""
        )}
        <Button
          BtnText={Text}
          googleShow={true}
          disable={disable}
          showBlue={showBlue}
          handleSubmit={btnSubmit}
        />
        {display ? (
          ""
        ) : (
          <p className="my-4 block text-center mx-auto font-semibold xs:text-ss sm:text-xs lg:text-sm capitalize ">
            or
          </p>
        )}
        <Button display={display} />
        {/* for the signing in with google */}
      </form>
    </div>
  );
};

export default Form;

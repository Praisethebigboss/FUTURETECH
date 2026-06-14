import React from "react";
import CountryList from "country-list-with-dial-code-and-flag";
const PersonalInfoField = ({ handleRead, info, message = true }) => {
  return (
    <div>
      {/* for the fullname */}
      <label
        className="block capitalize my-2 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        fullname
      </label>

      <input
        type="text"
        name="fullname"
        onChange={handleRead}
        value={info.fullname}
        placeholder="enter your fullname"
        className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-700  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
      />
      {/* for the email */}
      {message ? (
        <>
          <label
            className="block capitalize my-2 xs:text-sm  lg:text-md"
            htmlFor=""
          >
            email
          </label>

          <input
            type="text"
            name="email"
            onChange={handleRead}
            value={info.email}
            placeholder="enter your email"
            className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-700  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
          />
        </>
      ) : (
        ""
      )}

      {/* for the nationality */}
      {message ? (
        ""
      ) : (
        <>
          <label
            className="block capitalize my-2 xs:text-sm  lg:text-md"
            htmlFor=""
          >
            nationality
          </label>
          <input
            type="text"
            name="nationality"
            onChange={handleRead}
            value={info.nationality}
            placeholder="enter your nationality"
            className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-700  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
          />
          {/* for the employee status */}
          <label
            className="block capitalize my-2 xs:text-sm  lg:text-md"
            htmlFor=""
          >
            employee status
          </label>
          <input
            type="text"
            name="status"
            onChange={handleRead}
            value={info.employeestatus}
            placeholder="your status"
            className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-700  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
          />
          {/* for the country code and phone number */}

          <label
            className="block capitalize mb-2 mt-3 xs:text-sm  lg:text-md"
            htmlFor=""
          >
            country code
          </label>
          <div className="flex items-center mb-3">
            <select
              name="phoneCode"
              id=""
              onChange={handleRead}
              value={info.phoneCode}
              className="xs:text-ss sm:text-xs lg:text-sm capitalize h-10 text-white bg-[#141414]"
            >
              {CountryList.getAll().map((item, index) => (
                <option key={index} value={`${item.dial_code}`}>
                  {item.flag} {item.dial_code}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="phone"
              onChange={handleRead}
              value={info.phone}
              placeholder="your phone number"
              className="pl-3 pr-3 py-2  h-10 xs:w-[90%] sm:w-[81%] md:w-[79%] lg:w-[75%] border-1 border-gray-700  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
            />
          </div>
        </>
      )}
      {/* for the personal bio */}
      <label
        className="block capitalize mb-2 mt-3 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        {message ? "message" : "personal bio"}
      </label>
      <textarea
        id=""
        name="message"
        onChange={handleRead}
        value={info.message}
        className=" pl-2 border-1 border-gray-700 xs:w-[95%] sm:w-[95%] md:w-[85%] lg:w-[80%]  h-30 placeholder:capitalize  xs:text-xs lg:text-sm font-light"
        placeholder={!message ? "write about yourself" : "enter your message"}
      ></textarea>
    </div>
  );
};

export default PersonalInfoField;

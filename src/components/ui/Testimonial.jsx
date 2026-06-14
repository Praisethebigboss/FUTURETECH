import React from "react";
import ProfileCard from "../pictures/ProfileCard";
import Rating from "./Rating";

const Testimonial = ({author_image,author,text,testimonial}) => {
  return (
    <div className="flex flex-col relative items-center capitalize bg-[#141414] font-inter border-r-1 border-[#1e1e1e] xs:w-[20rem] sm:w-[17rem] md:w-[18rem] lg:w-[25rem] sm:h-[17rem] md:h-[18rem] lg:h-[20rem]">
      <Rating
       classname="absolute top-20 "
      />
      <section className="p-3 mb-7 ">
        <ProfileCard
         author_image={author_image}
         author={author}
         categoryText={text}
        />
      </section>
      <section className="bg-[#1e1e1e] p-5 h-[fit] text-center text-white xs:text-ss sm:text-xs lg:text-sm rounded-lg">
        <p>
          {testimonial}
        </p>
      </section>
    </div>
  );
};

export default Testimonial;

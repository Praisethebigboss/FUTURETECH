import React from "react";
import HeaderCard from "./HeaderCard";

const FirstHeaderPart = () => {
  return (
    <section className="flex flex-col capitalize px-4 xs:w-[100%] sm:w-[70%] md:w-[60%] xs:mx-auto md:ml-[3%] text-white">
     {/* first row container */}
    <div className="md:h-[20rem] lg:h-[25rem]">
      {/* head text */}
      <h2 className="xs:text-xs sm:text-sm lg:text-lg p-2 text-gray-400 md:mt-[2rem] lg:mt-[4rem]">your journey to tomorrow begins here</h2>
      {/*main header text */}
      <h1 className="text-white xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium p-2 md:w-[80%] lg:w-[60%] sm:leading-10 lg:leading-18">Explore the Frontiers of Artificial Intelligence</h1>
      {/* paragraph text */}
      <p className="text-gray-400 xs:text-ss sm:text-xs lg:text-sm p-1.5 md:w-[90%] lg:w-[80%] font-light">
        Welcome to the epicenter of AI innovation. FutureTech AI News is your
        passport to a world where machines think, learn, and reshape the future.
        <span className="xs:hidden sm:block">Join us on this visionary expedition into the heart of AI.</span>
      </p>
    </div>
      {/* second row container */}
      <div className="mt-1 flex">
        <HeaderCard
         headText={"300"}
         text={"resources available"}
        />
         <HeaderCard
         headText={"12k"}
         text={"total downloads"}
        />
         <HeaderCard
         headText={"10k"}
         text={"active users"}
        />
      </div>
   </section> 
  );
};

export default FirstHeaderPart;

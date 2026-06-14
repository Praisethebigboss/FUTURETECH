import React from "react";
import AppButton from "./AppButton";
import { useTab } from "../../config/TabContext";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
const TabCard = ({ TabsItems }) => {
  const { activeTab, setActiveTab } = useTab();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <>
      <div className="flex xs:h-fit sm:h-[4rem] gap-3  xs:py-1 sm:py-4 justify-center items-center border-b-1 border-[#1e1e1e] sm:mb-2">
        {isMobile ? (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            speed={1500}
            slidesPerView={1}
            className="flex justify-center items-center h-[4rem]"
          >
            {TabsItems.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  width: "auto",
                }}
              >
                <AppButton
                  BtnFunction={() => setActiveTab(item)}
                  TabText={activeTab === item}
                  BtnText={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            {TabsItems.map((item, index) => (
              <AppButton
                TabText={activeTab === item}
                BtnFunction={() => setActiveTab(item)}
                key={index}
                BtnText={item}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default TabCard;

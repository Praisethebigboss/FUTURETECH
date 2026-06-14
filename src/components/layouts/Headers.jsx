import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import FirstHeaderPart from "../ui/FirstHeaderPart";
import SecondHeaderPart from "../ui/SecondHeaderPart";
import HeaderBottomCard from "../ui/HeaderBottomCard";
import { useInView } from "../../config/ObserverContext";
const Headers = () => {
   useEffect(()=>{
      Aos.init()
   },[])
   const { ref, visible } = useInView();
  return (
    <header className="bg-[#141414] ">
      <div className="flex font-inter h-fit  xs:flex-col md:flex-row" ref={ref} data-aos-duration="1000" data-aos={visible?"fade-right":"fade-left"} >
        <FirstHeaderPart />
        <SecondHeaderPart />
      </div>
      <div className="flex sm:ml-2 md:ml-5 xs:flex-col md:flex-row">
      <HeaderBottomCard 
        latest={true}
        headtext="latest news updates"
        text="stay current"
        subtext="over 1000 articles published monthly"
      />
      <HeaderBottomCard 
        expert={true}
        headtext="expert contributors"
        text="trusted insights"
        subtext="50+ renowned AI experts on our team"
      />
      <HeaderBottomCard
        global={true}
        headtext="global readership"
        text="worldwide impact"
        subtext="2 million monthly readers around the globe"
      />
      </div>
    </header>
  );
};

export default Headers;

"use client"
import PlaceIcon from "@mui/icons-material/Place";
import YardIcon from '@mui/icons-material/Yard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "@/styles/howItWorks.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const arr: any = [
    {
        logo: <PlaceIcon className="!text-[3rem]" />,
        text: "Detect Location or Upload Report",
        para: "Share your location or soil report to get smart and tailored crop recommendations fast.",
      },
      {
        logo: <YardIcon className="!text-[3rem]" />,
        text: "Get Crop Suggestions",
        para: "Receive AI-based crop suggestions based on uploaded soil and your area’s weather data.",
      },
      {
        logo: <CameraAltIcon className="!text-[3rem]" />,
        text: "Scan Crop for Disease",
        para: "Snap a crop photo to detect diseases quickly and receive actionable treatment guidance.",
      },
      {
        logo: <ShoppingCartIcon className="!text-[3rem]" />,
        text: "Buy Solutions Instantly",
        para: "Order recommended pesticides and solutions easily with fast delivery to your doorstep.",
      }
  ];
  return (
    <>
   <ul className="how-it-works  ">
  {arr.map((curElem :any , index:number)  => (
    <li data-aos="flip-right" data-aos-delay="200" data-aos-duration="3000"   key={index} className="card hover:scale-[1.03] transition-all cursor-pointer ">
      <div className="card-icon  ">{curElem.logo}</div>
      <h3>{curElem.text}</h3>
      <p>{curElem.para}</p>
    </li>
  ))}
</ul>

    </>
  );
};

export default HowItWorks;
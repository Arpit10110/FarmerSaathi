"use client"
import "@/styles/aboutService.css";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const AboutService = ({heading,para,Img,dir,btn,href}:any) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`${dir}`}>
      <div className="left">
        <h1>
            {heading}
        </h1>
        <p className="left-para">
         {para}
        </p>
        <Link className="px-[2rem] py-[0.5rem] bg-[green] text-white font-semibold w-fit rounded-[1rem] text-[1.5rem] " href={`${href}`} >{btn}</Link>
      </div>

      <div className="right">
        <Image data-aos="flip-right" data-aos-delay="200" data-aos-duration="3000" src={Img} alt="About" />
      </div>
    </div>
  );
};

export default AboutService;
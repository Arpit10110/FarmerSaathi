"use client"
import hero from "@/assets/images/hero.jpg"
import Image from 'next/image'
import PlaceIcon from '@mui/icons-material/Place';
import AirIcon from '@mui/icons-material/Air';
import Link from 'next/link';
import '@/styles/hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const Hero = () => {


  useEffect(() => {
    AOS.init();
  }, [])
  


  return (
   <>
   <div className="hero-section">
   <div className="text">
   <h1 data-aos="fade-down" data-aos-delay="100"  className='heading'>Empowering Farmers with Smart Crop Decisions</h1>
   <h2 data-aos="fade-right" data-aos-delay="500" className='lower-text'>Grow smarter with AI — get crop suggestions based on weather and soil, detect diseases from images, and find instant solutions, all in one place</h2>
   </div>
   
   <div className="button">
   <Link data-aos="fade-down" data-aos-delay="500"  href={'/krishilab?component=disease'}><button className='btn'>Start Growing Smart</button></Link> 
   </div>
   </div>
   </>
  )
}

export default Hero
import React from 'react'
import Marquee from "react-fast-marquee";
const HeroMarquee = () => {
  return (
    <>
    <div className='text-white w-full text-[1.5rem] py-[2rem] bg-[#ffffff16] my-[4rem] ' >
      <Marquee >
      <h2 className='mx-[3rem]' >🌾 AI-Powered Crop Recommendations</h2>
      <h2 className='mx-[3rem]' >📷 Instant Crop Disease Detection</h2>
      <h2 className='mx-[3rem]' >📍 Weather-Based Suggestions</h2>
      <h2 className='mx-[3rem]' >🧪 Upload Soil Reports</h2>
      <h2 className='mx-[3rem]' >💬 Chatbot Support</h2>
      <h2 className='mx-[3rem]' >🛒 Buy Pesticides Online</h2>
      <h2 className='mx-[3rem]' >📈 Real-Time Crop Prices</h2>
      </Marquee >
    </div>
    </>
  )
}

export default HeroMarquee
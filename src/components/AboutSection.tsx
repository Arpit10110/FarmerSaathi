import React from 'react'
import AboutService from './AboutServiceComp'
import Image1 from "@/assets/images/Image1.jpg"
import Image2 from "@/assets/images/Image2.jpg"
import Image3 from "@/assets/images/Image3.png"
const AboutSection = () => {

    const data = [
        {
          heading: "Real-Time Crop Pricing",
          para: "Get live crop prices based on current market trends. Stay informed and make better trading decisions. Access updated pricing information anytime and plan your sales strategically to maximize profits.",
          buttonText: "View Prices",
          Image: Image1,
          dir: "about-container",
          href: "/krishilab?component=pricing"
        },
        {
          heading: "Crop Disease Detection",
          para: "Upload an image of your crop, and instantly detect any diseases with AI-powered analysis. Get solutions and treatment tips. Protect your crops early, minimize losses, and ensure a healthy harvest with expert recommendations.",
          buttonText: "Upload Image",
          Image: Image2,
          dir: "about-container-left",
          href: "/krishilab?component=disease"
        },
        {
          heading: "Crop Prediction Based on Soil Lab Report",
          para: "Upload your soil lab report to get AI-based crop predictions tailored to your soil's composition and local conditions. Make smarter planting choices, improve yield quality, and boost farm productivity with data-driven insights.",
          buttonText: "Predict My Crop",
          Image: Image3,
          dir: "about-container",
          href: "/krishilab?component=disease"
        }
      ];

  return (
    <>
        <div className='flex flex-col gap-[2rem] ' >
            {
                data.map((i,index)=>{
                    return(
                        <AboutService key={index} heading={i.heading} para={i.para} Img={i.Image} btn={i.buttonText} dir={i.dir} href={i.href} />
                    )
                })
            }
        </div>
    </>
  )
}

export default AboutSection
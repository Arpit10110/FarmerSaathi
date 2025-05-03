import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import HeroMarquee from "@/components/Marquee"
import HowItWorks from "@/components/HowItWorks"
import AboutSection from "@/components/AboutSection"
import FAQSec from "@/components/FAQSec"
import Footer from "@/components/Footer"
const page = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeroMarquee/>
      <HowItWorks/>
      <AboutSection/>
      <FAQSec/>
      <Footer/>
    </>
  )
}

export default page
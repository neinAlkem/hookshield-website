import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import Team from "./components/Team"
import Faq from "./components/Faq"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection id="hero" />
        <Features id="features"/>
        <Team id="team"/>
        <Faq id="faq"/>
        <Footer id="footer"/>
      </div>
    </>
  )
}

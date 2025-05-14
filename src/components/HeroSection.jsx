
import video1 from "../assets/video1.mp4"

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 max-auto">
        <div className="flex flex-col items-start lg:mt-10">
            <h1 className="text-5xl lg:text-7xl text-left tracking-wide font-bold"> <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">Protect {" "}</span>Your Email from 
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> {" "}Phishing Attacks</span> 
            </h1>
            <p className="mt-7 max-w-lg text-sm text-neutral-500 lg:text-lg">Don’t let malicious emails compromise your security. Our advanced phishing detection technology analyzes your emails instantly, identifying suspicious messages before they can harm you.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 rounded-md px-4 py-2 font-bold mr-5">Try HookShield</a>
                <a href="#" className="rounded-md border px-4 py-2">Documentation</a>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <video autoPlay loop muted className="h-auto max-w-full rounded-md border border-blue-700 mx-2 my-4 shadow-2xl shadow-blue-500/30" src={video1} type="video/mp4">
            The video cannot played.
            </video>
        </div>
    </div>
  )
}
export default HeroSection

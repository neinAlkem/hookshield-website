import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.svg"
import { navItems } from "../constant"
import { useRef } from "react"


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen)
        }
        const scrollToSection = (id) => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior:'smooth'});
            }
        };
        
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="w-12 h-12 mr-2 px-2" src={logo} alt="Logo"/>
                    <span className="text-xl tracking-tight">HookShield</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                     <li key={index}>
                        <button onClick={() => scrollToSection(item.href)}>
                            {item.label}
                        </button>
                    </li>
                    ))}
                    <li>
                        <a href="#" className="py-2 px-4 text-md rounded-md bg-gradient-to-r from-blue-500 to-blue-800 hover:font-bold">
                        GitHub </a>
                    </li>
                </ul>
                <div className="lg:hidden md:flex flex:col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4 ">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                    <a href="#" className="py-2 px-4 text-md rounded-md bg-gradient-to-r from-blue-500 to-blue-800">
                    GitHub </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar

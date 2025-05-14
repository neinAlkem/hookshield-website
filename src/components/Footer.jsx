import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-600">
        <div className="flex items-center flex-shrink-0">
            <img className="w-12 h-12 mr-2 px-2" src={logo} alt="Logo"/><span className="text-xl tracking-tight">HookShield, 2025</span>
        </div>
    </footer>
  )
}

export default Footer

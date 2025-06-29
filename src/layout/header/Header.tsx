import logo from "@/assets/images/logo/logo.svg"
import { Link } from "react-router"
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticked  , setIsSticked] = useState(false);
  function handleScroll(){
    if(window.scrollY > 10){
      setIsSticked(true)
    }else{
      setIsSticked(false)
    }
  }
  useEffect(() => {
      window.addEventListener("scroll" , handleScroll);
      return () => {
        window.removeEventListener("scroll" , handleScroll)
      }
  },[])
  return (
    <div className={`flex items-center justify-between px-6 py-2 z-[120] sticky top-0 ${isSticked ? 'bg-white/55 backdrop-blur-md' : ''}`} >
      <img src={logo} alt="logo" className="h-12" />
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          <li className="text-[15px] font-medium lg:block hidden" ><Link to="/" className="hover:text-primary" >Home</Link></li>
          <li className="text-[15px] font-medium" ><Link to="/documentationd" className="hover:text-primary" >Components</Link></li>
          <li><Link to="/documentationd" className="hover:text-primary" >
          <Icon icon="prime:twitter" width={20} height={20} />
        </Link></li>
        <li className="lg:block hidden" ><Link to="/documentationd" className="hover:text-primary" >
          <Icon icon="ri:linkedin-fill" width={24} height={24} />
        </Link></li>
        </ul>
      </div> 
    </div>
  )
}

export default Header

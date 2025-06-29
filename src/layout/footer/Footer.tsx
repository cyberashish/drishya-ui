import { Link } from "react-router"


const Footer = () => {
  return (
    <div className="py-6 flex items-center justify-between container border-t border-border flex-wrap" >
       {/* <h1>We are heading towards footer</h1> */}
       <p className="text-[15px] text-dark/70">© 2025 by SyncLab, creating a better web for you.</p>
         <ul className="flex items-center gap-4">
          <li className="text-[15px] text-dark/70 hover:text-primary" ><Link to="/" >SyncLabs</Link></li>
          <li className="text-[15px] text-dark/70 hover:text-primary" ><Link to="/" >About Us</Link></li>
         </ul>
    </div>
  )
}

export default Footer

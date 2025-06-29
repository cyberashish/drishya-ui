import { Outlet } from "react-router"
import Footer from "./footer/Footer"
import Header from "./header/Header"


const WebLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default WebLayout

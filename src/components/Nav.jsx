import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import './nav.css'
import { useState } from "react"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [isHamOpen , setIsHamOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('#home');

  const toggleHam = () => {
    setIsHamOpen(!isHamOpen)
  }
    

    return (
    
    <div className =" w-full h-auto pb-5 bg-gradient-to-r from-custom-darkest
        to-custom-dark text-white lg:px-[14rem] lg:py-[6rem] px-12 py-9 flex justify-between sticky ">

        <div>  <Logo /> </div>
   
  
        <ul className="md:flex gap-7 font-bold hidden ">
          <li><a href="/"  onClick={()=> setActiveNav('#home')} className={ activeNav === '#home' ? 'active' : '' } >HOME</a></li>
          <li><a href="/#about">ABOUT</a></li> 
          <li><a href="/#skills">SKILLS</a></li> 
          <li><a href ='/#portfolio'>PORTFOLIO</a></li>
          <li><a href='/#contact'>LET'S CONNECT</a></li>
        </ul>

        <div className="md:sm:hidden">
              <div onClick={toggleHam} >
                {isHamOpen ? <MdClose className ='text-3xl' /> : < HiOutlineMenuAlt2 className=" text-3xl"/>}
              </div>
        </div>

        

  </div>
  
    )
  }
  export default Nav


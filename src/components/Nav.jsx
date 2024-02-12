import Logo from "./Logo"
import './nav.css'
import { useState } from "react"
import { BsFillGridFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { IoReaderOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";

const Nav = () => {
  const [isHamOpen , setIsHamOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('#home');

  const toggleHam = () => {
    setIsHamOpen(!isHamOpen)
  }
    

    return (
    
    <div className =" w-full h-auto pb-5 bg-gradient-to-r from-custom-darkest
        to-custom-dark text-white lg:px-[14rem] lg:py-[6rem] px-12 py-9 flex justify-between">
        
        <div className=""><Logo /> </div>
   
  
         <ul className="md:flex gap-7 font-bold hidden ">
          <li><a href="/"  onClick={()=> setActiveNav('#home')} className={ activeNav === '#home' ? 'active' : '' } >HOME</a></li>
          <li><a href="/#about">ABOUT</a></li> 
          <li><a href="/#skills">SKILLS</a></li> 
          <li><a href ='/#portfolio'>PORTFOLIO</a></li>
          <li><a href='/#contact'>LET'S CONNECT</a></li>
        </ul>

        <div className="md:sm:hidden">
              <div onClick={toggleHam} >
                {isHamOpen ? <MdClose className ='text-3xl ' /> : < GrProjects className="text-3xl "/>}

              </div>
        </div>
         
          {isHamOpen && (
<div className="bg-black w-full h-[14rem] rounded-t-3xl fixed bottom-0 left-0" >



                <div className="flex flex-row  justify-between  p-10  ">
                   <a href="#homepage" onClick={()=> setActiveNav('#home')} className={ activeNav === '#home' ? 'active' : '' } > 
                      <LuHome className=" ml-3"/> 
                      <span className="link-text">Home</span>
                   </a>
                   <a href="#about" onClick={()=> setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' }  > 
                      <IoReaderOutline className=" ml-3" /> 
                      <span>About</span>
                   </a>
                   <a href="#skills"  onClick={()=> setActiveNav('#skills')} className={ activeNav === '#skills' ? 'active' : '' } > 
                      <IoReaderOutline className=" ml-3" /> 
                      <span>Skills</span>
                   </a>
                   
                </div>

                <div className="flex flex-row  gap-[5rem] px-9 pt-5  ">
                   
                   <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : '' }> 
                      <GoProjectRoadmap className=" ml-3" />
                      <span>Projects</span>
                   </a>
                   <a href="#contact" onClick={()=> setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : '' }  > 
                      <IoIosSend className=" ml-3"/> 
                      <span>Contact</span>
                   </a>
                   
                </div>
                
                </div>
         )}

             
        
        </div>
  
  
    )
  }
  export default Nav


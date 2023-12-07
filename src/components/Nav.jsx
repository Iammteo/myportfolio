import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const Nav = () => {
    // let Links = [
    //     {name:'Home', Link:"/"},
    //     {name:'About', Link:"/about"},
    //     {name:'Work', Link:"/work"},
    //     {name:'Contact', Link:"/contact"},
    // ]
    return <div className="h-auto pb-5 bg-gradient-to-r from-custom-darkest to-custom-dark text-white">
        <div className=" px-[15rem] pt-[5rem] flex justify-between">
           <Logo/>
         
         <ul>
            {
                <li className="flex justify-end gap-7 font-bold">
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/portfolio'>PORTFOLIO</NavLink>
                    <NavLink to='/contact'>LET'S CONNECT</NavLink>
                </li>
            }
         </ul>

        </div>
          
    </div>
  }
  export default Nav
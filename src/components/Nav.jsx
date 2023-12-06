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
        <div className=" px-[15rem] pt-10 flex justify-between">
           <Logo/>
         
         <ul>
            {
                // Links.map(Link => 
                // <li>
                //     <a href="/">{Link.name} </a>

                    
                // </li>)

                // Links.map((link) => (
                //     <li key={link.name}>
                //       <NavLink to={link.link}>{link.name}</NavLink>
                //     </li>
                //   ))
                <li className="flex justify-end gap-7">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>



            }
         </ul>

        </div>
          
    </div>
  }
  export default Nav
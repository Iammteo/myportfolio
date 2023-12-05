
import Logo from "./Logo"

const Nav = () => {
    let Links = [
        {name:'Home', Link:"/"},
        {name:'About', Link:"/about"},
        {name:'Work', Link:"/work"},
        {name:'Contact', Link:"/contact"},
    ]
    return <div className="h-screen bg-gradient-to-r from-custom-darkest to-custom-dark text-white">
        <div className=" px-[15rem] pt-10 flex justify-between">
           <Logo/>
         
         <ul className="flex justify-end gap-7">
            {
                Links.map(Link => 
                <li>
                    <a href="/">{Link.name}</a>
                </li>)
            }
         </ul>

        </div>
          
    </div>
  }
  export default Nav
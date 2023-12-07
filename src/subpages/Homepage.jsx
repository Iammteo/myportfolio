import {Link} from 'react-router-dom'
import classes from '../subpages/Homepage.module.css'
const Homepage = () => {
    return ( 
    <div className="px-[15rem] pt-[5rem] space-y-8">
        <div className="space-y-2">
        <h6 > Hi there! i'm ,  </h6>
        <h1 className="font-bold text-4xl ">OLATUYOLE OMOYELE</h1>
        <h1 className="font-bold">A SOFTWARE ENGINEER</h1>
        </div>

        <div className="space-y-5 font-thin">
          <p>Passionate and detail-oriented, I am obsessed with designing secure, scalable,<br/>
          intuitive, and aesthetically pleasing web applications.</p>

          <button className="w-[10rem] h-auto p-3 hover:bg-cyan-500 ease-in-out hover:text-black font-semibold">
          <Link className={classes.button}>LEARN MORE</Link> 
          </button>

         
        </div>
    </div>
    )
  }
export default Homepage
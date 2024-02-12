
import { TypeAnimation } from "react-type-animation";
import classes from '../subpages/Homepage.module.css';


const Homepage = () => {
    return (
   
        <div className="px-[3rem] md:px-[14rem] pt-20 space-y-8 flex flex-col md:flex-row" id='homepage'>
            <div className="space-y-7 md:w-1/2 md:pr-8 text-center md:text-left ">

                 <div className='space-y-2'>
                        <h6> Hi there! I'm, </h6>
                        <h1 className="font-bold text-4xl">OLATUYOLE OMOYELE</h1>
                       

  <TypeAnimation
        sequence={[
          "A SOFTWARE ENGINEER",
          2000,
          "A PROJECT MANAGER",
          2000,
          
         
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        speed={0}
        className="font-bold text-cyan-300"
      />
                </div>
               
                <div className="space-y-6 font-thin ">
                    <p className='xl:text-lg lg:text-lg md:text-sm'>
                        Passionate and detail-oriented, I am obsessed with designing,scalable,
                        intuitive and aesthetically pleasing web applications.
                    </p>

                    <button >
                        <a href='#about'  className={classes.button}>LEARN MORE</a>
                        
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 md:mt-0">
                <img
                    src='#'  
                    alt="laptop image"
                    className='w-full md:items-center md:relative md:bottom-6 md:left-10'/>
           </div>

        </div>

      
       
    );
};

export default Homepage;

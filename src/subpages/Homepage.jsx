
import { Link } from 'react-router-dom';
import classes from '../subpages/Homepage.module.css';


const Homepage = () => {
    return (
   
        <div className="px-[3rem] md:px-[14rem] pt-20 space-y-8 flex flex-col md:flex-row">
            <div className="space-y-7 md:w-1/2 md:pr-8 text-center md:text-left ">

                 <div className='space-y-2'>
                        <h6> Hi there! I'm, </h6>
                        <h1 className="font-bold text-4xl">OLATUYOLE OMOYELE</h1>
                        <h1 className="font-bold">A SOFTWARE ENGINEER</h1>
                </div>
               
                <div className="space-y-6 font-thin ">
                    <p className='xl:text-lg lg:text-lg md:text-sm'>
                        Passionate and detail-oriented, I am obsessed with designing secure, scalable,
                        intuitive, and aesthetically pleasing web applications.
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

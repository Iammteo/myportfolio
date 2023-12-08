// import {Link} from 'react-router-dom'
// import classes from '../subpages/Homepage.module.css'
// const Homepage = () => {
//     return ( 
//     <div className="px-[15rem] pt-[5rem] space-y-8 flex flex-row ">
//         <div className="space-y-2">
//             <h6 > Hi there! i'm ,  </h6>
//             <h1 className="font-bold text-4xl ">OLATUYOLE OMOYELE</h1>
//             <h1 className="font-bold">A SOFTWARE ENGINEER</h1>

//                 <div className="space-y-5 font-thin">
//                       <p>Passionate and detail-oriented, I am obsessed with designing secure, scalable,<br/>
//                       intuitive, and aesthetically pleasing web applications.</p>

//                       <button className="w-[10rem] h-auto p-3 hover:bg-cyan-500 ease-in-out hover:text-black font-semibold">
//                       <Link className={classes.button}>LEARN MORE</Link> 
//                       </button>
//                 </div>
 
//          </div>
          
//           <div>
//             {/* <img src="https://media.istockphoto.com/id/96163590/photo/laptop-in-dark.jpg?s=612x612&w=0&k=20&c=0UUnnzCxUx12XrsZeS5juUcWw_FTKgn-ykstElJczUw="
//              alt="image"
//              className='w-[25rem]' /> */}

//              <img src="./photos/ola_img.png" alt="laptop image" className='  items-center relative bottom-[6rem] left-10' />
//           </div>
       
//     </div>
//     )
//   }
// export default Homepage

import { Link } from 'react-router-dom';
import classes from '../subpages/Homepage.module.css';

const Homepage = () => {
    return (
        <div className="px-6 md:px-16 pt-20 space-y-8 flex flex-col md:flex-row">
            <div className="space-y-2 md:w-1/2 md:pr-8">
                <h6>Hi there! I'm, </h6>
                <h1 className="font-bold text-4xl">OLATUYOLE OMOYELE</h1>
                <h1 className="font-bold">A SOFTWARE ENGINEER</h1>

                <div className="space-y-5 font-thin">
                    <p>
                        Passionate and detail-oriented, I am obsessed with designing secure, scalable,
                        intuitive, and aesthetically pleasing web applications.
                    </p>

                    <button className="w-40 h-auto p-3 hover:bg-cyan-500 ease-in-out hover:text-black font-semibold">
                        <Link className={classes.button}>LEARN MORE</Link>
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
                {/* <img
                    src="https://media.istockphoto.com/id/96163590/photo/laptop-in-dark.jpg?s=612x612&w=0&k=20&c=0UUnnzCxUx12XrsZeS5juUcWw_FTKgn-ykstElJczUw="
                    alt="image"
                    className='w-[25rem]'
                /> */}

                <img src="./photos/ola_img.png" alt="laptop image" className='w-full md:items-center md:relative md:bottom-6 md:left-10' />
            </div>
        </div>
    );
};

export default Homepage;

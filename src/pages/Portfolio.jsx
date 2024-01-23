import classes from './portfolio.module.css'

const Portfolio = () => {
    return <div className=" text-black w-full h-auto mb-5  px-[3rem] md:px-[14rem] gap-5 bg-white p-10" id='portfolio'>
                <h1 className ="text-center font-bold font-serif p-7 text-3xl" >PROJECTS </h1> 
              <section className="flex flex-col md:lg:flex-row gap-10  mt-3 ">
                   <div className="" >
                      <h1 className="font-bold mb-3">Estudiez</h1>
                      <p >Estudiez is a comprehensive school management software that automates all the manual,
                        and vital operations in school administration making work and tasks easier, 
                        faster and more accessible. This school web app enables faculty, parents and students
                        to edit,monitor and view student performance. I developed this project using Html, Css, BootStrap, Javascript 
                        and Firebase for backend.
                      </p>
                       
                      <div className='flex gap-4 '>
                         <button className={classes.button1}> <a href="https://www.adeleke.dev/estudiez/">See Live</a> </button>
                         <button className='text-cyan-500 font-bold'><a href="https://github.com/Iammteo/estudiez">Source Code</a> </button>
                      </div>
                     
                  </div>
                  <div>
                      <img className=" shadow" src="/photos/project1.png" alt="project1" />
                  </div>
              </section>

              <section className="flex flex-col md:lg:flex-row gap-10  mt-5">
                   <div  >
                      <h1 className="font-bold mb-3">Booksapp</h1>
                      <p >This is a simple book app that performs CRUD functionality, This was built using ReactJs
                      </p>
                       
                      <div className='flex gap-4 '>
                         <button className={classes.button1}> <a href="https://booksapp-9s9m.onrender.com/">See Live</a></button>
                         <button className='text-cyan-500 font-bold'><a href="https://github.com/Iammteo/bookapp">Source Code</a> </button>
                      </div>
                     
                  </div>
                  <div>
                      <img className=" w-[45rem] shadow" src="/photos/project3.png" alt="project1" />
                  </div>
              </section>

              <section className="flex flex-col md:lg:flex-row gap-10  mt-5">
                   <div className="" >
                      <h1 className="font-bold mb-3">SearchMe</h1>
                      <p > This is an api app built with react using axios, 
                        it pulls random images based on context of what is searched for
                      </p>
                       
                      <div className='flex gap-4 '>
                         <button className={classes.button1}><a href="https://searchme-vqvx.onrender.com/">See Live </a> </button>
                         <button className='text-cyan-500 font-bold'><a href="https://github.com/Iammteo/search-api">Source Code</a> </button>
                      </div>
                     
                  </div>
                  <div>
                      <img className=" w-[57rem] shadow" src="/photos/project4.png" alt="project1" />
                  </div>
              </section>

              <section className="flex flex-col md:lg:flex-row gap-10  mt-5">
                   <div className="" >
                        <h1 className="font-bold mb-3">Animal clicks</h1>
                        <p > This is an app that adds images of random aniamls and responds to clicks
                            based on how much you love it.
                        </p>
                        
                        <div className='flex gap-4 '>
                            <button className={classes.button1}> <a href="https://animal-clicks.onrender.com/">See Live</a>  </button>
                            <button className='text-cyan-500 font-bold'><a href="https://github.com/Iammteo/animal-app">Source Code </a></button>
                        </div>
                  </div>
                  <div>
                      <img className=" w-[57rem] shadow" src="/photos/project5.png" alt="project1" />
                  </div>
              </section>

            
    </div>
  }
  export default Portfolio


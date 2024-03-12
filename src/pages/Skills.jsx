const Skills = () => {
    return (
        <div className="text-black w-full h-auto px-[3rem] md:px-[14rem] bg-white" id='skills'>
             <h1 className ="text-center font-bold font-serif mt-14 text-3xl" >Skillset</h1> 
             <p className="text-center mt-2 ">I always strive to bring together the proper techniques and methods to achieve the best possible 
                outcome by  <span className="font-bold">working collaboratively.</span> Here is a spread of my core skill. 
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-5  ">
                

                <div className=" shadow-md ">
                    <h1 className="font-bold text-xl p-4 ">WEB & MOBILE ENGINEERING </h1>
                     <ul className="font-thin space-y-3 mt-3 mb-3">
                        <li>Html & Css</li>
                        <li>JavaScript</li>
                        <li>React & Redux</li>
                        <li>Bootstrap</li>
                        <li>Tailwind </li>
                        <li>Jquery</li>
                        <li>Git & Github</li>
                        <li>Flutter</li>
                        <li>Python</li>
                        <li>Firebase</li>
                        <li>Flask</li>
                     </ul>
                </div>
                <div className=" shadow-md">
                    <h1 className="font-bold text-xl p-3 "> UX/UI DESIGN  </h1>
                     <ul className="font-thin space-y-3 p-3 ">
                        <li>Ux Research</li>
                        <li>Information Architecture</li>
                        <li>Wireframing</li>
                        <li>Prototyping</li>
                        <li>Usability Testing</li>
                        <li>Visual Design</li>
                        <li>Layout Design</li>
                        <li>Visual Interface</li>
                        <li>Responsive Design </li>
                        <li>Design System </li>
                       
                     </ul>
                </div>
                <div className="shadow-md">
                    <h1 className="font-bold text-xl p-3  "> PROJECT MANAGEMENT </h1>
                     <ul className="font-thin space-y-3  p-3 ">
                        <li>Risk management</li>
                        <li>Time management</li>
                        <li>Task management</li>
                        <li>Budgeting</li>
                        <li>Agile methodology </li>
                        <li>Scrum master</li>
                        <li>Trello</li>
                        <li>Jira</li>
                        <li>Figma</li>
                        <li>Problem solving</li>
                       
                     </ul>
                </div>
              

             </div>
        </div>
 )
}
export default Skills;

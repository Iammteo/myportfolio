
import { IoShieldCheckmark } from "react-icons/io5";
import { useForm, ValidationError } from '@formspree/react';
import Socials from "../components/Socials";

const Contact = () => {


  const [state, handleSubmit] = useForm("myyrylbj");
  if (state.succeeded) {
      return <div
                  class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 m-10  shadow-md" role="alert" >
                  <div class="flex">
                    <div class="py-1"><IoShieldCheckmark/> </div>
                    <div>
                      <p class="font-bold">Message sent sucessfully ! </p>
                      
                    </div>
                  </div>
                  
                      
              </div>
      
  }

  return <div className="bg-black text-white flex justify-center  " id="contact">
        
       
            
       <form onSubmit={handleSubmit}>
       <h1 className="font-bold  text-2xl p-5">Feel free to hit me up, I'm looking forward to hearing from you</h1>
               
       <div><Socials/></div>
   
                <div  className='p-3'>
                        <label htmlFor="name">
                          Full Name:
                        </label>
                        <input
                          className=' w-full appearance-none p-3 block bg-transparent text-white border
                          border-cyan-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent 
                          focus:border-white'
                          placeholder='Enter your name...'
                          id="name"
                          type="name" 
                          name="name"
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                        />
                </div>
      
                <div className='p-3'>
                      <label htmlFor="email">
                        Email Address:
                      </label>
                      <input
                        className ="appearance-none p-3 block w-full bg-transparent text-white border
                        border-cyan-500 rounded py-3 px-4 leading-tight focus:outline-none
                          focus:bg-transparent focus:border-white"
                        placeholder="Enter your email "
                        id="email"
                        type="email" 
                        name="email"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                </div>

                <div className='p-3'>
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder='Enter your message...'
                        className="appearance-none p-3 block  w-full  h-[6rem] bg-transparent text-white border
                      border-cyan-500 rounded py-3 px-4 leading-tight
                        focus:outline-none focus:bg-transparent
                      focus:border-white"
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />

                </div>

                <div  className="p-3 ">
                  <button type="submit" disabled={state.submitting}
                    className="bg-cyan-500 p-2 w-[6rem] text-white">
                    Send
                  </button>
                </div>
      
       </form>

   </div>
}

export default Contact;
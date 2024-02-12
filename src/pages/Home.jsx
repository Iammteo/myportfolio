import Homepage from "../subpages/Homepage"
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Aboutpage from "../subpages/Aboutpage";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import QuoteGenerator from "../components/QuoteGenerator";
import Endorsement from "../components/Endorsement";
import Contact from "./Contact";
import Totop from "../components/Totop";

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = 'Home';
  },[])
  setTimeout(() => {
    setIsLoading(true);
  }, 3000);
    return (
      <> {isLoading ?
      <div >
        <>
        <Nav/>
         <div className=" w-full h-[30rem] bg-gradient-to-r from-custom-darkest to-custom-dark text-white">
         <Homepage/> </div>
         <Aboutpage/>
         <Skills/>
         <Portfolio/>
         <QuoteGenerator/>
         <Endorsement/>
         <Contact/>
         <Totop/>
        </>
      </div>
       : <Loader/>}</>
    )
  }
  export default Home;

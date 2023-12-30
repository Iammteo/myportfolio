import Homepage from "../subpages/Homepage"
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = 'Home';
  },[])
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
    return (
      <> {isLoading ?
      <div >
        <>
        <Nav/>
         <div className=" w-full h-[30rem] bg-gradient-to-r from-custom-darkest to-custom-dark text-white"><Homepage/> </div>
        </>
      </div>
       : <Loader/>}</>
    )
  }
  export default Home;

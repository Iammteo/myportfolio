import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import SharedLayouts from "./components/SharedLayouts";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  

  return (

    
 <Routes>
    <Route path="/" element = {<SharedLayouts/>}>
         <Route index element = {<Home/>}/>
         <Route path="/about" element = {<About/>} />
         <Route path="/portfolio" element = {<Portfolio/>} />
         <Route path="/contact" element = {<Contact/>} />
        
    </Route>
</Routes> 

  
  );
}

export default App

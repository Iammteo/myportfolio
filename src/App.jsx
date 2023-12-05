
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import SharedLayouts from "./components/SharedLayouts";

function App() {
  

  return (

    // <div>
    //       <Nav/>

    // </div>
  
 <Routes>
    <Route path="/" element = {<SharedLayouts/>}>
         <Route index element = {<Home/>} />
    </Route>
</Routes> 
    
  //   <div>
      
  //   <div className="h-screen bg-gradient-to-r from-custom-darkest to-custom-dark text-white"><Home/> </div>
     
  //  </div>
    
  
  );
}

export default App

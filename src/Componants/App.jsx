import { BrowserRouter, Route, Routes, } from "react-router-dom";
import NavBar from "./NavBar" ;
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Contact from "./Componants/Contact";
// import Register from "./Componants/Register";
export default function App()
{
  return <>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

    {/* <Route path="/register" element={<Register/>}/> */}


  </Routes>
   
   </>
}
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import NavBar from "./Componants/NavBar" ;
import Home from "./Componants/Home";
export default function App()
{
  return <>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} ></Route>
  </Routes>
   
   </>
}
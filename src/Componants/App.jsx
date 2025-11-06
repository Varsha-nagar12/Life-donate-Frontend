// import { BrowserRouter, Route, Routes, } from "react-router-dom";
// import NavBar from "./NavBar" ;
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Register from "./Register";
// import Login from "./Login" ;
// // import Contact from "./Componants/Contact";
// // import Register from "./Componants/Register";
// export default function App()
// {
//   return <>
//   <NavBar/>
//   <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/about" element={<About/>}/>
//     <Route path="/contact" element={<Contact/>}/>
//     <Route path="/register" element={<Register/>}/>
//     <Route path="/login" element={<Login/>}></Route>

//     {/* <Route path="/register" element={<Register/>}/> */}


//   </Routes>
   
//    </>
// }











// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import NavBar from "./NavBar";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Register from "./Register";
// import Login from "./Login";

// export default function App() {
//   return (
//     <Router>
//       {/* Global Navigation */}
//       <NavBar />

//       {/* Application Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Optional: 404 Page (for unmatched routes) */}
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//   );
// }









import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));

export default function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

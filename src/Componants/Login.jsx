// chat
// import { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handlePasswordChange = (e) => {
//     const input = e.target.value;
//     setPassword(input);

//     // Check if password meets the requirements
//     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
//     if (input.length !== 8) {
//       setErrorMessage("Password must be exactly 8 characters long.");
//     } else if (!specialCharRegex.test(input)) {
//       setErrorMessage("Password must include at least one special character.");
//     } else {
//       setErrorMessage("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Both fields are required.");
//       return;
//     }
//     if (errorMessage) {
//       alert("Please fix the errors before submitting.");
//       return;
//     }
//     alert("Login successful!");

//     // Clear input fields
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//             <h6 className="section-title bg-white text-center text-primary px-3">Welcome Back</h6>
//             <h1 className="mb-5">Login to Your Account</h1>
//             <p className="mb-4">
//               Access your account to schedule donations, find resources, or connect with donors.
//             </p>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
//               <form onSubmit={handleSubmit}>
//                 <div className="row g-3">
//                   <div className="col-12">
//                     <div className="form-floating">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                       <label htmlFor="email">Email</label>
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="form-floating">
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         required
//                       />
//                       <label htmlFor="password">Password</label>
//                     </div>
//                     {errorMessage && (
//                       <div className="text-danger mt-2">{errorMessage}</div>
//                     )}
//                   </div>
//                   <div className="col-12">
//                     <button
//                       className="btn btn-primary w-100 py-3"
//                       type="submit"
//                       disabled={!email || !password || !!errorMessage}
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </div>
//               </form>
//               <p className="text-center mt-3">
//                 Don't have an account?{" "}
//                 <a href="/register" className="text-primary">
//                   Register
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }












// donor

// import { useRef } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { setData } from "./reduxconfig/UserSlice";
// import { useDispatch } from "react-redux";

// export default function Login() {
//   const dispatch = useDispatch
//   const navigate = useNavigate();

//   const mailRef = useRef();
//   const passRef = useRef();

//   const login = (event) => {
//     event.preventDefault();
//     const data = {
//       email: mailRef.current.value,
//       password: passRef.current.value,
//     };

//     fetch("http://localhost:8989/noauth/login", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.status) {
//           event.target.reset();
//           toast.success(result.msg);
//           dispatch(setData(result.data))
//           // navigate(`/${result.data.role}`);
//           navigate("/donor/welcome");
//         } else {
//           toast.error(result.msg);
//         }
//       });
//   };

//   return (
//     <>
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="bg-light rounded shadow-lg">
//             <div className="row g-0">
//               {/* Left side - Form */}
//               <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
//                 <div className="h-100 d-flex flex-column justify-content-center p-5">
//                   <h1 className="mb-4 text-primary fw-bold">Welcome to the Blood Donation Platform</h1>
//                   <h4 className="mb-4 text-muted">Login to continue making a difference</h4>
//                   <form onSubmit={login}>
//                     <div className="row g-3">
//                       <div className="col-12">
//                         <div className="form-floating">
//                           <input
//                             type="email"
//                             className="form-control border-0 shadow-sm"
//                             id="email"
//                             placeholder="Email"
//                             ref={mailRef}
//                             required
//                           />
//                           <label htmlFor="email" className="text-dark">Email</label>
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="form-floating">
//                           <input
//                             type="password"
//                             className="form-control border-0 shadow-sm"
//                             id="password"
//                             placeholder="Password"
//                             ref={passRef}
//                             required
//                           />
//                           <label htmlFor="password" className="text-dark">Password</label>
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
//                         <div className="login-footer text-center mt-3">
//                           New here? <Link to="/register" className="register-link text-primary">Register now</Link>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>

//               {/* Right side - Caption about Blood Donation */}
//               <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
//                 <div className="text-center">
//                   <h3 className="fw-bold text-primary">Your Donation Saves Lives</h3>
//                   <p className="lead text-muted">
//                     Every time you donate blood, you're giving someone a chance to live. Join us today and make a difference in someone's life.
//                   </p>
//                   <p className="text-muted mb-4">
//                     We welcome all kind-hearted people to join our community of lifesavers. You are the real hero!
//                   </p>
//                   {/* <Link to="/register" className="btn btn-info btn-lg">Create an Account</Link> */}
//                   {/* <Link to="/register" className="btn btn-primary w-40 py-3">Create an Account</Link> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


















import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { setData } from "./reduxconfig/UserSlice";
import { useDispatch } from "react-redux";

export default function Login()
{
  const dispatch = useDispatch
  const navigate = useNavigate();

  const mailRef = useRef();
  const passRef = useRef();

  const login = (event) => {
    event.preventDefault();
    const data = {
      email: mailRef.current.value,
      password: passRef.current.value,
    };

    fetch("http://localhost:8989/noauth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          event.target.reset();
          toast.success(result.msg);
          dispatch(setData(result.data))
          // navigate(`/${result.data.role}`);
          navigate("/donor/welcome");
        } else {
          toast.error(result.msg);
        }
      });
  };



  return (
    
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Welcome Back</h6>
            <h1 className="mb-5">Login to Your Account</h1>
            <p className="mb-4">
              Access your account to schedule donations, find resources, or connect with donors.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <form onSubmit={login}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                    <input type="email" className="form-control border-0 shadow-sm" id="email" placeholder="Email"
                      ref={mailRef}  required />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control border-0 shadow-sm"
                        placeholder="Password"
                        ref={passRef}
                        required  />
                      <label htmlFor="password">Password</label>
                    </div>
                    {/* {errorMessage && (
                      <div className="text-danger mt-2">{errorMessage}</div>
                    )} */}
                  </div>
                  <div className="col-12">
        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>

                  </div>
                </div>
              </form>
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <a href="/register" className="text-primary">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
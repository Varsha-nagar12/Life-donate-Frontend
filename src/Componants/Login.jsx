import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    // Check if password meets the requirements
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (input.length !== 8) {
      setErrorMessage("Password must be exactly 8 characters long.");
    } else if (!specialCharRegex.test(input)) {
      setErrorMessage("Password must include at least one special character.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Both fields are required.");
      return;
    }
    if (errorMessage) {
      alert("Please fix the errors before submitting.");
      return;
    }
    alert("Login successful!");

    // Clear input fields
    setEmail("");
    setPassword("");
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
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    {errorMessage && (
                      <div className="text-danger mt-2">{errorMessage}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      disabled={!email || !password || !!errorMessage}
                    >
                      Login
                    </button>
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
  );
}


















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
//     if (input.length < 8) {
//       setErrorMessage("Password must be at least 8 characters long.");
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

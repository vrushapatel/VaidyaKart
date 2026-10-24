import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {

  const [isSignup, setIsSignup] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // signup input
  const handleSignupChange = (e) => {

    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  // login input
  const handleLoginChange = (e) => {

    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // signup
  const handleSignup = (e) => {

    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("userName", signupData.name);
    localStorage.setItem("userEmail", signupData.email);
    localStorage.setItem("userPassword", signupData.password);

    alert("Signup Successful");

    setIsSignup(false);
  };

  // login
  const handleLogin = (e) => {

    e.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (
      loginData.email === savedEmail &&
      loginData.password === savedPassword
    ) {

      localStorage.setItem("userLogin", "true");

      alert("Login Successful");

      navigate("/");

    } else {

      alert("Invalid Email or Password");
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        {
          isSignup ? (

            <>

              <h2>Signup</h2>

              <form onSubmit={handleSignup}>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  required
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />

                <input
                  type="password"
                  placeholder="Create a password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />

                <button type="submit">
                  Signup
                </button>

              </form>

              <p>
                Already have an account?
                <span onClick={() => setIsSignup(false)}>
                  Login
                </span>
              </p>

            </>

          ) : (

            <>

              <h2>Login</h2>

              <form onSubmit={handleLogin}>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />

                <p className="forgot">
                  Forgot password?
                </p>

                <button type="submit">
                  Login
                </button>

              </form>

              <p>
                Don't have an account?
                <span onClick={() => setIsSignup(true)}>
                  Signup
                </span>
              </p>

            </>

          )
        }

      </div>

    </div>
  );
};

export default LoginSignup;
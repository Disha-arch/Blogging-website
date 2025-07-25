import React, { useState } from "react";
import "./Login.css";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from "../../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-main-div">
      <div className="login-first-sub-div">
        <h1>BlogSphere</h1>
        <p>Where stories come to life</p>
      </div>
      <div className="login-second-sub-div">
        <div className="login-title-div">
          <h1>Welcome Back</h1>
          <p>Sign in to continue your blogging journey</p>
        </div>
        <div className="email-pass-div">
          <label className="email-label">Email Address</label>
          <div className="email-div">
            <CiMail size={24} color="rgb(131, 18, 37)" />
            <input
              className="email-input"
              placeholder="your@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <label className="pass-label">Password</label>
          <div className="pass-div">
            <CiLock size={25} color="rgb(131, 18, 37)" />
            <input
              className="pass-input"
              placeholder="enter your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="remem-forget-div">
          <div className="remem-check-div">
            <input type="checkbox"></input>
            <label style={{ color: "rgb(131, 18, 37)", fontSize: "17px" }}>
              Remember me
            </label>
          </div>
          <h4
            style={{
              color: "rgb(131, 18, 37)",
              fontSize: "17px",
            }}
          >
            Forgot Password?
          </h4>
        </div>
        <button className="signIn-button" onClick={handleSignIn}>
          Sign In
        </button>
        <div
          style={{
            backgroundColor: "white",
            color: "rgb(131, 18, 37)",
            width: "30px",
            textAlign: "center",
            padding: "3px",
          }}
        >
          OR
        </div>
        <button
          className="google-signIn-button"
          onClick={handleSignInWithGoogle}
        >
          <FaGoogle
            size={16}
            color="white"
            style={{ marginRight: "8px", marginTop: "4.5px" }}
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

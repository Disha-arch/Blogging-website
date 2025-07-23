import React from "react";
import "./Login.css";
import { auth } from "../../config/firebase-config";

const Login = () => {
  return (
    <div className="login-main-div">
      <div>
        <h1>BlogSphere</h1>
        <p>Where stories come to life</p>
      </div>
      <div
        style={{ width: "480px", height: "575px", backgroundColor: "white" }}
      >
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Login;

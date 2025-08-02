import React, { useEffect, useState } from "react";
import "./Hero.css";
import { TfiShine } from "react-icons/tfi";

const Hero = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    // console.log("storedName:", storedName);
    if (storedName) {
      setUsername(storedName || "");
    }
  }, []);
  return (
    <div className="main-hero-div">
      <div className="hero-welcome-para-div">
        <div className="hero-title-icon-div">
          <h1>Welcome Back , {username} !</h1>
          <TfiShine className="shine-icon" size={"60"} />
        </div>
        <p>
          Ready to share your thoughts with the world? Your creative space
          awaits.
        </p>
      </div>
    </div>
  );
};

export default Hero;

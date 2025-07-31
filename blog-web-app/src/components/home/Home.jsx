import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
      console.log("logged in as :", storedName);
    }
  }, []);

  return (
    <div className="main-home-div">
      <h1>Welcome back , {username}</h1>
    </div>
  );
};

export default Home;

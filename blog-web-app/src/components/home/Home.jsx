import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div className="main-home-div">
      <Navbar />;
      <Hero />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import RecentPost from "../recentPost/RecentPost";

const Home = () => {
  return (
    <div className="main-home-div">
      <Navbar />;
      <Hero />
      <RecentPost />
    </div>
  );
};

export default Home;

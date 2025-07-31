import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);
  return (
    <div className="main-navbar-div">
      <div className="navbar-logo-div">
        <MdMenuBook />
        <h2>BlogSphere</h2>
      </div>
      <NavLink
        to={"/home"}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "black" : "#540729",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to={"/discover"}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "black" : "#540729",
          textDecoration: "none",
        })}
      >
        Discover
      </NavLink>
      <div>
        <IoSearchOutline />
        <input placeholder="Search articles..."></input>
      </div>
      <button>+ Write</button>
      <h4>Welcome , {username} </h4>
    </div>
  );
};

export default Navbar;

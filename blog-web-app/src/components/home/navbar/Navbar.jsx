import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

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
        <MdMenuBook size={29} className="book-logo" />
        <h2>BlogSphere</h2>
      </div>
      <NavLink
        className={"home-navlink"}
        to={"/home"}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "rgb(156, 32, 32)" : "#540729",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>
      <NavLink
        className={"discover-navlink"}
        to={"/discover"}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "black" : "#540729",
          textDecoration: "none",
        })}
      >
        Discover
      </NavLink>
      <div className="search-div">
        <IoSearchOutline size={16} color="#71143cff" className="search-icon" />
        <input
          placeholder="Search articles..."
          type="text"
          className="search-input-field"
        ></input>
      </div>
      <div className="write-button-div">
        <FaPlus size={14} color="#71143cff" className="write-icon" />
        <button className="write-button">Write</button>
      </div>
      <h4 className="welcome-msg">
        Welcome , <span>{username}</span>
      </h4>
    </div>
  );
};

export default Navbar;

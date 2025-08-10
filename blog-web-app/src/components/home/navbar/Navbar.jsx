import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="main-navbar-div">
      <div className="navbar-logo-div">
        <MdMenuBook size={29} className="book-logo" />
        <h2>BlogSphere</h2>
      </div>
      <div className="home-icon-link-div">
        <MdOutlineHome size={17} color="#721b1bff" className="home-icon" />
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
      </div>
      <div className="myblogs-icon-link-div">
        <GrNotes size={14} color="#721b1bff" className="myblogs-icon" />
        <NavLink
          className={"myblogs-navlink"}
          to={"/myblogs"}
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "#540729",
            textDecoration: "none",
          })}
        >
          My Blogs
        </NavLink>
      </div>
      <div className="write-button-div">
        <FaPenNib size={14} color="#71143cff" className="write-icon" />
        <button
          className="write-button"
          onClick={() => navigate("/create-post")}
        >
          Write
        </button>
      </div>
      <div className="search-div">
        <IoSearchOutline size={16} color="#71143cff" className="search-icon" />
        <input
          placeholder="Search articles..."
          type="text"
          className="search-input-field"
        ></input>
      </div>
      <div className="logout-button-icon-div">
        <IoLogOutOutline className="logout-icon" />
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./FeaturedPost.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
const FeaturedPost = () => {
  return (
    <div>
      <div className="featured-image-main-div">
        <div className="main-text-div">
          <div className="featured-post-text-div">Featured post</div>
          <div className="fp-title-para-div">
            <h2>The Art of Mindful Writing : Finding Your Voice</h2>
            <p>
              Discover how mindfulness can transform your writing process and
              help you connect more deeply with your authentic voice. In this
              post , we explore practical techniques
            </p>
          </div>
          <div className="date-read-div">
            <div className="calendar-icon-date-div">
              <IoCalendarClearOutlines />
              <p>March 15 , 2025</p>
            </div>
            <button>Read More</button>
          </div>
        </div>
        <div className="image-icons-main-div">
          <div className="eye-heart-icon-div">
            <div className="eye-icon-div">
              <FaRegEye />
              <h5>234</h5>
            </div>
            <div className="heart-icon-div">
              <FaRegHeart />
              <h5>18</h5>
            </div>
          </div>
          <div className="featured-image-div">
            <img
              src="featured_post_1.jfif"
              className="featured-image"
              alt="Featured Image"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;

import React from "react";
import "./FeaturedPost.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
const FeaturedPost = () => {
  return (
    <div>
      <div>
        <div>
          <div>Featured post</div>
          <div>
            <h2>The Art of Mindful Writing : Finding Your Voice</h2>
            <p>
              Discover how mindfulness can transform your writing process and
              help you connect more deeply with your authentic voice. In this
              post , we explore practical techniques
            </p>
          </div>
          <div>
            <div>
              <IoCalendarClearOutline />
              <p>March 15 , 2025</p>
            </div>
            <button>Read More</button>
          </div>
        </div>
        <div>
          <div>
            <div>
              <FaRegEye />
              <h5>234</h5>
            </div>
            <div>
              <FaRegHeart />
              <h5>18</h5>
            </div>
            <img src="featured_post_img.jfif"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;

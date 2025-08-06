import React from "react";
import "./RecentPost.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

const RecentPost = () => {
  return (
    <div>
      <div className="recent-post-view-all-button-div">
        <h4>Recent Posts</h4>
        <button>View All</button>
      </div>
      <div>
        <div>
          <div>Photography</div>
          <h3>10 Tips for Better Blog Photography</h3>
          <p>
            Learn how to capture stunning images that complement your written
            content and enagage your readers.....
          </p>
          <div>
            <IoCalendarClearOutline />
            <p>March 12 , 2024</p>
          </div>
          <div>
            <div>
              <div>
                <IoEyeOutline />
                <p>156</p>
              </div>
              <div>
                <CiHeart />
                <p>12</p>
              </div>
              <div>
                <FaRegComment />
                <p>8</p>
              </div>
            </div>
            <div>Read</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;

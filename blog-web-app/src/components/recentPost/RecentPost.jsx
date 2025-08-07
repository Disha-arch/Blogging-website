import React, { useEffect, useState } from "react";
import "./RecentPost.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const RecentPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postList);
      console.log("fetched posts :", postList);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="recent-post-view-all-button-div">
        <h4>Recent Posts</h4>
        <button>View All</button>
      </div>
      <div className="all-recent-posts-div">
        <div className="recent-post-indiv-div">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="recent-post-category-div">{post.category}</div>
              <h3 className="recent-post-title">{post.title}</h3>
              <p className="recent-post-content">{post.content}</p>
              <div className="recent-post-date-div">
                <IoCalendarClearOutline color="rgb(108, 44, 44)" />
                <p>{new Date(post.date.seconds * 1000).toLocaleDateString()}</p>
              </div>
              <div className="like-view-comm-read-div">
                <div className="like-view-comm-div">
                  <div className="views-div">
                    <IoEyeOutline color="rgb(108, 44, 44)" />
                    <p>{post.views}</p>
                  </div>
                  <div className="likes-div">
                    <CiHeart color="rgb(108, 44, 44)" />
                    <p>{post.likes}</p>
                  </div>
                  <div className="comments-div">
                    <FaRegComment color="rgb(108, 44, 44)" />
                    <p>{post.comments}</p>
                  </div>
                </div>
                <div className="read-div">Read</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;

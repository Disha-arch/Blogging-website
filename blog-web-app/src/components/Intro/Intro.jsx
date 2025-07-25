import "./Intro.css";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-main-div">
      <div className="image-div">
        <img
          className="intro-img"
          src="bg_img_intro.png"
          style={{ width: "800px", height: "710px", borderRadius: "570px" }}
        ></img>
      </div>
      <div className="text-div">
        <div className="welcome-line-div">Welcome to the Blog</div>
        <h1 className="main-title">
          Stories that <span className="span-text">inspire</span> and connect
        </h1>
        <p className="desc-text">
          Discover thoughtful writing, creative thoughts , and meaningful
          conversations. Join our community of readers and writers exploring
          life's beautiful moments.
        </p>
        <div className="button-div">
          <button className="login-button" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="subs-button">Subscribe</button>
        </div>
        <div className="features-div">
          <div className="heart-div">
            <CiHeart className="heart-shape" />
            <p>1,200+ readers</p>
          </div>
          <div className="star-div">
            <CiStar className="star-shape" />
            <p>Featured stories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

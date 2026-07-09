import React, { useState } from "react";

import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import Skills from "./Skills";
import Footer from "./Footer";

function ProfileCard({ profile }) {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(95);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % profile.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + profile.images.length) % profile.images.length
    );
  };

  const contactHandler = () => {
    alert("Thanks for visiting my portfolio 😊");
  };

  return (
    <div className={darkMode ? "card dark" : "card"}>

      {/* Theme Button */}

      <div className="theme-wrapper">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Header */}

      <div className="card-header">

        <ProfileImage image={profile.images[currentImage]} />

        <UserInfo
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />

      </div>

      {/* Skills */}

      <div className="skill-section">

        <h4>Skills</h4>

        <Skills skills={profile.skills} />

      </div>

      {/* Footer */}

      <Footer
        darkMode={darkMode}
        likes={likes}
        currentImage={currentImage}
        totalImages={profile.images.length}
        likeProfile={() => setLikes(likes + 1)}
        previousImage={prevImage}
        nextImage={nextImage}
        contact={contactHandler}
      />

    </div>
  );
}

export default ProfileCard;
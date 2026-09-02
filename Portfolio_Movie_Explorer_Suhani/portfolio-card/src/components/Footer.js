import React from "react";

function Footer({
  darkMode,
  likes,
  currentImage,
  totalImages,
  likeProfile,
  previousImage,
  nextImage,
  contact
}) {

  return (

    <div className="footer">

      <div className="footer-left">

        <span>
          {darkMode ? "🌙 Dark" : "☀ Light"}
        </span>

      </div>

      <div className="footer-center">

        <button
          className="icon-btn"
          onClick={previousImage}
        >
          ❮
        </button>

        <button
          className="icon-btn"
          onClick={nextImage}
        >
          ❯
        </button>

        <span className="page-count">
          {currentImage + 1}/{totalImages}
        </span>

      </div>

      <div className="footer-right">

        <button
          className="like-btn"
          onClick={likeProfile}
        >
          🤍 {likes}
        </button>

        <button
          className="contact-btn"
          onClick={contact}
        >
          Contact
        </button>

      </div>

    </div>

  );
}

export default Footer;
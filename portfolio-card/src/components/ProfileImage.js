import React from "react";

function ProfileImage({ image }) {
  return (
    <div className="profile-image">
      <img src={image} alt="Profile" />
    </div>
  );
}

export default ProfileImage;
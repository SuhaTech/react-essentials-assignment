import React from "react";

function UserInfo({ name, title, bio }) {
  return (
    <div className="user-info">

      <h2>{name}</h2>

      <h4>{title}</h4>

      <p>{bio}</p>

    </div>
  );
}

export default UserInfo;
import React from "react";

const Welcome = ({user}) => {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user}</strong>
      </h2>
    </div>
  );
};

export default Welcome;

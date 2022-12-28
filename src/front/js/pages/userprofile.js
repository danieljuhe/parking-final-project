import React, { useState, useEffect } from "react";

const UserProfile = () => {
  useEffect(() => {
    fetch(
      `https://3001-danielo8417-parkingfina-kdzjngr9p4d.ws-eu80.gitpod.io/api/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
        },
      }
    );
    if (!resp.ok) throw Error("There was a problem in the login request");
    else if (resp.status === 403) {
      throw Error("Missing or invalid token");
    } else {
      throw Error("Uknon error");
    }
    const data = resp.json();
    console.log("This is the data you requested", data);
    return data;
  });

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

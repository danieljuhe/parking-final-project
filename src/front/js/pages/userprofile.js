import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { store, actions } = useContext(Context);

  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <h1>{user && user.name}</h1>
      <h1>{user && user.telephone}</h1>
      {/* <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        className="btn btn-primary"
      >
        Log out
      </button> */}
    </>

    // <div>
    //   <div className="card">
    //     <div className="card-body">
    //       <h5 className="card-title"></h5>
    //       <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //       <p className="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href="#" className="card-link">
    //         Card link
    //       </a>
    //       <a href="#" className="card-link">
    //         Another link
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserProfile;

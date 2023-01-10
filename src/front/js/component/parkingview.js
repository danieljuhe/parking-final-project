import React, { useEffect, useState } from "react";
import "../../styles/parkingview.css";

export const ParkingView = () => {
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/parking", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCarCategory(data);
      }),
      [];
  });

  const [carCategory, setCarCategory] = useState("");

  return (
    <div className="parking">
      <div className="col1">
        <div className="a1" id="m">
          Mini
        </div>
        <div className="a2" id="m">
          Mini
        </div>
        <div className="a3" id="x">
          4X4
        </div>
        <div className="a4" id="e">
          Electric
        </div>
        <div className="a5" id="e">
          Electric
        </div>
        <div className="a6" id="p">
          PRM
        </div>
        <div className="a7" id="p">
          PRM
        </div>
        <div className="a8" id="x">
          4X4
        </div>
        <div className="a9" id="x">
          4X4
        </div>
        <div className="a10" id="e">
          Electric
        </div>
        <div className="a11" id="p">
          PRM
        </div>
        <div className="a12" id="m">
          Mini
        </div>
        <div className="a13" id="m">
          Mini
        </div>
      </div>
    </div>
  );
};

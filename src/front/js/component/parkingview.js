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
      .then((response) => {
        setCarCategory(response);
        if (response[0].category_id == 1) {
          setCCategory("Mini");
        }
      }),
      [];
  });

  const [carCategory, setCarCategory] = useState();
  const [cCategory, setCCategory] = useState("");

  const mini = () => {
    setCCategory("Mini");
  };

  const max = () => {
    setCCategory("4X4");
  };

  const electric = () => {
    setCCategory("electric");
  };

  const prm = () => {
    setCCategory("prm");
  };

  return (
    <div className="parking">
      <button onClick={mini}>Mini</button>
      <button onClick={max}>4X4</button>
      <button onClick={electric}>Electric</button>
      <button onClick={prm}>PRM</button>
      <div className="col1">
        <button
          className="a1"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          disabled={!setCCategory == "Mini" ? true : false}
          onClick={() => {
            alert("Vas a reservas la plaza A1");
          }}
        >
          Mini
        </button>
        <div
          className="a2"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
        >
          Mini
        </div>
        <div
          className="a3"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
        >
          4X4
        </div>
        <div
          className="a4"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
        >
          Electric
        </div>
        <div
          className="a5"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
        >
          Electric
        </div>
        <div
          className="a6"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
        >
          PRM
        </div>
        <div
          className="a7"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
        >
          PRM
        </div>
        <div
          className="a8"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
        >
          4X4
        </div>
        <div
          className="a9"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
        >
          4X4
        </div>
        <div
          className="a10"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
        >
          Electric
        </div>
        <div
          className="a11"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
        >
          PRM
        </div>
        <div
          className="a12"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
        >
          Mini
        </div>
        <div
          className="a13"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
        >
          Mini
        </div>
      </div>
    </div>
  );
};

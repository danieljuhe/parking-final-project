import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/parkingview.css";
import "../../styles/modal.css";

export const ParkingView = () => {
  const navigate = useNavigate();

  const [site, setSite] = useState();
  const [carCategory, setCarCategory] = useState();
  const [cCategory, setCCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const confirm = () => {
    setSite("A13");
  };

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/parking", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setCarCategory(response);
        if (response[0].car.category_id.id == 1) {
          setCCategory("electric");
        } else if (response[0].car.category_id.id == 2) {
          setCCategory("prm");
        } else if (response[0].car.category_id.id == 3) {
          setCCategory("4X4");
        } else if (response[0].car.category_id.id == 4) {
          setCCategory("Mini");
        } else return setCCategory("standard");
      });
  }, []);

  const senddata = async () => {
    const parking = {
      site: site,
      car_plate: carCategory && carCategory[0].car.plate,
      user_id: carCategory && carCategory[0].car.user.id,
      category_id: carCategory && carCategory[0].car.category_id.id,
    };

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parking),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="parking">
      <div className="botones">
        <h1>Bienvenido {carCategory && carCategory[0].car.user.name}</h1>
        <br />
        <h4>
          Vas a aparcar tu {carCategory && carCategory[0].car.brand},{" "}
          {carCategory && carCategory[0].car.model}
        </h4>
        <br />
        <h6>
          Es un coche {carCategory && carCategory[0].car.category_id.name}
          <br />
          Recuerda que solo tendras disponibles las plazas para dicha categoria
          <br />
          Escoge una plaza de aparcamiento
        </h6>

        <button onClick={handleOpenModal}>Open Modal</button>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>
                Tu {carCategory && carCategory[0].car.brand},{" "}
                {carCategory && carCategory[0].car.model}
                <br />
                se aparcara en la plaza A0
              </p>
              <button className="confirmar" onClick={confirm}>
                Confirmar
              </button>
              <button
                onClick={() => {
                  handleCloseModal();
                  senddata();
                  navigate("/date");
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="col1">
        <button
          type="button"
          className="a1"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              alert("Vas a reservar la plaza A1");
            }
          }}
        >
          Mini
        </button>
        <button
          className="a2"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
            }
          }}
        >
          Mini
        </button>
        <button
          className="a21"
          id="s"
          style={{
            boxShadow: cCategory == "standard" ? "0px 0px 40px red" : "",
          }}
          onClick={() => {
            if (cCategory == "standard") {
              alert("Vas a reservar la plaza A2");
            }
          }}
        >
          Standard
        </button>
        <button
          className="a3"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
          onClick={() => {
            if (cCategory == "4X4") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          4X4
        </button>
        <button
          className="a4"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
          onClick={() => {
            if (cCategory == "electric") {
              alert("Vas a reservar la plaza A4");
            }
          }}
        >
          Electric
        </button>
        <button
          className="a5"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
          onClick={() => {
            if (cCategory == "electric") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Electric
        </button>
        <button
          className="a6"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
          onClick={() => {
            if (cCategory == "prm") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          PRM
        </button>
        <button
          className="a7"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
          onClick={() => {
            if (cCategory == "prm") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          PRM
        </button>
        <button
          className="a71"
          id="s"
          style={{
            boxShadow: cCategory == "standard" ? "0px 0px 40px red" : "",
          }}
        >
          Standard
        </button>
        <button
          className="a8"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
          onClick={() => {
            if (cCategory == "4X4") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          4X4
        </button>
        <button
          className="a9"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
          onClick={() => {
            if (cCategory == "4X4") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          4X4
        </button>
        <button
          className="a10"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
          onClick={() => {
            if (cCategory == "electric") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Electric
        </button>
        <button
          className="a11"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
          onClick={() => {
            if (cCategory == "prm") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          PRM
        </button>
        <button
          className="a12"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Mini
        </button>
        <button
          className="a13"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Mini
        </button>
      </div>
    </div>
  );
};

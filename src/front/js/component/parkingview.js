import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/parkingview.css";
import "../../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const ParkingView = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const [site, setSite] = useState();
  const [carCategory, setCarCategory] = useState();
  const [cCategory, setCCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
              setModal("A1");
              handleOpenModal();
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
              setModal("A2");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>

        <button
          className="a3"
          id="s"
          style={{
            boxShadow: cCategory == "standard" ? "0px 0px 40px red" : "",
          }}
          onClick={() => {
            if (cCategory == "standard") {
              setModal("A3");

              handleOpenModal();
            }
          }}
        >
          Standard
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
              setModal("A4");
              handleOpenModal();
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
              setModal("A5");
              handleOpenModal();
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
              setModal("A6");
              handleOpenModal();
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
              setModal("A7");
              handleOpenModal();
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
          onClick={() => {
            if (cCategory == "standard") {
              setModal("A71");
              handleOpenModal();
            }
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
              setModal("A8");
              handleOpenModal();
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
              setModal("A9");
              handleOpenModal();
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
              setModal("A10");
              handleOpenModal();
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
              setModal("A11");
              handleOpenModal();
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
              setModal("A12");
              handleOpenModal();
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
              setModal("A13");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>
                Tu {carCategory && carCategory[0].car.brand},{" "}
                {carCategory && carCategory[0].car.model}
                <br />
                {`se aparcara en la plaza ${modal}`}
              </p>
              <button
                className="confirmar"
                onClick={() => {
                  setSite(modal);
                }}
              >
                Confirmar{" "}
                <span className={setSite == modal ? "valid" : "d-none"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </button>
              <button
                onClick={() => {
                  handleCloseModal();
                  senddata();
                  navigate("/date");
                }}
              >
                Reservar y pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

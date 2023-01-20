import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/parkingview.css";
import "../../styles/modal.css";

export const ParkingView = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const [ocupado, setOcupado] = useState();
  const [site, setSite] = useState();
  const [carCategory, setCarCategory] = useState();
  const [parkingSites, setParkingSites] = useState();
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

    fetch(process.env.BACKEND_URL + "/api/parkingsites", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setParkingSites(response);
        if (response[1].site == "A4") {
          setOcupado(false);
        }
      });
  }, []);

  const senddata = async () => {
    const parking = {
      site: site,
      car_plate: carCategory && carCategory[0].car.plate,
      user_id: carCategory && carCategory[0].car.user.id,
      category_id: carCategory && carCategory[0].car.category_id.id,
      occupied: true,
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
      <div className="col1">
        <button
          type="button"
          className="a1"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
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
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
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
            boxShadow:
              cCategory == "standard" && ocupado == false
                ? "0px 0px 40px red"
                : "",
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
              cCategory == "electric" && ocupado == false
                ? "0px 0px 40px greenyellow"
                : "",
          }}
          disabled={ocupado == true}
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
              cCategory == "electric" && ocupado == false
                ? "0px 0px 40px greenyellow"
                : "",
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
          style={{
            boxShadow:
              cCategory == "prm" && ocupado == false
                ? "0px 0px 40px orange"
                : "",
          }}
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
          style={{
            boxShadow:
              cCategory == "prm" && ocupado == false
                ? "0px 0px 40px orange"
                : "",
          }}
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
          className="a8"
          id="x"
          style={{
            boxShadow:
              cCategory == "4X4" && ocupado == false ? "0px 0px 40px blue" : "",
          }}
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
          style={{
            boxShadow:
              cCategory == "4X4" && ocupado == false ? "0px 0px 40px blue" : "",
          }}
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
              cCategory == "electric" && ocupado == false
                ? "0px 0px 40px greenyellow"
                : "",
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
      </div>
      <div className="col2">
        <button
          className="b1"
          id="p"
          style={{
            boxShadow:
              cCategory == "prm" && ocupado == false
                ? "0px 0px 40px orange"
                : "",
          }}
          onClick={() => {
            if (cCategory == "prm") {
              setModal("B1");
              handleOpenModal();
            }
          }}
        >
          PRM
        </button>
        <button
          className="b2"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B2");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b3"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B3");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b4"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B4");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b5"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B5");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b6"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B6");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b7"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B7");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b8"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B8");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b9"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B9");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="b10"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("B10");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
      </div>
      <div className="col3">
        <button
          className="c1"
          id="p"
          style={{
            boxShadow:
              cCategory == "prm" && ocupado == false
                ? "0px 0px 40px orange"
                : "",
          }}
          onClick={() => {
            if (cCategory == "prm") {
              setModal("C1");
              handleOpenModal();
            }
          }}
        >
          PRM
        </button>
        <button
          className="c2"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C2");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c3"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C3");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c4"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C4");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c5"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C5");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c6"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C6");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c7"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C7");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c8"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C8");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c9"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C9");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="c10"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("C10");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
      </div>
      <div className="col4">
        <button
          className="d1"
          id="p"
          style={{
            boxShadow:
              cCategory == "prm" && ocupado == false
                ? "0px 0px 40px orange"
                : "",
          }}
          onClick={() => {
            if (cCategory == "prm") {
              setModal("D1");
              handleOpenModal();
            }
          }}
        >
          PRM
        </button>
        <button
          className="d2"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D2");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d3"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D3");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d4"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D4");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d5"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D5");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d6"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D6");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d7"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D7");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d8"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D8");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d9"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D9");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
        <button
          className="d10"
          id="m"
          style={{
            boxShadow:
              cCategory == "Mini" && ocupado == false
                ? "0px 0px 40px violet"
                : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              setModal("D10");
              handleOpenModal();
            }
          }}
        >
          Mini
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <button onClick={handleCloseModal}>X</button>
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
  );
};

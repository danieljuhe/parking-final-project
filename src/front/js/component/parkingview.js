import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/parkingview.css";
import "../../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChargingStation,
  faPersonRifle,
  faVanShuttle,
  faWheelchair,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

export const ParkingView = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const [carCategory, setCarCategory] = useState();
  const [cCategory, setCCategory] = useState("");
  const [parkingSites, setParkingSites] = useState([]);
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
          setCCategory(1);
        } else if (response[0].car.category_id.id == 2) {
          setCCategory(2);
        } else if (response[0].car.category_id.id == 3) {
          setCCategory(3);
        } else if (response[0].car.category_id.id == 4) {
          setCCategory(4);
        } else return setCCategory(5);
      });

    fetch(process.env.BACKEND_URL + "/api/parkingsites", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setParkingSites(response);
      });
  }, []);

  const senddata = async (id) => {
    const parking = {
      id: id,
      site: modal.site,
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

  let bxColor = "";

  return (
    <div className="parking">
      <div className="col1">
        {parkingSites.map((parkingSite, index) => {
          if (parkingSite.occupied == true) {
            bxColor = "none";
          } else if (parkingSite.category_id == 1) {
            if (parkingSite.category_id === cCategory) {
              bxColor = "inset 0px 0px 20px greenyellow";
            } else {
              bxColor = "none";
            }
          } else if (parkingSite.category_id == 2) {
            if (parkingSite.category_id === cCategory) {
              bxColor = "inset 0px 0px 40px red";
            } else {
              bxColor = "none";
            }
          } else if (parkingSite.category_id == 3) {
            if (parkingSite.category_id === cCategory) {
              bxColor = "inset 0px 0px 40px purple";
            } else {
              bxColor = "none";
            }
          } else if (parkingSite.category_id == 4) {
            if (parkingSite.category_id === cCategory) {
              bxColor = "inset 0px 0px 40px gold";
            } else {
              bxColor = "none";
            }
          } else if (parkingSite.category_id == 5) {
            if (parkingSite.category_id === cCategory) {
              bxColor = "inset 0px 0px 40px white";
            } else {
              bxColor = "none";
            }
          }

          const divStyle = {
            boxShadow: bxColor,
          };
          return (
            <div
              key={index}
              className={parkingSite.site}
              onClick={() => {
                if (
                  parkingSite.occupied == false &&
                  parkingSite.category_id == cCategory
                ) {
                  setModal(parkingSite);
                  handleOpenModal();
                }
              }}
              style={divStyle}
            >
              {parkingSite.category_id == 1 &&
                parkingSite.occupied == false && (
                  <FontAwesomeIcon icon={faChargingStation} />
                )}
              {parkingSite.category_id == 2 &&
                parkingSite.occupied == false && (
                  <FontAwesomeIcon icon={faWheelchair} />
                )}
              {parkingSite.category_id == 3 &&
                parkingSite.occupied == false && (
                  <FontAwesomeIcon icon={faVanShuttle} />
                )}
              {parkingSite.category_id == 4 &&
                parkingSite.occupied == false && (
                  <FontAwesomeIcon icon={faPersonRifle} />
                )}
              {parkingSite.category_id == 5 && parkingSite.occupied == false ? (
                <FontAwesomeIcon icon={faCar} />
              ) : (
                <FontAwesomeIcon icon={faBan} />
              )}
            </div>
          );
        })}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>
              Tu {carCategory && carCategory[0].car.brand},{" "}
              {carCategory && carCategory[0].car.model}
              <br />
              {`se aparcara en la plaza ${modal.site}`}
            </p>
            <button onClick={handleCloseModal} className="cancelar">
              X
            </button>
            <button
              onClick={() => {
                handleCloseModal();
                senddata(modal.id);
                navigate("/date");
              }}
            >
              Reservar y pagar
            </button>
          </div>
        </div>
      )}
      {/* <div className="col1">
        <div
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
        </div>

       
      </div> */}
    </div>
  );
};

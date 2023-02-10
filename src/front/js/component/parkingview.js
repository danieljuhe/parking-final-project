import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/parkingview.css";
import "../../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faChargingStation, faMinimize, faVanShuttle, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { Base } from "../pages/base";
import { Context } from "../store/appContext";

export const ParkingView = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const [carCategory, setCarCategory] = useState();
  const [cCategory, setCCategory] = useState("");
  const [parkingSites, setParkingSites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [currentCard, setCurrentCard] = useState();

  const { store } = useContext(Context)

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
        const currentCard = response.find(car => car.id == store.defaultCar)
        setCurrentCard(currentCard)
        setCCategory(currentCard ? currentCard.car.category_id : response[0].car.category_id);
      });

    fetch(process.env.BACKEND_URL + "/api/parkingsites", {
      headers: { "Content-Type": "application/json", },
    })
      .then((response) => response.json())
      .then((response) => {
        setParkingSites(response)
      });
  }, []);

  const senddata = async (id) => {
    const parking = {
      id: id,
      site: modal.site,
      car_plate: currentCard && currentCard.car.plate,
      user_id: currentCard && currentCard.car.user.id,
      category_id: currentCard && currentCard.car.category_id,
      occupied: true,
    };
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(parking),
      });
      const data = await response.json();
      console.log(data);
    }
    catch (error) { console.error("Error:", error); }
  };

  let bxColor = "";
  let arrayparkingstart = parkingSites.slice(0, 4)
  let arrayparkingend = parkingSites.slice(4, 5)

  return <Base reserve={true}>
    <div className="mainparking">
      <div className="parking">
        {
          arrayparkingstart.map((element, index) => {
            return (
              <div className={`col${index}`}>
                {element.map((parkingSite, index) => {
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
                      style={divStyle}>
                      {parkingSite.category_id == 1 && (<FontAwesomeIcon icon={faChargingStation} />)}
                      {parkingSite.category_id == 2 && (<FontAwesomeIcon icon={faWheelchair} />)}
                      {parkingSite.category_id == 3 && (<FontAwesomeIcon icon={faVanShuttle} />)}
                      {parkingSite.category_id == 4 && (<FontAwesomeIcon icon={faMinimize} />)}
                      {parkingSite.category_id == 5 && (<FontAwesomeIcon icon={faCar} />)}
                    </div>
                  );
                })}
              </div>
            )
          })
        }
      </div>
      <div className="parking2">
        {
          arrayparkingend.map((element, index) => {
            return (
              <div className={`col${index}`}>
                {element.map((parkingSite, index) => {
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
                      style={divStyle}>
                      {parkingSite.category_id == 1 && (<FontAwesomeIcon icon={faChargingStation} />)}
                      {parkingSite.category_id == 2 && (<FontAwesomeIcon icon={faWheelchair} />)}
                      {parkingSite.category_id == 3 && (<FontAwesomeIcon icon={faVanShuttle} />)}
                      {parkingSite.category_id == 4 && (<FontAwesomeIcon icon={faPersonRifle} />)}
                      {parkingSite.category_id == 5 && (<FontAwesomeIcon icon={faCar} />)}
                    </div>
                  );
                })}
              </div>
            )
          })
        }
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content modal-content2">
            <button onClick={handleCloseModal} className="cancelar">X </button>
            <p>Tu {currentCard && currentCard.car.brand},{" "}
              {currentCard && currentCard.car.model}
              <br />
              {`se aparcara en la plaza ${modal.site}`}
            </p>
            <button className="confirmar"
              onClick={() => {
                handleCloseModal();
                senddata(modal.id)
                // agregar alerta guapa   plaza reservada con exito!!
                // agregar alerta del formulario de login
                navigate("/date/" + modal.id);
              }}
            >Reservar y pagar</button>
          </div>
        </div>
      )}
    </div>
  </Base>
};

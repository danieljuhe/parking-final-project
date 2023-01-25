import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/parkingview.css";
import "../../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faChargingStation, faPersonRifle, faVanShuttle, faWheelchair } from "@fortawesome/free-solid-svg-icons";

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
      headers: { "Content-Type": "application/json", },
    })
      .then((response) => response.json())
      .then((response) => {
        setParkingSites(response.sort((a, b) => {
          if (a.site < b.site) {
            return -1;
          }
          if (a.site > b.site) {
            return 1;
          }
          return 0;
        }))
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
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(parking),
      });
      const data = await response.json();
      console.log(data);
    }
    catch (error) { console.error("Error:", error); }
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
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
              <div class="relative w-full h-full max-w-md md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-6 text-center">
                    <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{`Vas a reservar la plaza ${modal.site}`}</h3>
                    <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => {
                      handleCloseModal();
                      senddata(modal.id);
                      navigate("/date");
                    }}>
                      {`Si, reservar ${modal.site}`}
                    </button>
                    <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

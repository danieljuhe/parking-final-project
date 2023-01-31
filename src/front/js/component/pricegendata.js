import React, { useState, useEffect } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const PriceGen = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const { actions, store } = useContext(Context);
  const params = useParams();

  let currentDate = new Date();
  let currentDateString = currentDate.toISOString().slice(0, 16);
  useEffect(() => {
    console.log(store.token);
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const stripe = () => {
    navigate("/payment/" + params.parking_id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const start = startTime.split(":");
    const end = endTime.split(":");
    let startDateObject = new Date(startDate);
    let endDateObject = new Date(endDate);
    let startTimeObject = new Date(
      startDateObject.getFullYear(),
      startDateObject.getMonth(),
      startDateObject.getDate(),
      start[0],
      start[1]
    );
    let endTimeObject = new Date(
      endDateObject.getFullYear(),
      endDateObject.getMonth(),
      endDateObject.getDate(),
      end[0],
      end[1]
    );
    const hours = (endTimeObject - startTimeObject) / (1000 * 60 * 60);
    setPrice(hours * 3);
    actions.setPrice(hours * 3);
  };

  return (
    <div className="main">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label>
            Start Date:
            <input
              type="date"
              min={currentDateString.slice(0, 10)}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          <label>
            Start Time:
            <input
              type="time"
              min={currentDateString.slice(11, 16)}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>

          <br />
          <br />
          <br />
          <br />
          <label>
            End Date:
            <input
              type="date"
              min={currentDateString.slice(0, 10)}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          <label>
            End Time:
            <input
              type="time"
              min={currentDateString.slice(0, 10)}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
          <br />
          <br />
          <br />
          <button type="submit">Calcula Precio</button>

          <br />
          <br />
          <h2>Precio: €{price}</h2>
          <br />
          <button onClick={stripe}>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

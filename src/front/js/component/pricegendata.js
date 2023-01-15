import React, { useState } from "react";
import "../../styles/login.css";

export const PriceGen = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);

  let currentDate = new Date();
  let currentDateString = currentDate.toISOString().slice(0, 16);

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
              min={currentDateString.slice(11, 16)}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
          <br />
          <br />
          <br />
          <button type="submit">Calculate Price</button>

          <br />
          <br />
          <p>
            <h2>Price: €{price}</h2>
          </p>
          <br />
          <button>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

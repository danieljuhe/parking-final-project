import React, { useState } from "react";

function PriceGenerator() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
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
  }

  return (
    <div className="main">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label>
            Start Date:
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          <label>
            Start Time:
            <input type="time" onChange={(e) => setStartTime(e.target.value)} />
          </label>
          <br />
          <br />
          <br />
          <br />
          <label>
            End Date:
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
          </label>
          <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          <label>
            End Time:
            <input type="time" onChange={(e) => setEndTime(e.target.value)} />
          </label>
          <br />
          <br />
          <button type="submit">Calculate Price</button>
          <br />
          <br />
          <p>Price: {price} €</p>
        </form>
      </div>
    </div>
  );
}

export default PriceGenerator;

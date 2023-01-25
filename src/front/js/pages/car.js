import React from "react";

const Car = (props) => {
  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Tu {props.model}</li>
          <li className="list-group-item">plate: {props.plate}</li>
          <li className="list-group-item">brand: {props.brand}</li>
          <li className="list-group-item">category: {props.category}</li>
        </ul>
      </div>
    </div>
  );
};

export default Car;

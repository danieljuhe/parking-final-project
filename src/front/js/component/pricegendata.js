import React, { useState, useEffect } from "react";
import "../../styles/date.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Base } from "../pages/base";
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const theme = createTheme();

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

  return <Base>
    <div className="test mx-auto">
      <h3 className="describetitle">Horario de Reserva</h3>
      <br />
      <div className="data">
        <form onSubmit={handleSubmit}>
          <label>
            Fecha de Entrada:
            <input
              className="input_date"
              type="date"
              min={currentDateString.slice(0, 10)}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          <label>
            Hora de Inicio:
            <input
              className="input_date"
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
            Fecha de Salida:
            <input
              className="input_date"
              type="date"
              min={startDate ? startDate : currentDateString.slice(0, 10)}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          <label>
            Fecha de Salida:
            <input
              className="input_date"
              type="time"
              min={startTime && startDate == endDate ? startTime : ""}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
          <br />
          <br />
          <br />
          <Button className="btn btn1" variant="contained" type="submit">
            Calcular Precio
          </Button>
          <br />
          <br />
          <h2>Importe: {price}€</h2>
          <br />
          <Button className="btn btn1" variant="contained" onClick={stripe} endIcon={<ShoppingCartCheckoutIcon />}>
            Confirmar
          </Button>
        </form>

      </div>
    </div>
  </Base >
};

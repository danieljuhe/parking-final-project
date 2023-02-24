import React, { useState, useEffect } from "react";
import "../../styles/stripe.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import swal from "sweetalert";
import { Base } from "../pages/base";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


const stripePromise = loadStripe(
  "pk_test_51MP8c5ATXRJOJbwMBzkJ8FyZ9oXijO0a0ckRcDG8uiV0deCsU8pzOexsPnBUaYjymmtFeAMHFIcEsnEWozrt98Op00fAIhgqmM"
);

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { actions, store } = useContext(Context);
  const params = useParams();
  const [card, setCard] = useState();

  const inputValue = (e) => {
    setCard(e.target.value)
  }
  useEffect(() => {
    console.log(store.token);
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const mostrarAlerta = () => {
    swal({
      title: "App Parking",
      text: "Pago Realizado con Éxito",
      icon: "success",
      button: "Aceptar",
      timer: "9000"

    })
    navigate("/Privateuser");
  }
  const mostrarAlertaError = () => {
    swal({
      title: "App Parking",
      text: "Error en el Pago Intenta de nuevo",
      icon: "error",
      button: "Aceptar",
      timer: "9000"

    })
    // navigate("/payment/:parking_id");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;

      fetch(process.env.BACKEND_URL + "/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          id,
          amount: parseInt(store.price * 100),
          date: new Date(),
          parking_id: params.parking_id,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          mostrarAlerta();
        })
        .catch((error) => {
          mostrarAlertaError();
          console.error("Error:", error);
        });

      elements.getElement(CardElement).clear();
      setLoading(false);
    }
  };

  return (
    <>
      <div className="containercard">
        <div className="circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>

        <div className="card">
          <div className="visa_logo">
            <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" />
          </div>
          <div className="visa_info">
            <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
          </div>
          <div className="visa_crinfo">
            <p>{setCard}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} onChange={inputValue} className="card card-body my-5 stripe mx-auto">

        {/* <img
        src="https://cdn-01.media-brady.com/store/stes/media/catalog/product/d/m/dmeu_ppma_p_1_std.lang.all.gif"
        alt="Parking Rent"
        className="img-fluid"
      /> */}

        <h3 className="text-center my-2">Precio: {store.price}€</h3>
        <br />
        <div className="form-group">
          <CardElement className="form-control" />
        </div>
        <br />
        <button variant="contained" className="btn btn1 btn-info" disabled={!stripe}>

          {loading ? (


            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

          ) : (
            "Buy"
          )}
        </button>
      </form>
    </>

  );
};

function AppPay() {

  return <Base>

    <Elements stripe={stripePromise}>
      <div className="stripecard mx-auto">
        <h3 className="h3">Ingresa Datos de Pago</h3>
        <br />
        <div className="">
          <div className="">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>

  </Base>
}

export default AppPay;

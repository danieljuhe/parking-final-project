import React, { useState, useEffect } from "react";
import "../../styles/login.css";
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
          console.error("Error:", error);
        });

      elements.getElement(CardElement).clear();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body my-5 stripe">
      <img
        src="https://cdn-01.media-brady.com/store/stes/media/catalog/product/d/m/dmeu_ppma_p_1_std.lang.all.gif"
        alt="Parking Rent"
        className="img-fluid"
      />

      <h3 className="text-center my-2">Price: {store.price}$</h3>
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <button className="btn btn-info" disabled={!stripe}>
        {loading ? (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Buy"
        )}
      </button>
    </form>

  );
};

function AppPay() {

  return <Base>

    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row h-100">
          <div className="col-md-4 offset-md-4 h-100">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>

  </Base>
}

export default AppPay;

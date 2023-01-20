import React, { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51MP8c5ATXRJOJbwMBzkJ8FyZ9oXijO0a0ckRcDG8uiV0deCsU8pzOexsPnBUaYjymmtFeAMHFIcEsnEWozrt98Op00fAIhgqmM"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
        },
        body: JSON.stringify({
          id,
          amount: 10000,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          navigate("/Privateuser");
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      elements.getElement(CardElement).clear();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body my-5">
      <img
        src="https://p.turbosquid.com/ts-thumb/pZ/r1ai8T/MB/daciaduster2022_00/jpg/1633694860/600x600/fit_q87/9c5de101f40c3810e0fd2f617ea215fa2c8f2d6b/daciaduster2022_00.jpg"
        alt="Parking Rent"
        className="img-fluid"
      />

      <h3 className="text-center my-2">Price: 100$</h3>
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

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default App;

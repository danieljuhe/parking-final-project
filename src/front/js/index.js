import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Layout from "./layout";
import { useAuth0 } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-3stbnni4dkoomgjb.us.auth0.com"
    clientId="04KUnCNLYelMOCKn1fMKme15bB0pEo1i"
    redirectUri={window.location.origin}
  >
    <Layout />
  </Auth0Provider>,
  document.querySelector("#app")
);

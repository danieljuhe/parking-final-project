import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Layout from "./layout";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
    <Layout />
  </MuiPickersUtilsProvider>,
  document.querySelector("#app")
);

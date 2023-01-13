import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import UserProfile from "./pages/userprofile";
import { Reg } from "./pages/register";
import { ParkingView } from "./component/parkingview";
import CreateCar from "./component/createCar";
import CarsInfo from "./pages/carsInfo";
import Date_Time from "./component/time";
import PriceGenerator from "./component/pricegenerator";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ParkingView />} path="/parking" />
            <Route element={<Login />} path="/login" />
            <Route element={<CreateCar />} path="/car" />
            <Route element={<Reg />} path="/register" />
            <Route element={<UserProfile />} path="/privateuser" />
            <Route element={<Date_Time />} path="/date" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<CarsInfo />} path="/mycar" />
            <Route element={<PriceGenerator />} path="/price" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

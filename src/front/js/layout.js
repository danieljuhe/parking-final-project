import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserProfile } from "./pages/userprofile";
import { Reg } from "./pages/register";
import { ParkingView } from "./component/parkingview";
import CreateCar from "./component/createCar";
import CarsInfo from "./pages/carsInfo";
import Cars from "./pages/cars";
import EditCar from "./pages/editCar";
import { PriceGen } from "./component/pricegendata";
import AppPay from "./component/stripe";
import { Map } from "./component/maps";


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
            <Route element={<AppPay />} path="/payment" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<CarsInfo />} path="/mycar" />
            <Route element={<EditCar />} path="/editcar/:car_id" />
            <Route element={<Cars />} path="/cars" />
<<<<<<< HEAD
=======
            <Route element={<Map />} path="/map" />
>>>>>>> 1ec7c4b (maps running)
            <Route element={<PriceGen />} path="/date" />
          </Routes>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

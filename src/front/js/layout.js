import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { UserProfile } from "./component/userprofile";
import { Reg } from "./pages/register";
import CreateCar from "./component/createCar";
import CarsInfo from "./pages/carsInfo";
import Cars from "./pages/cars";
import EditCar from "./pages/editCar";
import { PriceGen } from "./component/pricegendata";
import AppPay from "./component/stripe";
import { NotFound } from "./pages/404";
import Bills from "./pages/bills";
import { ParkingView } from "./component/parkingview";
import { Map } from "./component/maps";
import { AdminLoginPage } from "./pages/adminlogin";
import { AdminBase } from "./pages/adminbase";
import { AdminUsers } from "./component/admin/users/adminusers";
import { AdminCars } from "./component/admin/cars/admincars";
import { AdminParking } from "./component/admin/parking/adminparking";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Home />} path="/" />
            {/* <Route element={<ParkingView />} path="/parking" /> */}
            <Route element={<Login />} path="/login" />
            <Route element={<CreateCar />} path="/car" />
            <Route element={<Reg />} path="/register" />
            <Route element={<UserProfile />} path="/privateuser" />
            <Route element={<AppPay />} path="/payment/:parking_id" />
            <Route element={<NotFound />} path="*" />
            <Route element={<CarsInfo />} path="/mycar" />
            <Route element={<EditCar />} path="/editcar/:car_id" />
            <Route element={<Cars />} path="/cars" />
            <Route element={<AdminLoginPage />} path="/role/admin/login" />
            <Route element={<AdminBase />} path="/role/admin/admindashboard" />
            <Route element={<AdminUsers />} path="/role/admin/adminusers" />
            <Route element={<AdminCars />} path="/role/admin/admincars" />
            <Route element={<AdminParking />} path="/role/admin/adminparking" />
            <Route element={<Map />} path="/map" />
            <Route element={<PriceGen />} path="/date/:parking_id" />
            <Route element={<Bills />} path="/bill" />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

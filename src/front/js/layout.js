import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import UserProfile from "./pages/userprofile";
import { Reg } from "./pages/register";
import Date_Time from "./pages/time";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<Reg />} path="/register" />
            <Route
              element={<UserProfile logged={setLogged} />}
              path="/privateuser"
            />
            <Route element={<Date_Time />} path="/date" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

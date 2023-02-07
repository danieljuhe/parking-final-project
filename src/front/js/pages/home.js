import React from "react";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="containerhome">
      <div className="maindiv">
        <div class="position-relative">
          <div class="position-relative top-900">
            <div className="page-hero-section bg-image hero-home-1">
              <div className="hero-caption pt-5">
                <div className="container h-100">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6 wow fadeInUp">
                      <div className="badge mb-2 text-primary"><span className="icon mr-1"><span className="mai-globe"></span></span> #1 Manage App en 2023</div>
                      <h1 className="mb-4">Administra facilmente tu Parking</h1>
                      <p className="mb-4">ParkingLot tiene componentes para ver y manejar<br />
                        tu negocio, como el mapeo de plazas y automatizacion de clientes.</p>
                      <a href="/register" className="btn btn-primary rounded-pill">Registrate ahora</a>
                      <a href="/login" className="btn btn-primary rounded-pill">Accede a tu cuenta</a>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                      <div className="img-place mobile-preview shadow floating-animate">
                        <img src="https://assets.materialup.com/uploads/d24a30e1-678b-4e86-8844-b16d6d08b2e6/preview.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

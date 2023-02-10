import React from "react";
import { Base } from "./base";
import "../../styles/mainDashboard.css"


export const UserProfile = () => {

  return (
    <Base dashboard={true}>
      <div className="mainDashboard">
        <div className="mainTitle">
          Te damos la bienvenida a Parking! una App facil de utilizar que te va a perimitir reservar y pagar tu plaza con anterioridad para que conseguir donde aparcar tu coche ya no sea un problema
        </div><br />
        <div className="cardDasboard">
          <div className="textDashboard">
            <div className="cardtitle">
              <br />
              <h5>Servicio de Lavado de Coches</h5>
            </div>
            <div className="cardbody">
              <p>Todos los dias de 9 a 21</p>
            </div>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22319.jpg?w=996&t=st=1676022422~exp=1676023022~hmac=d89b0529307f89ba120b96b5d92cc26b59452cd509e7e739c334d35fa39a138d" className="card-img-top" alt="..." />

          </div>

        </div>
        <br />
        <br />
        <br />
        <div className="cardDasboard">
          <div className="card">
            <img src="https://images.pexels.com/photos/5881427/pexels-photo-5881427.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
          </div>
          <div className="textDashboard">
            <div className="cardtitle">
              <br />
              <h5 >Maquinas expendeoras de Snacks, Bebidas y Cafe </h5>
            </div>
            <div className="cardbody">
              <p>Dentro del parking con zona de consumo las 24 hs</p>
            </div>
          </div>
        </div>
      </div>

    </Base>
  );
}


import React from "react";
import "../../styles/map.css"
import { Base } from "../pages/base";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const Map = () => {
  return <Base location={true}>
    <div className="locationmain">
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9366.506201944721!2d-3.6880678060114516!3d40.4373328986489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422989055a08a7%3A0xb1a742c609c68c4b!2s4Geeks%20Academy%20Europe!5e0!3m2!1ses!2ses!4v1674722609926!5m2!1ses!2ses"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="describe">
        <div className="describetitle">
          Parking Lot
        </div><br />
        <div className="describeletter">
          Calle Edison 3, 28006<br />
          Madrid, España.</div><br /><br />
        <div className="describetitle">
          Horario
        </div><br />
        <div className="describeletter">
          De Lunes a Domingo.<br />
          Abierto 24H.
        </div>
      </div>
    </div>
    <br />
    <div className="contact">
      <div className="container">
        <div className="describetitle">
          Contacta con nosotros
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Nombre"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Movil"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <TextField
                id="filled-multiline-flexible"
                margin="normal"
                fullWidth
                label="Mensaje"
                multiline
                maxRows={4}
                name="email"
                autoComplete="email"
                autoFocus
              />
            </div>
          </div>
          <div className="col-xs-12">
            <Button variant="contained">Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  </Base>
};

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, useLoadScript, Marker } from 'react-google-maps';

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'YOUR_API_KEY'
//   });

//   const [currentPosition, setCurrentPosition] = useState({lat: 40.427860269252314, lng: -3.6870110131372043});

//   if (loadError) return 'Error cargando Google Maps';
//   if (!isLoaded) return 'Cargando Google Maps';

//   return (
//     <GoogleMap
//       mapContainer0px', width: '100%' }}
//       zoom={14}
//       center={currentPosition}
//     >
//     </GoogleMap>
//   );
// };

//export default Map;


import React from "react";

export const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9366.506201944721!2d-3.6880678060114516!3d40.4373328986489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422989055a08a7%3A0xb1a742c609c68c4b!2s4Geeks%20Academy%20Europe!5e0!3m2!1ses!2ses!4v1674722609926!5m2!1ses!2ses"
      width="600"
      height="450"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
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
//       mapContainerStyle={{ height: '400px', width: '100%' }}
//       zoom={14}
//       center={currentPosition}
//     >
//     </GoogleMap>
//   );
// };

// export default Map;

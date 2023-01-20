import React, { useEffect, useState } from "react";

export const Plazas = () => {
  const [plazas, setPlazas] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/parkingsite", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPlazas(response);
      });
  }, []);

  return (
    <>
      {plazas &&
        plazas.map((site, index) => {
          <button id={site} type="button" key={index}>
            {site.site}
          </button>;
        })}
    </>
  );
};

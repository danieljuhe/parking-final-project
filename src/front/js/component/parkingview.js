import React, { useEffect, useState } from "react";
import "../../styles/parkingview.css";

export const ParkingView = () => {
  const [carCategory, setCarCategory] = useState();
  const [cCategory, setCCategory] = useState("");

  const mini = () => {
    setCCategory("Mini");
  };

  const max = () => {
    setCCategory("4X4");
  };

  const electric = () => {
    setCCategory("electric");
  };

  const prm = () => {
    setCCategory("prm");
  };

  const standard = () => {
    setCCategory("standard");
  };

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/parking", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setCarCategory(response);
        if (response[3].category_id == 1) {
          setCCategory("electric");
        } else if (response[3].category_id == 2) {
          setCCategory("prm");
        } else if (response[3].category_id == 3) {
          setCCategory("4X4");
        } else if (response[3].category_id == 4) {
          setCCategory("Mini");
        } else return setCCategory("standard");
      });
  }, []);

  return (
    <div className="parking">
      <button onClick={mini}>Mini</button>
      <button onClick={max}>4X4</button>
      <button onClick={electric}>Electric</button>
      <button onClick={prm}>PRM</button>
      <button onClick={standard}>Standard</button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col1">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="a1"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              alert(
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        >
          Mini
        </button>
        <button
          className="a2"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
            }
          }}
        >
          Mini
        </button>
        <button
          className="a21"
          id="s"
          style={{
            boxShadow: cCategory == "standard" ? "0px 0px 40px red" : "",
          }}
          onClick={() => {
            if (cCategory == "standard") {
            }
          }}
        >
          Standard
        </button>
        <button
          className="a3"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
          onClick={() => {
            if (cCategory == "4X4") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          4X4
        </button>
        <button
          className="a4"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
          onClick={() => {
            if (cCategory == "electric") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Electric
        </button>
        <button
          className="a5"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
          onClick={() => {
            if (cCategory == "electric") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Electric
        </button>
        <button
          className="a6"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
          onClick={() => {
            if (cCategory == "prm") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          PRM
        </button>
        <button
          className="a7"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
          onClick={() => {
            if (cCategory == "prm") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          PRM
        </button>
        <button
          className="a71"
          id="s"
          style={{
            boxShadow: cCategory == "standard" ? "0px 0px 40px red" : "",
          }}
        >
          Standard
        </button>
        <button
          className="a8"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
          onClick={() => {
            if (cCategory == "4X4") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          4X4
        </button>
        <button
          className="a9"
          id="x"
          style={{ boxShadow: cCategory == "4X4" ? "0px 0px 40px blue" : "" }}
          onClick={() => {
            if (cCategory == "4X4") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          4X4
        </button>
        <button
          className="a10"
          id="e"
          style={{
            boxShadow:
              cCategory == "electric" ? "0px 0px 40px greenyellow" : "",
          }}
          onClick={() => {
            if (cCategory == "electric") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Electric
        </button>
        <button
          className="a11"
          id="p"
          style={{ boxShadow: cCategory == "prm" ? "0px 0px 40px orange" : "" }}
          onClick={() => {
            if (cCategory == "prm") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          PRM
        </button>
        <button
          className="a12"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Mini
        </button>
        <button
          className="a13"
          id="m"
          style={{
            boxShadow: cCategory == "Mini" ? "0px 0px 40px violet" : "",
          }}
          onClick={() => {
            if (cCategory == "Mini") {
              alert("Vas a reservas la plaza A1");
            }
          }}
        >
          Mini
        </button>
      </div>
    </div>
  );
};

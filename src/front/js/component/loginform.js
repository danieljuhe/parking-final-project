import React from "react";
import { useRef, useState, useEffect } from "react";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, sewtErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    sewtErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess("");
  };
  return (
    <div className="main">
      <div className="register">
        {success ? (
          <section>
            <h1>Estas Logeado</h1>
            <br />
            <p>Vuelve a Home</p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username: </label>
              <br />
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <br />

              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <br />
              <br />
              <button>Sign In</button>
            </form>
            <p>
              Necesitas una cuenta?
              <br />
              <span className="line">
                <a href="https://github.com/danielo8417">Registrate</a>
              </span>
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

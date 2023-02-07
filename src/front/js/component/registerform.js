import React from "react";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_@.]{3,33}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,21}$/;
const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Parking
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userS, setUserS] = useState("");
  const [validNameS, setValidNameS] = useState(false);
  const [userSFocus, setUserSFocus] = useState(false);

  const [mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = USER_REGEX.test(userS);
    console.log(result);
    console.log(userS);
    setValidNameS(result);
  }, [userS]);

  useEffect(() => {
    console.log(mobile);
    setValidMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    console.log(email);
    setValidEmail(email);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    console.log(result);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, userS, mobile, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Campo incorrecto");
      return;
    }

    const body = {
      name: user,
      surname: userS,
      password: pwd,
      email: email,
      telephone: mobile,
    };

    let response = await fetch(process.env.BACKEND_URL + "/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let json = await response.json();
    console.log(json);
    console.log(user, userS, mobile, email, pwd);
    setSuccess(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          {success ? (
            <section>
              <h1>Usuario registrado</h1>
              <p>
                <Button variant="contained" className="linky" href="/login">Login</Button>
              </p>
            </section>
          ) : (
            <section>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                  <span className={validName ? "valid" : "d-none"}> </span>
                  <span className={validName || !user ? "d-none" : "invalid"}> </span>
                </label>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      label="Nombre"
                      variant="outlined"
                      size="small"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        userFocus && user && !validName ? "instructions" : "d-none"
                      }
                    >
                      4 a 23 caracteres
                      <br />
                      Debe empezar con una letra.
                      <br />
                      Valido letras, numeros y guion bajo.
                    </p>
                    <br />

                    <label htmlFor="surname">
                      <span className={validNameS ? "valid" : "d-none"}></span>
                      <span className={validNameS || !userS ? "d-none" : "invalid"}></span>
                    </label>
                    <br />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      label="Apellido"
                      variant="outlined"
                      size="small"
                      id="surname"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUserS(e.target.value)}
                      aria-invalid={validNameS ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserSFocus(true)}
                      onBlur={() => setUserSFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        userSFocus && user && !validNameS ? "instructions" : "d-none"
                      }
                    >
                      4 a 23 caracteres
                      <br />
                      Debe empezar con una letra.
                      <br />
                      Valido letras, numeros y guion bajo.
                    </p>
                    <br />

                    <label htmlFor="mobile">
                      <span className={validMobile ? "valid" : "d-none"}></span>
                      <span className={validMobile || !user ? "d-none" : "invalid"}> </span>
                    </label>
                    <br />
                  </Grid>
                </Grid>
                <TextField
                  type="text"
                  label="Movil"
                  variant="outlined"
                  fullWidth
                  size="small"
                  id="mobile"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setMobileFocus(true)}
                  onBlur={() => setMobileFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    mobileFocus && mobile && !validMobile
                      ? "instructions"
                      : "d-none"
                  }
                >
                  4 a 23 caracteres
                  <br />
                  Valido guion y mas - +.
                </p>
                <br />

                <label htmlFor="email">
                  <span className={validEmail ? "valid" : "d-none"}></span>
                  <span className={validEmail || !user ? "d-none" : "invalid"}></span>
                </label>
                <br />
                <TextField
                  type="text"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />

                <br />
                <label htmlFor="password">
                  <span className={validPwd ? "valid" : "d-none"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validPwd || !pwd ? "d-none" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    size="small"
                    fullWidth
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <p
                  id="pwdnote"
                  className={pwdFocus && !validPwd ? "instructions" : "d-none"}
                >
                  Al menos 6 a 20 caracteres.
                  <br />
                  Debe de contener mayusculas, minisculas, y un numero obligatorio.{" "}
                  <br />
                </p>
                <br />

                <label htmlFor="confirm_pwd">
                  <span className={validMatch && matchPwd ? "valid" : "d-none"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validMatch || !matchPwd ? "d-none" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">Confirmar</InputLabel>
                  <OutlinedInput
                    size="small"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <p
                  id="confirmnote"
                  className={matchFocus && !validMatch ? "instructions" : "d-none"}
                >
                  Debe ser igual al password.
                </p>
                <br />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recordarme"
                />
                <br />
                <button className="registerbutton" disabled={!validName || !validPwd || !validMatch ? true : false}>ENVIAR</button>
              </form>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Tienes una cuenta? Accede
                  </Link>
                </Grid>
              </Grid><br />
              <Button variant="contained" href="/" fullWidth>Home</Button>
              <Copyright sx={{ mt: 5 }} />
            </section>
          )}
        </Box>
      </Grid>
    </ThemeProvider >
  );
}


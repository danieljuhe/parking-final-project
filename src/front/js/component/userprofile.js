import React, { useState, useEffect } from "react";
import { Base } from "../pages/base";
import "../../styles/mainDashboard.css"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


export const UserProfile = () => {
  const theme = createTheme();
  const [user, setUser] = useState()
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [telephone, setTelephone] = useState()
  const [password, setPassword] = useState()

  const senddata = async () => {
    const usuario = {
      name: name,
      surname: surname,
      email: email,
      telephone: telephone,
      password: password,
    };
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/edit_user/" + user.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(usuario),
      });
      const data = await response.json();
      console.log(data);
    }
    catch (error) { console.error("Error:", error); }
  };

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])

  return (
    <Base dashboard={true}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://m.faz.net/media0/ppmedia/aktuell/gesellschaft/2729663842/1.8175620/mmobject-still_full/vom-profi-wrestler-zum.jpg"
                  alt="me"
                />
              </CardActionArea>
            </Card>
            <br />
            <Typography component="h1" variant="h5">
              {user && user.name}, {user && user.surname}<br />
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    fullWidth
                    id="firstName"
                    label={user && user.name}
                    autoFocus
                    placeholder={user && user.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                    fullWidth
                    id="lastName"
                    label={user && user.surname}
                    name="lastName"
                    autoComplete="family-name"
                    placeholder={user && user.surname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    id="movil"
                    label={user && user.telephone}
                    name="movil"
                    placeholder={user && user.telephone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    label={user && user.email}
                    name="email"
                    autoComplete="email"
                    placeholder={user && user.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>

              </Grid>
              <Button
                onClick={() => { senddata() }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cambiar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Base>
  );
}


import React, { useState, useEffect } from "react";
import { Base } from "../pages/base";
import "../../styles/userprofile.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const UserProfile = () => {
  const theme = createTheme();
  const [user, setUser] = useState();
  const [listOfCars, setListOfCars] = useState([]);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const senddata = async () => {
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/edit_user/" + user.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(user),
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

    fetch(process.env.BACKEND_URL + "/api/list_car", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
      .then((response) => setListOfCars(response));
  }, [])

  return (
    <>
      <div className="profilecontainer">
        <div className="profilemain">
          <div className="cardavatar">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                <div className="mt-3">
                  <Typography component="h1" variant="h5">
                    {user && user.name}, {user && user.surname}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileedit">

          <div className="card-body">
            <div className="row">
              <h4>Editar mis datos</h4>
              <br />
              <div className="col-sm-9">
                <Typography component="h5">Nombre completo</Typography>
              </div><br /><br />
              <div className="col-sm-9 text-secondary">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      autoComplete="given-name"
                      name="name"
                      onChange={handleChange}
                      required
                      id="firstName"
                      label={user && user.name}
                      autoFocus
                      placeholder={user && user.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      onChange={handleChange}
                      required
                      id="lastName"
                      label={user && user.surname}
                      name="surname"
                      autoComplete="family-name"
                      placeholder={user && user.surname}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <Typography component="h5">Email</Typography>
              </div><br />
              <div className="col-sm-9 text-secondary">
                <TextField
                  size="small"
                  required
                  onChange={handleChange}
                  id="email"
                  label={user && user.email}
                  name="email"
                  autoComplete="email"
                  placeholder={user && user.email}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <Typography component="h5">Movil</Typography>
              </div><br />
              <div className="col-sm-9 text-secondary">
                <TextField
                  size="small"
                  required
                  onChange={handleChange}
                  id="movil"
                  label={user && user.telephone}
                  name="telephone"
                  placeholder={user && user.telephone}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <Typography component="h5">Password</Typography>
              </div><br />
              <div className="col-sm-9 text-secondary">
                <TextField
                  size="small"
                  required
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Button
                  onClick={() => { senddata() }}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Cambiar
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters-sm">
          <div className="col-sm-6 mb-3">
          </div>
          <div className="col-sm-6 mb-3">
          </div>
        </div>
      </div>

      {/* <ThemeProvider theme={theme}>
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
            </Card><br />
            <br />
            <br /><br />
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>

              </Grid>
              <Grid item xs={12}>

              </Grid>
              <Grid item xs={12}>

              </Grid>
              <Grid item xs={12}>

              </Grid>


            </Box>
          </Box>
        </Container>
      </ThemeProvider> */}
    </>
  )
}


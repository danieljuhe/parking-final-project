import React, { useState, useEffect } from "react";
import { Base } from "../pages/base";
import "../../styles/userprofile.css"
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
    <Base dashboard={true}>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
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
              <div className="card mt-3">
                <Typography component="h1" variant="h5">Coche aparcado</Typography>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <Typography component="h4" variant="h5">Editar datos</Typography>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <Typography component="h5" variant="h5">Nombre completo</Typography>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            size="small"
                            autoComplete="given-name"
                            name="name"
                            onChange={handleChange}
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
                            size="small"
                            onChange={handleChange}
                            required
                            fullWidth
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
                      <Typography component="h5" variant="h5">Email</Typography>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <TextField
                        size="small"
                        required
                        fullWidth
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
                      <Typography component="h5" variant="h5">Movil</Typography>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <TextField
                        size="small"
                        required
                        fullWidth
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
                      <Typography component="h5" variant="h5">Password</Typography>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <TextField
                        size="small"
                        required
                        fullWidth
                        onChange={handleChange}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <hr />
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
    </Base >
  );
}


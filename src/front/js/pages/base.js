import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from '../component/listitem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ParkingView } from "../component/parkingview";
import { Map } from "../component/maps";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { PriceGen } from "../component/pricegendata";
import AppPay from "../component/stripe";
import Bills from "./bills";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: '#6a5acd',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const mdTheme = createTheme();


export const Base = ({ children, dashboard = false, cars = false, reserve = false, location = false, bill = false }) => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const { store, actions } = useContext(Context);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(store.token);
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }

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
    }, []);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <Stack direction="row" spacing={2}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </StyledBadge>
                        </Stack><>&nbsp;</><>&nbsp;</>
                        Hola<>&nbsp;</>{user && user.name}, <>&nbsp;</>{user && user.surname}
                        <IconButton onClick={toggleDrawer}>

                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />

                    <List component="nav"><br />
                        <br></br>


                        <React.Fragment>

                            <ListItemButton>
                                <ListItemIcon>

                                </ListItemIcon>
                            </ListItemButton>
                            <br />

                            <ListItemButton selected={dashboard}>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" onClick={() => {
                                    navigate("/privateuser")
                                }} />
                            </ListItemButton>

                            <ListItemButton selected={cars} onClick={() => {
                                navigate("/car")
                            }}>
                                <ListItemIcon>
                                    <EmojiTransportationOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Coches" />
                            </ListItemButton>

                            <ListItemButton selected={reserve} onClick={() => {
                                navigate("/parking")
                            }}>
                                <ListItemIcon>
                                    <LocalParkingOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Reserva" />
                            </ListItemButton>

                            <ListItemButton selected={location}>
                                <ListItemIcon>
                                    <LocationOnOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ubicacion" />
                            </ListItemButton>

                            <ListItemButton selected={bill} onClick={() => {
                                navigate("/bill")
                            }}>
                                <ListItemIcon>
                                    <CreditScoreOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Facturacion" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <ExitToAppOutlinedIcon onClick={() => {
                                        localStorage.removeItem("token");
                                        navigate("/");
                                    }} />
                                </ListItemIcon>
                                <ListItemText primary="Salir" onClick={() => {
                                    localStorage.removeItem("token");
                                    navigate("/");
                                }} />
                            </ListItemButton>

                        </React.Fragment>



                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        // p: 2,
                                        // display: 'flex',
                                        // flexDirection: 'column',
                                        // height: 'fit-content',
                                        // width: 'fit-content',
                                    }}
                                >
                                    {children}
                                </Paper>
                            </Grid>

                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}


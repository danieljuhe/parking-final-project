import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';






export const mainListItems = (
    <React.Fragment>

        <ListItemButton>
            <ListItemIcon>

            </ListItemIcon>
        </ListItemButton>
        <br />

        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <EmojiTransportationOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Coches" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <LocalParkingOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Reserva" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <LocationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ubicacion" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <CreditScoreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Facturacion" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <ExitToAppOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Salir" />
        </ListItemButton>

    </React.Fragment>
);


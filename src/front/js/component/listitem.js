import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { emphasize, styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export const mainListItems = (
    <React.Fragment>
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                sx={{ fontSize: 10 }}
                component="a"
                label="Home"
            /></Breadcrumbs>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                sx={{ fontSize: 10 }}
                component="a"
                href="#"
                label="Utilidades"
                icon={<DirectionsCarFilledOutlinedIcon sx={{ fontSize: 10 }} />}
            /></Breadcrumbs>
        <ListItemButton>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Coches" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Reserva" />
        </ListItemButton>
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                sx={{ fontSize: 10 }}
                component="a"
                href="#"
                label=""
                icon={<LocationOnOutlinedIcon sx={{ fontSize: 10 }} />}
            /></Breadcrumbs>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Ubicacion" />
        </ListItemButton>
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                component="a"
                href="#"
                label="Servicios"
            /></Breadcrumbs>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Facturacion" />
        </ListItemButton>
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
                component="a"
                href="#"
                label="Servicios"
            /></Breadcrumbs>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Salir" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);
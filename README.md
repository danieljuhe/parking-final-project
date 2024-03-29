# WebApp for a Parking with React JS and Flask API

### Pasos para empezar:

1. Hacer la base de datos
2. Probar las relaciones entre ellas
3. Autenticar usuarios con JWT
4. Crear formulario para el login y probar a crear un usuario
5. Crear un apartado para cada usuario
6. Mostrar los datos privados del usuario en su apartado
7. Crear un Log out que cierre la sesion del usuario
8. Crear en el apartado de usuario un componente de coches y poder agregar o quitar coches mediante un formulario
9. Poder escoger un coche para aparcar
10. Crear un componente dentro de cada usuario que pueda escoger una plaza de aparcamiento segun el tipo de vehiculo y el coche seleccionado
11. Poder reservar la plaza y bloquearla para otros usuarios
12. Crear un componente para la facturacion
13. Poder reservar la plaza durante un tiempo determinado
14. Una vez reservada la plaza y elegido el tiempo, mostrar el precio
15. Adjuntar pasarela de pago con el precio de la plaza
16. Mostrar en facturacion el tiempo restante y tickets de anteriores estacionamientos dependiendo del coche

### Back-End Manual Installation:

1. Migrate the migrations: `$ pipenv run migrate`
2. Run the migrations: `$ pipenv run upgrade`
3. Install Jwt application: `$ pipenv install flask-jwt-extended`
4. Run the application: `$ pipenv run start`
5. Install dependencies for date time : `$ npm i @material-ui/pickers npm i @date-io/date-fns@1.x date-fns npm i @material-ui/pickers`
6. Reset data Base:
   `$ rm -R -f ./migrations && pipenv run init && psql -U gitpod -c 'DROP DATABASE example;' || true && psql -U gitpod -c 'CREATE DATABASE example;' && psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d example && pipenv run migrate && pipenv run upgrade`

### Front-End Manual Installation:

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`
3. Intall FontAwesome:
   `$ npm i --save @fortawesome/fontawesome-svg-core npm install --save @fortawesome/free-solid-svg-icons npm install --save @fortawesome/react-fontawesome`
4. Install Mui:
   `npm install @mui/material @emotion/react @emotion/styled --force npm install @mui/material @mui/styled-engine-sc styled-components --force npm install @fontsource/roboto --force`
5. Install SweetAlert:
   `npm install sweetalert --force`

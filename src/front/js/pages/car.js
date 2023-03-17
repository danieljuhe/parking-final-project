import React from "react";
import "../../styles/cars.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Car = (props) => {

  return (
    <div>
      <Card container item spacing={3} className="mt-3 colorcard">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tu coche
          </Typography>
          <Typography sx={{ fontSize: 25 }}>
            {props.brand}  {props.model}
          </Typography>
          <Typography variant="body2">
            <p>Matricula: {props.plate}</p>
            <p>Categoria: {props.category}</p>
          </Typography>
        </CardContent>

      </Card>
    </div>


    /*<div>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Tu {props.model}</li>
            <li className="list-group-item">plate: {props.plate}</li>
            <li className="list-group-item">brand: {props.brand}</li>
            <li className="list-group-item">category: {props.category}</li>
          </ul>
        </div>
      </div>*/
  )
};

export default Car;

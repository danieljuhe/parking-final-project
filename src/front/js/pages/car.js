import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Car = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Tu coche
        </Typography>
        <Typography variant="h5" component="div">
          {props.brand}  {props.model}
        </Typography>

        <Typography variant="body2">
          <p>Plate: {props.plate}</p>
          <p>Category: {props.category}</p>
        </Typography>
      </CardContent>
    </Card>

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
  );
};

export default Car;

import React from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
  console.log(props, "abcd");
  const { title } = props;

  return (
    <div>
      <Link to="/shoes">
        <Card sx={{ width: 345, margin: "5px", boxShadow: "none", borderRadius: "0px" }}>
          <CardMedia
            sx={{ height: 280 }}
            image={props.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

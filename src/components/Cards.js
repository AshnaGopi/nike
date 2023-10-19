import React,{useState} from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Timer from './timer';
import Shoes from '../pages/Shoe';

export default function Cards(props) {
 

  console.log(props, "abcd");
  const {item,value } = props;
  console.log(props.item.title,"ash");
 



  return (
    <div>
      <i onClick={() => props.remove(props.value)} class="fa-solid fa-xmark"></i>
      
      <Link to={`/shoes/${value}`}>
        <Card  sx={{ width: 345, margin: "5px", boxShadow: "none", borderRadius: "0px" }}>
          <CardMedia
            sx={{ height: 280 }}
            image={item.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            {props.item.title ==="One" ? <Timer/>:"" }
          
           
          </CardContent>
        </Card>
      </Link>
  
    </div>
  )
}

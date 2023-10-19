import React,{useEffect} from 'react';
import Axios from "axios";



    
  export const fetchData=()=>{
     Axios.get('http://localhost:3000/manifest.json').then((res)=>{
            console.log(res)
        })
    }
    



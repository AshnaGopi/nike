import React, { useState,useEffect} from 'react'
import Cards from '../../components/Cards';
import data from "../../data/data.json";
import Topbar from '../../components/Topbar';

import axios from "axios";
import SideBar from '../../components/sideBar';
import  useAppCont  from '../../context/firstContext';
const apiData="https://jsonplaceholder.typicode.com/users";
const apiLink='http://localhost:5000/api/shoes';



export default function Land() {
  const [card, setCard] = useState(data.cards);
  const [count, setCount] = useState();
  const [details, setDetails] = useState([]);



  const removeShoe = (k) => {
    const newShoe = [...details];
    newShoe.splice(k, 1);
    console.log(details,k,"hij",newShoe)
    setDetails(newShoe);
  }
  useEffect(() => {
    async function getData(){
    const response=await axios.get(apiData);
    console.log(response);
    
  }
    getData();
    takeData();

      
   
  },[]);
  const takeData=()=>{
    axios.get('http://localhost:5000/api/shoes').then((response)=>{
          console.log(response.data.length,"check");
          setCount(response.data.length);
          setDetails(response.data);
      })
  }
  

  return (
    <div>
      <Topbar count={count}/>
      <div className='row'>
        <div className='side'>
         <SideBar/>
         
        </div>
        <div className='sideb'>
          {
            details.map((itm, k) => {
              return (
                <div>
                  
                    <Cards item={itm} remove={removeShoe} value={k} />
                 
                </div>
              )
            })
          }
           {/* {
            card.map((itm, k) => {
              return (
                <div>
                  
                    <Cards item={itm} remove={removeShoe} value={k} />
                 
                </div>
              )
            })
          } */}

        </div>
      </div>
    </div>

  )
}

import React,{useEffect,useState} from 'react';
import {useHistory,useParams} from "react-router-dom"
import data from "../../data/data.json";
import axios from 'axios';
import { useAppCont } from '../../context/firstContext';
export default function Shoes(props) {

  const history=useHistory();
  const params=useParams();
  // const size=[9,9.8,5,5.7,8,8.5,7,7.5,8.9,6.9,11];
  const [size, setSize] = useState([])
  const [select, setSelect] = useState()
  
  const [post, setPost] = useState()
  const [extract, setExtract] = useState([])
  const selectSize=async(id)=>{
    setSelect(id)
    console.log(id,"check size")
  }
  useEffect(() => {
    axios.get('http://localhost:5000/api/shoes').then((res)=>{
      setExtract(res.data[params.id]);
      setSize(res.data[params.id].size)
      console.log(res.data[params.id].size,"extract")

    })
  }, [])
  const addToCart=()=>{
    axios.post('http://localhost:5000/api/cart',{name:`${extract.title}`,image:`${extract.image}`,price:`${extract.price}`}).then((response)=>{
      setPost(response.data)
      console.log(response.data,"post")
    })
    history.push('/cart');
  }
  const addToFav=()=>{

    history.push('/fav');
  }
  console.log(params,"params")
  return (
    <div>
      {/* {extract.map((items,k)=>{
        return( */}

        
        <div className='page-content'>
          <img className='shoe-img' alt={extract.title} src={extract.image} />
          <div className='scroll-content'>
            <h4>{extract.title}</h4>
            <h6>Men's Shoes</h6>
            <br />
            <h5>{extract.price}</h5>
            <br />
            <h6 style={{ color: "grey" }}>incl. of taxes</h6>
            <h6 style={{ color: "grey" }}>(Also includes all applicable duties)</h6>
            <div style={{ height: "90px", width: "fit-content", padding: "10px", display: "flex", overflowY: "hidden", objectFit: "contain" }}>
              <div className='stamp'><img className='simg' alt={extract.title} src={extract.image} /></div>
              <div className='stamp'><img className='simg' alt={extract.title} src={extract.image} /></div>
              <div className='stamp'><img className='simg' alt={extract.title} src={extract.image} /></div>
              <div className='stamp'><img className='simg' alt={extract.title} src={extract.image} /></div>
              <div className='stamp'><img className='simg' alt={extract.title} src={extract.image} /></div>
            </div>
            <h5>Select Size<span style={{ marginLeft: "150px", color: "grey" }}>Size Chart</span></h5>
            <div className='chart'>
              <div className='sidek'>
                {
                  size.map((itm,k)=>{
                    return(
                      <div onClick={()=>selectSize(itm)} key={k} className='size'>UK {itm}</div>
                    )
                  })
                }
              </div>
            </div>
            <button onClick={addToCart} className='button-cart add'>Add to Bag</button>
            <button onClick={addToFav} className='button-cart fav'>Favourite<i style={{marginLeft:"5px"}} class="far fa-heart"></i></button>
            <p style={{ fontSize: "20px", lineHeight: "30px",width:"75%" }}>Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean,
              classic look that's familiar yet always fresh. With an iconic design that pairs perfectly
              with any 'fit, these kicks ensure you'll always be on point</p>
            <ul>
              <li>Colour Shown: Pink Foam/Black</li>
              <li>Style: DA2778-601</li>
            </ul>
          </div>
        </div>
        {/* )
      })
       } */}
      </div>
  )
}

import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import { Table } from 'antd';
import axios from 'axios';
import client from 'axios';


export default function Cart() {
    const [dataSource, setDataSource] = useState([]);
    const [totalPages, setTotalPages] = useState(2);
    const [loading, setLoading] = useState(false)

    const params=useParams();
    useEffect(() => {
      fetchRecords();
      
    }, [])
    
    const columns=[
      {
        title:'ID',
        dataIndex:'id'
      },
      {
        title:'Name',
        dataIndex:'title'
      },
    //   {
    //     title:'Email',
    //     dataIndex:'email'
    //   },
    //   {
    //     title:'Address',
    //     dataIndex:'address',
    //     key:"street",
    //     render: item => {console.log(item,"ashna"); return <div>{item.geo.lat}</div>}
    //   },
      // {
      //   title:'Lat',
      //   dataIndex:'address',
      //   key:"geo",
      //   render: itm => Object.values(itm)[0],
      // }
    ]
    const fetchRecords=()=>{
      setLoading(true);

      axios.get('http://localhost:5000/api/cart').then((response)=>{
          console.log(response.data.data,"page");
          setDataSource(response.data);
          setTotalPages(response.data.totalPages)
          setLoading(false);
      })
    }

    const deletePost=async(id)=>{
        console.log(id,"item in cart")
        // const addShoe=[...dataSource]
        // addShoe.splice(id,1);
        // setDataSource(addShoe);
        try{
            const response=await axios.delete(`http://localhost:5000/api/cart/${id}`);
            if(response){
                fetchRecords();
            }
            console.log(response,"carts");
            console.log(dataSource,"set of carts")
        }
        catch(error){
            console.log(error)
        }
       
           
    }
    
    return (
        <div className='cart'>
      <div className='cart'>
        {/* <Table loading={loading} columns={columns} dataSource={dataSource} pagination={{pageSize:5,total:totalPages}}>
        
        </Table> */}
        <div className='cart-content' >
        <div style={{fontSize:"25px",padding:"5px"}}>Bag</div>
        
            {dataSource.map((itm,id)=>{
                return(
                    <div>
                    <div className='cart-items' >
                <div className='cart-img' ><img alt="images" src={itm.image}/></div>
                <div className='cart-details' >
                    <div className='cart-text' >
                        <div style={{fontSize:"20px"}}>{itm.name}</div>
                        <div>{itm.price}</div>
                    </div>
                    <div className='cart-text' >
                        <div style={{fontSize:"15px"}}>Shoes</div>
                    </div>
                    <div className='cart-text'>
                        <div style={{fontSize:"15px"}}>Black/Tech Grey/White/Muslin</div>
                    </div>
                    <div className='cart-text'>
                        <div style={{fontSize:"15px"}}>Size 3.5 Quantity 1</div>
                    </div>
                    <div className='cart-icons' >
                        <div><i class="fas fa-search"></i></div>
                        <div key={id}><i onClick={()=>deletePost(itm.key)} class="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
                
                </div> 
                <br/>
                <hr/>
                </div>
            )})
            }
        
        </div>
        <div className='summary'>
        <div className='text-sum'>Summary</div>
        <div className='summary-content'>
                        <div style={{fontSize:"15px"}}>Subtotal</div>
                        <div>MRP:₹ 12 795.00</div>
                    </div>
                    <div className='summary-content'>
                        <div style={{fontSize:"15px"}}>Estimated Delivery & Handling</div>
                        <div>MRP:₹ 12 795.00</div>
                    </div>
                    <hr/>
                    <div className='summary-content'>
                        <div style={{fontSize:"15px"}}>Total</div>
                        <div>MRP:₹ 12 795.00</div>
                    </div>
                    <button className='guest'>Guest Checkout</button>
            <button  className='guest'>Member Checkout</button>
        </div>
        {/* {dataSource.map((itm,k)=>{
            return(
                <div>
            <img width="100px" src={itm.image} alt="images"/>
            <h4>{itm.title}</h4>
        </div>
            )
        })
        
        } */}
      </div> 
      </div>
    )
}




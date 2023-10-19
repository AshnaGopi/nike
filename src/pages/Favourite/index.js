import React,{useState,useEffect} from 'react';
import { Table } from 'antd';
import axios from 'axios';

export default function Favourite() {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(2);
  const [loading, setLoading] = useState(false)
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
      dataIndex:'name'
    },
    {
      title:'Email',
      dataIndex:'email'
    },
    {
      title:'Address',
      dataIndex:'address',
      key:"street",
      render: item => {console.log(item,"ashna"); return <div>{item.geo.lat}</div>}
    },
    // {
    //   title:'Lat',
    //   dataIndex:'address',
    //   key:"geo",
    //   render: itm => Object.values(itm)[0],
    // }
  ]
  const fetchRecords=()=>{
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        console.log(response.data.data);
        setDataSource(response.data);
        setTotalPages(response.data.totalPages)
        setLoading(false);
    })
  }
  
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      <Table loading={loading} columns={columns} dataSource={dataSource} pagination={{pageSize:5,total:totalPages}}>
      
      </Table>
    </div> 
  )
}
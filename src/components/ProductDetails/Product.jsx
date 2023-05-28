import React from 'react'
import {useState,useEffect} from "react"
// import Counter from "../HeroSection/Hero"
import {useParams} from "react-router-dom"
import axios from "axios"

function Product() {
    const [data,setData]=useState(null)
    const params=useParams();
    useEffect(() => {
        const fetchData = async() => {
          try {
            const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
            setData(response.data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, [params.id]);
        console.log(data,"Arslan Akmal");
  return (
    <div className="w-50">
    <img src={data.image} alt={data.title} className='w-50'/>
    <div className="d-flex">
        
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <button className='btn btn-primary'>{data.price}</button>
        {/* {/* <Counter/> */}
    </div>
    </div>
  )
}

export default Product
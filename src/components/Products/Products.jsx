import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import "./Products.css"
function Products() {
 const [data,setData]=useState([])
const dataApi=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
}


useEffect(()=>{
dataApi();
    
},[])

  return (
    <>
    <div className="d-flex gap-3 flex-wrap">
   {data.map((product)=>{  
    return(
<div className='d-flex'>
        <div class="card d-flex" style={{width: "18rem"}}>
  <img src={product.image} class="card-img-top w-50 h-50 mx-5" alt={product.title}/>
 
  <div class="card-body d-flex justify-content-center flex-column">
    <h5 class="card-title">{product.title}</h5>
    <Link to={`${product.id}`} class="btn btn-primary bottom">{"$"+product.price}</Link>
  </div>
</div>
</div>
    )
   })}
   </div>
    </>
  )
}

export default Products
import React from 'react'
import { useEffect,useState } from 'react'
function Products() {

    let [counter,setCounter]=useState(1);
 const [data,setData]=useState([])

    const incrementCounter =()=>{
        if(counter===10){
            counter=10
        }
        else{
            setCounter(counter+1);
        }
    }
    const decrementCounter =()=>{
        if(counter===1){
            counter=1
        }
        else{
            setCounter(counter-1);
        }
    }
const dataApi=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
}


useEffect(()=>{
dataApi();
    
},[counter])

console.log(data,"Arslan Akmal");

  return (
    <>
   {data.map((product)=>{
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src={product.image} class="card-img-top" alt={product.title}/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    {/* <p class="card-text">{product.description}</p> */}
    <a href="#" class="btn btn-primary">{product.price}</a>
  </div>
</div>
    )
   })}
    </>
  )
}

export default Products
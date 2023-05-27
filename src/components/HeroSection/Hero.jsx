import {useState} from "react"
function Hero() {
let [counter,setCounter]=useState(1);


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

  return (
    <>
    <button className="btn btn-primary" onClick={incrementCounter}>+</button>
    <div>{counter}</div>
    <button className="btn btn-primary" onClick={decrementCounter}>-</button>
    </>
  )
}

export default Hero
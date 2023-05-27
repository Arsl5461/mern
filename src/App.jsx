import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/HeroSection/Hero"
import Products from "./components/Products/Products"
import Home from "./components/Home"
import {Routes,Route} from "react-router-dom"
function App() {


  return (
    <>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/counter" element={<Hero/>}></Route>
<Route path="/products" element={<Products/>}></Route>
</Routes>
   </>
  )
}

export default App

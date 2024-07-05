import { useState } from 'react'
import './App.css'

function App() {
  const [car,setCar] = useState({nam:"XUV300",
            model:"W8",
            brand:"Mahindra",
            color:"black"})
  
  const updateColor = ()=>{
      setCar((previous) => {
        return {...previous,color:"blue"}
      })
  }
  return (
    <>
      <h1>My {car.brand} car</h1>
      <p>it is a {car.color} color of model {car.model}</p>
      <button onClick={updateColor}>blue</button>
    </>
  )
}

export default App

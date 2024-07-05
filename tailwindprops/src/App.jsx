import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {username: "Sahil",
                age: 21}
  const arr = [1,2,3,4,]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="sahil" btnText = "view Profile"/>
      <Card username = "juhi" btnText = "click me"/>
     

    </>
  )
}

export default App

import { useState } from "react"

function App() {
  console.log(useState())
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ]

  const listItems = products.map((items) => 
    <li key={items.id} 
        style={{color: items.isFruit? "blue":"red"}}>

          {items.title}

    </li>)
  

  return (
    <>
      <ul>{listItems}</ul>
    </>
  )
}

export default App

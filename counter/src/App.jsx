import { useState } from "react";

function App() {
  
  let [value , setValue] = useState(15)

  // let value = 15

  const addvalue = () => {
    
      setValue(preValue => preValue + 1)
      setValue(preValue => preValue + 1)
      setValue(preValue => preValue + 1)
      setValue(preValue => preValue + 1)
  }
  // const removeValue = () => {
  //   if(value>0){
  //     setValue(value = value - 1)
  //   }
    
    
  // }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {value} </h2>
      <button onClick={addvalue}>Add Value{value}</button>
      <button>Remove value{value}</button>
      <footer>{value}</footer>
    </>
  )
}

export default App

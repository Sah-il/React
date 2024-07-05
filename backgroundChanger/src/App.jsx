import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center inset-y-3 left-10 w-16 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                  style={{backgroundColor:"red"}}
                  onClick={() => setColor("red")}>Red</button>

           <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"green"}}
                   onClick={() => setColor("green")}>Green</button>
           
           <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"Blue"}}
                   onClick={() => setColor("blue")}>Blue</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"olive"}}
                   onClick={() => setColor("olive")}>olive</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"gray"}}
                   onClick={() => setColor("gray")}>gray</button>

            <button className="outline-none px-3 py-1 rounded-full text-black shadow-lg" 
                   style={{backgroundColor:"Yellow"}}
                   onClick={() => setColor("yellow")}>Yellow</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"Pink"}}
                   onClick={() => setColor("Pink")}>Pink</button>
            
            <button className="outline-none px-3 py-1 rounded-full text-black shadow-lg" 
                   style={{backgroundColor:"lavender"}}
                   onClick={() => setColor("lavender")}>lavender</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"Purple"}}
                   onClick={() => setColor("Purple")}>Purple</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
                   style={{backgroundColor:"black"}}
                   onClick={() => setColor("black")}>black</button>

            <button className="outline-none px-3 py-1 rounded-full text-black shadow-lg" 
                   style={{backgroundColor:"White"}}
                   onClick={() => setColor("White")}>White</button>

                   
                   

          
           
        </div>
      </div>
     </div>
     
    
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click here to visit google.com'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "Sahil aggarwal"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'click me to visit google',
  anotherUser

)


function Myapp(){
  return(
    <>
      <h1>custom app chai</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
)

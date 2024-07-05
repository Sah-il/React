import { useEffect, useState} from "react"
import { useLoaderData } from "react-router-dom"
import Img from '../../assets/sahil.jpg'

function Github() {
  const data = useLoaderData()

  /* const [data,setData] = useState([])
  useEffect(() =>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  },[]) */
  

  return (
    <>
      <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img src={Img} alt="Git picture" width={300}/>
      </div>
      
    </>
  )
}

export default Github

export const GithubInfo = async() => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
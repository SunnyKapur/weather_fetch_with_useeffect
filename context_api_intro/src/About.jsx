import  { useContext } from 'react'
import { MyStore } from './context/MyContext'

const About = () => {

    let {count,setCount } = useContext(MyStore)
    console.log("about rendering.......")
  return (
    <div>
        <h1>About {count}</h1>
        <button onClick={()=> setCount(++count)}>Increment</button>
    </div>
  )
}

export default About
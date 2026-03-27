import React from 'react'
import About from './About'
import Contact from './Contact'

const Home = () => {
  console.log("Home rendering.......")
  return (
    <div>
        <h1>Home</h1>


        <About />
        <Contact />
    </div>
  )
}

export default Home
import React from 'react'

const About = ({count,greet}) => {
    console.log("About rendering....")
  return (
    <div>About-{count}</div>
  )
}

export default React.memo(About)
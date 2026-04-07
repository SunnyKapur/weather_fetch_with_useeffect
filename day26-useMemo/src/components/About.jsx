import React from 'react'

const About = ({count,user}) => {
    console.log("About rendering....")
  return (
    <div>About-{count}</div>
  )
}

export default React.memo(About,(prevProps, nextProps)=>{
    return prevProps.user.id === nextProps.user.id;
})
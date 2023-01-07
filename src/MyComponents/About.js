import React from 'react'

const About = () => {
  let AboutStyle={
    margin: "320px",
   color: "black"
  }
  return (
    <div >
      <h3 className="aboutContainer text-center" style={AboutStyle}>This is the about page of Todo lists.You can add and remove your todos</h3>
    </div>
  )
}

export default About

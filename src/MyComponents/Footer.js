import React from 'react'

const footer = () => {
  let footerStyle={
    position: "relative",
    width: "100%",
    top: "0vh",
    border:"2px solid gray"
}

  return (
    <footer className="bg-dark text-light py-2" style={footerStyle} >
      <p className="text-center">
       Copyright &copy; Archana
      </p>
    </footer>
  )
}

export default footer

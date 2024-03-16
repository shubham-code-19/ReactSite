import React from 'react'
import "./Footer.css"
const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <div>
        <footer>
            <h5>CpoyRight ©️ {year}</h5>
        </footer>
    </div>
  )
}

export default Footer

import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
         
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container nav_bg">
    <NavLink className="navbar-brand" to="44">
      Soul
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">
            Service
          </NavLink>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
{/* 
                </div>
            </div>
        </div> */}
      

    </>
  )
}

export default Nav

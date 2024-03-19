import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <>
     <section className='header  d-flex align-items-center mt-5 '>
     <div className="container mt-5 ">
      <div className="row justify-content-between">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        <h1>
        {props.name} <br /><strong className='brand_name'>Coders</strong>
        </h1>
        <h2 className='my-3 team'>
      We are the team of talented developer making websites
        </h2>
        <div className="mt-">
          <NavLink to={props.visit} className='btn_get_started'>{props.btnName}</NavLink>
        </div>
        </div>
     
      <div className="col-lg-5  order-lg-2 order-1 header_img">
      <img src={props.img} alt="slow connection" className='img-fluid animated  w-50 border rounded-pill' />
      </div>
         
      </div>
     </div>

     </section>
    </>
  )
}

export default Common

import React from 'react'
import Card from './Card'
import Sdata from './CardData'
const Service = () => {
  return (
    <>
        <div className="my-5">
          <h1 className='text-center'>Our service</h1>
        </div>

    <div className="container mb-5">
      <div className="row gy-5">
        

        {Sdata.map((value,index)=>{
          return           <Card key={index} imgsrc={value.imgsrc} title={value.title}/>
        })}

        </div>
       
      </div>
    </>
  )
}

export default Service

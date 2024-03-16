import React, { useEffect, useState } from 'react'
import "./Covid.css"
const Covid = () => {
    const[covidData,setCovidData]=useState("")

    let getData=async()=>{
        try {   
            let res= await fetch("https://data.covid19india.org/data.json")
            res=await res.json()
            let actualData=res.statewise[0]
            console.log(actualData)
            setCovidData(actualData)
              
        } catch (error) {
                console.log(error)
        }
    }
    useEffect(()=>{
                getData()
    })
  return (
    <div>
        <div className="live">
           <marquee behavior="alternate" direction=""> <span> Live</span></marquee>
            <br />
            <h2>Covid-19 Coronavirus tracker</h2>
        </div>

        <ul>
            <li className=' card' id='card1'>
                <p className='cardName'><span>Our</span> country</p>
                <p className='cardTotal'>INDIA</p>
            </li>

            <li className=' card' id='card2'>
            <p className='cardName'><span>TOTAL</span> RECOVERED</p>
                <p className='cardTotal'>{covidData.recovered}</p>
            </li>
            <li className=' card' id='card3'>
            <p className='cardName'><span>TOTAL</span> CONFIRMED</p>
            <p className='cardTotal'>{covidData.confirmed}</p>
            </li>
            <li className=' card' id='card4'>
            <p className='cardName'><span>TOTAL</span> DEATH</p>
            <p className='cardTotal'>{covidData.deaths}</p>
            </li>
            <li className=' card' id='card5'>
            <p className='cardName'><span>TOTAL</span> ACTIVE</p>
            <p className='cardTotal'>{covidData.active}</p>
            </li>
            <li className=' card' id='card6'>
            <p className='cardName'><span>LAST</span> UPDATE</p>
            <p className='cardTotal'>{covidData.lastupdatedtime}</p>
            </li>
        </ul>
    </div>
  )
}

export default Covid

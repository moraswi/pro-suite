import React from 'react'
import "../styles/Home.css"
import backgrounImage from "../assets/pizza.jpeg" 

export default function Home() {
  return (
    <div className='homeMainContainer' style={{ backgroundImage: `url(${backgrounImage})` }} >
  
    <div className = "contentContainer">
      <h1>Pizza Name</h1>
      <p>Write somthing about pizza</p>
     <button>ORDER</button>
    </div>
   
    </div>
  )
}

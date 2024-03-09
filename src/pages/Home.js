import React from 'react'
import "../styles/Home.css"
import PizzaLeft from "../assets/screen.png" 

export default function Home() {
  return (
    <div className='homeMainContainer' >
  
    <div className = "contentContainer">
        <p className='welcome'>welcome to ProSuite</p>
        <h1>Discover the power of Software</h1>
        <p className='content'>Every day, our clients are faced with challenges and opportunities.
            We help them solve their problems by connecting them to 
            information technology. We offer solutions that grow, 
            empower and help businesses.</p>

        <div>
          <button className='getStarted'>GET STARTED</button>
          <button className='requestDemo'>REQUEST A DEMO</button>
        </div>
    </div>

    <img
        src={PizzaLeft}
        alt="Description of the image"
        className="rightSide"
      />

    </div>
  )
}

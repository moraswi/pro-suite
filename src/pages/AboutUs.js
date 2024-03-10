/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../styles/AboutUs.css'
import screen from "../assets/screenNoShadow.png" 

export default function Menu() {
  return (
    <div className='menuMainContainer'>
      
      <div>
      <h1>
       <span className="vertical-line"></span>
        <span className="why-text">Why</span>{' '}
        <span className="prosuite-text">ProSuite?</span>
      </h1>
      </div>
      
      <div className='listItem'>
      <div className='itemContainer'>
      <img
        src={screen}
        alt="Description of the image"
        className="screen"
      />
      <div>
        <h3 className='proSuiteTitle'>Comprehensive</h3>
        <h3 className='proSuiteTitle'>Management Suite</h3>
        <p className='paragraphContent'>ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management.</p>

        </div>
      </div>

      <div className='itemContainer'>
        
        <img
          src={screen}
          alt="Description of the image"
          className="screen"
        />
        <div>
          <h3 className='proSuiteTitle'>User-Friendly</h3>
          <h3 className='proSuiteTitle'>Design</h3>
          <p className='paragraphContent'>With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations.</p>
 
          </div>
        </div>

        <div className='itemContainer'>
        
        <img
          src={screen}
          alt="Description of the image"
          className="screen"
        />
        <div>
          <h3 className='proSuiteTitle'>Cloud-Based</h3>
          <h3 className='proSuiteTitle'>Solution</h3>
          <p className='paragraphContent'> As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere.</p>

          </div>
        </div>
      </div>

      
    </div>
  )
}

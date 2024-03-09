/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../styles/WhyProSuit.css'

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
      
      <div className='menuListContainer'>
      <img src="../assets/pineapple.jpg" className='menuItem' alt="Pizza Image" />
        <h3 className='menuItem'>Pizza Name</h3>
        <p className='menuItem'> write something about pizza Name</p>
        <p className='menuItem'>R 100.00</p>
      </div>
    </div>
  )
}

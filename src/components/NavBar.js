// import React, { useState } from 'react';
import { useRef } from "react";
import '../styles/NavBar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png" 

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className="mainNavBarContainer">
		
            <img
        src={logo}
        alt="logo"
        className="logo"
      />
			<nav ref={navRef}>
				<a href="/#">HOME</a>
				<a href="/#">ABOUT</a>
				<a href="/#">SOLUTION</a>
				<a href="/#">CONTACT</a>
                <button className='requestDemoNav'>REQUEST A DEMO</button>
				{/* <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			{/* <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button> */}
            </div>
		</header>
	);
}

export default Navbar;
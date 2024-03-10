import { useRef } from "react";
import '../styles/NavBar.css'
import logo from "../assets/logo.png" 

function Navbar() {
	const navRef = useRef();

	return (
		<header>
            <div className="mainNavBarContainer">
            <img
                src={logo}
                alt="logo"
                className="logo"
            />
			<nav ref={navRef}>
				<a className="aLink" href="/#home">HOME</a>
				<a className="aLink" href="/#about-us">ABOUT</a>
				<a className="aLink" href="/#solution">SOLUTION</a>
				<a className="aLink" href="/#contact-us">CONTACT</a>
                <button className='requestDemoNav'>REQUEST A DEMO</button>
			</nav>
            </div>
		</header>
	);
}

export default Navbar;
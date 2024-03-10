
import './App.css';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Solution from "./pages/Solution"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App" >
      <NavBar/>
      <div className="SubAppContainer">
        <div className="SubApp">

        <section id="home">
          <Home/>
        </section>

          <section id="about-us">
          <AboutUs/>
          </section>


          <section id="solution">
          <Solution/>
          </section>

        </div>
      </div>
  {/* <div className='footerNav'> */}

      <section id="contact-us">
          <Footer/>
      </section>
      {/* </div> */}
    </div>
  );
}

export default App;

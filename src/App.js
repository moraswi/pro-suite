
import './App.css';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import WhyProSuit from "./pages/WhyProSuit"
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" color='red'>
      <div className="SubAppContainer" color='yellow'>
        <div className="SubApp" color='red'>
      <Home/>

          <WhyProSuit/>
          {/* <AboutUs/> */}
          {/* <ContactUs/> */}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

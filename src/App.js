
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
          <Home/>
          <AboutUs/>
          <Solution/>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

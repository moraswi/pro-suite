
import './App.css';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Solution from "./pages/Solution"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" color='red'>
      <div className="SubAppContainer" color='yellow'>
        <div className="SubApp" color='red'>
          <Home/>
          <AboutUs/>
          <Solution/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

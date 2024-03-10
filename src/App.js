
import './App.css';
import Home from "./pages/Home"
import WhyProSuit from "./pages/WhyProSuit"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" color='red'>
      <div className="SubAppContainer" color='yellow'>
        <div className="SubApp" color='red'>
      <Home/>

          <WhyProSuit/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Jobs from './Components/Jobs/Jobs';
import Footer from './Components/Navbar/Footer';
import AllRoutes from "./Routes/AllRoutes"


function App() {
  return (
    <div className="App">
   <Navbar/> 
   <AllRoutes/>
   <Footer/>
    </div>
  );
}

export default App;

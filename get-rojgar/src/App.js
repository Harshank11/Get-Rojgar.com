import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Jobs from './Components/Jobs/Jobs';
import Footer from './Components/Navbar/Footer';

function App() {
  return (
    <div className="App">
   <Navbar/> 
   
   <Homepage/>
   {/* <Jobs/> */}
 <Footer/>
    </div>
  );
}

export default App;

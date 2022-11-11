import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Jobs from './Components/Jobs/Jobs';

function App() {
  return (
    <div className="App">
   <Navbar/> 
   
   {/* <Homepage/> */}
   <Jobs/>

    </div>
  );
}

export default App;

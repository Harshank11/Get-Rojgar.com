import { Route,Routes } from "react-router-dom";

import PrivateRoute from "../Components/PrivateRoute"
import Jobs from "../Components/Jobs/Jobs";
import Homepage from "../Components/Homepage/Homepage";
import Login from "./Login";

function AllRoutes() {
  return (<div>{/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/jobs" element={
    // <PrivateRoute>
      <Jobs/>
    // </PrivateRoute>
    }
    />
   <Route path="/login" element={<Login/>}/>
  </Routes>
  
  </div>
  );
}

export default AllRoutes;

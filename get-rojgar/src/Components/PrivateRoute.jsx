import {useContext} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"


function PrivateRoute({ children }) {
    const {authState} =useContext(AuthContext);
    if(!authState.isauth){
        return <Navigate to="/" />
    }
    return children;
}

export default PrivateRoute;
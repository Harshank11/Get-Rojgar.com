import React, {useState} from "react";

export const AuthContext = React.createContext();
function AuthContextProvider({children}) {
    const [state,setState] =useState({
        isauth:false,
        token :null,
    });
    
    const loginUser =(token)=>{
  setState({
    ...state,
    isauth:true,
    token,
  })
    };
    const logoutUser=()=>{
        setState({
            ...state,
            isauth:false,
            token:null,
        });
    };
    return(
        <AuthContext.Provider value={{authState: state,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

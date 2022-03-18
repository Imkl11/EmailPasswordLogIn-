import React,{useState,useEffect,createContext} from "react";

const AuthContext=createContext({
    isLoggedIn:false,
    onLogOut:()=>{},
    onLogIn:(email,password)=>{}
})
export const AuthContextProvider=(props)=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);

    useEffect(() => {
        const storedUserInformation = localStorage.getItem("isLoggedIn");
        if (storedUserInformation === "1") {
          setIsLoggedIn(true);
        }
      }, [])

    const logInHandler=()=>{
        debugger;
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }
    const logOutHandler=()=>{
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false)
    }
    return(
        <AuthContext.Provider value={
           {isLoggedIn:isLoggedIn, onLogOut:logOutHandler,onLogIn:logInHandler} 
        }>
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthContext;
import React,{useContext} from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
// import {AuthContext} from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const storedUserInformation = localStorage.getItem("isLoggedIn");
  //   if (storedUserInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const logInHandler = (email, password) => {
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };
  // const logOutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const ctx=useContext(AuthContext)
  debugger;
  return (
    
      // <AuthContext.Provider value={{
      //   isLoggedIn:isLoggedIn,
      //   onLogOut:logOutHandler
      // }}>
      <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <LogIn/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
      </React.Fragment>
      // </AuthContext.Provider>
  
  );
}

export default App;

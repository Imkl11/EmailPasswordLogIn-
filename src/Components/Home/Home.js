import React,{useContext} from "react";
import classes from "./Home.module.css"
import Card from "../UI/Card/Card";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
const Home=()=>{
    const authCtx=useContext(AuthContext)
    return(
        <Card className={classes.home}>
            <h1>Welcome Back 😁🤪</h1>
            <Button onClick={authCtx.onLogOut}>LogOut</Button>
        </Card>

    )
}
export default Home;
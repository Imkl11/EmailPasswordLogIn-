import React, { useState, useEffect, useReducer, useContext } from "react";
import classes from "./LogIn.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

// function emailReducer(state, action) {
//   if (action.type === "USER_INPUT") {
//     return { ...state,value: action.val, isValid: action.val.includes("@") };
//   }
//   if (action.type === "USER_BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
//   return { value: " ", isValid: false };
// }
// function passwordReducer(state, action) {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === "USER_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length > 6 };
//   }
//   return { value: " ", isValid: false };
// }
const LogIn = (props) => {
  const [enteredEmail, setEmailId] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");

  const [enteredPassword, setPassWord] = useState("");
  const [isPassWordValid, setIsPasswordValid] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const authCtx = useContext(AuthContext);

  // const [emailState, dispatchEmail] = useReducer(emailReducer, {
  //   value: " ",
  //   isValid: false,
  // });
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: " ",
  //   isValid: false,
  // });

  useEffect(() => {
    const ideantifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      setIsFormValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(ideantifier);
    };
  }, [enteredEmail, enteredPassword]);

  const addEmailHandler = (event) => {
    // dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setEmailId(event.target.value);
  };
  const addPassWordHandler = (event) => {
    // dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setPassWord(event.target.value);
  };
  const validEmailHandler = () => {
    // dispatchEmail({ type: "INPUT_BLUR" });
    setIsEmailValid(enteredEmail.includes("@"));
  };
  const validPasswordHandler = () => {
    // dispatchPassword({ type: "INPUT_BLUR" });
    setIsPasswordValid(enteredPassword.trim().length > 6);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(authCtx);
    authCtx.onLogIn(enteredEmail, enteredPassword);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={addEmailHandler}
            value={enteredEmail}
            onBlur={validEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            isPassWordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={addPassWordHandler}
            value={enteredPassword}
            onBlur={validPasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!isFormValid}>
            LogIn
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default LogIn;

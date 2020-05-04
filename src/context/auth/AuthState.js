import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { LOGGED, ERROR, LOGGED_OUT } from "../types";
import { authReducer } from "./AuthReducer";
import axios from "axios";
import { withRouter } from "react-router-dom";

const AuthState = (props) => {
  const initialState = {
    logged: false,
    error: null,
    token: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setLogged = () => {
    dispatch({ type: LOGGED });
  };
  const setLoggedOut = () => {
    dispatch({ type: LOGGED_OUT });
    localStorage.removeItem("token");
    props.history.push("/")
  };

  const checkForm = (form) => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWatYcPE360YtuB8J1ImxhamLB8b4l10E",
        { ...form, returnSecureToken: true }
      )
      .then((res) => {
        dispatch({ type: LOGGED, token: res.data.idToken });
        localStorage.setItem("token", res.data.idToken);
        props.history.push("/");
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err.response.data.error.message });
        localStorage.removeItem("token");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setLogged,
        checkForm,
        setLoggedOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthState);

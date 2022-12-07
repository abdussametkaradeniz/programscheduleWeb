import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setAuthorizationToken } from "../../Components/LoginRegister/setAuthorizationToken"
import {  Navigate} from 'react-router-dom';
import Dashboard from '../../Components/root/Dashboard';
import { Routes, Route } from "react-router-dom";
//import { Redirect } from 'react-router'

debugger;

export function getLoginSuccess(customer) {
  return { type: actionTypes.GET_LOGIN_SUCCESS, payload: customer };
}

const loginSuccess = (user) => {
//  alert("success");

  return { type: actionTypes.GET_LOGIN_SUCCESS, payload: user };
};

const loginError = (error) => {
 // alert("error");

  return {
    type: actionTypes.GET_LOGIN_ERROR,
    error,
  };
};

const loginService = (customer) => {
  debugger;
  let url = actionTypes.HOSTNAME + "api/customers/login";

  var raw = JSON.stringify({
    userName: customer.userName,
    password: customer.password,
  });

  var config = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: raw,
  };

  return axios(config)
    .then(function (response) {
      console.log("1");
      console.log(response);
      if (response.status === 200) {

        sessionStorage.setItem('resData', JSON.stringify(response.data));
        console.log(this.state.redirect);
        const token = response.data;
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
      }

      console.log(
        "JSON.stringify(response.data) " + JSON.stringify(response.data)
      );
      return response.data;
    })
    .catch((err) => console.log(err));
};

export function login(customer) {
  return (dispatch) => {
    loginService(customer)
      .then((data) => {
        data ? dispatch(loginSuccess(data)) : dispatch(loginError(data));
      })
   //   .catch((err) => dispatch(loginError(err)));
  };
}

export const logout = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);

  return {
    type: actionTypes.GET_LOGOUT_SUCCESS,
  };
};

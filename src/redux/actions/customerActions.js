import * as actionTypes from "./actionTypes";
import { Navigate } from "react-router-dom";
import Dashboard from "../../Components/root/Dashboard";
import { Routes, Redirect, Route } from "react-router-dom";
import alertify from "alertifyjs";

export function getCustomersSuccess(customers) {
  return { type: actionTypes.GET_CUSTOMERS_SUCCESS, payload: customers };
}
export function getCustomerTypesSuccess(customerTypes) {
  return {
    type: actionTypes.GET_CUSTOMER_TYPES_SUCCESS,
    payload: customerTypes,
  };
}
//getCustomerSuccessByUserName
export function getCustomerSuccessByUserName(currentrojectCustomer) {
  debugger;
  return {
    type: actionTypes.CHANGE_CUSTOMER_BY_USER_NAME_SUCCESS,
    payload: currentrojectCustomer,
  };
}

export function getCustomerSuccess(currentCustomer) {
  //  return <Navigate to="/customer" />;
  //   <Navigate to="/customer" replace={true} />
  //   <Route path="/customer" element={<Navigate to ="/customer" />}/>
  console.log("getCustomerSuccess customer zz", currentCustomer.customerId);

  return { type: actionTypes.CHANGE_CUSTOMER, payload: currentCustomer };
}

export function getCustomerTypes() {
  return function (dispatch) {
    let url = actionTypes.HOSTNAME + "api/customerType";

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCustomerTypesSuccess(result)));
  };
}

export function getCustomers(projectId) {
  return function (dispatch) {
    let url = actionTypes.HOSTNAME + "api/customers";

    if (projectId !== undefined) {
      url = url + "/CustomersByProjectId/" + projectId;
    }

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCustomersSuccess(result)));
  };
}

export function registerNewCustomer(customer) {
  let url = actionTypes.HOSTNAME + "api/customers/register";

  var raw = JSON.stringify({
    password: customer.password,
    name: customer.name,
    surname: customer.surname,
    email: customer.email,
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  console.log(url + " burdayız.");

  return (dispatch) => {
    fetch(url, requestOptions)
      .then(function (response) {
        response.json();
        console.log(response);
        if (response.status === 400) {
          alertify.warning(
            "There is already  a user named as " + customer.email
          );
        } else if (response.status === 200) {
          alertify.success("You registered ");
        } else if (response.status === 500) {
          alertify.error("There was any error when registering New User");
        }
      })
      .catch((error) => {
        alertify.success("There was any error when registering New User");
      });
  };
}

export function getCustomer(customer) {
debugger;
  sessionStorage.setItem("test",0);
console.log(customer)
  let url =
    actionTypes.HOSTNAME + "api/customers/GetCustomerByEmail/"+customer.Email;
    
  var raw = JSON.stringify({
    Email: customer.Email,
    //password: customer.password,
  });
  console.log(raw)
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return (dispatch) => {
    debugger;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) =>  dispatch(getCustomerSuccess(result),   sessionStorage.setItem("test", 1)))
      .catch((error) => console.log("error", error));
  };
}

export function getCustomerByUserName(userName) {
  if (userName !== undefined) {
    return function (dispatch) {
      let url = actionTypes.HOSTNAME + "api/customer/customerByUserName";

      url = url + "/" + userName;

      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(getCustomerSuccessByUserName(result)));
    };
  }
}

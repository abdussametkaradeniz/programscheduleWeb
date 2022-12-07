import React, { Component } from 'react'
import { connect } from "react-redux";
import { login, logout } from "../../redux/actions/authActions";
import * as actionTypes from "../../redux/actions/actionTypes";
import axios from "axios";
import alertifyjs from "alertifyjs";
import { bindActionCreators } from "redux";
import * as customerActions from "../../redux/actions/customerActions";
import Navi from "./../navi/Navi";



class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        customerName: "any",
        name: "any",
        surName: "any",
        email: "any",
        customerTypeId: -1,
      },
    };
  }

  ShowNavBar() {
    let customerId = sessionStorage.getItem("customerId");
    console.log("customerId " + customerId);

    if (!(customerId === "-1" || customerId === null)) {
      return (
        <div>
          <Navi></Navi>;
        </div>
      );
    }
  }
  onChangeHandler = (event) => {

    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });

    //console.log("MÜŞTERİ id.... " + this.props.customer.customerId);
  };


  registerNewUser = (e) => {
    e.preventDefault();

    const customerForRegisterDto = {
      userName: this.state.userName,
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
    };
    let isValid = 1;

    debugger;

    if (this.state.userName === undefined) {
      alertifyjs.warning("Please enter your user name");
      isValid = 0;
    }

    if (this.state.password === undefined) {
      alertifyjs.warning("Please enter your password");
      isValid = 0;
    }

    if (this.state.name === undefined) {
      alertifyjs.warning("Please enter your name");
      isValid = 0;
    }
    if (this.state.surname === undefined) {
      alertifyjs.warning("Please enter your surname");
      isValid = 0;
    }
    if (this.state.email === undefined) {
      alertifyjs.warning("Please enter your email");
      isValid = 0;
    }

    if (isValid === 0) {
      return;
    }

    console.log(customerForRegisterDto.email);

    this.props.actions.registerNewCustomer(customerForRegisterDto);

  };

  render() {
    return (
      <div>
        {this.ShowNavBar()}
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register</h3>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="userName"
                  className="form-control mt-1"
                  placeholder="Enter your Name"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group mt-3">
                <label>Surname</label>
                <input
                  type="userName"
                  className="form-control mt-1"
                  placeholder="Enter your Surname"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"
                onSubmit={this.registerNewUser}>
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      registerNewCustomer: bindActionCreators(
        customerActions.registerNewCustomer,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  // return { customer: state.authReducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, {useState,Component } from 'react'
import {ActionCreators} from '../../redux/actions/customerActions';
import { Link,redirect, Route} from "react-router-dom";
import {actionTypes} from "../../redux/actions/actionTypes"
import "../../Css/Login.css";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from 'axios';
import MainPage from '../common/MainPage';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      Customer:{
        CustomerEmail:"",
        CustomerPassword:""
      },
      submitted:false
    }
  }

  /* bana bir yerden hata dönmezse loginle alakalı giriş yapan kullanıcıyı 
    e maile göre bul bilgilerini initial statete tut sadece idsi yeter  
  */


    inputChange = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      // this.setState({ userName: event.target.value });
      this.setState({ [name]: value });
  
      //console.log("MÜŞTERİ id.... " + this.props.customer.customerId);
    };

  submitForm = async (event) => {
    event.preventDefault();
    debugger;
    let url = actionTypes.HOSTNAME + "api/customers/login";
    const customer ={
      Email:this.state.CustomerEmail,
      Password:this.state.CustomerPassword
    }

    await axios.post(url,customer)
    .then((response)=>console.log(response.data))
    .then(this.state.submitted=true)
    .catch((error)=> console.log(error));
    
  
    this.props.dispatch(ActionCreators.formSubmittionStatus(true));  

    if(this.state.submitted===true){
       
    }
    
  }



  render() {
    const { CustomerEmail, CustomerPassword} = this.state.Customer;
    const { submitted } = this.state;
    return (
      <div>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register</h3>
              <div className="form-group mt-3">
                <label>email</label>
                <input
                  id='CustomerEmail'
                  type="email"
                  name='CustomerEmail'
                  className="form-control mt-1"
                  placeholder="Enter your Email"
                  onChange={(e)=>{this.inputChange(e)}}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                id='CustomerPassword'
                  type="password"
                  name='CustomerPassword'
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={(e)=>{this.inputChange(e)}}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button  className="btn btn-primary" onClick={this.submitForm}>
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
const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }

}
export default connect(mapStateToProps)((Login));




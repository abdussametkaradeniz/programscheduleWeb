import React, { Component } from 'react'
import "../../Css/Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as customerActions from "../../redux/actions/customerActions";
import * as authActions from "../../redux/actions/authActions";
import { setAuthorizationToken } from "./setAuthorizationToken";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import alertify from "alertifyjs";

const userInfo = (state) => {
  // debugger;
  const token = localStorage.getItem("jwtToken");
  //alert("token user info " + token);

  if (token) {
    // kullancı bilgilerini getir apiden.
    return jwtDecode(token);
  } else return state.authReducer.user;
};

const jwtToken = localStorage.getItem("jwtToken");

class Login extends Component {
  debugger;
  constructor(props) {
    super(props);
    this.state = {
      customerId: "",
      password: "",
      details: "",
      isSubmit: 0,
      insertingCustomer: 0,
    };
  }
  AddNewCustomer() {
    this.setState({ insertingCustomer: 1 });
  }

  componentDidMount() {
    this.props.actions.logout();
  }

  if(jwtToken) {
    setAuthorizationToken(jwtToken);
  }

  state = {
    Email: "",
    password: "",
    user: { Email: "any", password: "any" },
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // this.setState({ userName: event.target.value });
    this.setState({ [name]: value });

    //console.log("MÜŞTERİ id.... " + this.props.customer.customerId);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      Email: this.state.Email,
      password: this.state.password,
    };

   
    //dispatch(login(user));
    // this.props.actions.login(user);

    //axios.defaults.headers.common['Authorization'] = Bearer ${mutation.payload}`

    

    if (this.state.Email === undefined || this.state.Email.length === 0) {
      alertify.warning("Please enter your user name");
      return;
    }

    if (this.state.password === undefined || this.state.password.length === 0) {
      alertify.warning("Please enter your password");
      return;
    }
    debugger;
    this.props.actions.login(user);
    //this.props.actions.getCustomer(user);
    this.setState({ isSubmit: 1 });

   
    //  this.userInfo(this.state);
    //<Link to="customer" element="dashboard"></Link>
    // this.props.history.push("/image");

    //console.log("this.props.customer.customerId " + this.props.customer.customerId);
  };

  
  render() {

    debugger;
    sessionStorage.setItem("customerId", this.props.customer.CustomerId);
    sessionStorage.setItem("CustomerEmail", this.props.customer.Email);

    console.log(this.props.customer.customerName);
  

    if (this.props.customer.customerId !== -1) {
     return <Navigate to="/MainPage" />;
    }

    if (this.state.insertingCustomer === 1) {
      //return <Navigate to="/newUser" />;
      return alertify("giris başarisiz");
    }

    /*if (sessionStorage.getItem("test")==="1" && this.state.isSubmit === 1 && this.props.customer.customerId === -1) {
      alertify.error(  "Your user name or password is wrong. Please enter again.");
      this.setState({ isSubmit: 0 });
    }*/

    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit} className="form">
          <h2>Sing In</h2>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="Email"
              name="Email"
              id="Email"
              placeholder="Email"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                {" "}
                <Button onClick={this.handleSubmit} color="danger" xs="%100">
                  Login
                </Button>
              </Col>
              <Col>
                {" "}
                <div id="right ">
                  <a
                    href="/newUser"
                    onMouseOver="text-decoration:underline"
                    onmouseout="text-decoration:none"
                    onClick={() => this.AddNewCustomer()}
                  >
                    Register Now
                  </a>
                </div>{" "}
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const user1 = userInfo(state);
  const { isAuthenticated, error, errorMessage, user } = state.authReducer;
  return { customer: state.changeCustomerReducer };

  // return { customer: state.authReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(authActions.login, dispatch),
      logout: bindActionCreators(authActions.logout, dispatch),
      getCustomer: bindActionCreators(customerActions.getCustomer, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


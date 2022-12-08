import React, { Component } from 'react'
import { Link} from "react-router-dom";

export default class MainPage extends Component {

  
   
    render() {
        return (
            <div>
                <h3>login success</h3>
                <Link to="/login" className="btn btn-primary">Sign up</Link>
            </div>
        )
    }
}

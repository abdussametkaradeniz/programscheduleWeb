import React, { useState } from 'react'
import ChangeAuthMode from './ChangeAuthMode';
import Login from './Login';
import Register from './Register';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default function LoginRegister() {
    let [authMode, setAuthMode] = useState("signin");
    let [componentText, setComponentText] = useState("Sign Up");
    
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
        console.log(authMode)
        setComponentText(componentText === "Sign Up" ? "Sign In" : "Sign Up");
    }
    if (authMode === "signin") {
        return (
            <div>
                <ChangeAuthMode changeAuthMode={changeAuthMode} componentText={componentText} />
                <Login></Login>
            </div>
        )
    } else {
        return (
            <div>
                <ChangeAuthMode changeAuthMode={changeAuthMode} componentText={componentText} />
                <Register></Register>
            </div>
        )
    }
}


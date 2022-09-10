import React from "react";
import LoginForm from "../Components/LoginForm"

function LoginPage({ setLoggedInUser }) {
    
    return <LoginForm setLoggedInUser={setLoggedInUser}/>;

}

export default LoginPage;
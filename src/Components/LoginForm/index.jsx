import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './LoginForm.css'

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials({...credentials, [id]: value
        })
    }

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
        );
        return response.json();
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/");
            });
        }
    };


    return (
        <div>
        <div className="hero">
        <h1 class="hero-text">We <span class="glow-up"> teach </span>technical skills, <span class="glow-up">build </span>career pathways and <span class="glow-up">inspire</span> woman to code</h1>
        </div>
        <div className="container">
        <form>
        <div>
        <label htmlFor="username">Username:</label>
        <input type="text" 
        id="username" 
        placeholder="Enter username" 
        onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input type="password" 
        id="password" 
        placeholder="Password" 
        onChange={handleChange}/></div>
        <div className="container">
        <button type="submit" onClick={handleSubmit}>Login</button>
        <button type="register" >Register</button></div>
        </form>
        </div></div>
);
} 

export default LoginForm;
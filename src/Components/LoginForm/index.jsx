import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './LoginForm.css'

const LoginForm = ({setLoggedInUser}) => {
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
        console.log(response);
        if(response.status === 200) {
            return response.json();
        }
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((data) => {
            console.log(data)    
                window.localStorage.setItem("token", data.token,);
                window.localStorage.setItem("id", data.id,);
                window.localStorage.setItem("SuperUser", data.superuser,);
                setLoggedInUser({id: data.id, isSuperUser: data.superuser})
                if (data.superuser === true) {
                    navigate("/dashboard");
                } else if (data.superuser === false) {
                    navigate(`/profile/${data.id}`)
                }
                // navigate(`/profile/${data.id}`)
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
        <button type="register" onClick={()=> navigate("/register")} >Register</button></div>
        </form>
        </div></div>
);
} 

export default LoginForm;
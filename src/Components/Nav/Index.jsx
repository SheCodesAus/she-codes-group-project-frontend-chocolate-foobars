import React ,{ useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"
import Logo from "../../images/ChoCode-logo-full.png";

const Nav = () => {
    const location = useLocation()
    const [LoggedIn, setLoggedIn] = 
    useState(!!window.localStorage.getItem('token')
    );

    const LogOut = () => {
    	window.localStorage.removeItem("token");
			setLoggedIn(false)
    }

    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [window.localStorage, location]
    ) 
    return (
       <nav className="navbar">
         <div id="heroimage"><img src={ Logo } alt="Logo" /></div>
         <div className="right-content">
        {LoggedIn ? (
        <Link to = "/" onClick={LogOut}>Logout</Link>)
        :
        (<Link to = "/dashboard">Dashboard</Link>)}
        <Link to = "/">Login</Link>
        <Link to = "/register">Register</Link>
        <Link to = "/profile">Profile</Link></div>
       </nav>
    );
}

export default Nav 
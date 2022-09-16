import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"
import Logo from "../../images/ChoCode-logo-full.png";

const Nav = () => {
    const location = useLocation()
    const [LoggedIn, setLoggedIn] =
        useState(!!window.localStorage.getItem('token')
        );

    const [SuperUser, setSuperUser] =  useState({})
    useEffect(() => {
        const superUserData = localStorage.getItem('SuperUser')
        setSuperUser(JSON.parse(superUserData))
    }, [])

    const [profileID, setProfileID] = useState({})
    useEffect(() => {
        const data = localStorage.getItem('id')
        setProfileID(JSON.parse(data))
    }, [])

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const toggleHamburger = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    const LogOut = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("SuperUser");
        window.localStorage.removeItem("id");
        setLoggedIn(false)
    }

    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [window.localStorage, location]
    )
    React.useEffect(() => {
        setSuperUser(!!window.localStorage.getItem('SuperUser'))
    }, [window.localStorage, location]
    )

    return (
        <nav className="navigation">
            <div> <img className="heroimage" src={Logo} alt="Logo" /></div>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </button>
            <div onClick={toggleHamburger} className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <ul>
                    {LoggedIn ? (
                        <li><Link to="/" onClick={LogOut}>Logout</Link></li>)
                        :
                        [(<li><Link to="/">Login</Link></li>), (<li><Link to="/register">Register</Link></li>)]}
                    {SuperUser ? (
                        <li><Link to="/dashboard">Dashboard</Link></li>) : ("")}
                    {LoggedIn ? (<li><Link to={'/profile/' + profileID}>Profile</Link></li>) : ("")}
                </ul></div>
        </nav>
    );
}

export default Nav 
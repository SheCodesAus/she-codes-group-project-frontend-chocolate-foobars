import React, { useState, useEffect,  } from "react";
import Dashboard from "../Components/Dashboard"
import { useNavigate } from "react-router-dom";


function DashboardPage() {

    const navigate = useNavigate();

    const [profileID, setProfileID] = useState({})
    useEffect(() => {
        const data = localStorage.getItem('id')
        setProfileID(JSON.parse(data))
    }, [])

    const [isSuperUser, setIsSuperUser] =  useState(false)
    useEffect(() => {
        const superUserData = localStorage.getItem('SuperUser')
        setIsSuperUser(JSON.parse(superUserData))
        console.log(typeof superUserData)
    }, [])
  
    if(isSuperUser === true){
      return <Dashboard/>
    }
    return (
        navigate('/profile/' + profileID)
        );

}

export default DashboardPage;
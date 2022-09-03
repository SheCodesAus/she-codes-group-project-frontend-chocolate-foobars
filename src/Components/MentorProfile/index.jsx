import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MentorProfile.css"

const initialState = {
    "mentor_input": "",
}

const MentorProfile = () => {

    // const userLogin = useSelector((state) => state.userLogin)
    // const { userInfo } = userLogin;

    // const [userData, setUserData] = useState({});

    // placeholder for the user update

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const newState = {
            ...formData,
            [e.target.name]: e.target.value
        }      
        setFormData(newState);
    }
    
    return (
        <div className = "form">
            <div className = "profile-body">
                {/* <div className = "profile-header">
                    Mentor Profile
                </div>  */}
                <div className = "profile-container">
                    <div>First name</div>
                    <div></div>
                    {/* <div className = "info-item">{First_name}</div>  */}
                </div>
                <div className = "profile-container">
                    <div>Last Name</div>
                    {/* <div className = "info-item">{Last_name}</div>  */}
                </div>
                </div>
                <div className = "profile-container">
                    <div>Phone</div>
                    {/* <div className = "info-item">{Phone_number}</div>  */}
                </div>
                <div className = "profile-container">
                    <div>Email</div>
                    {/* <div className = "info-item">{Email}</div>  */}
                </div>
                <div className = "profile-container">
                    <div>Position</div>
                    {/* <div className = "info-item">{Position}</div>  */}
                </div>
                <div className = "profile-container">
                    <div>Status</div>
                    {/* <div className = "info-item">{Status}</div>  */}
                </div> 
                <div className = "profile-container">
                    <div>Industry Experience</div>
                    {/* <div className = "info-item">{Years_industry_experience}</div>  */}
                </div>
                <div className = "profile-container">
                    <div>Interview Notes</div>
                    {/* <div className = "info-item">{Interview_notes}</div>  */}
                </div>
                <div className = "profile-container">
                    <label htmlFor = "mentor-input">Mentor Comment</label>
                    <input className='mentor-input-field' type='text' placeholder='Input your comment for the workshop.' onChange={handleInputChange}/>
                </div> 
                <div className = "profile-container">
                    <div>Feedback from She Codes</div>
                    {/* <div className = "info-item">{Feedback_for_mentors}</div>  */}
                </div> 
                <div className = "profile-container">
                    <div>CV</div>
                    {/* <div className = "info-item">{CV}</div>  */}
                </div>
                <div>
                <button className = "button">Edit</button>
            </div>     
        </div>
    );
};

export default MentorProfile;


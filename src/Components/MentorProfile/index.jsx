import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MentorProfile.css"

const initialState = {
    firstName: "",
    lastNname: "",
    userName: "",
    passWord: "",
    email: "",
    phoneNumber: "",
    cv: "",
    state: "",
    interviewNotes: "",
    feedback: "",
    mentorComments: "",
    position: "",
    status: "1",
}

const MentorProfile = () => {

    // const userLogin = useSelector((state) => state.userLogin)
    // const { userInfo } = userLogin;

    // const [userData, setUserData] = useState({});

    // placeholder for the user update

    const [formData, setFormData] = useState(initialState);

    // const handleInputChange = (e) => {
    //     const newState = {
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     }      
    //     setFormData(newState);
    // }

    // const handleChange = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(data);
    // };
    
    return (
        <form className = "form">
            <div className = "profile-body">

                <div className = "profile-container">
                    <div>First name</div>
                    <input
                        type="text"
                        name="firstName"
                        // value={data.firstName}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Last name</div>
                    <input
                        type="text"
                        name="lastName"
                        // value={data.lastName}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Phone number</div>
                    <input
                        type="number"
                        name="phoneNumber"
                        // value={data.phoneNumber}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Email</div>
                    <input
                        type="text"
                        name="email"
                        // value={data.email}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>State</div>
                    <input
                        type="text"
                        name="state"
                        // value={data.state}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Position</div>
                    <input
                        type="text"
                        name="position"
                        // value={data.position}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Status</div>
                    <input
                        type="text"
                        name="status"
                        // value={data.status}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Curriculum Vitae</div>
                    <input
                        type="text"
                        name="cv"
                        // value={data.cv}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Interview notes</div>
                    <input
                        type="text"
                        name="interviewNotes"
                        // value={data.interviewNotes}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Metor comments</div>
                    <input
                        type="text"
                        name="mentorComments"
                        // value={data.mentorComments}
                        // onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Feedback from She Codes</div>
                    <input
                        type="text"
                        name="feedback"
                        // value={data.feedback}
                        // onChange={handleChange}
                        />
                </div>

                <div>
                <button className = "button">Edit</button>
                </div>     

            </div>
        </form>
    );
};

export default MentorProfile;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MentorProfile.css"

const initialState = {
    first_name: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    state: "",
    skills: [],
    status: "",
    position: "",
    cv: "",
    interviewNotes: "",
    mentorComments: "",
    feedback: "",
}

const MentorProfile = () => {

    // const userLogin = useSelector((state) => state.userLogin)
    // const { userInfo } = userLogin;

    const [user, setUser] = useState(initialState);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name,e.target.value);
        console.log(user);
        console.log(process.env.REACT_APP_API_URL)
    }

    const { id } = useParams();
        console.log(id)

    // 

    const getUser = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}users/${id}`);
        const user = await res.json();
        setUser(user);
    };
    
    useEffect(() => {
        getUser();
    }, [id]);

    // 
    
    // useEffect(() => {
    //     if (!id) {return}

    //         fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //         })
    //         .then((user) => console.log(user))
    //         .catch((err) => {
    //             console.log(err);
    //             console.log(err.message);
    //         });
    // }, [id]);

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(user);
    // };

    // a placeholder for catch - clean up the form once the user presses the button
    
    return (
        <form className = "form">
            <div className = "profile-body">
{/* 
            {user.map(user => ( */}
                <div className = "profile-container">
                    <div>First name</div>
                    <input
                        type="text"
                        name="first_name"
                        // key={user.id}
                        value={user.first_name}
                        onChange={handleChange}
                        />
                </div>
            {/* ))} */}

                <div className = "profile-container">
                    <div>Last name</div>
                    <input
                        type="text"
                        name="lastName"
                        value={user.last_name}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>User name</div>
                    <input
                        type="text"
                        name="userName"
                        value={user.username}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Phone number</div>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={user.phone_number}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Email</div>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>State</div>
                    <input
                        type="text"
                        name="state"
                        value={user.state}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Skills</div>
                    <input
                        type="text"
                        name="skills"
                        value={user.skills}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Status</div>
                    <input
                        type="text"
                        name="status"
                        value={user.status}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Position</div>
                    <input
                        type="text"
                        name="position"
                        value={user.position}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Curriculum Vitae</div>
                    <input
                        type="text"
                        name="cv"
                        value={user.cv}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Interview notes</div>
                    <input
                        type="text"
                        name="interviewNotes"
                        value={user.interviewNotes}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Mentor comments</div>
                    <input
                        type="text"
                        name="mentorComments"
                        value={user.mentorComments}
                        onChange={handleChange}
                        />
                </div>

                <div className = "profile-container">
                    <div>Feedback from She Codes</div>
                    <input
                        type="text"
                        name="feedback"
                        value={user.feedback}
                        onChange={handleChange}
                        />
                </div>

            

                <div>
                <button type = "submit" className = "button">Edit</button>
                </div>

            
            </div>
        </form>
    );
};

export default MentorProfile;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'


const initialState = {
    First_name: "",
    Last_name: "",
    Username: "",
    Password: "",
    Email: "",
    Phone_number: "",
    CV: "",
    State: "",
    Interview_notes: "",
    Feedback_for_mentors: "",
    Mentor_comments: "",
    Is_superuser: "",
    Is_staff: "",
    Is_active: "",
    Position: "",
    status: "1",
}

function RegisterForm() {

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const newState = {
            ...formData,
            [e.target.name]: e.target.value
        }      
        setFormData(newState);
    }

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}users/sign-up`, {
                method: "post",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(formData),
            })
            return response.json()
    }

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault(); {
            postData().then((response) => {
                navigate("/profile");
            })}
    }


    return (
    <div className='form'>
        <div className='form-body'>
            <div>
                <label className='form_label' htmlFor='First_name'>First Name</label>
                <input className='form_input' type='text' placeholder='First Name' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='Last_name'>Last Name</label>
                <input className='form_input' type='text' placeholder='Last Name' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='Email'>Email</label>
                <input className='form_input' type='email' placeholder='Email' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='Phone_number'>Phone Number</label>
                <input className='form_input' type='integer' placeholder='Phone Number' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='State'>State</label>
                <input className='form_input' type='text' placeholder='State' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='Username'>Username</label>
                <input className='form_input' type='text' placeholder='Username' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='password'>Password</label>
                <input className='form_input' type='password' placeholder='Create Password' 
                onChange={handleInputChange}/>
            </div>  

            <div>
                <label className='form_label' htmlFor='CV'>Curriculum Vitae</label>
                <input className='form_input_cv' type='string' placeholder='Add CV here' 
                onChange={handleInputChange}/>
            </div>

        </div>

        <div>
            <button className='btn' type='submit' onClick={handleSubmit}>Register and Apply</button>
        </div>

    </div>     
        )
}

export default RegisterForm
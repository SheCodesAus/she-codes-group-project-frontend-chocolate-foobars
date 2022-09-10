import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'


const initialState = {
    //Pending BE to add first_name and last_mae
    // first_name: "",
    // last_name: "",
    //These attributes are currently set-up
    username: "",
    email: "",
    password: "",
    phone_number: 400000000,
    state: "",
    position: "",
    skills: [],
    status: "Application received",
    interview_notes: "",                    //Need BE to allow null values as initial value during registration
    feedback_for_mentors: "",
    mentor_comments: "",
    cv: "",
    //These may not no longer be required?
    // Is_superuser: "",
    // Is_staff: "",
    // Is_active: "",
}

function RegisterForm() {

    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const newState = {
            ...formData,
            [e.target.name]: e.target.value
        }      
        setFormData(newState);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        postData().then((response) => {
            console.log(response);
            // navigate("/profile");
        })
    }

    console.log(process.env.REACT_APP_API_URL)

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}users/`, {
                method: "post",
                headers: {
                "Content-type": "application/json",        
            },
                body: JSON.stringify(formData),
            })
            return response.json()
    }



    return (
    <div className='form'>
        <div className='form-body'>
            {/* <div>
                <label className='form_label' htmlFor='First_name'>First Name</label>
                <input className='form_input' type='text' placeholder='First Name' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='Last_name'>Last Name</label>
                <input className='form_input' type='text' placeholder='Last Name' 
                onChange={handleInputChange}/>
            </div> */}

            <div>
                <label className='form_label' htmlFor='username'>Username</label>
                <input className='form_input' type='text' placeholder='Username' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='email'>Email</label>
                <input className='form_input' type='email' placeholder='Email' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='password'>Password</label>
                <input className='form_input' type='password' placeholder='Create Password' 
                onChange={handleInputChange}/>
            </div>  

            <div>
                <label className='form_label' htmlFor='phone_number'>Phone Number</label>
                <input className='form_input' type='integer' placeholder='Phone Number' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='state'>State</label>
                <input className='form_input' type='multi-select' placeholder='State' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='cv'>Curriculum Vitae</label>
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
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'


const initialState = {
    first_name: "",
    surname: "",
    password: "",
    email: "",
    phone_number: "",
    cv: "",
    state: "",
    years_industry_experience: "",
    interview_notes: "",
    feedback_for_mentors: "",
    mentor_comments: "",
    is_superuser: "",
    position: "",
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

    return (
    <div className='form'>
        <div className='form-body'>

            <div>
                <label className='form_label' htmlFor='first_name'>First Name</label>
                <input className='form_input 'type='text' placeholder='First Name' onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='lastName'>Last Name</label>
                <input className='form_input 'type='text' placeholder='Last Name' onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='email'>Email</label>
                <input className='form_input 'type='email' placeholder='Email' onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='phone_number'>Phone Number</label>
                <input className='form_input 'type='integer' placeholder='Phone Number' onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='state'>State</label>
                <input className='form_input 'type='text' placeholder='State' onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='years_industry_experience'>Years Industry Experience</label>
                <input className='form_input 'type='datetime-local' placeholder='Years Range' onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='password'>Password</label>
                <input className='form_input 'type='password' placeholder='Create Password' onChange={handleInputChange}/>
            </div>  

            <div>
                <label className='form_label' htmlFor='cv'>Curriculum Vitae</label>
                <input className='form_input_cv 'type='string' placeholder='Add CV here' onChange={handleInputChange}/>
            </div>            
        </div>
        <div>
            <button className='btn' type='submit'>Register and Apply</button>
        </div>
    </div>     
        )
}

export default RegisterForm
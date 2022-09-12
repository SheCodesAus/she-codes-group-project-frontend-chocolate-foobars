import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'


const initialState = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
    state: "",
    position: "",
    skills: ["HTML/CSS","Python"],
    cv: "",
    interview_notes: "",
    feedback_for_mentors:"",
    mentor_comments:"",
    status: "Application Received",
    is_superuser: "false"
}


function RegisterForm() {

    const [formData, setFormData] = useState(initialState);
    const [selectedList, setSelectedList] =useState([])

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.name, e.target.value);

        if(e.target.name === 'skills') {            
            let { options } = e.target
            options = Array.apply(null, options)
            const selectedValues = options.filter(x => x.selected).map(x => x.value)
            setSelectedList(selectedValues)
            console.log(e.target.name,selectedValues)
        }

        const newState = {
            ...formData,
            [e.target.name]: e.target.value,
        }      
        setFormData(() => newState);

    }


    const handleSubmit = (e) => {
        e.preventDefault(); 
        postData().then((response) => {
            console.log(response);
            navigate("/");
        })
    }


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
            console.log("formData:", formData)
    }

    return (
    <div className='form'>
        <div className='form-body'>
            <div>
                <label className='form_label' htmlFor='first_name'>First Name</label>
                <input className='form_input' name='first_name' type='text' placeholder='First Name' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='last_name'>Last Name</label>
                <input className='form_input' name='last_name' type='text' placeholder='Last Name' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='username'>Username</label>
                <input className='form_input' name='username' type='text' placeholder='Username' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='email'>Email</label>
                <input className='form_input' name='email' type='email' placeholder='Email' 
                onChange={handleInputChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='password'>Password</label>
                <input className='form_input' name='password' type='password' placeholder='Create Password' 
                onChange={handleInputChange}/>
            </div>  

            <div>
                <label className='form_label' htmlFor='phone_number'>Phone Number</label>
                <input className='form_input' name='phone_number' type='integer' placeholder='Phone Number' 
                onChange={handleInputChange}/>
            </div>

            <div>
            <label className='form_label' htmlFor='state'>State</label>
            <select className='form_dropdown_state' name='state' onChange={handleInputChange}>
                <option value="">Choose State</option>
                <option value="NSW">NSW</option>
                <option value="QLD">QLD</option>
                <option value="WA">WA</option>
            </select>
            </div>

            <div>
            <label className='form_label' htmlFor='skills'>Skills</label>
            <select className='form_dropdown_skills' multiple name='skills' onChange={handleInputChange}>
                <option value="">Choose Skills</option>
                <option value="HTML/CSS">HTML/CSS</option>
                <option value="Python">Python</option>
                <option value="DJANGO/DRF">DJANGO/DRF</option>
                <option value="JavaScript/ReactJS">JavaScript/ReactJS</option>
            </select>
            </div>

            <div>
                <label className='form_label' htmlFor='cv'>Curriculum Vitae</label>
                <input className='form_input_cv' name='cv' type='text' placeholder='Add CV here' 
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

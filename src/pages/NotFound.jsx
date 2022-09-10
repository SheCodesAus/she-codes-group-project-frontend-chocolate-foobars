import React from 'react';
import { Link } from "react-router-dom";


import ErrorImage from "../images/error-image.png"
  
function NotFound(){

    return (
        <div className="error-section">
        <Link to="/"><img className="error-image" alt="error" src={ErrorImage}/></Link>
    </div>
    );
}
  
export default NotFound;
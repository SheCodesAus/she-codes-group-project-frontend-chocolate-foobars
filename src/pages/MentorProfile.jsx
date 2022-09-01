import Dashboard from "../../src/Components/Dashboard";
import "../Components/MentorProfile/MentorProfile.css"

const MentorProfile = () => {
    return (
        <div className = "mentor-profile">
            <div className = "mentor-profile-header">
                Mentor Profile
            </div>
            <div>
                <div>First name</div>
                <div>Last name</div>
                <div>State</div>
                <div>Phone</div>
                <div>Email</div>
                <div>Position</div>
                <div>Status</div> 
                <div>Industry Experience</div>
                <div>
                    Interview notes
                </div>
                <div>Mentor Comments</div> 
                <div>Feedback from She Codes</div> 
                <div>CV</div>
            </div>
            <button>
                Edit
            </button>
        </div>
    );
};

export default MentorProfile;
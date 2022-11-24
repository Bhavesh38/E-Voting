import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import "./CandidateLogin.css";
import "./Voter.css"

function Voter() {
    const [showPassword, setShowPassword] = useState(false);
    const setVisiblity = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className='voter'>
            <h3>Voter Registeration Here</h3>
            <form>
                <input type="text" id="name" required placeholder='Candidate Name' name="name" />
                <input type="text" id='email' placeholder='Your Email' name="email" required />
                <div className='form_dob'>
                    <label for="dob">Your Date of Birth</label>
                    <input type="Date" placeholder='Your DOB' id='dob' />
                </div>
                <select name="gender" id="gender">
                    <option >Male</option>
                    <option >Female</option>
                    <option >Other</option>
                </select>
                <div className='form_password'>
                    <input type={showPassword ? "password" : "text"} placeholder='Your Password (Min. 8 Char)' />
                    <span className='password_icon' onClick={setVisiblity}>
                        {
                            showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                        }
                    </span>
                </div>
                <div className='form_password'>
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <button className='form_btn' type="submit">
                    <Link>
                        Sign Up
                    </Link>
                </button>
            </form>
            {/* <hr /> */}
            <div className='candidateLogin_bottomSpan'>
                <span>You are already registered as a Voter?   <Link to="/voterlogin">Login Here</Link></span>
                <hr />
                <span>You are the Candidate <Link to="/candidatelogin">Voter</Link></span>
            </div>
        </div>
    )
}

export default Voter

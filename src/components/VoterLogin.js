import React from 'react'
import { Link } from 'react-router-dom';
import "./CandidateSignin.css";
import "./VoterLogin.css"

function VoterLogin() {
    return (
        <div className='voterLogin'>
            <h3>Candidate Login Here</h3>
            <form>
                <input name='email' type="email" placeholder='Your email' />
                <input name='password' type="password" placeholder='Password' />
                <button><Link to="/voterpage">Sign In</Link></button>
            </form>
            <p>New here? <Link to="/voter">SignUp</Link> here as a Candidate.</p>
        </div>
    )
}

export default VoterLogin

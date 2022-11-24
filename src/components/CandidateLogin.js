import React from 'react'
import { Link } from 'react-router-dom';
import "./CandidateSignin.css";

function CandidateLogin() {
    return (
        <div className='candidateLogin'>
            <h3>Candidate Login Here</h3>
            <form>
                <input name='email' type="email" placeholder='Your email' />
                <input name='password' type="password" placeholder='Password' />
                <button>Sign In</button>
            </form>
            <span>New here ?  <Link to="/CandidateRegister">SignUp</Link> here as a Candidate.</span>
        </div>
    )
}

export default CandidateLogin;

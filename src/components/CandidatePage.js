import React from 'react';
import { Link } from 'react-router-dom';
import "./Candidate.css"

function CandidatePage() {
    return (
        <div className='candidate'>
            <p><Link to="/promise">Edit or Add Your Promises</Link></p>
            <p>See All Candidates</p>
            <p>See Voters</p>
            <p>See All Candidates and Their Promises</p>
            <p>See results. <span>Pending</span></p>
        </div>
    )
}

export default CandidatePage

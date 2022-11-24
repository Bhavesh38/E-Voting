import React from 'react';
import "./Home.css"
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='home'>
                <Link to="/CandidateRegister">
                    <span>
                        Candidate <CallMadeIcon />
                    </span>
                </Link>
                <Link>
                    <span>ECA <CallMadeIcon /></span>
                </Link>
                <Link to="/voter">
                    <span>VOTER <CallMadeIcon /></span>
                </Link>
            </div>
        </>

    )
}

export default Home

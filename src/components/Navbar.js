import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar_left'>
                <Link to="/">
                    <h2 className='navbar_lefth2'>e-Vote</h2>
                </Link>
                <h4>Choose Your Future</h4>
            </div>
            <AccountCircleIcon />
        </div >
    )
}

export default Navbar

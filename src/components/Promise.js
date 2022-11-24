import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Promise.css";

function Promise() {
    const allCandidates = [
        {
            candidate_no: 1,
            promises: ["Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"]
        },
        {
            candidate_no: 2,
            promises: ["Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"]
        },
        {
            candidate_no: 3,
            promises: ["Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"]
        },
        {
            candidate_no: 4,
            promises: ["Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"]
        },
        {
            candidate_no: 5,
            promises: ["Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"]
        },
        {
            candidate_no: 6,
            promises: ["Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"]
        },
    ]
    return (
        <div className='promise'>
            <div className='promise_top'>
                <div className='your_promises'>
                    <p>Your Promises</p>
                    {
                        allCandidates.map(item => {
                            return (
                                <div className='your_promisesContent'>
                                    <div className='content'>
                                        <p>Promise {item.candidate_no}</p>
                                        <div >
                                            <EditIcon style={{ color: "red" }} />
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='edit_form'>
                    <p>Creating Promise</p>
                    <form>
                        <input type="text" placeholder='Write Your Promise..' height="200" />
                        <button>Add Promise</button>
                    </form>
                </div>
            </div>

            {
                allCandidates.map((item, index) => {
                    return (
                        <div className='candidate_promise'>
                            <span>Candidate {item.candidate_no}</span>
                            <div className='promises'>
                                <p>Promise 1</p>
                                <p>Promise 2</p>
                                <p>Promise 1</p>
                                <p>Promise 2</p>
                                <p>Promise 1</p>
                                <p>Promise 2</p>
                                <p>Promise 1</p>
                                <p>Promise 2</p>
                                <p>Promise 1</p>
                                <p>Promise 2</p>
                                <p>Promise 1</p>
                                <p>Promise 2</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Promise

import React from 'react';
import "./VoterPage.css"

function VoterPage() {
    const candidates = [
        {
            candidate: "Candidate 1",
            Promises: [
                "Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"
            ]
        },
        {
            candidate: "Candidate 2",
            Promises: [
                "Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"
            ]
        },
        {
            candidate: "Candidate 3",
            Promises: [
                "Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"
            ]
        }
        , {
            candidate: "Candidate 4",
            Promises: [
                "Promise 1", "Promise 2", "Promise 3", "Promise 4", "Promise 5"
            ]
        }
    ]
    return (
        <div className='voterPage'>
            <h3>Voter Options</h3>
            <form>
                {
                    candidates.map(item => {
                        return (
                            <div className='candidate_option'>
                                <span>{item.candidate}</span>
                                <div className='Voter_page_candidate_promise'>
                                    <p>Promise 1</p>
                                    <p>Promise 2</p>
                                    <p>Promise 3</p>
                                    <p>Promise 1</p>
                                    <p>Promise 2</p>
                                    <p>Promise 3</p>
                                </div>
                                <input type="checkbox" />
                            </div>

                        )
                    })
                }
            </form>
        </div>
    )
}

export default VoterPage

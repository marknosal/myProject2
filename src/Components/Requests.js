import React from "react";

function Requests ({ handleLogIn, isLoggedIn, eventRequests }) {
    // const { name, date, budget, details } = eventRequests
    console.log(eventRequests)
    return (
        <>
            <button onClick={handleLogIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            <h1>Request list</h1>
            {eventRequests.map(request => {
                return (
                    <ul key={request.id}>
                        <li style={{ textAlign: 'left' }}>Client: {request.name}</li>
                        <li style={{ textAlign: 'left' }}>Time of Event: {request.date}</li>
                        <li style={{ textAlign: 'left' }}>Event Budget: {request.budget}</li>
                        <li style={{ textAlign: 'left' }}>Specification: {request.details}</li>
                    </ul>
                )
            })}
            <hr/>
        </>
    )
}

export default Requests
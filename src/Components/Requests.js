import React from "react";
import Request from "./Request"

function Requests ({ handleLogIn, isLoggedIn, eventRequests }) {

    return (
        <>
            <button onClick={handleLogIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            <h1>Request list</h1>
            <hr style={{ borderWidth: '3px', borderColor: 'red' }}/>
            {eventRequests.map(request => {
                return (
                    <Request key={request.id} request={request} />
                )
            })}
            
        </>
    )
}

export default Requests
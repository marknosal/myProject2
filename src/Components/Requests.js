import React from "react";

function Requests ({ handleLogIn, isLoggedIn }) {
    console.log(isLoggedIn)
    return (
        <>
            <button onClick={handleLogIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            <h1>Request list</h1>
        </>
    )
}

export default Requests
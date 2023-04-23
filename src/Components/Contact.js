import React, { useState } from "react";
import Requests from './Requests'
import Form from './Form'


function Contact ({ onNewRequest }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogIn(){
        console.log(isLoggedIn)
        setIsLoggedIn(isLoggedIn => !isLoggedIn)
    }

    return (
        (isLoggedIn) ? <Requests handleLogIn={handleLogIn} isLoggedIn={isLoggedIn} /> : <Form handleLogIn={handleLogIn} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onNewRequest={onNewRequest} />
    )
}

export default Contact
import React, { useState, useEffect } from "react";
import Requests from './Requests'
import Form from './Form'


function Contact () {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [eventRequests, setEventRequests] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/requests')
            .then(response => response.json())
            .then((data) => setEventRequests(data))
    }, [])

    function handleNewRequest(request) {
        setEventRequests([...eventRequests, request])
    }

    function handleComplete(completedRequest) {
        const updatedRequests = eventRequests.map(request => request.id === completedRequest.id ? completedRequest : request)
        setEventRequests(updatedRequests)
    }

    function handleLogIn(){
        setIsLoggedIn(isLoggedIn => !isLoggedIn)
    }

    return (
        (isLoggedIn) ? <Requests eventRequests={eventRequests} onComplete={handleComplete} handleLogIn={handleLogIn} isLoggedIn={isLoggedIn} /> : <Form handleLogIn={handleLogIn} isLoggedIn={isLoggedIn} onNewRequest={handleNewRequest} />
    )
}

export default Contact
import React, { useState } from 'react';

function Form ({ onNewRequest, isLoggedIn, handleLogIn }) {

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        budget: '',
        details: '',
        complete: false
    })

    function handleSubmit(event) {
        event.preventDefault()

        const newRequest = {
            name: event.target[0].value,
            date: event.target[1].value,
            budget: event.target[2].value,
            details: event.target[3].value,
            complete: false
        }

        /* DO POST FETCH HERE */
        fetch('http://localhost:3000/requests', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(newRequest)
        })
            .then(response => response.json())
            .then(data => onNewRequest(data))

        setFormData({
            name: '',
            date: '',
            budget: '',
            details: '',
            complete: false
        })
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>
            <button onClick={handleLogIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            <h3>We can't wait to help you with your big day!  Please fill out your event's info below and we will reach out within 1 business day</h3>
            <form onSubmit={handleSubmit}>
                Name
                <br/>
                <input name='name' value={formData.name} onChange ={handleChange} placeholder='Jane Doe' />
                <br/>
                Event Date
                <br/>
                <input name='date' value={formData.date} onChange={handleChange} type='date' />
                <br/>
                Budget
                <br/>
                <input name='budget' value={formData.budget} onChange={handleChange} placeholder='$18 million' />
                <br/>
                Event Details
                <br/>
                <textarea name='details' value={formData.details} onChange={handleChange} placeholder='Event themes, special requests/requirements, etc' rows="14" cols="100" wrap="soft"/>
                <br/>
                <input type="submit" value="Submit Request"/>
            </form>
        </>
    )
}

export default Form
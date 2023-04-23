import React, { useState } from "react";

function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        budget: '',
        details: '',
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>
            <h3>We can't wait to help you with your big day!  Please fill out your event's info below and we will reach out within 1 business day</h3>
            <form onSubmit={handleSubmit}>
                Name
                <br/>
                <input name='name' onChange ={handleChange} placeholder='Jane Doe' />
                <br/>
                Event Date
                <br/>
                <input name='date' onChange={handleChange} type='date' />
                <br/>
                Budget
                <br/>
                <input name='budget' onChange={handleChange} placeholder='$18 million' />
                <br/>
                Event Details
                <br/>
                <textarea name='details' onChange={handleChange} placeholder='Event themes, special requests/requirements, etc' rows="14" cols="100" wrap="soft"/>
                <br/>
                <input type="submit" value="Submit Request"/>
            </form>
        </>
    )
}

export default Contact
import React, { useState } from 'react';

function Request ({ request, onComplete }) {
    
    const arrayValues = Object.values(request).slice(0,4)

    function handleClick() {

        const updatedRequest = {
            "complete": !request.complete,
        }
        console.log(updatedRequest)
        
        fetch(`http://localhost:3000/requests/${request.id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRequest)
        })
            .then(response => response.json())
            .then(data => onComplete(data))
      }
    

    return (
        <div className='completion' style={{ backgroundColor: request.complete ? 'mediumspringgreen' : 'pink' }}>
            {arrayValues.map(value => {
                return (
                    <h3 key={value}>{value}</h3>
                )
            })}
            <button onClick={handleClick}>{request.complete ? 'Complete!' : 'Incomplete...'}</button>
        </div>
    )
}

export default Request
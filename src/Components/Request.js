import React, { useState } from 'react';

function Request ({ request }) {
    
    const arrayValues = Object.values(request).slice(0,4)
    const [completion, setCompletion] = useState(false)

    function handleClick() {
        setCompletion(completion => !completion)
    }
    

    return (
        <div className='completion' style={{ backgroundColor: completion ? 'mediumspringgreen' : 'pink' }}>
            {arrayValues.map(value => {
                return (
                    <h3 key={value}>{value}</h3>
                )
            })}
            <button onClick={handleClick}>{completion ? 'Complete!' : 'Incomplete...'}</button>
        </div>
    )
}

export default Request
import React from "react";
import handsImage from './images/hands.jpg';

function Home () {
    return (
        <div style={{ backgroundColor: 'mistyrose', height: '100vh' }}>
            <h1>KS Events</h1>
            <img style={{ width: '50%' }} alt="hands" src={handsImage} />
        </div>
    )
}
export default Home
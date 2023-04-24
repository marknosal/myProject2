import React from "react";
import handsImage from './images/hands.jpg';

function Home () {
    return (
        <div style={{ backgroundColor: 'mistyrose', height: '100vh' }}>
            <h1>KS Events</h1>
            <img style={{ width: '50%' }} alt="hands" src={handsImage} />
            <h5>
                "Celebrating love, one wedding at a time.
                <br></br>
                Your vision, our expertise." -K.S.
            </h5>
        </div>
    )
}
export default Home
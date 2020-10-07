import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <div>
                <h4>Developed By enigma6174</h4>
                <p>If you are seeing this, everything has worked perfectly.</p>
            </div>
            <div>
                <Link to='/'>Back</Link>
            </div>
        </div>
    )
}

export default About;

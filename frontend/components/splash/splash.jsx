import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <img className="background-image" src={window.background} />
                <div className="greeting-message-container">
                    <h1 className="greeting-message">Inspire and share with the world's photographers</h1>
                    <Link id="entry-button" to="/signup"> Sign Up </Link>
                </div>
            </div>
        )
    }
}

export default Splash;
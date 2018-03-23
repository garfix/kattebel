import React from 'react';
import { Link } from 'react-router-dom';
import { getRoute } from "./routes";

const name = {
    firstName: 'Patrick',
    lastName: 'van Bergen'
};

function formatName(user) {
    return <span><i>{user.firstName}</i> {user.lastName}</span>;
}

function HomePage() {

    return (
        <div>
            <h1>Homepage</h1>
            <h1>Hello, {formatName(name)}!</h1>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to={getRoute('/Add')}>Add</Link>
        </div>
    );
}

export default HomePage
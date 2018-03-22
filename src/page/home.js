import React from 'react';
import { Link } from 'react-router-dom';

const name = {
    firstName: 'Patrick',
    lastName: 'van Bergen'
};

function formatName(user) {
    return <span><i>{user.firstName}</i> {user.lastName}</span>;
}

function HomePage() {

    let addUrl = process.env.PUBLIC_URL + '/add';

    return (
        <div>
            <h1>Homepage</h1>
            <h1>Hello, {formatName(name)}!</h1>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to={addUrl}>Click me</Link>
        </div>
    );
}

export default HomePage
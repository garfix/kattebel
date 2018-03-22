import React from 'react';

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
        </div>
    );
}

export default HomePage
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
        <div className="page">
            <h1>Kattebel</h1>
            <h1>Hello, {formatName(name)}!</h1>
            <p className="App-intro">
                Allow me to remind you of something.
            </p>
            <Link to={getRoute('/add')}>Add Reminder</Link><br />
            <Link to={getRoute('/reminder')}>Reminders</Link><br />
            <Link to={getRoute('/notification')}>Notifications</Link>
        </div>
    );
}

export default HomePage
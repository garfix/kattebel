import React from 'react';
import { Link } from 'react-router-dom';

function AddPage() {

    let homeUrl = process.env.PUBLIC_URL + '/';

    return (
        <div>
            <h1>Add</h1>
            <Link to={homeUrl}>To home page</Link>
        </div>
    );
}

export default AddPage
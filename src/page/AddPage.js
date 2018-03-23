import React from 'react';
import { Link } from 'react-router-dom';
import { getRoute } from "./routes";

function AddPage() {

    return (
        <div>
            <h1>Add</h1>
            <Link to={getRoute('/')}>To home page</Link>
        </div>
    );
}

export default AddPage
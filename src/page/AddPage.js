import React from 'react';
import { Link } from 'react-router-dom';
import { getRoute } from "./routes";

class AddPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="page">
                <Link to={getRoute('/')}>To home page</Link>
                <h1>Add</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Description:
                        <textarea name="name" />
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" defaultValue={new Date()}/>
                    </label>
                    <label>
                        Time:
                        <input type="time" name="time" defaultValue="09:00"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddPage
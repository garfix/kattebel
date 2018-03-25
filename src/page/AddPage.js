import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoute } from "./routes";
import { v4 } from "uuid"
import * as memoryActions from "../memory/action";

class AddPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: v4(),
            date: new Date(),
            time: "09:00",
            description: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);

        this.props.addMemory(this.state.id, this.state.date, this.state.time, this.state, this.state.description);

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
                        <textarea name="description" defaultValue={this.state.description} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" defaultValue={this.state.date} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Time:
                        <input type="time" name="time" defaultValue={this.state.time} onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// function mapStateToProps(state, ownProps) {
//     // map state.memoryReducer.??? naar een props object, die aan de constructor gevoerd wordt
//     return {}
// }

export default connect(null, memoryActions)(AddPage)
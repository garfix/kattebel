import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoute } from "./routes";
import { v4 } from "uuid"
import { addReminder } from "../reminder/action";

class AddPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

        function pad2(number) {

            let str = '' + number;
            while (str.length < 2) {
                str = '0' + str;
            }

            return str;
        }

        let now = new Date();
        let date = now.getFullYear() + '-' + pad2(now.getMonth() + 1) + '-' + pad2(now.getDate());

        console.log(now);

        this.setState({
            id: v4(),
            date: date,
            time: "07:00",
            description: ""
        });
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

        event.preventDefault();

        if (this.state.description === "") {
            return;
        }

        // store the reminder
        this.props.addReminder(this.state.id, this.state.date, this.state.time, this.state, this.state.description);

        // navigate to overview
        this.props.history.push(getRoute('/'));
    }

    render() {
        return (
            <div className="page">
                <Link to={getRoute('/')}>To home page</Link>
                <h1>Add Reminder</h1>
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

export default connect(null, { addReminder })(AddPage)
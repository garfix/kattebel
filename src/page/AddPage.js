import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoute } from "./routes";
import { v4 } from "uuid"
import { addReminder } from "../reminder/action";
import { getCurrentDate } from "../model/date";

class AddPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

        this.setState({
            id: v4(),
            date: getCurrentDate(),
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

        console.log(this.form.getChildContext());

        this.form.validateAll();

        // check if form is valid
        // see https://github.com/Lesha-spr/react-validation/issues/132#issuecomment-375510866
        if (this.form.getChildContext()._errors.length > 0) {
            return;
        }

        // store the reminder
        this.props.addReminder(this.state.id, this.state.date, this.state.time, this.state, this.state.description);

        // navigate to overview
        this.props.history.push(getRoute('/'));
    }

    render() {

        const required = (value) => {
            if (!value.toString().trim().length) {
                // We can return string or jsx as the 'error' prop for the validated Component
                return <span class="error">Required</span>;
            }
        };

        return (
            <div className="page">
                <Link to={getRoute('/')}>To home page</Link>
                <h1>Add Reminder</h1>
                <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Description*
                            <Textarea name="description" value={this.state.description} onChange={this.handleInputChange} validations={[required]} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Date*
                            <Input type="date" name="date" value={this.state.date} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Time*
                            <Input type="time" name="time" value={this.state.time} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <Input type="submit" value="Submit" />
                </Form>
            </div>
        );
    }
}

export default connect(null, { addReminder })(AddPage)
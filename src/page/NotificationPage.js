import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { Link } from 'react-router-dom';
import { getRoute } from "./routes";
import { FormattedMessage } from 'react-intl';
import "./add.css"

class NotificationPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            allowed: false
        };
    }

    componentDidMount() {

        this.setState({
            allowed: Notification.permission === "granted"
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

        if (this.state.allowed) {

            if (Notification.permission !== "granted") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {

                        navigator.serviceWorker.ready.then(registration => {

                            registration.showNotification("Notifications allowed!")
                        })

                    }
                });
            }

        } else {

            if (Notification.permission === "granted") {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification("Please disallow notifications manually.")
                })
            }
        }

        // navigate to overview
        this.props.history.push(getRoute('/'));
    }

    render() {

        return (
            <div className="page">
                <Link to={getRoute('/')}>To home page</Link>
                <h1><FormattedMessage id={"Notifications"} /></h1>
                <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            <Input type="checkbox" name="allowed" checked={this.state.allowed} onChange={this.handleInputChange} />
                            <FormattedMessage id="Allow notifications"/>
                        </label>
                    </div>
                    <Input type="submit" value="Submit" />
                </Form>
            </div>
        );
    }
}

export default NotificationPage
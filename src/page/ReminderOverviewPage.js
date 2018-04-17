import React from "react";
import {getRoute} from "./routes";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import Reminders from "../reminder/reminders"
import { getReminders } from "../reminder/db"

// check https://stackoverflow.com/questions/33242378/rendering-react-components-with-promises-inside-the-render-method
class ReminderOverviewPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reminders: []
        };
    }

    componentDidMount() {

        getReminders().then(reminders => {
            this.setState({
                reminders
            })
        })
    }

    render() {

        return (
            <div className="page">
                <Link to={getRoute('/')}>To home page</Link>
                <h1><FormattedMessage id={"Reminders"} /></h1>
                <Reminders reminders={ this.state.reminders } />
            </div>
        );
    }
}

export default ReminderOverviewPage
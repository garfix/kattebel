import React from "react";
import {getRoute} from "../page/routes";
import {Link} from "react-router-dom";

export default class Reminders extends React.Component
{
    render() {
        return (
            <ul>
                {this.props.reminders.map((reminder) =>
                    <li key={reminder.id}>
                        {reminder.date} /
                        {reminder.time} /
                        {reminder.description}

                        <Link to={getRoute('/reminder/edit/' + reminder.id)}>Edit</Link>
                    </li>
                )}

            </ul>
        );
    }
}
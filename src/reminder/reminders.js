import React from "react";

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
                    </li>
                )}

            </ul>
        );
    }
}
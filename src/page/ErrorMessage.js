import React, { Component } from "react"

export default class ErrorMessage extends Component {

    render() {

        if (this.props.error === null) {
            return null
        } else {
            return (
                <div className="error">{this.props.error.message}</div>
            );
        }
    }
}
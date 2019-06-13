import React, { Component } from "react";

export default class Input extends Component {
    render() {
        return (
            <span className="switch">
                <div className="input-group">
                    <i className="fa fa-user-circle-o"></i>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                <style jsx>
                    {`
                    .switch {
                            font-size: 1rem;
                            position: relative;
                        }
                    `}
                </style>
            </span>
        )
    }
}
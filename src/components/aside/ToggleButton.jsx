import React, { Component } from "react";
import "./button.css";

export default class ToogleButton extends Component {
  render() {
    return (
      <span className="switch">
        <input type="checkbox" className="switch" id={this.props.message} />
        <label htmlFor={this.props.message} />
      </span>
    );
  }
}

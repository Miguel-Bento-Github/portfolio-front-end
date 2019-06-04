import React, { Component } from "react";

export default class Letters extends Component {
  render() {
    return <span className="pulse">{this.props.letter}</span>;
  }
}

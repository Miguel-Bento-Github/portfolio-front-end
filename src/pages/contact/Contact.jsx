import React, { Component } from "react";
import "./contact.css";
import Input from "./input/Input";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleChange = ({ target }) => {
    const key = target.placeholder;
    const val = target.value;
    this.setState({ [key]: val });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <main className="contact">
        <section className="contact-section">
          <h1>Contact Me</h1>
          <form className="contact-form">
            <div className="user-info">
              <Input handleChange={this.handleChange} pHolder="name" />
              <Input handleChange={this.handleChange} pHolder="email" />
            </div>
            <Input handleChange={this.handleChange} pHolder="subject" />
            <textarea
              onChange={this.handleChange}
              className="input input-message"
              placeholder="message"
              type="text"
              cols="30"
              rows="10"
            />
            <button
              onClick={this.handleSubmit}
              className="btn btn-submit pulse"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="banners">
            <i className="fab fa-github" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-instagram" />
          </div>
        </section>
      </main>
    );
  }
}

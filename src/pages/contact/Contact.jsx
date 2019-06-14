import React, { Component } from "react";
import "./contact.css";
import Input from "./input/Input";
import { toast } from "react-toastify";
import { sendEmail } from "../../api/email";
import Link from "../../components/iconLink/IconLink";

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
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.subject ||
      !this.state.message
    ) {
      return toast.warning("Please input all fields");
    }

    this.handleSend();
  };

  handleSend = () =>
    sendEmail(this.state)
      .then(res =>
        this.setState({ name: "", email: "", subject: "", message: "" })
      )
      .catch(err => console.error(err));

  render() {
    return (
      <main className="contact slit">
        <section className="contact-section">
          <h1 className="section-header">Contact Me</h1>
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
            />
            <button
              onClick={this.handleSubmit}
              className="btn btn-submit pulse"
            >
              Send
            </button>
          </form>
          <div className="banners">
            <Link href="https://github.com/MiguelIronHack" icon="github" />
            <Link
              href="https://www.linkedin.com/in/miguel-angelo-bento/"
              icon="linkedin-in"
            />
            <Link
              href="https://www.instagram.com/cupids.trick/"
              icon="instagram"
            />
          </div>
        </section>
        <section className="map" />
      </main>
    );
  }
}

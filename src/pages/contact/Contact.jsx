import React, { Component } from "react";
import "./contact.css";
import Input from "./input/Input";
import Tooltip from "react-simple-tooltip";
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
    const validateEmail = email => {
      const validator = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
      return validator.test(String(email).toLowerCase());
    };
    validateEmail(this.state.email);
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.subject ||
      !this.state.message
    ) {
      return toast.warning("Please input all fields");
    } else if (validateEmail(this.state.email) === false) {
      return toast.warning("Please input a valid email address");
    }
    toast.info("Hey, there. I got your message. I'll get back to you soon!");

    this.handleSend();
    document.getElementById("contact-form").reset();
  };

  handleSend = () =>
    sendEmail(this.state)
      .then(res =>
        this.setState({ name: "", email: "", subject: "", message: "" })
      )
      .catch(err => console.error(err));

  render() {
    return (
      <section className="contact-section blur">
        <div className="bg zoom" />
        <div className="contact slit">
          <h1 className="section-header">
            C<span className="flicker">o</span>ntact Me
          </h1>
          <form id="contact-form" className="contact-form">
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
            <Tooltip padding={2} fontSize="1rem" content="Github">
              <Link href="https://github.com/MiguelIronHack" icon="github" />
            </Tooltip>

            <Tooltip padding={2} fontSize="1rem" content="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/miguel-angelo-bento/"
                icon="linkedin-in"
              />
            </Tooltip>

            <Tooltip padding={2} fontSize="1rem" content="Instagram">
              <Link
                href="https://www.instagram.com/cupids.trick/"
                icon="instagram"
              />
            </Tooltip>
            {/* TODO change tooltip and btn pulse */}
          </div>

          <aside className="profile-pic">
            <div className="zoom" />
          </aside>
        </div>
      </section>
    );
  }
}

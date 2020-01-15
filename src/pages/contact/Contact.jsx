import React, { Component } from "react";
import Input from "./input/Input";
import Tooltip from "react-simple-tooltip";
import { toast } from "react-toastify";
import { sendEmail } from "../../api/email";
import Link from "../../components/iconLink/IconLink";
import "./contact.scss";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 50000,
  draggable: false,
  pauseOnFocusLoss: true,
  position: "top-left",
  closeOnClick: true
});

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
    const { email, name, subject, message } = this.state;

    const validateEmail = userEmail => {
      const validator = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
      return validator.test(String(userEmail).toLowerCase());
    };

    if (!name || name.length > 29) {
      return toast.warning("Please input a valid name.");
    } else if (!validateEmail(email) || !email) {
      return toast.warning("Please input a valid email address");
    } else if (email.length > 29) {
      return toast.warning("This email is too long. Please try another one.");
    } else if (!subject || name.length > 29) {
      return toast.warning(
        "Please submit a subject. Keep it under 30 characters."
      );
    } else if (message.length < 10) {
      return toast.warning(
        "Your message should be at least 10 characters long."
      );
    } else {
      this.handleSend();
    }

    document.getElementById("contact-form").reset();
    this.setState({ name: "", email: "", subject: "", message: "" });
    toast.info("Hey there. I got your message. I'll get back to you soon!");
  };

  handleSend = () => {
    sendEmail(this.state)
      .then(() => {
        this.setState({ name: "", email: "", subject: "", message: "" });
        // toast.info("Hey there. I got your message. I'll get back to you soon!");
      })
      .catch(err => {
        toast.error(
          "Something went wrong. You can contact me directly via Linkedin."
        );
        console.error(err);
      });
  };
  render() {
    return (
      <section className="contact-section blur">
        <div className="bg zoom" />
        <div className="contact">
          <h1 className="section-header">Contact Me</h1>
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
            <button onClick={this.handleSubmit} className="btn btn-submit">
              Send
            </button>
          </form>
          <div className="banners">
            <Tooltip
              color="#ddd9c3"
              radius={3}
              padding={4}
              fontSize="1rem"
              content="Github"
            >
              <Link
                href="https://github.com/Miguel-Bento-Github"
                icon="github"
              />
            </Tooltip>

            <Tooltip
              color="#ddd9c3"
              radius={3}
              padding={4}
              fontSize="1rem"
              content="Linkedin"
            >
              <Link
                href="https://www.linkedin.com/in/miguel-angelo-bento/"
                icon="linkedin-in"
              />
            </Tooltip>

            <Tooltip
              color="#ddd9c3"
              radius={3}
              padding={2}
              fontSize="1rem"
              content="Instagram"
            >
              <Link
                href="https://www.instagram.com/cupids.trick/"
                icon="instagram"
              />
            </Tooltip>
          </div>

          <aside className="profile-pic">
            <div className="zoom" />
          </aside>
        </div>
      </section>
    );
  }
}

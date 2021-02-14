import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail } from '../../api/email';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedIn.svg';
import Link from '../../components/iconLink/IconLink';
import './contact.scss';
import Input from './input/Input';

toast.configure({
  autoClose: 50000,
  draggable: false,
  pauseOnFocusLoss: true,
  position: 'top-left',
  closeOnClick: true,
});

export default function Contact() {
  const [inputs, setInputs] = useState({});
  const ref = {
    name: useRef(),
    email: useRef(),
    subject: useRef(),
    message: useRef(),
  };

  const handleChange = ({ current }) => {
    setInputs(prevState => ({
      ...prevState,
      [current.id]: current.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validateEmail = userEmail => {
      const validator = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
      return validator.test(String(userEmail).toLowerCase());
    };

    if (!inputs.name || inputs.name.length > 29) {
      toast.info('Please input a valid name.');
      return null;
    } else if (!validateEmail(inputs.email) || !inputs.email) {
      toast.info('Please input a valid email address');
      return null;
    } else if (inputs.email.length > 29) {
      toast.info('This email is too long. Please try another one.');
      return null;
    } else if (!inputs.subject || inputs.name.length > 29) {
      toast.info('Please submit a subject. Keep it under 30 characters.');
      return null;
    } else if (inputs.message.length < 10) {
      toast.info('Your message should be at least 10 characters long.');
      return null;
    } else {
      postEmail();
    }
  };

  const postEmail = async () => {
    try {
      const res = await sendEmail(inputs);
      const data = JSON.parse(res.config.data);
      toast.info(`Hey there ${data.name}. I got your message. I'll get back to you soon!`);
    } catch (error) {
      toast.error('Something went wrong. You can contact me directly via Linkedin.');
    }
  };

  const links = [
    {
      className: 'banner-icon',
      href: 'https://www.linkedin.com/in/miguel-angelo-bento/',
      Icon: LinkedIn,
    },
    {
      className: 'banner-icon',
      href: 'https://www.instagram.com/cupids.trick/',
      Icon: Instagram,
    },
    {
      className: 'banner-icon',
      href: 'https://github.com/Miguel-Bento-Github',
      Icon: Github,
    },
  ];

  const Banner = links.map(({ className, href, Icon }) => (
    <Link key={href} className={className} href={href} icon={Icon} />
  ));

  return (
    <>
      <div className="slit">
        <div className="bg zoom" />
        <section id="section" className="contact-section page">
          <div className="contact">
            <h1 className="section-header">Contact me</h1>
            <form onSubmit={handleSubmit} id="contact-form" className="contact-form">
              <div className="contact-form-user-info">
                <Input
                  ref={ref.name}
                  pHolder="name"
                  handleChange={() => handleChange(ref.name)}
                  value={inputs.name}
                />
                <Input
                  ref={ref.email}
                  value={inputs.email}
                  pHolder="email"
                  handleChange={() => handleChange(ref.email)}
                />
              </div>
              <Input
                ref={ref.subject}
                value={inputs.subject}
                pHolder="subject"
                handleChange={() => handleChange(ref.subject)}
              />
              <Input
                ref={ref.message}
                value={inputs.message}
                pHolder="message"
                handleChange={() => handleChange(ref.message)}
              />

              <input type="submit" className="btn btn-submit" value="send" />
            </form>
            <div className="banner-container">{Banner}</div>
          </div>
        </section>
      </div>
    </>
  );
}

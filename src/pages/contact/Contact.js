import React, { useState } from "react";
import "./contact.css";

const Contact = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" ref={contactRef}>
      <p className="contact-title">
        Get in <span className="touch">touch</span>
      </p>
      <p className="another">
        You have a question for me, or want to work together?
        <br />
        Send me a message and I will answer as soon as possible.
      </p>
      <div className="contact-container">
        <div className="contact-wrapper">
          <p>
            <input
              className="name-textarea"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </p>
          <p>
            <input
              className="name-textarea"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </p>
          <p>
            <input
              className="name-textarea"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </p>
        </div>
        <div className="textarea-box">
          <textarea
            rows="10"
            cols="120"
            className="message-textarea"
            name="message"
            placeholder="Message"
            required="required"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>

        <div className="send-btn">
          <button className="btn" onClick={resetFields}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

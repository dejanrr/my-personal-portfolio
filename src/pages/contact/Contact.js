import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <p className="contact-title">
        Get in <span className="touch">touch</span>
      </p>
      <div className="contact-container">
        <div className="up">
          <p>
            <input className="name-textarea" placeholder="Name" />
          </p>
          <p>
            <input className="name-textarea" placeholder="Last name" />
          </p>
          <p>
            <input className="name-textarea" placeholder="E-mail" />
          </p>
        </div>
        <div className="down">
          <textarea
            rows="10"
            cols="120"
            className="message-textarea"
            name="message"
            placeholder="Message"
            required="required"
          />
        </div>

        <div className="send-btn">
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

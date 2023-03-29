import React, { useRef, FormEvent } from "react";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";
import { Button, Link } from "../styled/Button";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("Portifolio", "default", form.current!, "rwzAX73RECzs-1fu5")
      .then((error) => {
        console.log(error.text);
      });
    const target = e.target as HTMLFormElement;
    target!.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gabrielsnowye@gmail.com</h5>
            <Link
              aria-label="Send me an email"
              href="mailto:gabrielsnowye@gmail.com"
            >
              Send a Message
            </Link>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Gabriel Trzimajewski</h5>
            <Link
              aria-label="Linkedin Profile"
              href="https://www.linkedin.com/in/gabriel-trzimajewski/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </Link>
          </article>
        </div>
        <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <Button type="submit" color="primary">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

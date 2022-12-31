import React from "react";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillMail, AiFillMessage } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  return (
    <Wrapper id="contact" className="section__padding flex__center">
      <h2>
        <span className="gradient-text primary-gradient-text">Contact Us</span>{" "}
        now to <span className="gradient-text primary-gradient-text">Book</span>{" "}
        your <span className="gradient-text primary-gradient-text">Clean</span>
      </h2>
      <div className="row">
        <div className="left">
          <form>
            <div>
              <span className="ico">
                <FaUserAlt />
              </span>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
              <span className="ico">
                <AiFillMail />
              </span>
              <input type="email" name="email" id="email" placeholder="email" />
            </div>
            <div>
              <span className="ico">
                <AiFillMessage />
              </span>
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="message"
              />
            </div>
            <button className="btn">Send Message</button>
          </form>
          <ul className="social-links">
            <li>
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="contact-content">
            <p>
              <span className="icon">
                <FaMapMarkerAlt />
              </span>
              <span>188 Hobart Road, Kings Meadows, TAS</span>
            </p>
            <p>
              <span className="icon">
                <BsTelephoneFill />
              </span>
              <span>0426563690</span>
            </p>
            <p>
              <span className="icon">
                <AiFillMail />
              </span>
              <span>amatas@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  flex-direction: column;

  h2 {
    text-align: center;
  }

  .row {
    margin: 2rem 0;
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    flex-wrap: wrap-reverse;
    gap: 1rem;
  }

  .left {
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;

    div {
      position: relative;
      margin: 1rem 0;

      input {
        position: absolute;
      }

      .ico {
        position: absolute;
        font-size: 1.5rem;
        color: var(--primary-900);
        top: 5px;
        left: 5px;
      }
    }
  }

  form input,
  form textarea {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: var(--primary-900);
    font-size: 1.2rem;
    border-bottom: 2px solid var(--primary-500);
    padding: 10px 5px 10px 50px;
    transition: var(--transition-300);

    :hover,
    :focus {
      border-bottom: 2px solid var(--primary-900);
      cursor: pointer;
      box-shadow: 0 0 5px var(--primary-600), 0 0 8px var(--primary-700),
        0 0 10px var(--primary-800);
    }

    ::placeholder {
      color: var(--grey-500);
      text-transform: capitalize;
      font-family: var(--font-body);
      letter-spacing: 2px;
    }
  }

  .social-links {
    margin-top: 2rem;
    display: flex;
    gap: 3rem;
    font-size: 2rem;
  }

  .social-links a {
    color: var(--primary-900);
    transition: var(--transition-300);
  }

  .facebook:hover {
    color: var(--color-facebook);
  }

  .instagram:hover {
    color: var(--color-instagram);
  }

  .twitter:hover {
    color: var(--color-twitter);
  }

  .right {
    flex: 1;
    margin-left: 3rem;
  }

  .contact-content p {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-900);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: var(--primary-500);
  }

  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;

import React, { useContext } from "react";
import { Navbar } from "../components";
import styled from "styled-components";
import { banner, bannerDark } from "../assets/images";
import headerImg from "../assets/images/header.jpg";
import ThemeContext from "../ThemeContext";

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper theme={theme.theme}>
      <Navbar />
      <section id="home" className="flex__center">
        <div className="left slide-right">
          <h1>
            <span className="gradient-text primary-gradient-text">
              trusted professionals{" "}
            </span>
            for your home. We clean{" "}
            <span className="gradient-text primary-gradient-text">
              The best
            </span>
          </h1>
          <p>
            It is unquestionably worthwhile to choose Amatas Cleaning Service
            Tasmania! Amatas Cleaning Company provides this high-quality
            cleaning service in Tamania, and a large number of favourable
            customer testimonials attest to the company's stellar reputation.
          </p>
          <div className="buttons">
            <a href="#contact" className="btn primary-gradient-bg">
              Book A Clean
            </a>
            <a href="#services" className="btn">
              All Services
            </a>
          </div>
        </div>
        <div className="right slide-left">
          <img
            src={bannerDark}
            // src={theme.theme === "theme-light" ? banner : bannerDark}
            alt="cleaning"
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 2rem 4rem;
  width: 100%;
  background: ${(props) =>
      props.theme === "theme-light"
        ? "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"
        : "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"},
    url(${headerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 50px 10px var(--primary-900);
  section {
    margin-top: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    h1 {
      color: var(--primary-900);
    }
  }

  a,
  p {
    color: var(--color-white);
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    min-width: 400px;
  }

  .right img {
    width: 100%;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media (max-width: 1200px) {
    height: unset;
  }

  @media (max-width: 600px) {
    padding: 2rem;

    .right {
      min-width: 200px;
      width: 100%;
    }
  }
`;

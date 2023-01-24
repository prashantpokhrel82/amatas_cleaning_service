import React, { useState } from "react";
import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import { AiOutlineAlignRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const NavLinks = ({ toggleMenu, setToggleMenu }) => (
  <>
    <li>
      <a
        href="#"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#about"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        About Us
      </a>
    </li>
    <li>
      <a
        href="#services"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#contact"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        Contact
      </a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Wrapper className="flex__center">
      <h1>Amatas Cleaning</h1>

      <div className="nav">
        <ThemeToggler />
        <ul className="desktop-menu">
          <NavLinks />
        </ul>
        <AiOutlineAlignRight
          className="hamburger"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
        {toggleMenu && (
          <div className="mobile-menu slide-bottom">
            <RxCross2
              className="hamburger-close"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
            <NavLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .desktop-menu li:last-child {
    background: var(--primary-500);
    border-radius: 2rem;
    padding: 0.5rem 1.2rem;
    font-weight: 500;
    transition: var(--transition-300);
    box-shadow: 0 0 2px var(--grey-500);
  }

  .desktop-menu li:last-child:hover {
    background: var(--primary-600);
  }

  li {
    cursor: pointer;
  }

  .hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .mobile-menu {
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--primary-200);
    color: var(--primary-900);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 2rem;
    opacity: 0;
    z-index: 2;
  }

  .mobile-menu li {
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    background: var(--primary-300);
    border-radius: 2rem;
  }

  .mobile-menu li:hover {
    background: var(--primary-400);
    transition: var(--transition);
  }

  .hamburger-close {
    position: absolute;
    top: 50px;
    right: 25px;
    font-size: 2rem;
    color: var(--primary-900);
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .hamburger {
      display: block;
    }

    ul {
      display: none;
    }

    .mobile-menu {
      opacity: 1;
    }
  }

  @media (max-width: 350px) {
    .nav {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`;

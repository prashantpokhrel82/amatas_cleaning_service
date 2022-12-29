import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../ThemeContext";
import ThemeToggler from "./ThemeToggler";
import { AiOutlineAlignRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const NavLinks = () => (
  <>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </>
);

const Navbar = () => {
  const theme = useContext(ThemeContext);

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Wrapper className="flex__center">
      <h1>Amatas</h1>

      <div>
        <ThemeToggler />
        <ul>
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
            <NavLinks />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  padding: 2rem 4rem;
  justify-content: space-between;
  position: relative;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  div {
    display: flex;
    gap: 3rem;
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    color: var(--primary-500);
  }

  .hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .mobile-menu {
    padding: 2rem;
    position: absolute;
    top: -100px;
    left: 0;
    background: var(--primary-900);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 2rem;
    opacity: 0;
  }

  .mobile-menu li {
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    background: rgba(208, 230, 255, 0.2);
    border-radius: 2rem;
  }

  .mobile-menu li:hover {
    background: rgba(208, 230, 255, 0.5);
  }

  .mobile-menu a {
    color: #fff;
  }

  .hamburger-close {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 2rem;
    color: #fff;
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
`;

import React from "react";
import { Navbar } from "../components";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 100vh;
  width: 100%;
`;

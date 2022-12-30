import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper
      className="section__padding section__width flex__center"
      id="about"
    >
      <h3>
        welcome to{" "}
        <span className="gradient-text primary-gradient-text">
          amatas services
        </span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quaerat
        sequi est corrupti iste ratione, eum earum consequatur adipisci
        eligendi, non nam recusandae vitae? Exercitationem quaerat nemo ipsam
        beatae fuga harum placeat aliquid autem maxime illo animi praesentium
        nostrum nam, natus porro deleniti culpa dolores laboriosam tempore error
        provident reprehenderit?
      </p>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
`;

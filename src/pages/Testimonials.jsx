import React from "react";
import styled from "styled-components";
import { TestimonialCard, Slider } from "../components";
import { testimonialsData } from "../assets/data/testimonials";

const Testimonials = () => {
  return (
    <Wrapper>
      <h1>
        Our{" "}
        <span className="gradient-text primary-gradient-text">
          Global Clients
        </span>{" "}
        Say It Best
      </h1>
      <div className="testimonial-container">
        <div className="slide-track">
          {testimonialsData.map((testimonial) => (
            <div className="slide" key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.div`
  margin: 6rem 0 0;

  h1 {
    margin: 4rem 0;
    text-align: center;
  }

  .testimonial-container {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 2rem;
    position: relative;
    width: auto;
  }

  .slide-track {
    animation: scroll 20s linear infinite;
    display: flex;
    gap: 2rem;
    width: calc(300px * 12);
  }

  .slide {
    height: 100%;
    width: 300px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(calc(-300px * 6));
    }
  }
`;

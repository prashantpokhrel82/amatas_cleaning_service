import React from "react";
import styled from "styled-components";
import Rating from "./Rating";

const TestimonialCard = ({ name, suburb, state, rating, feedback, img }) => {
  return (
    <Wrapper>
      <div className="top">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="client-details">
          <p>
            <span className="name">{name}</span> from
          </p>
          <p className="suburb">{suburb}</p>
          <p className="state">{state}</p>
          <div className="ratings">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="feedback">{feedback}</p>
    </Wrapper>
  );
};

export default TestimonialCard;

const Wrapper = styled.article`
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  width: 300px;
  min-width: 300px;
  background: var(--primary-200);
  box-shadow: 0 0 5px var(--grey-500);
  border-radius: 1rem;
  min-height: 500px;
  transition: var(--transition-300);

  :hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px var(--primary-600), 0 0 8px var(--primary-700),
      0 0 10px var(--primary-800);
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    color: var(--primary-900);
    font-weight: 500;
  }

  .suburb {
    color: var(--primary-900);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .state {
    color: var(--primary-900);
    font-size: 1.2rem;
  }

  .ratings {
    display: flex;
    gap: 2px;
  }

  .divider {
    margin: 2rem 0;
    width: 100%;
    height: 1px;
    background: var(--grey-300);
    border-radius: 1rem;
  }

  .img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  .img img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .ratings svg {
    margin-top: 1rem;
    color: #daa520;
    font-size: 1.3rem;
  }

  @keyframes r {
    75% {
      transform: translate(-300%);
    }
    75.01% {
      transform: translate(100%);
    }
  }
`;

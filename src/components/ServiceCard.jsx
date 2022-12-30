import React from "react";
import styled from "styled-components";

const ServiceCard = ({ title, content, icon, img }) => {
  return (
    <Wrapper>
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="content">
        <h5 className="title">
          <span>{icon}</span>
          <span>{title}</span>
        </h5>
        <p className="info">{content}</p>
      </div>
    </Wrapper>
  );
};

export default ServiceCard;

const Wrapper = styled.article`
  width: 400px;
  min-width: 350px;
  padding: 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background: var(--primary-100);
  box-shadow: 0 0 5px var(--grey-500);
  border-radius: 1rem;
  transition: var(--transition-300);

  .image {
    width: 100%;
    height: 60%;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: var(--grey-100);
    border-radius: 1rem 1rem 0 0;
    transition: var(--transition-300);
  }
  .content {
    text-align: center;
    padding: 1rem;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title svg {
    margin-right: 2rem;
    font-size: 3rem;
    color: var(--primary-900);
  }

  h5 {
    color: var(--primary-900);
    font-weight: 500;
  }

  p {
    margin-top: 2rem;
    color: var(--grey-500);
    transition: var(--transition-300);
  }

  :hover {
    background: var(--primary-200);
    transform: scale(1.03);
  }

  @media (max-width: 450px) {
    width: 100%;
    min-width: 250px;

    .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    p {
      margin-top: 0;
    }
  }
`;

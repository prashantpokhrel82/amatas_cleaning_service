import React from "react";
import styled from "styled-components";
import { gurantee, happiness } from "../assets/images";

const Gurantee = () => {
  return (
    <Wrapper className="section__padding flex__center">
      <div className="content">
        <h2 className="gradient-text primary-gradient-text">
          100% Happiness Guarantee!
        </h2>
        <p>
          Your complete satisfaction is our ultimate quality benchmark. That's
          why every AMATAS service is assured with our 100% Happiness Guarantee.
          <br />
          <br />
          This means that if you are in any way dissatisfied with your service,
          we will have it amended for you - completely free!
        </p>
      </div>
      <div className="img">
        <img src={happiness} alt="happiness" />
      </div>
    </Wrapper>
  );
};

export default Gurantee;

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${gurantee});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  justify-content: flex-start;

  .img {
    width: 200px;
  }

  .img img {
    width: 100%;
  }

  .content {
    width: 40%;
  }

  h2 {
    margin-bottom: 3rem;
  }

  p {
    color: var(--color-white);
  }

  @media (max-width: 1080px) {
    flex-direction: column;

    .content {
      width: 100%;
    }
  }
`;

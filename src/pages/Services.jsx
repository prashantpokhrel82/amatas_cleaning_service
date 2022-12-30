import React from "react";
import styled from "styled-components";
import { services, otherServices } from "../assets/data/services";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <Wrapper id="services" className="flex__center">
      <h1>
        <span className="gradient-text primary-gradient-text">AMATAS</span>{" "}
        Services
      </h1>
      <div className="services-container">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      <h1>
        Moving and{" "}
        <span className="gradient-text primary-gradient-text">
          Other Services
        </span>
      </h1>
      <div className="services-container">
        {otherServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  padding: 2rem 4rem;
  flex-direction: column;
  align-items: center;

  .services-container {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 3rem;
    column-gap: 2rem;
  }

  h1 {
    margin: 4rem 0;
    text-align: center;
  }
`;

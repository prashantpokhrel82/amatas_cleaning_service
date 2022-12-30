import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  const ratings = Array.from({ length: rating }, (_, index) => index + 1);
  return (
    <>
      {ratings.map((rating) => (
        <AiTwotoneStar key={rating} />
      ))}
    </>
  );
};

export default Rating;

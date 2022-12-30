import React, { useState, useRef } from "react";
import styled from "styled-components";
import video from "../assets/videos/about.mp4";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const About = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef();
  const togglePlay = () => {
    setPlay((prevPlay) => !prevPlay);
    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <Wrapper
      className="section__padding section__width flex__center slide-up"
      id="about"
    >
      <h2>
        welcome to{" "}
        <span className="gradient-text primary-gradient-text">AMATAS</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quaerat
        sequi est corrupti iste ratione, eum earum consequatur adipisci
        eligendi, non nam recusandae vitae? Exercitationem quaerat nemo ipsam
        beatae fuga harum placeat aliquid autem maxime illo animi praesentium
        nostrum nam, natus porro deleniti culpa dolores laboriosam tempore error
        provident reprehenderit?
      </p>
      <div className="video">
        <video src={video} ref={vidRef} type="video/mp4" controls={false} />
        <div className="video-content">
          <button onClick={togglePlay}>
            {play ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  p {
    margin: 2rem 0;
  }

  .video {
    margin-top: 2rem;
    width: 100%;
    border-radius: 1.5rem;
    position: relative;
  }

  video {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
  }

  .video::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    border-radius: 1.5rem;
    transition: var(--transition-300);
    opacity: 0;
  }

  .video:hover::after {
    opacity: 1;
  }

  .video-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: var(--transition-300);
    opacity: 0;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    button > svg {
      font-size: 4rem;
      color: var(--color-white);
    }
  }

  .video:hover .video-content {
    opacity: 1;
  }

  button > svg {
    font-size: 4rem;
    color: var(--color-white);
    cursor: pointer;
  }
`;

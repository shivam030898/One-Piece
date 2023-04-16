import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/video.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;
const DarkOverkay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontxxl};
    }
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontmd};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 500;
    text-transform: capitalize;
    @media (max-width: 30em) {
      font-size: calc(5rem+8vw);
      font-size: ${(props) => props.theme.fontxs};
      margin-top: -0.5rem;
      text-align: center;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverkay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.24"
            data-scroll-speed="4"
          >
            O
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.21"
            data-scroll-speed="4"
          >
            N
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.18"
            data-scroll-speed="4"
          >
            E
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
          >
            P
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            I
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            E
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            C
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.03"
            data-scroll-speed="4"
          >
            E
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.03"
          data-scroll-speed="2"
        >
          Embark on a legendary adventure with Monkey D.
          <br /> Luffy and his fearless crew as they search for the ultimate
          treasure and battle powerful foes in the epic world of One Piece.
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;

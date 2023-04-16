import React from "react";
import styled from "styled-components";
import Luffy from "../assets/onepiece/Luffy2.jpg";
import Zoro from "../assets/onepiece/Zoro2.jpg";
import Sanji from "../assets/onepiece/Sanji2.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30rem) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
  @media (max-width: 64rem) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;
const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        One Piece is a popular Japanese manga series written and illustrated by
        Eiichiro Oda. The story is set in a world where pirates rule the seas,
        and follows the adventures of a young boy named Monkey D. Luffy, who
        gains the ability to stretch his body like rubber after eating a cursed
        fruit.
        <br />
        <br />
        Luffy sets out on a journey to become the Pirate King, and along the
        way, he gathers a diverse crew of pirates, including a swordsman, a
        navigator, a chef, a doctor, a musician, and a shipwright. Together,
        they sail through the Grand Line, encountering dangerous sea monsters,
        rival pirates, and corrupt government officials.
        <br />
        <br />
        The series is known for its unique and creative characters, intricate
        world-building, and epic battles. It also explores themes such as
        friendship, loyalty, justice, and the pursuit of one's dreams.
      </Left>
      <Right>
        <img src={Luffy} alt="About Us" />

        <img
          data-scroll
          data-scroll-speed="5"
          src={Zoro}
          alt="About Us"
          className="small-img-1"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={Sanji}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;

import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Sanji from "../assets/onepiece/Better/Sanji2.png";
import Luffy from "../assets/onepiece/Better/Luffy2.png";
import Zoro from "../assets/onepiece/Better/Zoro2.png";
import Nami from "../assets/onepiece/Better/Nami2.png";
import Robin from "../assets/onepiece/Better/Robin2.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: yellow; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 11;
  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }
  @media (max-width: 48em) {
    width: 60vw;
  }
  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
  @media (max-width: 48em) {
    display: none;
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
          //   markers: true,
        },
        ease: "none",
      });
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
            // markers: true,
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="new-arrival">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Crew History
      </Title>
      <Container ref={ScrollingRef}>
        <Product img={Luffy} title="Monkey D Luffy" />
        <Product img={Zoro} title="Zoro" />
        <Product img={Sanji} title="Sanji" />
        <Product img={Nami} title="Nami" />

        <Product img={Robin} title="Robin" />
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        Eiichiro Oda is a Japanese manga artist and the creator of the highly
        popular and long-running series, One Piece. Born in Kumamoto, Japan in
        1975.
        <br />
        <br />
        Oda started his career as a manga artist at the age of 17 and eventually
        made his debut with his one-shot manga, "Wanted!", in 1992. He went on
        to create One Piece in 1997, which has become one of the best-selling
        manga series of all time, with over 490 million copies sold worldwide as
        of 2021.
        <br />
        <br />
        Oda is known for his unique art style, intricate world-building, and
        compelling characters, and his influence on the manga industry is
        immeasurable.
      </Text>
    </Section>
  );
};

export default NewArrival;

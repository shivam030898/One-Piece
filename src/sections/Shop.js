import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Luffy from "../assets/onepiece/Luffy.png";
import Sanji from "../assets/onepiece/Sanji.png";
import Zoro from "../assets/onepiece/Zoro.png";
import Boa from "../assets/onepiece/Boa Hancock.png";
import Usop from "../assets/onepiece/Usop.png";
import Brook from "../assets/onepiece/Brook.png";
import Chopper from "../assets/onepiece/Chopper.png";
import Shanks from "../assets/onepiece/Shanks.png";
import Lucci from "../assets/onepiece/Lucci.png";
import Mihawk from "../assets/onepiece/Mihawk.png";
import Bart from "../assets/onepiece/Bartemoleu.png";
import Buggy from "../assets/onepiece/Buggy.png";
import Smoker from "../assets/onepiece/Smoker.png";
import Sabo from "../assets/onepiece/Sabo.png";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    width: 5rem;
    margin: 0.2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    font-weight: 500;
    width: fit-content;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 30em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          // markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Characters
      </Title>
      <Left>
        <p>
          Attention One Piece fans! We are excited to announce the arrival of
          new One Piece merchandise in our store! Our latest collection features
          a wide range of products, including t-shirts, hoodies, posters, phone
          cases, and keychains, all featuring your favorite characters from the
          beloved manga and anime series.
          <br />
          <br />
          From the fierce Monkey D. Luffy to the cunning Nami and the powerful
          Whitebeard, our new One Piece merchandise has something for every fan.
          Our products.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={Luffy} title="Monkey D Luffy" />
        <Product img={Zoro} title="Zoro" />
        <Product img={Bart} title="Bartemoleu" />
        <Product img={Chopper} title="Chopper" />
        <Product img={Usop} title="Ussop" />
        <Product img={Boa} title="Boa Hancock" />
        <Product img={Brook} title="Brook" />
        <Product img={Mihawk} title="Mihwak" />
        <Product img={Shanks} title="Shanks" />
        <Product img={Lucci} title="Lucci" />
        <Product img={Sanji} title="Sanji" />
        <Product img={Buggy} title="Buggy" />
        <Product img={Smoker} title="Smoker" />
        <Product img={Sabo} title="Sabo" />
      </Right>
    </Section>
  );
};

export default Shop;

import React from "react";
import styled from "styled-components";
import { delay, motion, stagger } from "framer-motion";
export default function TimeLIne() {
  const timeLineVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 5,
        duration: 1,
      },
    },
  };
  // Define the 'initial' variable

  return (
    <motion.div className="flex flex-col items-center justify-center text-rose-400">
      <PStyled
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 5,
            duration: 1,
          },
        }}
      >
        05.10.2024 @ 2PM
      </PStyled>
      <AStyled
        href="https://g.co/kgs/XZQirzx"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 6,
            duration: 1,
          },
        }}
      >
        Aspen Oasis Airbnb
      </AStyled>
      <motion.button
        className="btn glass"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 7,
            duration: 1,
          },
        }}
      >
        See TimeLine
      </motion.button>
    </motion.div>
  );
}
const PStyled = styled(motion.p)`
  font-size: 2.2rem;
  font-family: "Novable";
  padding: 1rem;
`;
const AStyled = styled(motion.a)`
  font-size: 1.7rem;
  font-family: "Novable";
  padding: 1rem;
`;

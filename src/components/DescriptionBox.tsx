import React from "react";
import WeddingIcon from "../assets/WeddingIcon";
import { motion } from "framer-motion";
import styled from "styled-components"; // Add this line
export default function DescriptionBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 3,
        },
      }}
      className="w-[50%] flex flex-col items-center justify-center mx-auto p-12 -m-6 border shadow-xl rounded-lg bg-rose-300/15"
    >
      <WeddingIcon className="w-20 h-20" />
      <PStyled className=" text-xl mx-auto ">
        We are thrilled to share that on October 5th, 2024, we’ll be celebrating
        the start of our love journey together.
      </PStyled>
    </motion.div>
  );
}
const PStyled = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 2.5;
  font-family: "NovableBold";
  color: black;
  text-transform: uppercase;
  text-align: center;
`;

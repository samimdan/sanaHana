import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

export default function Heart(props: SVGMotionProps<SVGSVGElement>) {
  const heartVariants = {
    initial: {
      pathLength: 0,
      pathOffset: 1,
      fill: "none",
    },
    animate: {
      pathLength: 1,
      pathOffset: 0,

      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 361.7 344.3"
      enable-background="new 0 0 361.7 344.3"
      xmlSpace="preserve"
      {...props}
    >
      <motion.path
        fill="none"
        stroke="red"
        strokeWidth="5"
        strokeLinecap="round"
        strokeMiterlimit="10"
        variants={heartVariants}
        initial="initial"
        animate="animate"
        d="M182.2,318.1L46.3,182.2
	C-42.1,93.8,93.8-42.1,182.2,46.3c84.5-84.5,220.4,51.4,135.9,135.9L182.2,318.1z"
      />
    </motion.svg>
  );
}

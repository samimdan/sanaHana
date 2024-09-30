import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import first from "../assets/image/gallery/IMG_20240902_222236_858.jpg";
import second from "../assets/image/gallery/IMG_20240902_222240_213-1.jpg";
import thrid from "../assets/image/gallery/IMG_20240902_222312_503.jpg";
import fourth from "../assets/image/gallery/IMG_20240902_222408_443.jpg";
import fifth from "../assets/image/gallery/IMG_20240902_222423_822.jpg";
import sixth from "../assets/image/gallery/IMG_20240902_222453_401.jpg";
import seventh from "../assets/image/gallery/IMG_20240902_222512_835.jpg";
import eighth from "../assets/image/gallery/IMG_20240902_222525_142.jpg";
import ninth from "../assets/image/gallery/IMG_20240902_222547_672.jpg";
import tenth from "../assets/image/gallery/IMG_20240902_222837_814.jpg";
import eleventh from "../assets/image/gallery/IMG_20240907_231620_475.jpg";
import twelveth from "../assets/image/gallery/IMG_20240907_231643_612.jpg";
import thirteenth from "../assets/image/gallery/IMG_20240907_231655_509.jpg";
import fourteenth from "../assets/image/gallery/IMG_20240908_081821_570.jpg";
import sixteenth from "../assets/image/gallery/IMG_20240908_081830_231.jpg";
import seventy from "../assets/image/gallery/IMG_20240902_222408_443.jpg";

export default function Gallery() {
  return (
    <>
      <StyledDiv>
        <p>Our Gallery</p>
        <section>
          Cherished Moments: A Glimpse Into Our Journey Together.
        </section>
      </StyledDiv>
      <LightGallery
        elementClassNames="gallery-grid  "
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href={first}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img1"
            src={first}
          />
        </a>
        <a href={second}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img2"
            src={second}
          />
        </a>
        <a href={thrid}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5, zIndex: 2 }}
            alt="img3"
            className="hover:z-10"
            src={thrid}
          />
        </a>
        <a href={fourth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={fourth}
          />
        </a>
        <a href={fifth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={fifth}
          />
        </a>
        <a href={sixth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={sixth}
          />
        </a>
        <a href={seventh}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={seventh}
          />
        </a>
        <a href={eighth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={eighth}
          />
        </a>
        <a href={ninth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={ninth}
          />
        </a>
        <a href={tenth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={tenth}
          />
        </a>
        <a href={eleventh}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={eleventh}
          />
        </a>
        <a href={twelveth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={twelveth}
          />
        </a>
        <a href={thirteenth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={thirteenth}
          />
        </a>
        <a href={fourteenth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={fourteenth}
          />
        </a>
        <a href={sixteenth}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={sixteenth}
          />
        </a>
        <a href={seventy}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="img3"
            src={seventy}
          />
        </a>
      </LightGallery>
    </>
  );
}
const StyledDiv = styled(motion.div)`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    font-size: 3rem;
    font-family: "NovableBold";
    text-align: center;
    margin-bottom: 2rem;
  }
  section {
    font-size: 1.4rem;
    font-family: "Novable";
    text-align: center;
    width: 80%;
  }
`;

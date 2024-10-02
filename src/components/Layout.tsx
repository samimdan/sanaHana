import React from "react";

import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Heart from "./heart";
import styled from "styled-components";
import TimeLIne from "./TimeLIne";
import DescriptionBox from "./DescriptionBox";
import Gallery from "./Gallery";
import TimesLine from "./timesLine";
import EamilForm from "./EmailForm";
import EmailForm from "./EmailForm";
export default function Layout() {
  const [strokewidth, setStrokeWidth] = React.useState(10);
  const [windowDimention, setWindowDimention] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (windowDimention.width < 700) {
        setStrokeWidth(20);
      }
    };
  }, []);
  return (
    <div>
      <div className="background w-full h-screen flex flex-col">
        <NavBar />
        <div className="flex justify-center items-center w-full ">
          <Section>Sana</Section>
          <Heart width={strokewidth} className="w-[15%]  px-3 " />
          <Section>Moji</Section>
        </div>
        <TimeLIne />
      </div>
      <DescriptionBox />
      <Gallery />
      <TimesLine />
      <EmailForm />
    </div>
  );
}

const Section = styled.section`
  font-size: 4rem;
  color: white;
  font-family: "Novable";
`;

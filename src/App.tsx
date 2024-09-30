import BackGround from "./components/backGround";
import NavBar from "./components/NavBar";
import "./App.css";
import Heart from "./components/heart";
import styled from "styled-components";
import TimeLIne from "./components/TimeLIne";
import DescriptionBox from "./components/DescriptionBox";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
      <div className="background w-full h-screen flex flex-col">
        <NavBar />
        <div className="flex justify-center items-center w-full ">
          <Section>Sana</Section>
          <Heart className="w-[15%] pt-24 px-3 " />
          <Section>Moji</Section>
        </div>
        <TimeLIne />
      </div>
      <DescriptionBox />
      <Gallery />
    </>
  );
}

export default App;
const Section = styled.section`
  font-size: 4rem;
  color: white;
  font-family: "Novable";
`;

import React from "react";
import craft from "../assets/image/craft.jpg";
import styled from "styled-components";
import Dinner from "../assets/image/dinner.jpg";
import Dance from "../assets/image/dance.jpg";
export default function TimesLine() {
  return (
    <>
      <p className="font-[Novable] text-[3rem] w-[80%] mt-9 mx-auto border-t flex justify-center">
        Time Line
      </p>
      <ul className="timeline pt-10 md:w-[80%] md:mx-auto timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-[NovableBold] text-[2rem]  pb-2 italic">
              4:40
            </time>
            <div className="card bg-base-100 w-[34rem] shadow-xl">
              <figure>
                <img src={craft} alt="Shoes" />
              </figure>
              <div className="card-body">
                <StyledH1 className="card-title">Recieption</StyledH1>
                <StyledP>
                  Our Hana day begins with the arrival of our cherished family
                  and friends. As you step into the venue, you’ll be greeted
                  with warmth and joy, surrounded by love and excitement. This
                  is the start of a magical day where we’ll create beautiful
                  memories together.
                </StyledP>
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end border !rounded-xl mb-10">
            <time className="font-[NovableBold] text-[2rem]  p-2 italic">
              5:00
            </time>
            <div className="card bg-base-100 w-[34rem] shadow-xl">
              <div className="card-body">
                <StyledH1 className="card-title">Supper </StyledH1>
                <StyledP>Supper Time !</StyledP>
              </div>
              <figure>
                <img src={Dinner} alt="Shoes" />
              </figure>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end border rounded-xl">
            <time className="font-[NovableBold] text-[2rem]  p-4 italic">
              6:00 - 10:00
            </time>
            <div className="card bg-base-100 w-[34rem] shadow-xl">
              <div className="card-body">
                <StyledH1 className="card-title">Dance </StyledH1>
                <StyledP>Dancing Time !</StyledP>
              </div>
              <figure>
                <img src={Dance} alt="Shoes" />
              </figure>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
}
const StyledP = styled.p`
  font-size: 1.3rem;
  font-family: "NovableBold";
  text-align: left;
`;
const StyledH1 = styled.h1`
  font-size: 2rem;
  font-family: "Novable";
  text-align: center;
`;

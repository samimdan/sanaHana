import React from "react";
import SanaMoji from "../assets/SanaMoji";
export default function NavBar() {
  return (
    <div className="w-full mx-auto  ">
      <SanaMoji />
      <ul className="w-full flex gap-16 text-white  justify-center ">
        <li>HOME</li>
        <li>GALLERY</li>
        <li>OUR STORY</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

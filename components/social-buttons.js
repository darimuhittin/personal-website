import Image from "next/image";
import React from "react";
import LinkedinSvg from "../public/icons/linkedin";
import { SocialIcon } from "react-social-icons";
const SocialButtons = () => {
  return (
    <div className="fixed space-x-4 bottom-2 md:bottom-auto md:left-2 md:top-1/2 md:-translate-y-1/2 flex md:flex-col bg-white rounded-full bg-opacity-70  py-2 px-4 md:py-4 md:px-2 md:space-y-4 md:space-x-0 ">
      <SocialIcon url="https://www.linkedin.com/in/darimuhittin/"/>
      <SocialIcon url="https://github.com/darimuhittin"/>
    </div>
  );
};

export default SocialButtons;

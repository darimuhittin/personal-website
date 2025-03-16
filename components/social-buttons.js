'use client';

import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialButtons = ({ className }) => {
  return (
    <div className={`flex space-x-4 transition-all duration-300 ${className || ''}`}>
      <SocialIcon
        url="https://www.linkedin.com/in/darimuhittin/"
        network="linkedin"
        style={{ height: 40, width: 40 }}
        bgColor="transparent"
        fgColor="currentColor"
        className="text-current hover:text-purple-400 transition-all duration-300 transform hover:scale-110 cursor-pointer"
      />
      <SocialIcon
        url="https://github.com/darimuhittin"
        network="github"
        style={{ height: 40, width: 40 }}
        bgColor="transparent"
        fgColor="currentColor"
        className="text-current hover:text-purple-400 transition-all duration-300 transform hover:scale-110 cursor-pointer"
      />
    </div>
  );
};

export default SocialButtons;

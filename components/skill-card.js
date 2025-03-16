"use client";

import React from "react";
import Image from "next/image";

const otherIcons = {
  expo: "/skill-icons/expo.png",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "react-native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
};

const SkillCard = ({ skill, percentage }) => {
  // Function to determine the color based on percentage
  const getProgressColor = (percent) => {
    if (percent >= 90) return "bg-purple-500";
    if (percent >= 75) return "bg-purple-400";
    if (percent >= 60) return "bg-indigo-500";
    if (percent >= 40) return "bg-indigo-400";
    return "bg-blue-500";
  };

  return (
    <div className="flex items-center p-3 rounded-lg transition-all hover:bg-gray-700/50">
      <div className="w-12 h-12 relative flex-shrink-0 bg-gray-700 rounded-lg p-2 flex items-center justify-center mr-4">
        <Image
          src={
            otherIcons[skill] ||
            `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`
          }
          width={40}
          height={40}
          className="object-contain"
          alt={`An icon image for technology ${skill}`}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h6 className="text-sm font-medium text-gray-200 capitalize">
            {skill}
          </h6>
          <span className="text-xs font-medium text-gray-400">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProgressColor(percentage)}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

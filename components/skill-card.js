'use client';

import React from "react";
import Image from "next/image";

const skillIconClassNames = {
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "c#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css/css-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  pug: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pug/pug-original.svg",
  babel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
  webpack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  tailwind: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
  qt: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  "react-native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  mssql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
};

const otherIcons = {
  "scikit-learn": "/scikit-learn.svg",
  postman: "/postman.svg",
};

const SkillCard = ({ skill, percentage }) => {
  // Function to determine the color based on percentage
  const getProgressColor = (percent) => {
    if (percent >= 90) return 'bg-purple-500';
    if (percent >= 75) return 'bg-purple-400';
    if (percent >= 60) return 'bg-indigo-500';
    if (percent >= 40) return 'bg-indigo-400';
    return 'bg-blue-500';
  };

  return (
    <div className="flex items-center p-3 rounded-lg transition-all hover:bg-gray-700/50">
      <div className="w-12 h-12 relative flex-shrink-0 bg-gray-700 rounded-lg p-2 flex items-center justify-center mr-4">
        <Image
          src={
            skillIconClassNames[skill] ||
            otherIcons[skill] ||
            `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`
          }
          alt={skill}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h6 className="text-sm font-medium text-gray-200 capitalize">{skill}</h6>
          <span className="text-xs font-medium text-gray-400">{percentage}%</span>
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

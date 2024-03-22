import React from "react";
import Image from "next/image";
const skillIconClassNames = {
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "c++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "c#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css/css-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  pug: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pug/pug-original.svg",
  babel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
  webpack:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  tailwind:
    "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
  qt: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nginx:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  "react-native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  mssql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
};

const otherIcons = {
  "scikit-learn": "/scikit-learn.svg",
  postman: "/postman.svg",
};
const SkillCard = ({ skill, percentage }) => {
  return (
    <div className="space-y-2 flex flex-col items-center text-center">
      <div className="w-10 h-10 relative">
        <Image
          src={
            skillIconClassNames[skill] ||
            otherIcons[skill] ||
            `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`
          }
          alt={skill}
          layout="fill"
        />
      </div>
      <div>
        <h6 className="text-md">{skill.toUpperCase()}</h6>
      </div>
      {/* progress bar */}
      <div className="bg-first w-4/5 h-2 rounded-full flex">
        {/* percentage */}
        <div
          className="bg-green-200 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {percentage && <div className="text-xs">%{percentage}</div>}
    </div>
  );
};

export default SkillCard;

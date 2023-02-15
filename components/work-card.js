import Image from "next/image";
import React from "react";
const WorkCard = ({
  title,
  icon,
  summary,
  children,
  address,
  iconWidth,
  iconHeight,
}) => {
  return (
    <div className="my-4 bg-second px-4 py-4 rounded-md mx-4 flex flex-col items-center space-y-4 bg-opacity-70">
      <div>
        <h4 className="text-third text-2xl font-extrabold">{title}</h4>
        {address && (
          <h5 className="text-third text-base font-extrabold">{address}</h5>
        )}
      </div>
      <div className={`relative w-44 h-24`}>
        <Image src={icon} alt={title} layout="fill" objectFit="contain" />
      </div>
      <p className="text-left">{children}</p>
    </div>
  );
};

export default WorkCard;

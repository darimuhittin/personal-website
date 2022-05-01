import React from "react";

const SkillCardContainer = ({ children, title }) => {
  return (
    <div className="my-4 bg-second px-4 py-4 rounded-md mx-4">
      <h4 className="text-third text-2xl font-extrabold">{title}</h4>
      <div className="grid grid-cols-3 sm:grid-cols-4 my-10 gap-y-10">
        {children}
      </div>

    </div>
  );
};

export default SkillCardContainer;

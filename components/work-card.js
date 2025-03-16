'use client';

import Image from "next/image";
import React from "react";

const WorkCard = ({
  title,
  icon,
  summary,
  children,
  address,
  iconWidth = 60,
  iconHeight = 60,
}) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1 border border-gray-700">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center mr-4">
            {icon ? (
              <Image
                src={icon}
                alt={title}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{address}</p>
          </div>
        </div>
        <p className="text-gray-300">{children}</p>
      </div>
    </div>
  );
};

export default WorkCard;


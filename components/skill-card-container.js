'use client';

import React from "react";

export default function SkillCardContainer({ title, children }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

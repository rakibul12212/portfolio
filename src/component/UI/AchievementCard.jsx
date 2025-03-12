import { AchievementData } from "@/data/AchievementData";
import React from "react";

const AchievementCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 py-8">
      {AchievementData.map(({ id, title, year, description }) => (
        <div
          key={id}
          className="border-b-1 border-purple-700 rounded-md bg-gradient-to-r from-purple-300 to-blue-900"
        >
          <div className="bg-neutral-800 shadow-md rounded-md p-5 flex flex-col text-left gap-4 hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-lg font semibold text-neutral-400">{year}</p>
            <p className="text-sm text-neutral-400 max-w-full md:max-w-[400px]">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementCard;

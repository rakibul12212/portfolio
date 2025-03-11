import { ServiceData } from "@/data/ServiceData";
import { getServiceIcon } from "@/utils/getServiceIcon";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {ServiceData.map(({ number, icon, title, description }) => {
        const Icon = getServiceIcon(icon);
        return (
          <div
            key={number}
            className="border-b-1 border-purple-700 rounded-md bg-gradient-to-r from-purple-300 to-blue-900"
          >
            <div className="bg-neutral-800 shadow-md rounded-md p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300">
              {/* Number */}
              <p className="text-white text-2xl md:text-3xl font-semibold">
                {number}/
              </p>

              {/* Title + Icon */}

              <div className="flex items-center gap-2">
                {Icon && <Icon className="text-2xl md:text-3xl text-white" />}
                <span className="text-xl md:text-2xl font-semibold text-white">
                  {title}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-400 max-w-full md:max-w-[400px]">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;

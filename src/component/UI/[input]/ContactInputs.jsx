import React from "react";
import { BsDot } from "react-icons/bs";

const ContactInputs = () => {
  return (
    <div class=" bg-black  flex items-center ">
      <form class="w-full max-w-8xl space-y-4">
        <div class="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full md:w-1/2 bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-Mail"
            class="w-full md:w-1/2 bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          class="w-full bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none"
        />
        <textarea
          rows="6"
          placeholder="Message"
          class="w-full bg-[#141618] text-gray-300 placeholder-gray-400 p-4 rounded-lg focus:outline-none resize-none"
        ></textarea>

        <button className="group bg-neutral-700 text-white px-3 py-1 rounded-full flex items-center  hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform group-hover:scale-110">
          <span className="relative overflow-hidden">
            <span className="block font-semibold transition-all duration-300 group-hover:font-semibold translate-y-0 group-hover:-translate-y-[100%]">
              SEND MASSAGE
            </span>
            <span className="absolute top-0 left-0 w-full block font-semibold translate-y-full group-hover:translate-y-0 transition-all duration-300">
              SEND MASSAGE
            </span>
          </span>
          <span className="transition-all duration-300 transform group-hover:scale-200 group-hover:text-neutral-500">
            <BsDot size={30} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactInputs;

"use client";
import { FaRegCircle } from "react-icons/fa";
import Container from "../../[container]/Container";
import AchievementCard from "../../[card]/AchievementCard";

const Achievements = () => {
  return (
    <Container className="px-0 md:px-20 pt-20">
      {/* head */}
      <div>
        <div>
          <div className="flex items-center gap-x-2 text-neutral-400 pb-2">
            <span>
              <FaRegCircle size={12} />
            </span>
            <p className="text-sm sm:text-base font-semibold">ACHIEVEMENTS</p>
          </div>

          {/* Title */}
          <div>
            <p className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              Awa
              <span className=" text-3xl sm:text-4xl md:text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-950 bg-clip-text text-transparent">
                rds
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* main */}
      <div>
        <AchievementCard />
      </div>
    </Container>
  );
};

export default Achievements;

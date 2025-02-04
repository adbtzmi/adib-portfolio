"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Completed Courses",
    value: "10",
  },
  {
    metric: "Projects",
    value: "8",
  },
  {
    metric: "Certifications",
    value: "3",
  },
  {
    metric: "Years of Study",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-gray-800 p-6 rounded-lg"
            >
              <AnimatedNumbers
                animateToNumber={parseInt(achievement.value)}
                fontStyle={{ fontSize: 40, color: "white" }}
              />
              <p className="text-white mt-2">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-2">
        <div>
          <h4 className="font-semibold text-custom3 mb-1">Data & Analytics</h4>
          <ul className="list-disc pl-4 mb-3">
            <li>SQL & Microsoft SQL Server</li>
            <li>SSIS & ETL Pipelines</li>
            <li>Data Warehousing & Mining</li>
            <li>Tableau & Power BI</li>
            <li>Python & R</li>
            <li>Microsoft Excel</li>
          </ul>
          <h4 className="font-semibold text-custom3 mb-1">Design</h4>
          <ul className="list-disc pl-4">
            <li>Adobe Photoshop & Illustrator</li>
            <li>Figma & Canva</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-custom3 mb-1">Programming & Dev</h4>
          <ul className="list-disc pl-4 mb-3">
            <li>JavaScript & React.js / Next.js</li>
            <li>React Native</li>
            <li>Laravel & PHP</li>
            <li>Java & C</li>
            <li>HTML, CSS, Tailwind, Bootstrap</li>
          </ul>
          <h4 className="font-semibold text-custom3 mb-1">Tools</h4>
          <ul className="list-disc pl-4">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 ml-2 space-y-2">
        <li>
          <span className="font-semibold">Bachelor of Information Technology</span>
          <br />
          International Islamic University of Malaysia (IIUM)
          <br />
          Specialization: Business Intelligence & Information Science
          <br />
          CGPA: 3.76 | 2022 – 2026
        </li>
        <li>
          <span className="font-semibold">Foundation of Engineering & Computer Science</span>
          <br />
          Centre for Foundation Studies, IIUM
          <br />
          CGPA: 3.45 | 2021 – 2022
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ml-2 space-y-1">
        <li>Data Fundamentals – IBM (Dec 2025)</li>
        <li>CCNA: Introduction to Networks – Cisco (Mar 2024)</li>
        <li>Responsive Web Design – freeCodeCamp (Nov 2023)</li>
        <li>Java Fundamentals – Oracle (Aug 2023)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} className="rounded-lg" alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello, I&apos;m Adib — a final-year Bachelor of Information Technology
            graduate from IIUM, specializing in Business Intelligence and Information
            Science. I&apos;m passionate about data analysis, data visualization, and
            building practical digital solutions. I have hands-on experience developing
            applications using React Native and Laravel, and applying analytical
            techniques to support data-driven decisions. I also freelance as a graphic
            designer, creating jersey sublimation graphics and marketing materials.
            Currently an intern, I&apos;m motivated, fast-learning, and eager to gain
            real industry experience.
          </p>
          <div className="flex flex-row justify-between mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

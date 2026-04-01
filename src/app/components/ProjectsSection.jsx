"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "i-Falah Finance Management App",
    description:
      "Final Year Project — Personal finance app with real-time tracking, Firebase dashboards, Google Gemini AI insights, and a Laravel admin dashboard.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/adbtzmi",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "EV Trends in Malaysia — Data Visualization",
    description:
      "Cleaned and analyzed EV sales and charging station data, then created interactive Tableau dashboards to visualize trends and infrastructure distribution.",
    image: "/images/projects/3.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/adbtzmi",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NYC Collision Data Warehouse",
    description:
      "Built a data warehouse using NYC collision datasets with Star Schema design, ETL pipelines via SSIS, integrating 3 years of data for trend analysis.",
    image: "/images/projects/4.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/adbtzmi",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ClubUnity Website",
    description: "Club management system built with Laravel for managing club activities and members.",
    image: "/images/projects/2.6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/ClubUnity.git",
    previewUrl: "https://adbtzmi.github.io/ClubUnity/",
  },
  {
    id: 5,
    title: "Adib's Portfolio",
    description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/images/projects/2.5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/adib-portfolio.git",
    previewUrl: "https://adbtzmi.vercel.app/",
  },
  {
    id: 6,
    title: "Youtube Clone Page",
    description: "A YouTube clone page built using HTML, CSS, and JavaScript.",
    image: "/images/projects/2.4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/clone-youtube",
    previewUrl: "https://adbtzmi.github.io/clone-youtube/youtube",
  },
  {
    id: 7,
    title: "Mahallah Bilal Website",
    description: "Static website created for Mahallah Bilal using HTML and CSS.",
    image: "/images/projects/2.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/Mahallah-Bilal",
    previewUrl: "https://adbtzmi.github.io/Mahallah-Bilal/home.html",
  },
  {
    id: 8,
    title: "RM 1 Campaign Website",
    description: "Static campaign website built with HTML and CSS.",
    image: "/images/projects/2.2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/Individual-Assignment-1.git",
    previewUrl: "https://adbtzmi.github.io/Individual-Assignment-1/",
  },
  {
    id: 9,
    title: "Operating System Project",
    description: "Running Containers for Application Development using Docker.",
    image: "/images/projects/2.3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adbtzmi/OSProject",
    previewUrl: "https://github.com/adbtzmi/OSProject",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

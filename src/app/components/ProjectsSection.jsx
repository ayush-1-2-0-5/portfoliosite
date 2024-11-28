"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Learning school",
    description: "This is a community driven platform to share content.Build with motive to share knowledge and acess them by tags searching. Also integrated real time chat to help connect better.",
    image: "/images/projects/frontpage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayush-1-2-0-5/winter-school-for-iciss",
    previewUrl: "https://winter-school-for-iciss-591i.vercel.app/",
  },
  {
    id: 2,
    title: "ICMC 2026",
    description: "Helped in designing and developing the landing page of ICMC 2026 website that our college is going to host in the YEAR 2026",
    image: "/images/projects/icmc2026.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/ayush-1-2-0-5/ICMC2026",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "ConfessOut",
    description: "This is the project that i am currently working on that aims to create a platform for people to confess their secrets while keeping their identity hidden. Confession is done through story and not person.",
    image: "/images/projects/confessout.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayush-1-2-0-5/confessout",
    previewUrl: "https://confessout.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Site",
    description: "This website shows my Portfolio.",
    image: "/images/projects/portfoiliosite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayush-1-2-0-5/portfoliosite",
    previewUrl: "https://portfoliosite-pi-nine.vercel.app/",
  },
  {
    id: 5,
    title: "College Connect",
    description: "This is platfrom for JEE aspirants to find their mentors in different Indian engineering colleges",
    image: "/images/projects/collegeconnect.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayush-1-2-0-5/Project-College",
    previewUrl: "/",
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

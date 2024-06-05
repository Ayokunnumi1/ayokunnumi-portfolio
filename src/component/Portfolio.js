import React, { useState } from "react";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import Mentor from "../assets/images/mentor_me.jpg";
import WiseSpender from "../assets/images/wise_spender.jpg";
import Reelflix from "../assets/images/reelflix.jpg";
import Conference from "../assets/images/conference.jpg";
import Leaderboard from "../assets/images/leaderboard.jpg";
import RPS from "../assets/images/rps.jpg";
import visible from "../assets/images/visible.svg";
import github from "../assets/images/github.svg";
import closeIcon from "../assets/images/closeIcon.png";

import "../app.css";

const projects = [
  {
    id: 1,
    name: "Mentor Me",
    image: Mentor,
    description: "Description of Mentor Me project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Ayokunnumi1/mentor_me_now_front_end_app",
  },
  {
    id: 2,
    name: "Wise Spender",
    image: WiseSpender,
    description: "Description of Wise Spender project.",
    technologies: ["React", "Redux", "API"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Ayokunnumi1/wise_spender",
  },
  {
    id: 3,
    name: "Reelflix",
    image: Reelflix,
    description: "Description of Reelflix project.",
    technologies: ["React", "Node.js", "Express"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Ayokunnumi1/reelflix",
  },
  {
    id: 4,
    name: "Conference",
    image: Conference,
    description: "Description of Conference project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Ayokunnumi1/conference",
  },
  {
    id: 5,
    name: "Leaderboard",
    image: Leaderboard,
    description: "Description of Leaderboard project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Ayokunnumi1/leaderboard",
  },
  {
    id: 6,
    name: "Rock Paper Scissors",
    image: RPS,
    description: "Description of Rock Paper Scissors project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://example.com",
    sourceLink: "https://github.com/Ayokunnumi1/rps",
  },
];

const Portfolio = () => {
  const [addToRef] = useVisibilityObserver();
  const [selectedProject, setSelectedProject] = useState(null);

  const showPopUp = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    window.scrollTo(0, 0);
  };

  const closePopUp = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Restore background scrolling
  };

  return (
    <section
      id="portfolio"
      className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full pb-10"
    >
      <div className="relative z-10 p-8 md:px-10 lg:px-20">
        <h3 className="my-work px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Work</span>
        </h3>
        <h3 className="what-i-create mx-5 mt-0">What I Create</h3>
        <div className="m-10 flex flex-col gap-4 md:flex-row justify-center items-center portfolio-text">
          <div className="flex flex-row gap-4 md:gap-10">
            <span>All</span>
            <span>Html/Css</span>
          </div>
          <div className="flex flex-row gap-10 md:gap-10">
            <span>JavaScript</span>
            <span>React</span>
            <span>Ruby</span>
          </div>
        </div>
        <section
          ref={addToRef}
          className="container flex flex-col sd:flex-row sd:flex-wrap md:flex-row md:flex-wrap lg:flex-wrap justify-center items-center gap-4 lg:gap-8"
        >
          {projects.map((project) => (
            <div key={project.id} className="hover-effect relative group">
              <img
                className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
                src={project.image}
                alt={project.name}
              />
              <div className="absolute inset-0 flex justify-center items-center space-x-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <img
                  src={visible}
                  alt="visible"
                  className="cursor-pointer"
                  onClick={() => showPopUp(project)}
                />
                <a href={project.sourceLink} target="_blank" rel="noreferrer">
                  <img src={github} alt="github" />
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>

      {selectedProject && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-lg max-w-2xl w-full">
            <div className="head flex justify-between items-center">
              <h2>{selectedProject.name}</h2>
              <img
                src={closeIcon}
                className="pop-up-close-icon cursor-pointer"
                alt="Close"
                onClick={closePopUp}
              />
            </div>
            <div className="project-description my-4">
              <ul className="experience-list flex gap-4">
                <li>CANOPY</li>
                <li>Full stack Dev</li>
                <li>2023</li>
              </ul>
              <img
                className="detail-img w-full my-4"
                src={selectedProject.image}
                alt={selectedProject.name}
              />
            </div>
            <div className="flex-pop flex flex-col md:flex-row">
              <div className="pop-up-desc flex-1 pr-4">
                <p>{selectedProject.description}</p>
              </div>
              <div className="side-pop flex-1 pl-4">
                <ul className="skill-list">
                  {selectedProject.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
                <div className="see-container mt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-blue-500 text-white p-2 rounded mr-2">
                      <span>See Live</span>
                      <img
                        src="images/see-live-icon.png"
                        alt="See Live"
                        className="ml-2 inline"
                      />
                    </button>
                  </a>
                  <a
                    href={selectedProject.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-gray-500 text-white p-2 rounded">
                      <span>See Source</span>
                      <img
                        src="images/see-source-icon.png"
                        alt="See Source"
                        className="ml-2 inline"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

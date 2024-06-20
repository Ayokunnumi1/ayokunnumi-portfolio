import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useVisibilityObserver from "../hooks/useVisibilityObserver.js";
import visible from "../assets/images/visible.svg";
import github from "../assets/images/github.svg";
import closeIcon from "../assets/images/closeIcon.svg";
import { urlFor, client } from "../client";

import "../app.css";

const Portfolio = () => {
  const [addToRef] = useVisibilityObserver();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const portfolioRef = useRef(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"] | order(_updatedAt asc)';

    client.fetch(query).then((data) => {
      setProjects(data);
      console.log(data);
    });
  }, []);

  const getFileUrl = (asset) => {
    // Check if the asset is valid
    if (!asset || !asset._ref) {
      return "";
    }

    // Extract projectId and dataset from client configuration
    const { projectId, dataset } = client.config();

    // Split the asset _ref to get id and extension
    const [, id, extension] = asset._ref.split("-");

    // Construct and return the file URL
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
  };

  const showPopUp = (project) => {
    const navbar = document.querySelector(".fixed-navbar");
    if (navbar) {
      navbar.style.display = "none"; // Hide the fixed navbar
    }

    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    window.scrollTo(0, 0);
  };

  const closePopUp = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Restore background scrolling
    const navbar = document.querySelector(".fixed-navbar");
    if (navbar) {
      navbar.style.display = "flex"; // Show the fixed navbar
    }
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedTechnology === "All" ||
      project.technologies.includes(selectedTechnology)
  );

  const videoUrl =
    selectedProject && selectedProject.video
      ? getFileUrl(selectedProject.video.asset)
      : "";

  return (
    <section
      id="portfolio"
      className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full pb-10"
    >
      <div
        ref={(el) => {
          if (el) {
            portfolioRef.current = el;
            addToRef(el);
          }
        }}
        className="container relative z-10 p-8 md:px-10 lg:px-20"
      >
        <h3 className="my-work px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Work</span>
        </h3>
        <h3 className="what-i-create mx-5 mt-0">What I Create</h3>
        <nav className="m-10 flex flex-col gap-4 md:flex-row justify-center items-center portfolio-text">
          <div className="flex flex-row gap-4 md:gap-10 cursor-pointer">
            <span onClick={() => setSelectedTechnology("All")}>
              <NavLink
                className={({ isActive }) =>
                  selectedTechnology === "All" ? "active-link" : ""
                }
              >
                All
              </NavLink>
            </span>
            <span onClick={() => setSelectedTechnology("JavaScript")}>
              <NavLink
                className={({ isActive }) =>
                  selectedTechnology === "JavaScript" ? "active-link" : ""
                }
              >
                JavaScript
              </NavLink>
            </span>
          </div>
          <div className="flex flex-row gap-10 md:gap-10 cursor-pointer">
            <span
              onClick={() => setSelectedTechnology("PostgreSQL")}
              className="Postgresql"
            >
              <NavLink
                className={({ isActive }) =>
                  selectedTechnology === "PostgreSQL" ? "active-link" : ""
                }
              >
                Postgresql
              </NavLink>
            </span>
            <span onClick={() => setSelectedTechnology("React")}>
              <NavLink
                className={({ isActive }) =>
                  selectedTechnology === "React" ? "active-link" : ""
                }
              >
                React
              </NavLink>
            </span>
            <span onClick={() => setSelectedTechnology("Rails")}>
              <NavLink
                className={({ isActive }) =>
                  selectedTechnology === "Rails" ? "active-link" : ""
                }
              >
                Rails
              </NavLink>
            </span>
          </div>
        </nav>
        <section className="flex flex-col sd:flex-row sd:flex-wrap md:flex-row md:flex-wrap lg:flex-wrap justify-center items-center gap-4 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project._id} className="hover-effect relative group">
              <img
                className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
                src={urlFor(project.image)}
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
        <div className="pop-up overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-lg max-w-2xl w-full">
            <div className="head flex justify-between items-center">
              <h2 className="pop-up-title">{selectedProject.name}</h2>
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
                <li>{selectedProject.title}</li>
                <li>{selectedProject.date_of_creation}</li>
              </ul>
              <video
                className="detail-img w-full my-4"
                src={videoUrl}
                controls
                autoPlay
                muted
              />
            </div>
            <div className="flex-pop flex flex-col md:flex-row">
              <div className="pop-up-desc flex-1 pr-4">
                <p>{selectedProject.description}</p>
              </div>
              <div className="side-pop flex-1 ">
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
                    </button>
                  </a>
                  <a
                    href={selectedProject.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-gray-500 text-white p-2 rounded">
                      <span>See Source</span>
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

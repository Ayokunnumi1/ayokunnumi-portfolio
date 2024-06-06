import React, { useState, useRef } from "react";
import useVisibilityObserver from "../hooks/useVisibilityObserver.js";
import Mentor from "../assets/images/mentor_me.jpg";
import WiseSpender from "../assets/images/wise_spender.jpg";
import Reelflix from "../assets/images/reelflix.jpg";
import Conference from "../assets/images/conference.jpg";
import Leaderboard from "../assets/images/leaderboard.jpg";
import visible from "../assets/images/visible.svg";
import github from "../assets/images/github.svg";
import closeIcon from "../assets/images/closeIcon.svg";
import mentorMeNowVid from "../assets/videos/mentor-me-now-vid.mp4";
import wiseSpenderVid from "../assets/videos/wise-spender-vid.mp4";
import reelflixVid from "../assets/videos/reelflix-vid.mp4";
import hnh from "../assets/videos/hnhvid.mp4";
import ussd from "../assets/images/ussd.jpg";
import leaderboardGif from "../assets/videos/Leaderboard gif.gif"

import "../app.css";

const projects = [
  {
    id: 1,
    name: "Mentor Me Now",
    image: Mentor,
    description:
      "Mentor Me Now is a web app designed to connect mentees with experienced mentors across various fields. Our app streamlines the process of finding and scheduling sessions with mentors, facilitating personal and professional growth.",
    technologies: ["React", "Vite", "TailwindCSS", "Rails", "Postgresql"],
    liveLink: "https://mentor-me-noww.vercel.app/",
    sourceLink: "https://github.com/Ayokunnumi1/mentor_me_now_front_end_app",
    video: mentorMeNowVid,
    title: "Full Stack Dev",
    date_of_creation: "2024",
  },
  {
    id: 2,
    name: "Wise Spender",
    image: WiseSpender,
    description:
      "This is a mobile web app where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    technologies: ["Ruby On Rails", "VanillaCSS", "Ruby gems"],
    liveLink: "https://wise-spender.onrender.com/",
    sourceLink: "https://github.com/Ayokunnumi1/wise-spender",
    video: wiseSpenderVid,
    title: "Full Stack Dev",
    date_of_creation: "2024",
  },
  {
    id: 3,
    name: "Haba na Haba Ussd APP",
    image: ussd,
    description:
      "An app that connects surplus food providers with people that lacked food. This is our pitch for the hackathon. I was the team lead and only female, kindly turn on the volume",
    technologies: [
      "Rails",
      "Africastalking API",
      "Postgresql",
      "VanillaCSS",
      "Ngrok",
    ],
    liveLink: "#",
    sourceLink: "https://github.com/Ayokunnumi1/zero-hunger-hackathon",
    video: hnh,
    title: "Full Stack Dev",
    date_of_creation: "2024",
  },
  {
    id: 4,
    name: "Reelflix",
    image: Reelflix,
    description:
      "A movie website that displays several Tv shows from an external API",
    technologies: ["React", "Redux", "RestAPI", "VanillaCSS", "Jest"],
    liveLink: "https://ayokunnumi1.github.io/reelflix-movies/dist/",
    sourceLink: "https://github.com/Ayokunnumi1/Reelflix-Movie-App",
    video: reelflixVid,
    title: "Front End Dev",
    date_of_creation: "2023",
  },
  {
    id: 5,
    name: "Conference",
    image: Conference,
    description:
      "An Online Website designed for the Conference of Content Creators.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ayokunnumi1.github.io/Conference-Page/",
    sourceLink: "https://github.com/Ayokunnumi1/Conference-Page",
    video: reelflixVid,
    title: "Front End Dev",
    date_of_creation: "2023",
  },
  {
    id: 6,
    name: "Leaderboard",
    image: Leaderboard,
    description:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ayokunnumi1.github.io/Leaderboard/dist/",
    sourceLink: "https://github.com/Ayokunnumi1/Leaderboard",
    video: leaderboardGif,
    title: "Front End Dev",
    date_of_creation: "2023",
  },
];

const Portfolio = () => {
  const [addToRef] = useVisibilityObserver();
  const [selectedProject, setSelectedProject] = useState(null);
  const portfolioRef = useRef(null);

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
        <section className="flex flex-col sd:flex-row sd:flex-wrap md:flex-row md:flex-wrap lg:flex-wrap justify-center items-center gap-4 lg:gap-8">
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
                src={selectedProject.video}
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

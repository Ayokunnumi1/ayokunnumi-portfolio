import { useEffect} from "react";
import { Link as ScrollLink } from 'react-scroll';
import Menu from "../assets/images/menu.png";
import myPic from "../assets/images/myPic.png";
import linkedIn from "../assets/images/linked_in_circled.png";
import twitter from "../assets/images/twitter_circled.png";
import medium from "../assets/images/medium.png";
import youtube from "../assets/images/you_tube_logo.png";
import closeIcon from "../assets/images/closeIcon.png";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import "../app.css";

const Home = () => {
  const [addToRef] = useVisibilityObserver();
  
    useEffect(() => {
    const menu = document.querySelector(".menu");
    const navLink = document.querySelector(".nav-link");
    const closeIconElement = document.querySelector(".close-icon");
    const navLinkList = document.querySelectorAll(".nav-link-list");
    const body = document.body;
    const fixedNavbar = document.querySelector(".fixed-navbar");

    menu.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 1279px)").matches) {
        navLink.classList.toggle("show-link");
        if (navLink.classList.contains("show-link")) {
          closeIconElement.style.display = "block";
          menu.style.display = "none";
          body.classList.add("no-scroll");
        } else {
          closeIconElement.style.display = "none";
          menu.style.display = "block";
          body.classList.remove("no-scroll");
        }
      }
    });

    closeIconElement.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 1279px)").matches) {
        navLink.classList.remove("show-link");
        closeIconElement.style.display = "none";
        menu.style.display = "block";
        body.classList.remove("no-scroll");
      }
    });

    navLinkList.forEach((list) => {
      list.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 1279px)").matches) {
          navLink.classList.remove("show-link");
          closeIconElement.style.display = "none";
          menu.style.display = "block";
          body.classList.remove("no-scroll");
        }
      });
    });

    // Add scroll event listener to change background color of the fixed-navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        fixedNavbar.classList.add("scrolled"); // Add 'scrolled' class when not at the top
      } else {
        fixedNavbar.classList.remove("scrolled"); // Remove 'scrolled' class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <section
      id="home"
      className="bg-home-pg-bg-image bg-no-repeat bg-cover min-h-screen md:min-h-0 md:pb-5 lg:min-h-screen text-white pt-5"
    >
      <div className="fixed-navbar flex flex-row justify-between pt-4 items-center px-10 lg:px-20">
        <h3 className="logo-font logo-font-desktop">
          <span className="text-[#76E1A2]">AY</span>
          <span className="text-white">CODE</span>
        </h3>
        <nav>
          <ul className="nav-link">
            <li className="nav-link-list">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="active-hover-effect"
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-link-list">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="active-hover-effect"
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-link-list">
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                className="active-hover-effect"
              >
                Portfolio
              </ScrollLink>
            </li>
            <li className="nav-link-list">
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="active-hover-effect"
              >
                Skills
              </ScrollLink>
            </li>
            <li className="nav-link-list">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="active-hover-effect"
              >
                Contact
              </ScrollLink>
            </li>
            <li className="resume border-2 rounded px-1 w-20 border-custom-green">
              <a
                href="https://ayokunnumi-full-stack-resume.tiiny.site/"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <nav className="menu">
          <img src={Menu} alt="hamburger" />
        </nav>
        <div className="close-icon">
          <img src={closeIcon} alt="close" />
        </div>
      </div>

      <div
        ref={addToRef}
        className="container relative z-10 rounded-t-[150px] rounded-b-[100px] bg-[#272A2B] flex flex-col items-center w-80 h-506 mt-20 mx-auto"
      >
        <div className="w-80 h-80 bg-[#374B3F] rounded-full flex flex-col items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-custom-green flex flex-col items-center justify-center">
            <img
              className="w-80 h-80 object-cover rounded-full rotate-img"
              src={myPic}
              alt="my face"
            />
          </div>
        </div>
        <h3 className="my-name">AYO OMOLOLU</h3>
        <h3 className="full-stack-text">
          <span className="text-white">Full Stack </span>
          <span className="text-[#76E1A2]">Web Developer</span>
        </h3>
        <div className="flex flex-row justify-center items-center gap-2 mt-5">
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img src={linkedIn} alt="linkedIn" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img src={medium} alt="medium" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

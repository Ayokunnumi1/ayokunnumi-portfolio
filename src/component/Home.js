import Menu from "../assets/images/menu.png";
import myPic from "../assets/images/myPic.png";
import linkedIn from "../assets/images/linked_in_circled.png";
import twitter from "../assets/images/twitter_circled.png";
import medium from "../assets/images/medium.png";
import youtube from "../assets/images/you_tube_logo.png";

import "../styles/home.css";

const Home = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover min-h-screen md:min-h-0  md:pb-5 lg:min-h-screen text-white pt-5">
      <div className="relative z-10 flex flex-row justify-between items-center px-10 lg:px-20">
        <h3 className="logo_font logo_font_desktop">
          <span className="text-[#76E1A2]">AY</span>
          <span className="text-white">CODE</span>
        </h3>
        <nav>
          <ul className="hidden lg:flex flex-row justify-center items-center gap-8 nav_list">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Skills</li>
            <li>Contact</li>
            <li className="lg:border-2 rounded px-0.5 border-custom-green">
              Resume
            </li>
          </ul>
        </nav>
        <nav className="block lg:hidden">
          <img src={Menu} alt="menu" />
        </nav>
      </div>

      <div className="relative z-10  rounded-t-[150px] rounded-b-[100px] bg-[#272A2B] flex flex-col items-center w-80 h-506 mt-10 mx-auto">
        <div className="w-80 h-80 bg-[#374B3F] rounded-full flex flex-col items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-custom-green flex flex-col items-center justify-center">
            <img
              className=" w-80 h-80 object-cover rounded-full rotate_img"
              src={myPic}
              alt="my face"
            />
          </div>
        </div>
        <h3 className="my_name">AYO OMOLOLU</h3>
        <h3 className="full_stack_text">
          <span className="text-white">Full Stack </span>
          <span className="text-[#76E1A2]">Web Developer</span>
        </h3>
        <div className="flex flex-row justify-center items-center gap-2 mt-5">
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img className="" src={linkedIn} alt="my face" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img className="" src={twitter} alt="my face" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img className="" src={medium} alt="my face" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-custom-green">
            <img className="" src={youtube} alt="my face" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

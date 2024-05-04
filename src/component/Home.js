import Menu from "../assets/images/menu.png";
import myPic from "../assets/images/myPic.png";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover min-h-screen bg-overlayy text-white pt-5 px-10">
      <div className="relative z-10 flex flex-row justify-between items-center">
        <h3 className="logo_font">
          <span className="text-[#76E1A2]">AY</span>
          <span className="text-white">CODE</span>
        </h3>
        <nav>
          <ul className="hidden lg:flex">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>
        <nav className="block lg:hidden">
          <img src={Menu} alt="menu" />
        </nav>
      </div>

      <div className="relative z-10  rounded-t-[150px] rounded-b-[100px] bg-[#272A2B] flex flex-col items-center w-80 h-506 mt-10">
        <div className="w-80 h-80 bg-[#374B3F] rounded-full flex flex-col items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-[#6AB187] flex flex-col items-center justify-center">
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
      </div>
    </section>
  );
};

export default Home;

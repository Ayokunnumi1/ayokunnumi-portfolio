import useVisibilityObserver from "../hooks/useVisibilityObserver";
import FrontendImg from "../assets/images/frontend.svg";
import BackendImg from "../assets/images/backend.svg";
import FullStackImg from "../assets/images/fullStack.svg";
import "../app.css";

const MyServices = () => {
  const [addToRef] = useVisibilityObserver();

  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white pb-10">
      <div className="relative z-10 lg:px-20">
        <h3 className="my-services px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Services</span>
        </h3>
        <h3 className="what-i-do mx-5 mt-0">What I Do</h3>
        <article className="flex flex-col justify-center items-center md:flex-row text-center mx-10">
          <div
            ref={addToRef}
            className="zoom-out bg-custom-black border-radius flex flex-col justify-center items-center p-10 m-5 md:p-2 container"
          >
            <img src={FrontendImg} alt="frontend" className="myServiceImg" />
            <h4 className="my-service-title md:text-nowrap">
              Front End Developer
            </h4>
            <p className="mt-5 text-slate-300">
              Helped
              <span className="text-[#76E1A2] my-service_title_text">
                {" "}
                100+
              </span>{" "}
              Microverse students build React project
            </p>
          </div>
          <div
            ref={addToRef}
            className="zoom-out bg-custom-black border-radius flex flex-col justify-center items-center p-10 m-5 md:p-2 container"
          >
            <img src={BackendImg} alt="Backend" className="myServiceImg" />
            <h4 className="my-service-title md:text-nowrap">
              Back End Developer
            </h4>
            <p className="mt-5 text-slate-300">
              Helped
              <span className="text-[#76E1A2]"> 90+</span> Microverse students
              build Command Line Interface
            </p>
          </div>
          <div
            ref={addToRef}
            className="zoom-out bg-custom-black border-radius flex flex-col justify-center items-center p-10 m-5 md:p-2 container"
          >
            <img src={FullStackImg} alt="full stack" className="myServiceImg" />
            <h4 className="my-service-title md:text-nowrap">
              Full Stack Developer
            </h4>
            <p className="mt-5 text-slate-300">
              Built a food bank app that saved
              <span className="text-[#76E1A2]"> 1000+</span> users from food hunger
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MyServices;

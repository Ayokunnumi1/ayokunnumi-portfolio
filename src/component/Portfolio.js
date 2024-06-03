import useVisibilityObserver from "../hooks/useVisibilityObserver";
import Mentor from "../assets/images/mentor_me.jpg";
import WiseSpender from "../assets/images/wise_spender.jpg";
import Reelflix from "../assets/images/reelflix.jpg";
import Conference from "../assets/images/conference.jpg";
import Leaderboard from "../assets/images/leaderboard.jpg";
import RPS from "../assets/images/rps.jpg";
import "../app.css";

const Portfolio = () => {
  const [addToRef] = useVisibilityObserver();

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
          <div>
            <img
              className=" w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
              src={Mentor}
              alt="mentor application"
            />
          </div>
          <div>
            <img
              className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
              src={WiseSpender}
              alt="wise spender"
            />
          </div>
          <div>
            <img
              className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
              src={Reelflix}
              alt="reelflix movie"
            />
          </div>
          <div className="">
            <img
              className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
              src={Conference}
              alt="conference"
            />
          </div>
          <div>
            <img
              className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
              src={Leaderboard}
              alt="leaderboard"
            />
          </div>
          <div>
            <img
              className="w-80 sd:w-48 md:w-52 lg:w-80 rounded-3xl border-2 border-custom-green"
              src={RPS}
              alt="rock paper scissors"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;

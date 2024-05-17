import GraduationCap from "../assets/images/graduation_cap.svg";
import BriefCase from "../assets/images/briefcase.svg";

const InterestingFacts = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full sm:h-506 md:h-96 bg-center bg-[100% auto] py-6">
      <div className="relative z-10 flex flex-col justify-center items-center gap-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center">
          <h3 className="about-me-heading">Interesting Facts</h3>
          <div className="w-20 h-1 bg-custom-green"></div>
        </div>

        <article className="text-white flex flex-col sd:flex-row sd:justify-center sd:items-center gap-4 sd:gap-16 md:gap-48 lg:gap-80 xlg:gap-gap-1 sd:mt-8 custom-font-interesting-facts">
          <div className="flex flex-col gap-6 sd:gap-10">
            <div className="flex gap-4">
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-custom-green">
                <img
                  className="w-12 h-12 lg:w-16 lg:h-16 m-auto"
                  src={BriefCase}
                  alt="portfolio"
                />
              </div>
              <div>
                <h4 className="qualification">30+ Projects Done</h4>
                <p className="text-custom-green qualification-date">
                  (<span>2024 - </span>
                  <span>present</span>)
                </p>
                <p className="qualification-sch">Hire Me</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-custom-green">
                <img
                  className="w-12 h-12 lg:w-16 lg:h-16 m-auto"
                  src={BriefCase}
                  alt="portfolio"
                />
              </div>
              <div>
                <h4 className="qualification">Tech Mentor</h4>
                <p className="text-custom-green qualification-date">
                  (<span>2023 - </span>
                  <span>2024</span>)
                </p>
                <p className="qualification-sch">Microverse</p>
              </div>
            </div>
          </div>
          <span className="hidden sd:block sd:absolute sd:h-40 md:h-48 lg:h-56 w-0.5 border-r-2 border-custom-green"></span>
          <div className="flex flex-col gap-6 sd:gap-10">
            <div className="flex gap-4">
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-custom-green">
                <img
                  className="w-12 h-12 lg:w-16 lg:h-16 m-auto"
                  src={GraduationCap}
                  alt="graduation"
                />
              </div>
              <div>
                <h4 className="qualification">Full Stack Dev</h4>
                <p className="text-custom-green qualification-date">
                  (<span>2023 - </span>
                  <span>2024</span>)
                </p>
                <p className="qualification-sch">Microverse</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-custom-green">
                <img
                  className="w-12 h-12 lg:h-16 lg:w-16 m-auto"
                  src={GraduationCap}
                  alt="graduation"
                />
              </div>
              <div>
                <h4 className="qualification">Bsc Zoology</h4>
                <p className="text-custom-green qualification-date">
                  (<span>2010 - </span>
                  <span>2014</span>)
                </p>
                <p className="qualification-sch">Unilag</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InterestingFacts;

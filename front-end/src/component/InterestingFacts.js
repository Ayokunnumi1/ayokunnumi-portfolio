import useVisibilityObserver from "../hooks/useVisibilityObserver";
import GraduationCap from "../assets/images/graduation_cap.svg";
import BriefCase from "../assets/images/briefcase.svg";

// Newest first: the left column holds the first three entries, the right column the rest.
const facts = [
  {
    title: "Founder & Lead Software Engineer",
    start: "Mar 2026",
    end: "Present",
    place: "Yielded Circle Tech",
  },
  {
    title: "Backend Developer & CTO",
    start: "Feb 2025",
    end: "Aug 2026",
    place: "Itan Technologies",
  },
  {
    title: "Software Development Team Lead",
    start: "Aug 2024",
    end: "Mar 2025",
    place: "Tech To The Rescue",
  },
  {
    title: "Zero Hunger Hackathon Winner",
    start: "2024",
    link: "https://drive.google.com/file/d/1g6udRZolgpqNdTlkBfLGqo-oSDgJViof/view?usp=sharing",
  },
  {
    title: "Frontend Developer Intern",
    start: "Mar 2024",
    end: "May 2024",
    place: "Jasper",
  },
  {
    title: "Full Stack Development Program",
    start: "Mar 2023",
    end: "Jan 2024",
    place: "Microverse",
    education: true,
  },
];

const Fact = ({ title, start, end, place, link, education }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-custom-green">
      <img
        className="w-12 h-12 lg:w-16 lg:h-16 m-auto"
        src={education ? GraduationCap : BriefCase}
        alt={education ? "graduation" : "portfolio"}
      />
    </div>
    <div>
      <h4 className="qualification">{title}</h4>
      <p className="text-custom-green qualification-date">
        (<span>{start}</span>
        {end && <span> – {end}</span>})
      </p>
      <p className="qualification-sch">
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            View Certificate
          </a>
        ) : (
          place
        )}
      </p>
    </div>
  </div>
);

const InterestingFacts = () => {
 const [addToRef] = useVisibilityObserver();

  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full bg-center bg-[100% auto] py-6">
      <div className="relative z-10 flex flex-col justify-center items-center gap-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center">
          <h3 className="about-me-heading">Interesting Facts</h3>
          <div className="w-20 h-1 bg-custom-green"></div>
        </div>

        <article className="relative text-white flex flex-col sd:flex-row sd:justify-center sd:items-start gap-4 sd:gap-16 md:gap-48 lg:gap-80 xlg:gap-gap-1 sd:mt-8 px-5 sd:px-0 custom-font-interesting-facts">
          <div
            ref={addToRef}
            className="container flex flex-col gap-6 sd:gap-10"
          >
            {facts.slice(0, 3).map((fact) => (
              <Fact key={fact.title} {...fact} />
            ))}
          </div>
          <span className="hidden sd:block sd:absolute sd:top-0 sd:bottom-0 sd:left-1/2 w-0.5 border-r-2 border-custom-green"></span>
          <div
            ref={addToRef}
            className="container flex flex-col gap-6 sd:gap-10"
          >
            {facts.slice(3).map((fact) => (
              <Fact key={fact.title} {...fact} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default InterestingFacts;

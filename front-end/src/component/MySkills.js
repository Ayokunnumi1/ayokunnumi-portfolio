import useVisibilityObserver from "../hooks/useVisibilityObserver";

const skillGroups = [
  {
    title: "Front-End",
    skills: ["JavaScript", "React", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Back-End",
    skills: ["Ruby on Rails", "PostgreSQL", "RESTful APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "RSpec", "TDD", "Agile/Scrum"],
  },
  {
    title: "AI Tools",
    skills: ["Claude", "ChatGPT", "Cursor", "Gemini"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Technical Leadership",
      "Mentoring",
    ],
  },
];

const MySkills = () => {
  const [addToRef] = useVisibilityObserver();

  return (
    <section
      id="skills"
      className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full"
    >
      <div className="relative z-10 md:px-10 lg:px-20">
        <h3 className="my-skills px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Skills</span>
        </h3>
        <h3 className="what-i-use mx-5 mt-0">What I Use</h3>
        <div
          ref={addToRef}
          className="container flex flex-row flex-wrap justify-center items-stretch gap-6 mt-8 px-5 pb-10"
        >
          {skillGroups.map(({ title, skills }) => (
            <div
              key={title}
              className="bg-custom-black border-radius p-6 w-full sd:w-80"
            >
              <h4 className="my-service-title text-custom-green mb-4">
                {title}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="skill-tag border-2 border-custom-green rounded-full px-3 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;

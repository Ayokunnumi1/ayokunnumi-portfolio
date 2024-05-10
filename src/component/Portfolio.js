import "../app.css";

const Portfolio = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full">
      <div className="relative z-10 md:px-10 lg:px-20">
        <h3 className="my-work px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Work</span>
        </h3>
        <h3 className="what-i-create mx-5 mt-0">What I Create</h3>
        <div className="m-10 flex flex-col justify-center items-center gap-4 portfolio-text">
          <div className="flex flex-row gap-4">
            <span>All</span>
            <span>UI/UX</span>
          </div>
          <div className="flex flex-row gap-10">
            <span>JavaScript</span>
            <span>React</span>
            <span>Ruby</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

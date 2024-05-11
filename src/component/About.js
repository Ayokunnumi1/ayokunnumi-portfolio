import "../app.css";

const About = () => {
    return (
      <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full sm:h-506 md:h-80 bg-center bg-[100% auto] py-10">
        <div className="relative z-10 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <h3 className="about-me-heading">About Me</h3>
            <div className="w-20 h-1 bg-custom-green"></div>
          </div>
          <p className="about-me-text lg:px-36 p-6">
            "I specialize in building user centric applications for companies
            with a vision for the future."
          </p>
        </div>
      </section>
    );
}

export default About;
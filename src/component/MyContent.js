import useVisibilityObserver from "../hooks/useVisibilityObserver";
import ReactContent from "../assets/images/reactContent.jpg";
import RubyContent from "../assets/images/rubyContent.jpg";
import transitionContent from "../assets/images/transitionContent.jpg";

const MyContent = () => {
  const [addToRef] = useVisibilityObserver();
  
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full">
      <div className="relative z-10 lg:px-20 text-white pb-8">
        <h3 className="my-skills px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Content</span>
        </h3>
        <h3 className="what-i-use mx-5 mt-0">What I Share</h3>

        <article className="flex flex-col gap-10 md:gap-3 md:flex-row mx-10 mt-8">
          <a
            href="https://youtu.be/4iwPdeIFXQE?si=VZ4l-F5tVrjyI-y1"
            target="_blank"
            rel="noreferrer"
            ref={addToRef}
            className="container rounded-3xl border-2 border-custom-green "
          >
            <div>
              <img
                className="bg-cover bg-no-repeat w-full rounded-3xl h-56"
                src={ReactContent}
                alt="react content"
              />
              <div className="p-5">
                <p className="text-center mb-3">
                  <span className="text-custom-green content-text">React</span>
                  <span className="content-date"> Oct 8th, 2023</span>
                </p>
                <p className="text-center content-text">
                  Create your dream space hub with React & Redux
                </p>
              </div>
            </div>
          </a>
          <a
            className="container rounded-3xl border-2 border-custom-green"
            ref={addToRef}
            href="https://youtu.be/ZngXkKPRmOw?si=tU2u-MjsgOsJt9rc"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img
                className="bg-cover bg-no-repeat w-full rounded-3xl h-56"
                src={RubyContent}
                alt="ruby content"
              />

              <div className="p-5">
                <p className="text-center mb-3">
                  <span className="text-custom-green content-text">Ruby</span>
                  <span className="content-date"> March 7th, 2024</span>
                </p>
                <p className="text-center content-text">
                  Build your first Ruby Command Line Interface in 1hr
                </p>
              </div>
            </div>
          </a>

          <a
            className="container rounded-3xl border-2 border-custom-green"
            ref={addToRef}
            href="https://medium.com/@omololuayk/i-struggled-a-lot-with-having-a-career-change-d8715c509b16"
            target="_blank"
            rel="noreferrer"
          >
            <div
              ref={addToRef}
              className="container rounded-3xl border-2 border-custom-green"
            >
              <img
                className="bg-cover bg-no-repeat w-full rounded-3xl h-56"
                src={transitionContent}
                alt="my transition to tech"
              />
              <div className="p-5">
                <p className="text-center mb-3">
                  <span className="text-custom-green content-text">
                    Transition
                  </span>
                  <span className="content-date"> Jan 6th, 2024</span>
                </p>
                <p className="text-center content-text">
                  I struggled a lot with having a career change.
                </p>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default MyContent;

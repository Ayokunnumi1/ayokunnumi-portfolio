import ReactContent from "../assets/images/reactContent.jpg";
import RubyContent from "../assets/images/rubyContent.jpg";
import transitionContent from "../assets/images/transitionContent.jpg";

const MyContent = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full">
      <div className="relative z-10 md:px-10 lg:px-20 text-white">
        <h3 className="my-skills px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Content</span>
        </h3>
        <h3 className="what-i-use mx-5 mt-0">What I Share</h3>
        <div className="rounded-3xl border-2 border-custom-green mx-10">
          <img
            className="bg-cover bg-no-repeat rounded-3xl w-32 h-10"
            src={ReactContent}
            alt="react course"
          />
          <p className="text-center">
            <span>React</span>
            <span> Oct 8th, 2023</span>
          </p>
          <p className="text-center">
            Create your dream space hub with React & Redux
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyContent;

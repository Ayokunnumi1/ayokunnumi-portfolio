import Resume from "../assets/images/resume.svg";
import Email from "../assets/images/email.svg";
import Phone from "../assets/images/phone.svg";

const Contact = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full">
      <div className="relative z-10 flex flex-col justify-center items-center gap-8 text-white py-10">
        <div className="flex flex-col items-center">
          <h3 className="about-me-heading">Get In Touch</h3>
          <div className="w-20 h-1 bg-custom-green"></div>
        </div>

        <form className="client-form md:flex-row md:justify-center md:items-center md:gap-10 px-20">
          <div className="flex flex-col gap-4">
            <label htmlFor="client-name">
              Name
              <input
                type="text"
                id="client-name"
                name="client-name"
                className="input-client-name"
              ></input>
            </label>
            <label htmlFor="client-email md:mt-8">
              Email
              <input
                type="email"
                id="client-email"
                name="client-email"
                className=""
              ></input>
            </label>
          </div>

          <div className="flex flex-col mt-6">
            <label for="client-text" className="md:hidden">
              Text
            </label>
            <textarea
              className="mt-3 p-3 md:mt-0 md:p-0"
              id="client-text"
              type="text"
            ></textarea>
            <button
              type="submit"
              className="bg-custom-green p-1 text-center text-black text-xl font-extrabold w-24 ml-auto mt-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex gap-8">
          <div className="w-16 h-16 rounded-full border-2 border-custom-green">
            <img src={Resume} alt="resume" className="m-auto" />
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-custom-green">
            <img src={Email} alt="email" className="m-auto" />
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-custom-green">
            <img src={Phone} alt="phone" className="m-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

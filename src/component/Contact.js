import useVisibilityObserver from "../hooks/useVisibilityObserver";
import Resume from "../assets/images/resume.svg";
import Email from "../assets/images/email.svg";
import Phone from "../assets/images/phone.svg";

const Contact = () => {
  const [addToRef] = useVisibilityObserver();

  const validateName = () => {
    const name = document.querySelector(".client-name").value;
    const nameInput = document.querySelector(".client-name");
    const nameErrorMsg = document.querySelector(".name-error-msg");

    nameInput.oninput = () => {
      nameErrorMsg.textContent = "";
    };

    if (name.length === 0) {
      nameErrorMsg.textContent = "Name is required";
      return false;
    }
    nameErrorMsg.style.display = "none";
    return true;
  };

  const validateEmail = () => {
    const email = document.querySelector(".client-email").value;
    const emailInput = document.querySelector(".client-email");
    const emailErrorMsg = document.querySelector(".email-error-msg");

    emailInput.oninput = () => {
      emailErrorMsg.textContent = "";
    };

    if (email.length === 0) {
      emailErrorMsg.textContent = "Email is required";
      return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      emailErrorMsg.textContent = "Invalid Email";
      return false;
    }

    if (email !== email.toLowerCase()) {
      emailErrorMsg.textContent = "Please write email in LowerCase";
      return false;
    }

    emailErrorMsg.style.display = "none";
    return true;
  };

  const validateMessage = () => {
    const messages = document.querySelector(".client-text").value;
    const textErrorMsg = document.querySelector(".text-error-msg");
    const required = 30;
    const left = required - messages.length;
    if (left > 0 && left < 30) {
      textErrorMsg.textContent = `${left} characters left`;
      return false;
    }

    if (messages.length === required) {
      textErrorMsg.textContent = "Message Complete";
      textErrorMsg.style.display = "block";
    }
    return true;
  };

  const validateSubmit = (e) => {
    const submitErrorMsg = document.querySelector(".submit-error-msg");

    if (!validateName() || !validateEmail() || !validateMessage()) {
      submitErrorMsg.style.display = "block";
      submitErrorMsg.textContent = "Invalid form registration";
      console.log('clicked')
      setTimeout(() => {
        submitErrorMsg.style.display = "none";
      }, 3000);

      e.preventDefault();
      return false;
    }
  };

 
  return (
    <section
      id="contact"
      className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full"
    >
      <div className="relative z-10 flex flex-col justify-center items-center gap-8 text-white py-10">
        <div className="flex flex-col items-center">
          <h3 className="about-me-heading">Get In Touch</h3>
          <div className="w-20 h-1 bg-custom-green"></div>
        </div>

        <form
          action="https://formspree.io/f/xayzglpq"
          method="post"
          required
          onSubmit={validateSubmit}
          className="md:flex md:flex-row md:gap-10 md:justify-center md:items-center client-form px-20"
        >
          <div ref={addToRef} className="container flex flex-col gap-4">
            <div>
              <label htmlFor="client-name">Name</label>
              <input
                type="text"
                id="client-name"
                name="client-name"
                maxlength="30"
                required
                className="client-name mx-6"
                onChange={validateName}
              ></input>
              <span id="name-error-msg" class="name-error-msg"></span>
            </div>

            <div>
              <label htmlFor="client-email md:mt-8">Email</label>
              <input
                type="email"
                id="client-email"
                name="client-email"
                maxlength="30"
                required
                onChange={validateEmail}
                className="client-email mx-6"
              ></input>
              <span id="email-error-msg" class="email-error-msg"></span>
            </div>
          </div>

          <div ref={addToRef} className="container flex flex-col mt-5 md:mt-20">
            <label htmlFor="client-text" className="md:hidden">
              Text
            </label>
            <textarea
              className="client-text mt-3 p-3 md:p-4"
              id="client-text"
              type="text"
              maxLength="30"
              onChange={validateMessage}
              required
            ></textarea>
            <span id="text-error-msg" class="text-error-msg"></span>
            <button
              type="submit"              
              onClick={validateSubmit}
              className="contact-btn bg-custom-green p-1 text-center text-black text-xl font-extrabold w-24 ml-auto mt-4 rounded-lg"
            >
              Submit
            </button>
            <span id="submit-error-msg" className="submit-error-msg"></span>
          </div>
        </form>

        <div className="flex gap-8">
          <div className="w-16 h-16 rounded-full border-2 border-custom-green">
            <a
              href="https://ayokunnumi-full-stack-resume.tiiny.site/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Resume} alt="resume" className="m-auto" />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-custom-green">
            <a
              href="mailto:omololuayk@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Email} alt="email" className="m-auto" />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-custom-green">
            <a
              href="https://api.whatsapp.com/send?phone=08180752687"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Phone} alt="phone" className="m-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

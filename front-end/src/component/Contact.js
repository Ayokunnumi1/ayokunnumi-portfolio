import React, { useEffect } from "react";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import Resume from "../assets/images/resume.svg";
import Email from "../assets/images/email.svg";
import Phone from "../assets/images/phone.svg";

const Contact = () => {
  const [addToRef] = useVisibilityObserver();

  useEffect(() => {
    const nameInput = document.querySelector(".client-name");
    const nameErrorMsg = document.querySelector(".name-error-msg");
    const emailInput = document.querySelector(".client-email");
    const clientText = document.querySelector(".client-text");
    const emailErrorMsg = document.querySelector(".email-error-msg");
    const textErrorMsg = document.querySelector(".text-error-msg");
    const submitErrorMsg = document.querySelector(".submit-error-msg");

    const validateName = () => {
      const name = nameInput.value;

      nameInput.oninput = () => {
        nameErrorMsg.textContent = "";
      };

      if (name.length === 0) {
        nameErrorMsg.textContent = "Name is required";
        nameErrorMsg.style.display = "block";
        return false;
      }
      nameErrorMsg.style.display = "none";
      return true;
    };

    const validateEmail = () => {
      const email = emailInput.value;

      emailInput.oninput = () => {
        emailErrorMsg.textContent = "";
      };

      if (email.length === 0) {
        emailErrorMsg.textContent = "Email is required";
        emailErrorMsg.style.display = "block"; // Ensure it is displayed
        return false;
      }

      if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailErrorMsg.textContent = "Invalid Email";
        emailErrorMsg.style.display = "block"; // Ensure it is displayed
        return false;
      }

      if (email !== email.toLowerCase()) {
        emailErrorMsg.textContent = "Please write email in LowerCase";
        emailErrorMsg.style.display = "block"; // Ensure it is displayed
        return false;
      }

      emailErrorMsg.style.display = "none";
      return true;
    };

    const validateMessage = () => {
      const messages = clientText.value;
      const required = 30;
      const left = required - messages.length;
      if (left > 0 && left < 30) {
        textErrorMsg.textContent = `${left} characters left`;
        textErrorMsg.style.display = "block"; // Ensure it is displayed
        return false;
      }

      if (messages.length === required) {
        textErrorMsg.textContent = "Message Complete";
        textErrorMsg.style.display = "block";
      } else {
        textErrorMsg.style.display = "none";
      }
      return true;
    };

    const validateSubmit = (e) => {
      if (!validateName() || !validateEmail() || !validateMessage()) {
        submitErrorMsg.style.display = "block";
        submitErrorMsg.textContent = "Invalid form registration";
        setTimeout(() => {
          submitErrorMsg.style.display = "none";
        }, 3000);

        e.preventDefault();
        return false;
      } else {
        // Save data to localStorage
        localStorage.setItem("inputValue", nameInput.value);
        localStorage.setItem("emailValue", emailInput.value);
        localStorage.setItem("textValue", clientText.value);
      }
    };

    // Restore data from localStorage
    if (localStorage.getItem("inputValue")) {
      nameInput.value = localStorage.getItem("inputValue");
      emailInput.value = localStorage.getItem("emailValue");
      clientText.value = localStorage.getItem("textValue");
    }

    // Attach event listeners
    nameInput.oninput = validateName;
    emailInput.oninput = validateEmail;
    clientText.oninput = validateMessage;
    document.querySelector(".client-form").onsubmit = validateSubmit;
  }, []);

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
          className="contact-form md:flex md:flex-row md:gap-10 md:justify-center md:items-center client-form px-20"
        >
          <div ref={addToRef} className="container flex flex-col gap-4">
            <div>
              <label htmlFor="client-name">Name</label>
              <input
                type="text"
                id="client-name"
                name="client-name"
                maxLength="30"
                required
                className="client-name mx-6"
              ></input>
              <span
                id="name-error-msg"
                className="name-error-msg"
                style={{ display: "none", color: "red" }}
              ></span>
            </div>

            <div>
              <label htmlFor="client-email md:mt-8">Email</label>
              <input
                type="email"
                id="client-email"
                name="client-email"
                maxLength="30"
                required
                className="client-email mx-6"
              ></input>
              <span
                id="email-error-msg"
                className="email-error-msg"
                style={{ display: "none", color: "red" }}
              ></span>
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
              required
            ></textarea>
            <span
              id="text-error-msg"
              className="text-error-msg"
              style={{ display: "none", color: "red" }}
            ></span>
            <button
              type="submit"
              className="contact-btn bg-custom-green p-1 text-center text-black text-xl font-extrabold w-24 ml-auto mt-4 rounded-lg"
            >
              Submit
            </button>
            <span
              id="submit-error-msg"
              className="submit-error-msg"
              style={{ display: "none", color: "red" }}
            ></span>
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

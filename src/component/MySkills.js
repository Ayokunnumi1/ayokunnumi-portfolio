import { useEffect } from "react";

const MySkills = () => {
    const calculateProgress = (
    circularProgress,
    progressValue,
    progressEndValue,
    speed
  ) => {
    let progressStartValue = 0;

    const progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#6AB187 ${progressStartValue}%, #374B3F 0%)`;

      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  };

  useEffect(() => {
    const progressBars = [
      {
        progressClass: "circular-progress",
        valueClass: "progress-value",
        endValue: 70,
      },
      {
        progressClass: "circular-progress-two",
        valueClass: "progress-value-two",
        endValue: 90,
      },
      {
        progressClass: "circular-progress-three",
        valueClass: "progress-value-three",
        endValue: 80,
      },
      {
        progressClass: "circular-progress-four",
        valueClass: "progress-value-four",
        endValue: 90,
      },
      {
        progressClass: "circular-progress-five",
        valueClass: "progress-value-five",
        endValue: 90,
      },
      {
        progressClass: "circular-progress-six",
        valueClass: "progress-value-six",
        endValue: 80,
      },
      {
        progressClass: "circular-progress-seven",
        valueClass: "progress-value-seven",
        endValue: 90,
      },
      {
        progressClass: "circular-progress-eight",
        valueClass: "progress-value-eight",
        endValue: 95,
      },
    ];

    progressBars.forEach((bar) => {
      const circularProgress = document.querySelector(`.${bar.progressClass}`);
      const progressValue = document.querySelector(`.${bar.valueClass}`);
      // calculateProgress(circularProgress, progressValue, bar.endValue, 100);
      if (circularProgress && progressValue) {
        calculateProgress(circularProgress, progressValue, bar.endValue, 100);
      }
    });
  }, []);

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
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 lg:gap-24 xlg:gap-36 mt-8 text-center pb-10">
          <div>
            <div className="circular-progress-common circular-progress">
              <span className="progress-value-common progress-value">0%</span>
            </div>
            <p className="progress-text">JavaScript</p>
          </div>
          <div>
            <div className="circular-progress-common circular-progress-two">
              <span className="progress-value-common progress-value-two">
                0%
              </span>
            </div>
            <p className="progress-text">React</p>
          </div>

          <div>
            <div className="circular-progress-common circular-progress-three">
              <span className="progress-value-common progress-value-three">
                0%
              </span>
            </div>
            <p className="progress-text">Ruby</p>
          </div>

          <div>
            <div className="circular-progress-common circular-progress-four">
              <span className="progress-value-common progress-value-four">
                0%
              </span>
            </div>
            <p className="progress-text">PostgreSQL</p>
          </div>

          <div>
            <div className="circular-progress-common circular-progress-five">
              <span className="progress-value-common progress-value-five">
                0%
              </span>
            </div>
            <p className="progress-text">Creativity</p>
          </div>

          <div>
            <div className="circular-progress-common circular-progress-six">
              <span className="progress-value-common progress-value-six">
                0%
              </span>
            </div>
            <p className="progress-text">Teamwork</p>
          </div>

          <div>
            <div className="circular-progress-common circular-progress-seven">
              <span className="progress-value-common progress-value-seven">
                0%
              </span>
            </div>
            <p className="progress-text">Collaboration</p>
          </div>

          <div>
            <div className="circular-progress-common circular-progress-eight">
              <span className="progress-value-common progress-value-eight">
                0%
              </span>
            </div>
            <p className="progress-text">Communication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;

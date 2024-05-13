import GraduationCap from "../assets/images/graduation_cap.svg";

const InterestingFacts = () => {
  return (
    
      <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full sm:h-506 md:h-80 bg-center bg-[100% auto] py-6">
        <div className="relative z-10 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <h3 className="about-me-heading">Interesting Facts</h3>
            <div className="w-20 h-1 bg-custom-green"></div>
        </div>
        
        <div>
          <img src={GraduationCap} alt="" />
        </div>
        <p></p>
      
        </div>
    </section>
  );
};

export default InterestingFacts;

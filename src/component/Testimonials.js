import Testimonial from "../assets/images/testimonial.png";

const Testimonials = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full md:h-96 bg-center bg-[100% auto] p-8">
      <div className="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8 md:px-10 lg:px-20">
        <div className="flex flex-col items-center">
          <h3 className="testimonials">Testimonials</h3>
          <span className="w-20 h-1 bg-custom-green"></span>
        </div>
        <p className="testimonial-text">
          "I had the pleasure of collaborating with Ayokunnumi Omololu since our
          early days at Microverse, and I am consistently impressed by her
          dedication, creativity, and technical prowess.."
        </p>
        <div>
          <div className="flex flex-row justify-center items-center gap-4">
            <img
              className="w-8 h-8 rounded-full border-2 border-custom-green"
              src={Testimonial}
              alt="testimonials"
            />
            <div>
              <h3 className="testimonial-name">
                <span>Uzair </span>
                <span className="text-custom-green">Manzoor</span>
              </h3>
              <p className="testimonial-work">Microverse</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-custom-green bg-custom-green "></div>
          <div className="w-3 h-3 rounded-full border-2 border-custom-green bg-custom-green "></div>
          <div className="w-3 h-3 rounded-full border-2 border-custom-green bg-custom-green "></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

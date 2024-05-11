import Testimonial from "../assets/images/testimonial.png";

const Testimonials = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full overlayy">
      <div className="relative z-10">
        <h3 className="testimonials">Testimonials</h3>
        <p className="testimonial-text">
          "I have had the pleasure of collaborating with Ayokunnumi Omololu
          since our early days at Microverse, and I am consistently impressed by
          her dedication, creativity, and technical prowess.."
        </p>
        <div>
          <div>
            <img className="w-8 h-8 rounded" src={Testimonial} alt="testimonials" />
            <h3>Uzair Manzoor</h3>
            <p>Microverse</p>
          </div>
          <div className="w-3 h-3 rounded-full border-2 border-custom-green bg-custom-green "></div>
          <div className="w-3 h-3 rounded-full border-2 border-custom-green bg-custom-green "></div>
          <div className="w-3 h-3 rounded-full border-2 border-custom-green bg-custom-green "></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

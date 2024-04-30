import Menu from "../asset/menu.png";
import "../styles/home.css";

const Home = () => {
    // const b = a
    return (
      <section className="bg-home-pg-bg-image bg-no-repeat bg-cover min-h-screen bg-overlayy text-white">
        <div className="relative z-10 flex">
          <h3>AYCODE</h3>
          <nav>
            <ul className="hidden md:flex">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Skills</li>
              <li>Contact</li>
              <li>Resume</li>
            </ul>
          </nav>
          <nav className="block md:hidden">
            <img src={Menu} alt="menu" />
          </nav>
        </div>

        <div className="relative z-10">
          <div>
            <div>
              <div>
                <div>Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home;
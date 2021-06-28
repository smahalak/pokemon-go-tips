import logo from "../img/logo.jpg";
import { About, Image, Description } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>Pokémon Go is </h2>
          </div>
          <div className="hide">
            <h2>
              <span>Free</span> to play,
            </h2>
          </div>
          <div className="hide">
            <h2>With loads of Pokémon to discover!</h2>
          </div>
        </div>
        <p>These tips and tricks will range from beginner to expert level.</p>
        <button>
          <a
            href="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en&gl=us"
            target="_blank"
          >
            Download Link
          </a>
        </button>
      </Description>
      <Image className="image">
        <img src={logo} alt="Pokemon Go" />
      </Image>
    </About>
  );
};

export default AboutSection;

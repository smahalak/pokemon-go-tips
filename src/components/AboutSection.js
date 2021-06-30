import logo from "../img/logo.jpg";
import { About, Image, Description, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>Pokémon Go is </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Free</span> to play,
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              With loads of Pokémon to discover!
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          These tips and tricks will range from beginner to expert level.
        </motion.p>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnimation} src={logo} alt="Pokemon Go" />
      </Image>
    </About>
  );
};

export default AboutSection;
